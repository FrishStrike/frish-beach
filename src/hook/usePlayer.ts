import { create } from "zustand";

import { Song } from "@/types/song";

interface PlayerStore {
  data: Song[];
  song: Song | null;
  setSong: (song: Song) => void;
  setData: (song: Song) => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  data: [],
  song: null,
  setSong: (song) => set({ song: song }),
  setData: (song) => set({ data: [song] }),
}));

export default usePlayer;
