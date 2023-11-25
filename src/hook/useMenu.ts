import { create } from "zustand";

interface menuStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useMenu = create<menuStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useMenu;
