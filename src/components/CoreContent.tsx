"use client";

import usePlayer from "@/hook/usePlayer";
import Image from "next/image";

const CoreContent = () => {
  const { currentSong } = usePlayer();

  return (
    <div
      className="
      absolute
      overflow-hidden
      inset-0
      z-0
      w-full
      h-full
    "
    >
      {currentSong.video ? (
        <video
          className="
            object-cover
            w-full
            h-full
          "
          src={currentSong.video}
          poster={currentSong.image}
          autoPlay
          muted
          loop
        ></video>
      ) : (
        <Image
          fill
          alt="content"
          src={currentSong.image}
          className="object-cover select-none"
        />
      )}
    </div>
  );
};

export default CoreContent;
