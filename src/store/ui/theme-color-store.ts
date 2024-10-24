import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  isDarkMode: boolean;
  setThemeColor: (theme: boolean) => void;
}

export const useThemeColor = create<State>()(
  persist(
    (set) => ({
      isDarkMode: false,
      setThemeColor: (theme) => set({ isDarkMode: theme }),
    }),
    { name: 'theme-color-storage' }
  )
);
