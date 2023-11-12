"use client";

import { useEffect, useState } from "react";

import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

import useSound from "use-sound";
import MediaItem from "./MediaItem";
import usePlayer from "@/hook/usePlayer";

const CoreMenu = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [volume, setVolume] = useState(1);

  const player = usePlayer();

  const [play, { pause, sound }] = useSound("/audio.mp3", {
    volume: volume,
    format: ["mp3"],
    onplay: () => setIsPlay(true),
    onend: () => setIsPlay(false),
    onpause: () => setIsPlay(false),
  });

  useEffect(() => {
    sound?.play();

    return () => {
      sound?.unload();
    };
  }, [sound]);

  const handlePlayButton = () => {
    if (!isPlay) {
      play();
    } else {
      pause();
    }
  };

  const handleVolumeButton = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  return (
    <div
      className="
      h-full
      flex
      justify-center
      items-end
    "
    >
      <div
        className="
        flex
        flex-col
        sm:flex-row
        items-center
        justify-between
        px-5
        py-4
        w-full
        sm:w-[75%]
        h-[30%]
        bg-neutral-900/30
        backdrop-blur-md
        border-zinc-900
        border-[3px]
        rounded-t-3xl
      "
      >
        {/* <MediaItem /> */}
        <div className="flex text-white transition">
          <AiFillStepBackward
            size={45}
            className="cursor-pointer hover:brightness-50 active:scale-110"
          />
          <div
            onClick={handlePlayButton}
            className="cursor-pointer hover:brightness-50 active:scale-110"
          >
            {isPlay ? <BsPauseFill size={45} /> : <BsPlayFill size={45} />}
          </div>
          <AiFillStepForward
            size={45}
            className="cursor-pointer hover:brightness-50 active:scale-110"
          />
        </div>
        <div className="text-white transition" onClick={handleVolumeButton}>
          {volume ? (
            <HiSpeakerWave
              size={40}
              className="cursor-pointer hover:brightness-50 active:scale-110"
            />
          ) : (
            <HiSpeakerXMark
              size={40}
              className="cursor-pointer hover:brightness-50 active:scale-110"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CoreMenu;
