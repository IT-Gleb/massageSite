import { useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

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
