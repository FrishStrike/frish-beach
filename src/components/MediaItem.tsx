"use client";

import Image from "next/image";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { Song } from "@/types/song";

const MediaItem: React.FC<Song> = ({ icon, song, title, video }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeButton = () => {
    setLiked(!liked);
    console.log(icon, title);
  };

  return (
    <div
      className="
        py-2
        px-4
        flex
        gap-x-5
        justify-center
        items-center
        rounded-3xl
       bg-neutral-900/60
       hover:bg-neutral-900
      "
    >
      <Image
        className="rounded-2xl w-[120px] h-[120px] object-cover select-none"
        width={120}
        height={120}
        alt="Media Image"
        src={`/${icon}`}
      />
      <div className="flex flex-col justify-between text-white gap-y-1 select-none">
        <h2 className=" opacity-1 text-xl font-medium">{title}</h2>
        <p className="text-neutral-300 text-base">Carti</p>
      </div>
      <div
        onClick={handleLikeButton}
        className="text-red-600 cursor-pointer hover:text-red-500 active:scale-110"
      >
        {liked ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}
      </div>
    </div>
  );
};

export default MediaItem;
