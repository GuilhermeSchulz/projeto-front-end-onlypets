/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

const useOutClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outClick = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement;
      if (!ref.current?.contains(target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', outClick);

    return () => {
      document.removeEventListener('mousedown', outClick);
    };
  }, []);

  return ref;
};

export default useOutClick;
