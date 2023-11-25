"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { HiHome, HiSearch } from "react-icons/hi";

import SideBarItems from "./SideBarItems";
import Library from "./Library";

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        title: "Main",
        link: "/",
        active: pathname === "/",
      },
      {
        icon: HiSearch,
        title: "Search",
        link: "/search",
        active: pathname === "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div
        className="
        hidden
        lg:flex
        flex-col
        h-[calc(100%-8px)]
        w-[400px]
        m-2
        bg-neutral-900/30
        backdrop-blur-md
        border-zinc-900
        border-[3px]
        rounded-3xl
      "
      >
        {routes.map((route) => (
          <SideBarItems
            Icon={route.icon}
            active={route.active}
            href={route.link}
            title={route.title}
            key={route.title}
          />
        ))}
        <div className="h-full">
          <Library />
        </div>
      </div>
      <div className="w-full h-screen">{children}</div>
    </div>
  );
};

export default SideBar;
