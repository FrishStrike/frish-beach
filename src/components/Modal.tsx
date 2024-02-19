"use client";

import useModal from "@/hook/useModal";
import { twMerge } from "tailwind-merge";

import { MouseEventHandler } from "react";

interface UploadModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<UploadModalProps> = ({ children }) => {
  const modal = useModal();

  const modalClose: MouseEventHandler<HTMLDivElement> = (event) => {
    modal.onClose();
  };

  return (
    <div
      onClick={modalClose}
      className={twMerge(
        `
        hidden
        absolute
        z-30
        inset-0
        w-full
        h-full
      bg-neutral-800/60
        justify-center
        items-center
      `,
        modal.isOpen && "flex"
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        w-[700px]
        h-min
        bg-neutral-800
        rounded-2xl
        px-5
        py-9
        text-white
        font-medium
        text-2xl
      "
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
