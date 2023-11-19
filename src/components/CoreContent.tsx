"use client";

import usePlayer from "@/hook/usePlayer";
import Image from "next/image";

const CoreContent = () => {
  const player = usePlayer();

  return (
    <div
      className="
      absolute
      inset-0
      -z-10
      w-full
      h-full
    "
    >
      <Image
        fill
        alt="sorry"
        src={player.currentSong.image}
        className="object-cover select-none"
      />
    </div>
  );
};

export default CoreContent;
