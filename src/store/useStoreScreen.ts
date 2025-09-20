import { create } from "zustand"

interface ScreensStore {
    currentScreen: string;
    showMenu: boolean;
    setCurrentScreen: (screen: string) => void;
    toggleMenu: () => void;
}

export const useScreensStore = create<ScreensStore>((set) => ({
    currentScreen: "home",
    setCurrentScreen: (screen) => set({ currentScreen: screen }),
    showMenu: false,
    toggleMenu: () => set((state) => ({ showMenu: !state.showMenu })),
}));