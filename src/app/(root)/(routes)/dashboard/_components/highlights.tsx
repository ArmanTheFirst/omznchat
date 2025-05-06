import {
  Contact,
  FileChartColumn,
  MessageCircleQuestion,
  MessageSquareReply,
  NotebookPen,
  ScanText,
  ShieldBan,
} from "lucide-react";
import Link from "next/link";

export default function Highlights() {
  return (
    <div className="flex h-full flex-col gap-6 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
      <p className="text-sm tracking-wide text-gray-600 dark:text-gray-300">
        OMZN Chat always has a bunch ambitions in order to improve the user
        experience on their platform, which is why we&apos;ve displayed the
        upcoming Highlights and AI plans. Got an idea?{" "}
        <Link
          href="/contact#contact-form"
          className="font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Reach out to us directly
        </Link>
      </p>

      <div className="grid flex-1 gap-4">
        <FeatureCard
          Icon={MessageCircleQuestion}
          name="Q&A"
          description="Chatbot answering questions about any chat"
        />
        <FeatureCard
          Icon={ScanText}
          name="Summaries"
          description="Know what a particular time span of the chat was about"
        />
        <FeatureCard
          Icon={NotebookPen}
          name="Writing Help"
          description="AI-Assistance in composing or replying to messages"
        />
        <FeatureCard
          Icon={FileChartColumn}
          name="Facts & Feedback"
          description="Conversation insights and suggested adjustments"
        />
        <FeatureCard
          Icon={MessageSquareReply}
          name="Responses & Schedules"
          description="Automatic pre-configured messages for unavailability"
        />
        <FeatureCard
          Icon={Contact}
          name="Third Member"
          description="Let an AI play the role of an additional chat member"
        />
        <FeatureCard
          Icon={ShieldBan}
          name="Privacy"
          description="Control over AI-involvement in your conversations"
        />
      </div>
    </div>
  );
}

interface FeatureCardProps {
  Icon: React.ElementType;
  name: string;
  description: string;
}

function FeatureCard({ name, description, Icon }: FeatureCardProps) {
  return (
    <div className="group relative flex items-start gap-4 rounded-lg border border-gray-100 bg-white p-4 transition-all duration-300 hover:border-blue-100 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="rounded-lg bg-blue-50 p-2 text-blue-500 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-900/30">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900 dark:text-white">{name}</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
      <button className="rounded-full p-1 text-gray-400 transition-colors duration-300 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400">
        <svg
          className="size-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </button>
    </div>
  );
}
