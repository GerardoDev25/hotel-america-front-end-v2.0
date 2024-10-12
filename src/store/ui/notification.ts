import { toast, ToastContent, ToastOptions } from 'react-toastify';
import { create } from 'zustand';

interface State {
  triggerToast: (
    content: ToastContent<unknown>,
    options?: ToastOptions<unknown>,
    type?: 'info' | 'success' | 'warning' | 'error'
  ) => void;
}

export const useSideMenuStore = create<State>()(() => ({
  triggerToast: (content, options, type) => {
    if (type) toast[type](content, options);
    else toast(content, options);
  },
}));
