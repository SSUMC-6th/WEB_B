import React, { useEffect, useCallback } from "react";

export default function useSearchDebounce(func, delay, deps) {
  const callback = useCallback(func, [deps]);
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [callback, delay]);
}
