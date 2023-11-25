"use client";

import Image from "next/image";

import { MouseEventHandler, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";

import { Song } from "@/types/song";
import usePlayer from "@/hook/usePlayer";

import { toast } from "react-toastify";

const MediaItem: React.FC<Song> = ({ id, icon, song, title, video, image }) => {
  const [liked, setLiked] = useState(false);

  const player = usePlayer();

  const handleLikeButton: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    if (!liked) {
      toast("👽 Let's Go!", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "absolute",
      });
    }
  };

  const onClick = () => {
    player.setCurrentSong({
      id,
      icon,
      song,
      title,
      video,
      image,
    });
  };

  return (
    <div
      onClick={onClick}
      className="
        py-2
        px-4
        flex
        gap-x-5
        justify-center
        items-center
        rounded-3xl
       bg-neutral-800/60
       hover:bg-neutral-900
       cursor-pointer
       group
       relative
      "
    >
      <div
        className="
        absolute
        cursor-pointer
        w-12
        h-12
        rounded-full
        group-hover:bg-emerald-500/80
        transition
        inset-0
        top-12
        left-2
        flex
        justify-center
        items-center
      "
      >
        <BsPlayFill className="opacity-0 group-hover:opacity-100" size={30} />
      </div>
      <Image
        className="rounded-2xl w-[120px] h-[120px] object-cover select-none"
        width={120}
        height={120}
        alt="Media Image"
        src={`${icon}`}
      />
      <div className="flex flex-col justify-between text-white gap-y-1 select-none">
        <h2 className="opacity-1 text-xl font-medium w-14">{title}</h2>
        <p className="text-neutral-300 text-base">Carti</p>
      </div>
      <div
        onClick={handleLikeButton}
        className="text-red-600 hover:text-red-500 active:scale-110 mt-8"
      >
        {liked ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}
      </div>
    </div>
  );
};

export default MediaItem;
