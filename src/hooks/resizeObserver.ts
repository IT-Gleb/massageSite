import { useState, useRef, useSyncExternalStore } from "react";

function useMyResizeObserver() {
  const targetRef = useRef<HTMLElement>(undefined);
  const [size, setSize] = useState<any>({ width: 0, height: 0 });

  const getSnapShot = () => size;
  const getSereverSnapShot = () => {
    // return { width: 0, height: 0 };
    return false;
  };

  const subscribe = (callback: any) => {
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        const width = Math.round(entries[0].borderBoxSize[0].inlineSize);
        const height = Math.round(entries[0].borderBoxSize[0].blockSize);
        setSize({ width, height });
        callback();
      }
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  };

  return [
    targetRef,
    useSyncExternalStore(subscribe, getSnapShot, getSereverSnapShot),
  ];
}

export default useMyResizeObserver;
