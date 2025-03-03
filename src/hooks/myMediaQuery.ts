import { useSyncExternalStore } from "react";

function useMyMediaQuery(query: string) {
  const getSnapShot = () => window.matchMedia(query).matches;
  const getServerSnapShot = () => {
    return true;
  };

  const subscribe = (callback: any) => {
    const mediaQueryList = window.matchMedia(query);
    mediaQueryList.addEventListener("change", callback);

    return () => {
      mediaQueryList.removeEventListener("change", callback);
    };
  };
  return useSyncExternalStore(subscribe, getSnapShot, getServerSnapShot);
}

export default useMyMediaQuery;
