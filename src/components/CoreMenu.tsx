"use client";

import { useEffect, useMemo, useState } from "react";

import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

import useSound from "@/libs/use-sound";
import MediaItem from "./MediaItem";
import usePlayer from "@/hook/usePlayer";

const CoreMenu = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [volume, setVolume] = useState(1);
  const [indexSong, setIndexSong] = useState(0);

  const player = usePlayer();

  const [play, { pause, sound }] = useSound(player.currentSong.song, {
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

  const stepBackward = () => {
    if (indexSong) {
      player.setCurrentSong(player.data[indexSong - 1]);
    } else {
      player.setCurrentSong(player.data[player.data.length - 1]);
    }
  };
  const stepForward = () => {
    if (indexSong !== player.data.length - 1) {
      player.setCurrentSong(player.data[indexSong + 1]);
    } else {
      player.setCurrentSong(player.data[0]);
    }
  };

  const handlePlayButton = () => {
    const video = document.querySelector("video");
    if (!isPlay) {
      play();
      try {
        video?.play();
      } catch (error) {
        console.log(error);
      }
    } else {
      pause();
      video?.pause();
    }
  };

  const handleVolumeButton = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  useEffect(() => {
    const video = document.querySelector("video");
    let content = document.querySelector('img[alt="content"]');

    if (!content) {
      content = document.querySelector("video[autoplay]");
    }
    !content && console.log("Error, content is not find");

    const onClick = () => {
      if (!isPlay) {
        play();
        video?.play();
      } else {
        pause();
        video?.pause();
      }
    };

    content?.addEventListener("click", onClick);

    const onDown = (e: KeyboardEvent) => {
      if (e.key === " " && !isPlay) {
        play();
        video?.play();
      } else if (e.key === " ") {
        pause();
        video?.pause();
      }
    };
    document.addEventListener("keydown", onDown);

    return () => {
      document.removeEventListener("keydown", onDown);
      content?.removeEventListener("click", onClick);
    };
  });

  useMemo(() => {
    const indexSong = player.data.findIndex(
      (song) => player.currentSong.id === song.id
    );
    setIndexSong(indexSong);
  }, [player.currentSong]);

  return (
    <div
      className="
        flex
        flex-col
        sm:flex-row
        items-center
        justify-around
        gap-4
        md:justify-between
        px-5
        py-4
        w-full
        sm:w-[75%]
        min-h-[30%]
        overflow-auto
        bg-neutral-900/30
        backdrop-blur-md
        border-zinc-900
        border-[3px]
        rounded-t-3xl
      "
    >
      {player.currentSong && (
        <MediaItem
          id={player.currentSong.id}
          isLiked={player.currentSong.isLiked}
          icon={player.currentSong.icon}
          image={player.currentSong.image}
          song={player.currentSong.song}
          title={player.currentSong.title}
          video={player.currentSong.video}
        />
      )}
      <div className="flex gap-7">
        <div className="flex text-white transition">
          <AiFillStepBackward
            size={45}
            className="cursor-pointer hover:brightness-50 active:scale-110"
            onClick={stepBackward}
          />
          <div
            id="play_button"
            onClick={handlePlayButton}
            tabIndex={0}
            className="cursor-pointer hover:brightness-50 active:scale-110"
          >
            {isPlay ? <BsPauseFill size={45} /> : <BsPlayFill size={45} />}
          </div>
          <AiFillStepForward
            size={45}
            className="cursor-pointer hover:brightness-50 active:scale-110"
            onClick={stepForward}
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
