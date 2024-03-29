"use client";

import useMenu from "@/hook/useMenu";
import Library from "./Library";

const CustomMenu = () => {
  const menu = useMenu();

  return (
    <div
      className={`
        fixed
        rounded-2xl
        inset-0
        left-0
        z-20
        w-full
        h-screen
        duration-500
        ${!menu.isOpen && "-translate-x-full"}
      `}
      onClick={() => menu.onClose()}
    >
      <div
        className="
          h-full
          w-[80%]
          sm:w-[50%]
        bg-neutral-900/90
        "
        onClick={(e) => e.stopPropagation()}
      >
        <Library />
      </div>
    </div>
  );
};

export default CustomMenu;
