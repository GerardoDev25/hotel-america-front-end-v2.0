import { toast, ToastContent, ToastOptions } from 'react-toastify';
import { create } from 'zustand';

interface State {
  triggerToast: (
    content: ToastContent<unknown>,
    options?: ToastOptions<unknown>,
    type?: ToastType
  ) => void;
}

type ToastType = 'info' | 'success' | 'warning' | 'error';

export const useNotificationStore = create<State>()(() => ({
  triggerToast: (content, options, type) => {
    if (type) toast[type](content, options);
    else toast(content, options);
  },
}));
