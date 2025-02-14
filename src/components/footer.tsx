import Image from "next/image";
import logo from "@/assets/logo.png";
import threadslogo from "@/assets/threadslogo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer mt-40 w-full bg-footer p-10 text-left">
      <aside>
        <Link href="/">
          <Image
            src={logo}
            alt="OMZN logo"
            height={50}
            width={50}
            className="transition duration-300 hover:-rotate-12 hover:cursor-pointer"
          />
        </Link>
        <p className="text-base font-semibold">
          © {new Date().getFullYear()} OMZN Chat
          <br />
          AI-Powered Conversations, Effortless Connections.
        </p>
      </aside>
      <nav className="text-base">
        <h6 className="footer-title">Company & Legal</h6>
        <Link href="/about" className="link-hover link">
          About Us
        </Link>
        <Link href="/contact" className="link-hover link">
          Contact
        </Link>
        <Link href="/privacy" className="link-hover link">
          Privacy Policy
        </Link>
        <Link href="/terms" className="link-hover link">
          Terms of Use
        </Link>
        <Link href="/faq" className="link-hover link">
          FAQ
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title text-base">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Link
            href="https://x.com/@omznchat"
            target="_blank"
            className="flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </Link>
          <Link
            href="https://instagram.com/omznchat"
            target="_blank"
            className="flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
          <Link
            href="https://tiktok.com/@omznchat"
            target="_blank"
            className="flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
            </svg>
          </Link>
          <Link href="https://threads.com/omznchat" target="_blank">
            <Image
              src={threadslogo}
              alt="Threads logo"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
