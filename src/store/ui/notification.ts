// import { useNotificationCenter } from 'react-toastify/addons/use-notification-center';
import { toast, ToastContent, ToastOptions } from 'react-toastify';
import { create } from 'zustand';

interface State {
  triggerToast: (
    content: ToastContent<unknown>,
    options?: ToastOptions<unknown>,
    type?: 'info' | 'success' | 'warning' | 'error'
  ) => void;
  // clear: () => void;
}

export const useSideMenuStore = create<State>()(() => ({
  // clear: useNotificationCenter().clear,

  triggerToast: (content, options, type) => {
    // get().clear();
    if (type) toast[type](content, options);
    else toast(content, options);
  },
}));
