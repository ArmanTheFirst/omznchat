import armanface from "@/assets/armanface.jpeg";
import Image from "next/image";

interface SingleReviewProps {
  rating?: number;
}

export default function SingleReview({ rating = 5 }: SingleReviewProps) {
  return (
    <div className="mt-30">
      <div className="rating mb-5 cursor-pointer">
        {[1, 2, 3, 4, 5].map((star) => (
          <input
            key={star}
            type="radio"
            className="mask mask-star-2 bg-yellow-400 hover:bg-yellow-300"
            name="rating-4"
            checked={star <= rating}
            readOnly
            onClick={(e) => e.preventDefault()}
          />
        ))}
      </div>
      <div className="mt-0.5 flex items-center justify-center space-x-3">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <Image src={armanface} alt="Profile picture" />
          </div>
        </div>
        <p className="font-semibold">Arman Ajith</p>
      </div>
      <div className="flex items-center justify-center p-5">
        <p className="text-baseContent max-w-md text-center font-semibold">
          &quot;I, as someone who constantly utilizes the internet to
          communicate with other people, struggled to find such an easy platform
          to use. OMZN Chat was the ideal solution to all these problems,
          especially the AI features.&quot;
          {/* Change this review's content later, it's actually bad and doesn't convince at all */}
        </p>
      </div>
    </div>
  );
}
