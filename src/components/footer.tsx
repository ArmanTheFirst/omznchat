import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm pt-6 pb-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="flex items-center gap-3 mb-4 md:mb-0">
            <Image 
              src={logo} 
              alt="OMZN" 
              width={32} 
              height={32} 
              className="h-8 w-8"
            />
            <span className="text-xl font-semibold text-foreground">omzn</span>
          </Link>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/roadmap" className="hover:text-foreground transition-colors hover:underline">roadmap</Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors hover:underline">privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors hover:underline">terms</Link>
            <Link href="/about" className="hover:text-foreground transition-colors hover:underline">about</Link>
            <Link href="/faq" className="hover:text-foreground transition-colors hover:underline">faq</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors hover:underline">contact</Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {currentYear} omzn — built by humans, for humans — <span className="text-muted-foreground/70">v1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
