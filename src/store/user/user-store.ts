import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  user: {
    birdDate: string;
    id: string;
    isActive: boolean;
    name: string;
    phone: string;
    role: 'admin' | 'laundry' | 'reception' | 'cafe';
    username: string;
  };
  setUser: (user: State['user']) => void;
  resetUser: () => void;
}

export const useUserStore = create<State>()(
  persist(
    (set) => ({
      user: {
        birdDate: '',
        id: '',
        isActive: false,
        name: '',
        phone: '',
        role: 'cafe',
        username: '',
      },

      setUser: (user) => set({ user }),

      resetUser() {
        set({
          user: {
            birdDate: '',
            id: '',
            isActive: false,
            name: '',
            phone: '',
            role: 'cafe',
            username: '',
          },
        });
      },
    }),
    {
      name: 'user-storage',
    }
  )
);
