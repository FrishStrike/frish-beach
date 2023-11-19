import { create } from "zustand";
import { Song } from "@/types/song";
import { nanoid } from "nanoid";

const firstSong = {
  id: nanoid(),
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
  setData: (song) =>
    set((state) => {
      return { data: [...state.data, song] };
    }),
}));

export default usePlayer;
