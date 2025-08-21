import { NextResponse } from "next/server";
import { StreamPushEvent } from "./StreamPushEvent";
import { clerkClient } from "@clerk/nextjs/server";
import webPush, { WebPushError } from "web-push"
import { env } from "@/env";
import { StreamChat } from "stream-chat";

export async function POST(req: Request) {
  try {
    const streamClient = StreamChat.getInstance(
      env.NEXT_PUBLIC_STREAM_KEY,
      env.STREAM_SECRET
    );

    const rawBody = await req.text();

    const validRequest = streamClient.verifyWebhook(
      rawBody,
      req.headers.get("x-signature") || ""
    );

    if (!validRequest) {
      return NextResponse.json(
        { error: "Webhook signature invalid" },
        { status: 401 }
      );
    }

    const event: StreamPushEvent = await JSON.parse(rawBody);

    console.log("Push web hook body: ", JSON.stringify(event));

    const sender = event.user;
    const recipientIds = event.channel.members
      .map((member) => member.user_id)
      .filter((id) => id !== sender.id);
    const channelId = event.channel.id;

    const clerk = await clerkClient();
    const recipients = (
      await clerk.users.getUserList({
        userId: recipientIds,
      })
    ).data.filter(
      (user) => !(user.unsafeMetadata as any)?.mutedChannels?.includes(channelId)
    );

    const pushPromises = recipients
      .map((recipient) => {
        const subscriptions = (recipient.privateMetadata as any)?.subscriptions || [];
        return subscriptions.map((subscription: any) =>
          webPush
            .sendNotification(
              subscription,
              JSON.stringify({
                title: sender.name,
                body: event.message.text,
                icon: sender.image,
                image:
                  event.message.attachments[0]?.image_url ||
                  event.message.attachments[0]?.thumb_url,
                channelId,
              }),
              {
                vapidDetails: {
                  subject: "mailto:arman@flowchat.com",
                  publicKey: env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY,
                  privateKey: env.WEB_PUSH_PRIVATE_KEY,
                },
              }
            )
            .catch((error) => {
              console.error("Error sending push notification: ", error);
              if (error instanceof WebPushError && error.statusCode === 410) {
                console.log("Push subscription expired, deleting...");

                clerk.users.updateUser(recipient.id, {
                  privateMetadata: {
                    subscriptions:
                      (recipient.privateMetadata as any)?.subscriptions?.filter(
                        (s: any) => s.endpoint !== subscription.endpoint
                      ),
                  },
                });
              }
            })
        );
      })
      .flat();

    await Promise.all(pushPromises);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    let errorMessage = "Internal server error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
