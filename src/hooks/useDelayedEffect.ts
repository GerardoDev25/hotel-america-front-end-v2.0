import { useEffect } from 'react';

type Callback = () => void;

export function useDelayedEffect(callback: Callback, delay: number = 0) {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(timer);
  }, [callback, delay]);
}
