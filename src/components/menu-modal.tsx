import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";

interface ModalComponentProps {
  classes?: string;
  isSignedIn: boolean;
  imageUrl?: string;
}

export default function ModalComponent({
  classes,
  isSignedIn,
  imageUrl,
}: ModalComponentProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signOut } = useAuth();

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  const handleSignOut = async () => {
    try {
      setIsSubmitting(true);
      await signOut();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={classes}>
      <button
        onClick={openModal}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
      >
        <Menu className="h-5 w-5" />
      </button>

      <dialog
        ref={modalRef}
        className="modal backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      >
        <div className="modal-box relative max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900">
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mb-8 mt-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Menu
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Navigate through our platform
            </p>
          </div>

          <nav className="mb-8 space-y-2">
            <Link
              href="/#product"
              className="flex items-center rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              onClick={closeModal}
            >
              <span className="text-lg">Product</span>
            </Link>
            <Link
              href="/#pricing"
              className="flex items-center rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              onClick={closeModal}
            >
              <span className="text-lg">Pricing</span>
            </Link>
          </nav>

          {isSignedIn && imageUrl ? (
            <div className="space-y-4">
              <Link
                href="/dashboard"
                onClick={closeModal}
                className="flex w-full items-center gap-3 rounded-lg bg-gray-100 px-4 py-3 text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={imageUrl}
                    alt="Profile picture"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-lg font-medium">Dashboard</span>
              </Link>

              <button
                onClick={handleSignOut}
                disabled={isSubmitting}
                className="w-full rounded-lg bg-red-500 px-4 py-3 text-lg font-medium text-white transition-colors hover:bg-red-600 disabled:opacity-50 dark:bg-red-600 dark:hover:bg-red-700"
              >
                {isSubmitting ? "Signing out..." : "Sign out"}
              </button>
            </div>
          ) : (
            <Link
              href="/sign-in"
              onClick={closeModal}
              className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-lg font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Sign In
            </Link>
          )}
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
