import { useState, useRef, useSyncExternalStore, Ref, RefObject } from "react";

function useMyResizeObserver() {
  const targetRef = useRef<HTMLElement>(null);
  const [size, setSize] = useState<TSizes | boolean>({ width: 0, height: 0 });

  const getSnapShot = () => size;
  const getSereverSnapShot = () => {
    //return { width: 0, height: 0 };
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
      observer.observe(targetRef.current, { box: "device-pixel-content-box" });
    } else {
      observer.unobserve(targetRef.current as unknown as HTMLElement);
    }
    return () => {
      observer.disconnect();
    };
  };

  // const valueSize = useDeferredValue(
  //   size,
  //   useSyncExternalStore(subscribe, getSnapShot, getSereverSnapShot)
  // );

  // useCallback(() => {
  //   useSyncExternalStore(subscribe, getSnapShot, getSereverSnapShot);
  // }, [targetRef.current, setSize]);

  return [
    targetRef as RefObject<HTMLElement>,
    useSyncExternalStore(subscribe, getSnapShot, getSereverSnapShot) as TSizes,
  ];
}

export default useMyResizeObserver;
