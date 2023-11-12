"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

const NavBar = () => {
  const pathname = usePathname();

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
      absolute
      inset-0
      lg:left-72
      flex
      items-center
      justify-center
      gap-10
      font-semibold
      leading-relaxed
      text-2xl
      select-none
      [text-shadow:_0_0_3px_black]
    "
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
    </nav>
  );
};

export default NavBar;
