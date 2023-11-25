"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import useModal from "@/hook/useModal";
import usePlayer from "@/hook/usePlayer";
import MediaItem from "./MediaItem";

import { useEffect, useState } from "react";
import { Song } from "@/types/song";

const Library = () => {
  const modal = useModal();
  const data = usePlayer((state) => state.data);

  const [media, setMedia] = useState<Song[]>();

  useEffect(() => {
    setMedia(data);
  }, [data]);

  return (
    <div className="h-full overflow-y-hidden">
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
      <div className="flex flex-col gap-y-2 w-full h-[92%] lg:h-[567px] overflow-y-auto">
        {media?.[0] &&
          media.map((song) => (
            <MediaItem
              id={song.id}
              title={song.title}
              image={song.image}
              icon={song.icon}
              song={song.song}
              video={song?.video}
              key={song.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Library;
