import { useEffect } from 'react';

export function useDelayedEffect(callback: () => void, delay = 0) {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(timer);
  }, [callback, delay]);
}
