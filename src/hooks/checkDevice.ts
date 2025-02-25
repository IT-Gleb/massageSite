import { useEffect, useState } from "react";

export const MobileQuery: string = "only screen and (max-width:640px)";
export const PlanshetQuery: string =
  "only screen and ((min-width:641px) and (max-width:1024px))";

const IS_SERVER: boolean = typeof "window" === undefined;

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (IS_SERVER) {
      setMatches(false);
      return;
    }

    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [matches, query]);

  return matches;
};
