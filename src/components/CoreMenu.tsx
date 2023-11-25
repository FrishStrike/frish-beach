"use client";

import { useEffect, useMemo, useState } from "react";

import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

import useSound from "@/libs/use-sound";
import MediaItem from "./MediaItem";
import usePlayer from "@/hook/usePlayer";
import { Song } from "@/types/song";

const CoreMenu = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [volume, setVolume] = useState(1);
  const [indexSong, setIndexSong] = useState(0);
  const [music, setMusic] = useState<Song>();

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

  useEffect(() => {
    setMusic(player.currentSong);
  }, [player.currentSong]);

  useMemo(() => {
    const indexSong = player.data.findIndex(
      (song) => player.currentSong.id === song.id
    );
    setIndexSong(indexSong);
  }, [player.currentSong]);

  const handlePlayButton = (e: any) => {
    console.log(e);

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

  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      if (e.key === " " && !isPlay) {
        play();
      } else if (e.key === " ") {
        pause();
      }
    };
    document.addEventListener("keydown", onDown);

    return () => {
      document.removeEventListener("keydown", onDown);
    };
  });

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
      {music && (
        <MediaItem
          id={music.id}
          icon={music.icon}
          image={music.image}
          song={music.song}
          title={music.title}
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
