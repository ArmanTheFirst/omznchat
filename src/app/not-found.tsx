import Footer from "@/components/footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-28 text-center">
      <div className="px-5">
        <h1 className="text-4xl font-bold">Oops... Lost in Cyberspace? 🚀</h1>
        <p className="py-5 text-xl">
          The page you&apos;re looking for doesn&apos;t exist. Maybe it got lost
          in the chat?
        </p>
        <Link href="/" className="btn btn-primary text-base">
          Take Me Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
