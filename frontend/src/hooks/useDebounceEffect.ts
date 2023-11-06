import { useEffect } from 'react';

let isFirstRender = true;

export const useDebounceEffect = (
  fn: () => void,
  delay?: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  observators: any[] = []
) => {
  useEffect(() => {
    if (!isFirstRender) {
      const timer = setTimeout(fn, delay || 500);

      return () => clearTimeout(timer);
    }

    isFirstRender = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...observators, delay]);
};
