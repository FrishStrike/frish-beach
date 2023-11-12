"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import useModal from "@/hook/useModal";
import usePlayer from "@/hook/usePlayer";
import MediaItem from "./MediaItem";

const Library = () => {
  const modal = useModal();
  const player = usePlayer();

  console.log(player.song);

  return (
    <div>
      <div
        className="
        flex
        gap-x-4
        text-white
        p-3
      "
      >
        <TbPlaylist size={30} />
        <div className="flex justify-between w-full">
          <div className="text-xl">Your Library!</div>
          <AiOutlinePlus
            onClick={() => modal.onOpen()}
            size={30}
            className="cursor-pointer hover:text-neutral-400 transition"
          />
        </div>
      </div>
      <div>
        {player.song && (
          <MediaItem
            key={player.song.title}
            title={player.song.title}
            image={player.song.image}
            icon={player.song.icon}
            song={player.song.song}
          />
        )}
      </div>
    </div>
  );
};

export default Library;
