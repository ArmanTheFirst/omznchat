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
    <div className="flex h-full flex-col gap-6 rounded-xl bg-white p-4 shadow-sm dark:bg-gray-900 sm:p-6">
      <p className="mb-2 text-sm tracking-wide text-gray-600 dark:text-gray-300">
        Discover OMZN Chat’s latest AI dashboard features—built for teams,
        creators, and anyone who wants smarter, faster, and more secure
        messaging. Got an idea?{" "}
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
          name="AI Q&A"
          description="Get instant answers to chat questions with AI."
        />
        <FeatureCard
          Icon={ScanText}
          name="Smart Summaries"
          description="See what your team discussed—at a glance."
        />
        <FeatureCard
          Icon={NotebookPen}
          name="Writing Assistant"
          description="AI helps you compose and reply with clarity."
        />
        <FeatureCard
          Icon={FileChartColumn}
          name="Insights & Feedback"
          description="Unlock conversation trends and actionable tips."
        />
        <FeatureCard
          Icon={MessageSquareReply}
          name="Auto-Responses"
          description="Set up smart replies for when you’re away."
        />
        <FeatureCard
          Icon={Contact}
          name="AI Chat Member"
          description="Add an AI as a helpful participant in any chat."
        />
        <FeatureCard
          Icon={ShieldBan}
          name="Privacy Controls"
          description="Decide how and when AI is involved in your chats."
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
