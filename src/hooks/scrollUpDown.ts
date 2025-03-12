import { useScroll, useMotionValueEvent } from "motion/react";
import { RefObject, useState } from "react";

export const useScrollDownUp = () => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrolldirection] = useState<TScrollDownUp>("down");
  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious()!;
    setScrolldirection(diff > 0 ? "down" : "up");
  });

  return {
    scrollDirection,
  };
};

export const useScrollLeftRight = (ref: RefObject<HTMLElement>) => {
  const { scrollX } = useScroll({ container: ref });
  const [scrollXDirection, setScrollXDirection] =
    useState<TScrollLeftRight>("right");
  useMotionValueEvent(scrollX, "change", (current) => {
    const diff = current - scrollX.getPrevious()!;
    setScrollXDirection(diff > 0 ? "right" : "left");
  });

  return {
    scrollXDirection,
  };
};
