import { toast, ToastContent, ToastOptions } from 'react-toastify';
import { create } from 'zustand';

interface State {
  triggerToast: (
    content: ToastContent<unknown>,
    options?: ToastOptions<unknown>,
    type?: ToastType
  ) => string | number;

  clearAllNotifications: () => void;
  clearNotificationById: (id: string | number) => void;
}

type ToastType = 'info' | 'success' | 'warning' | 'error';

export const useNotificationStore = create<State>()(() => ({
  triggerToast: (content, options, type) => {
    if (type) return toast[type](content, options);
    else return toast(content, options);
  },
  clearAllNotifications: () => {
    toast.dismiss();
  },
  clearNotificationById: (id: string | number) => {
    toast.dismiss(id);
  },
}));
