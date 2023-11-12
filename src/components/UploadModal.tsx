"use client";

import { useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import usePlayer from "@/hook/usePlayer";
import readDataFromFile from "@/utils/readDataFromFile";

import useModal from "@/hook/useModal";

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const modal = useModal();

  const player = usePlayer();

  const createSong: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);
      const title = values.title;
      const songFile = values.song[0];
      const imageFile = values.image[0];
      const iconFile = values.icon[0];
      const videoFile = values.video?.[0];

      const song = await readDataFromFile(songFile);
      const image = await readDataFromFile(imageFile);
      const icon = await readDataFromFile(iconFile);
      if (videoFile) {
        const video = await readDataFromFile(videoFile);
      }

      player.setSong({
        title: title,
        icon: icon,
        image: image,
        song: song,
      });
      player.setData({
        title: title,
        icon: icon,
        image: image,
        song: song,
      });
    } catch (error) {
      console.log(error);
    } finally {
      modal.onClose();
      setIsLoading(false);
    }
  };

  const { register, handleSubmit } = useForm();

  return (
    <Modal>
      <h2 className="text-center mb-12">Upload the song</h2>
      <form
        onSubmit={handleSubmit(createSong)}
        className="
        flex
        flex-col
        gap-4
        justify-center
        items-center
      "
      >
        <div>
          <p className="text-sm">Select a title</p>
          <Input
            id="title"
            {...register("title", { required: true })}
            placeholder="title"
          />
        </div>
        <div className="text-sm">
          <p>Select a song file</p>
          <Input
            id="song"
            placeholder="song"
            type="file"
            accept=".mp3"
            {...register("song", { required: true })}
            className="
            file:bg-transparent
            file:border-none
          file:text-white
            file:cursor-pointer
            cursor-pointer
          "
          />
        </div>

        <div className="text-sm">
          <p>Select an image file</p>
          <Input
            id="image"
            placeholder="image"
            accept=".jpg"
            type="file"
            {...register("image", { required: true })}
            className="
            file:bg-transparent
            file:border-none
          file:text-white
            file:cursor-pointer
            cursor-pointer
          "
          />
        </div>
        <div className="text-sm">
          <p>Select an icon file</p>
          <Input
            id="icon"
            placeholder="icon"
            accept=".jpg"
            type="file"
            {...register("icon", { required: true })}
            className="
            file:bg-transparent
            file:border-none
          file:text-white
            file:cursor-pointer
            cursor-pointer
          "
          />
        </div>
        <div className="text-sm">
          <p>Select a video file, is not important</p>
          <Input
            id="video"
            placeholder="video"
            type="file"
            accept=".mp4"
            {...register("video")}
            className="
            file:bg-transparent
            file:border-none
          file:text-white
            file:cursor-pointer
            cursor-pointer
          "
          />
        </div>
        <button
          className="
          mt-4
          p-4
          text-2xl
          rounded-2xl
          border-white
          border-2
          transition
          hover:bg-neutral-900
        "
        >
          Create Song
        </button>
      </form>
    </Modal>
  );
};

export default UploadModal;
