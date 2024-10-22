import { UserRole } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  user: {
    birdDate: string;
    id: string;
    isActive: boolean;
    name: string;
    phone: string;
    role: UserRole;
    username: string;
  };
  setUser: (user: State['user']) => void;
  resetUser: () => void;
}

const initialState: State = {
  user: {
    birdDate: '',
    id: '',
    isActive: false,
    name: '',
    phone: '',
    role: 'cafe',
    username: '',
  },
  setUser: () => {},
  resetUser: () => {},
};

export const useUserStore = create<State>()(
  persist(
    (set) => ({
      user: initialState.user,

      setUser: (user) => set({ user }),

      resetUser() {
        set({ user: initialState.user });
      },
    }),
    {
      name: 'user-storage',
    }
  )
);
