import { toast, ToastContent, ToastOptions } from 'react-toastify';
import { create } from 'zustand';

interface State {
  triggerToast: (
    content: ToastContent<unknown>,
    options?: ToastOptions<unknown>
  ) => void;
}

export const useSideMenuStore = create<State>()(() => ({
  triggerToast: (content, options) => {
    toast(content, options);
  },
}));
