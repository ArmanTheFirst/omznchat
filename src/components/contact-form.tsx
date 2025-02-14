"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { useEffect, useRef, useState } from "react";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    try {
      await sendEmail(data);
      setModalMessage("Your message has been sent successfully!"); // Show success message in modal
      reset();
    } catch (error) {
      setModalMessage("Failed to send your message. Please try again." + error); // Show error message in modal
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="pb-10">
      <h3 className="pb-2 text-3xl font-semibold">📋 Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="name" className="mb-3 block text-base font-medium">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full autofill:input"
            {...register("name", { required: true })}
            disabled={isLoading}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-base font-medium">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="input input-bordered w-full"
            {...register("email", { required: true })}
            disabled={isLoading}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="mb-3 block text-base font-medium">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="textarea textarea-bordered w-full py-3 text-base"
            {...register("message", { required: true })}
            disabled={isLoading}
          ></textarea>
        </div>
        <div>
          <button className={`} btn btn-primary text-lg`} disabled={isLoading}>
            {isLoading ? (
              <span className="loading loading-dots loading-sm"></span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>

      {modalMessage && (
        <CustomModal
          message={modalMessage}
          onClose={() => setModalMessage(null)} // Close modal handler
        />
      )}
    </div>
  );
}

type CustomModalProps = {
  message: string;
  onClose: () => void;
};

export function CustomModal({ message, onClose }: CustomModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    // Show the modal when the component is rendered
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  return (
    <dialog ref={dialogRef} className="modal" onClose={onClose}>
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="text-lg font-bold">{message}</h3>
        <p className="py-4">
          Press ESC, click the button below or anywhere outside the box to
          close.
        </p>
        <div className="modal-action">
          <button
            onClick={() => {
              if (dialogRef.current) dialogRef.current.close(); // Close dialog
              onClose(); // Trigger parent close handler
            }}
            className="btn btn-primary mt-4"
          >
            Close
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
