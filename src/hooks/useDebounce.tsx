import { useEffect, useRef, useState } from "react";

export function useDebounce(func: any, delay: number) {
  // const [debouncedValue, setDebouncedValue] = useState(value);
  const firstDebounce = useRef(true);

  useEffect(() => {
    // if (value && firstDebounce.current) {
    //   setDebouncedValue(value);
    //   firstDebounce.current = false;
    //   return;
    // }

    const handler = setTimeout(() => {
      func();
      // setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [func, delay]);

  return;
}
