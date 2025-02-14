import React, { useRef } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

interface ModalComponentProps {
  classes?: string;
}

export default function ModalComponent({ classes }: ModalComponentProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <div className={classes}>
      <button className="btn" onClick={openModal}>
        <Menu />
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box flex flex-col items-center gap-4">
          <h3 className="text-3xl font-bold">Links</h3>
          <Link
            href="/#product"
            className="btn w-full border border-black bg-transparent text-xl hover:border-white"
            onClick={closeModal}
          >
            Product 📦
          </Link>
          <Link
            href="/#pricing"
            className="btn w-full border border-black bg-transparent text-xl hover:border-white"
            onClick={closeModal}
          >
            Pricing 🏷️
          </Link>
          <Link
            href="/about"
            className="btn w-full border border-black bg-transparent text-xl hover:border-white"
            onClick={closeModal}
          >
            About 🙋‍♂️
          </Link>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
