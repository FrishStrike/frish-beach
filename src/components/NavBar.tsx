"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

import { HiMenuAlt2 } from "react-icons/hi";
import { FaUserNinja } from "react-icons/fa";

import useMenu from "@/hook/useMenu";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const pathname = usePathname();

  const menu = useMenu();

  const routes = useMemo(
    () => [
      {
        title: "Main",
        link: "/",
        active: pathname === "/",
      },
      {
        title: "Search",
        link: "/search",
        active: pathname === "/search",
      },
    ],
    [pathname]
  );

  return (
    <nav
      className="
      h-20
      p-1
      mx-7
      absolute
      inset-0
      lg:left-72
      flex
      items-center
      lg:justify-center
      justify-between
      gap-10
      font-semibold
      leading-relaxed
      text-2xl
      select-none
      [text-shadow:_0_0_3px_black]
    "
    >
      <div className="absolute">
        <ToastContainer />
      </div>
      <div
        className="
        lg:hidden
        flex
        text-white
        bg-black/70
        rounded-2xl
        cursor-pointer
        "
        onClick={() => menu.onOpen()}
      >
        <HiMenuAlt2 size={40} />
      </div>

      <div
        className="
          flex
          items-center
          justify-center
          gap-10"
      >
        {routes.map((route) => (
          <Link
            href={route.link}
            key={route.title}
            className={twMerge(
              `text-neutral-400 hover:brightness-125 cursor-pointer transition`,
              route.active && "text-white"
            )}
          >
            {route.title}
          </Link>
        ))}
      </div>
      <div className="text-white cursor-pointer lg:absolute right-4 bg-black/70 rounded-2xl p-1">
        <FaUserNinja size={40} />
      </div>
    </nav>
  );
};

export default NavBar;
