import ChatButton from "@/components/chatbutton";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="pt-20 text-center">
      <div className="space-y-3 px-5 text-left md:px-80">
        <div>
          <h1 className="text-4xl font-bold">
            Revolutionizing Conversations with AI-Driven Chat
          </h1>
          <h2 className="text-2xl font-semibold text-text-secondary">
            Bringing the{" "}
            <span className="text-text-secondary underline decoration-accent decoration-wavy underline-offset-4">
              Future of Communication
            </span>{" "}
            to You
          </h2>
        </div>
        <div className="flex flex-col gap-y-7 py-10">
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              Our Mission
            </h3>
            <p className="text-lg text-text-secondary">
              At OMZN Chat, we believe conversations should be more than just
              messages on a screen. Our mission is to create a{" "}
              <span className="font-semibold text-text-secondary">
                smarter, more interactive, and engaging
              </span>{" "}
              chat experience—powered by AI, designed for seamless and{" "}
              <span className="font-semibold text-text-secondary">
                dynamic{" "}
              </span>
              interactions.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              Why OMZN Chat?
            </h3>
            <p className="text-lg text-text-secondary">
              Unlike ordinary messaging platforms,{" "}
              <span className="font-semibold text-text-secondary">
                OMZN Chat
              </span>{" "}
              isn&apos;t just a place to talk—it&apos;s a space to{" "}
              <span className="font-semibold text-text-secondary">
                connect, automate, and enhance
              </span>{" "}
              communication. Whether it&apos;s{" "}
              <span className="font-semibold text-text-secondary">
                AI-assisted chats, intelligent responses
              </span>
              , or{" "}
              <span className="font-semibold text-text-secondary">
                seamless user experiences
              </span>
              , we make conversations better.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              How It Started
            </h3>
            <p className="text-lg text-text-secondary">
              We saw a gap in the way people chat online. Conversations were{" "}
              <span className="font-semibold text-text-secondary">static</span>,
              limited to basic messages and repetitive interactions. So, we
              built a platform that integrates AI{" "}
              <span className="font-semibold text-text-secondary">
                not just as an assistant, but as an active part of the
                conversation
              </span>
              —learning, adapting, and making every chat feel more alive.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              What Sets Us Apart?
            </h3>
            <p className="text-lg text-text-secondary">
              ✅{" "}
              <span className="font-semibold text-text-secondary">
                AI-Enhanced Conversations
              </span>{" "}
              - Your chat learns and adapts to improve your experience. <br />{" "}
              ✅{" "}
              <span className="font-semibold text-text-secondary">
                Real-Time Interactions
              </span>{" "}
              - No delays, no clutter—just smooth, instant messaging. <br /> ✅{" "}
              <span className="font-semibold text-text-secondary">
                User-Centric Design
              </span>{" "}
              - A sleek, intuitive interface that puts you first. <br /> ✅{" "}
              <span className="font-semibold text-text-secondary">
                Privacy First
              </span>{" "}
              - Your data is yours, and we keep it that way.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              The Future of Chat Starts Here
            </h3>
            <p className="text-lg text-text-secondary">
              We&apos;re not just building another messaging app. We&apos;re
              crafting the{" "}
              <span className="font-semibold text-text-secondary">
                next generation of digital conversations
              </span>
              —where AI enhances every interaction and{" "}
              <span className="font-semibold text-text-secondary">
                communication becomes effortless
              </span>
              . <br /> <br /> 🚀{" "}
              <span className="font-semibold text-text-secondary">
                Join OMZN Chat today and experience the future of messaging!
              </span>
            </p>
          </div>
        </div>
      </div>
      <ChatButton />
      <Footer />
    </div>
  );
}
