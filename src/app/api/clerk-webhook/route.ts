import { env } from "@/env";
import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { deletePushSubscriptionFromServer } from "@/notifications/pushService";

interface ClerkWebhookEvent {
  type: string;
  data: {
    id: string;
    user_id: string;
    [key: string]: any;
  };
  [key: string]: any;
}

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const headers = {
      'svix-id': req.headers.get('svix-id'),
      'svix-signature': req.headers.get('svix-signature'),
      'svix-timestamp': req.headers.get('svix-timestamp'),
    };

    // Verify the webhook signature
    const wh = new Webhook(env.CLERK_WEBHOOK_SECRET);
    try {
      wh.verify(rawBody, headers as any);
    } catch (error) {
      console.error('Webhook verification failed:', error);
      return NextResponse.json(
        { error: 'Webhook signature invalid' },
        { status: 401 }
      );
    }

    const event: ClerkWebhookEvent = JSON.parse(rawBody);
    console.log('Clerk webhook event received:', event.type);

    // Handle session events
    if (
      event.type === 'session.ended' ||
      event.type === 'session.removed' ||
      event.type === 'session.revoked'
    ) {
      const userId = event.data.user_id;
      const sessionId = event.data.id;

      try {
        // Get the user's current data
        const client = await clerkClient();
        const user = await client.users.getUser(userId);
        const privateMetadata = user.privateMetadata as any;
        const pushSubscriptions = privateMetadata?.pushSubscriptions || [];

        // Find subscriptions associated with this session
        const subscriptionsToRemove = pushSubscriptions.filter(
          (sub: any) => sub.sessionId === sessionId
        );

        if (subscriptionsToRemove.length > 0) {
          console.log(`Found ${subscriptionsToRemove.length} push subscriptions to clean up for session ${sessionId}`);
          
          // Delete each subscription from the push service
          await Promise.all(
            subscriptionsToRemove.map(async (sub: any) => {
              try {
                if (sub.subscription) {
                  await deletePushSubscriptionFromServer(sub.subscription);
                  console.log(`Successfully deleted push subscription for session ${sessionId}`);
                }
              } catch (error) {
                console.error(`Error deleting push subscription for session ${sessionId}:`, error);
                // Continue with other subscriptions even if one fails
              }
            })
          );

          // Update user's metadata to remove the cleaned up subscriptions
          const updatedSubscriptions = pushSubscriptions.filter(
            (sub: any) => sub.sessionId !== sessionId
          );

          if (updatedSubscriptions.length !== pushSubscriptions.length) {
            await client.users.updateUser(userId, {
              privateMetadata: {
                ...privateMetadata,
                pushSubscriptions: updatedSubscriptions,
              },
            });
            console.log(`Updated user metadata with ${updatedSubscriptions.length} remaining subscriptions`);
          }
        } else {
          console.log(`No push subscriptions found for session ${sessionId}`);
        }
      } catch (error) {
        console.error('Error processing session event:', error);
        // Don't return an error response to prevent Clerk from retrying
      }
    }

    // Handle user deletion
    if (event.type === 'user.deleted') {
      const userId = event.data.id;
      console.log(`User ${userId} was deleted, cleaning up related data`);
      // Here you might want to clean up any user-specific data
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in webhook handler:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
