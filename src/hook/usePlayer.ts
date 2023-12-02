import { create } from "zustand";
import { Song } from "@/types/song";
import { nanoid } from "nanoid";

const firstSong = {
  id: nanoid(),
  isLiked: false,
  icon: "/frish.png",
  image: "/Yeat.webp",
  song: "/audio.mp3",
  title: "Carti",
};

interface PlayerStore {
  data: Song[];
  currentSong: Song;
  setCurrentSong: (song: Song) => void;
  isLoading: boolean;
  setIsLoading: (arg: boolean) => void;
  setLike: (isLiked: boolean, id: string) => void;
  setData: (song: Song) => void;
}

const usePlayer = create<PlayerStore>((set, get) => ({
  data: [firstSong],
  currentSong: firstSong,
  setCurrentSong(song) {
    set({ currentSong: song });
  },
  isLoading: false,
  setIsLoading: (arg) => set({ isLoading: arg }),
  setLike: (isLiked, id) => {
    const songIndex = get().data.findIndex((song) => song.id === id);
    const song = get().data.find((song) => song.id === id);
    if (!song) {
      console.log("Error, song is not find");
      return;
    }
    song.isLiked = isLiked;
    console.log(songIndex);
    get().data.splice(songIndex, 1, song);
    set({
      data: get().data,
    });
    if (get().currentSong.id === id) {
      set({ currentSong: song });
    }
    console.log(get().data[0]);
  },
  setData: (song) =>
    set((state) => {
      return { data: [...state.data, song] };
    }),
}));

export default usePlayer;
