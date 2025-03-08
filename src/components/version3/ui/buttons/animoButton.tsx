import React, { FC, useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";
import useMyResizeObserver from "@/hooks/resizeObserver";

type TButtonProps = {
  click: () => void;
  title: string;
};

export const AnimoButton: FC<TButtonProps> = ({ title, click }) => {
  const [position, setPosition] = useState<"left" | "right">("left");
  const [target, animate] = useAnimate();
  const [btnRef, sizes] = useMyResizeObserver();

  useEffect(() => {
    animate(target.current, { x: position === "left" ? 2 : sizes.width - 34 });
  }, [position, sizes.width]);

  return (
    <div
      ref={btnRef}
      className={`w-[80px] h-[28px] md:w-[120px] md:h-[32px] p-[2px] border-2 border-mint-600 rounded-3xl overflow-hidden 
      ${
        position === "left"
          ? "bg-[linear-gradient(to_right,theme(colors.mint.500),theme(colors.mint.300))]"
          : "bg-[linear-gradient(to_right,theme(colors.mint.300),theme(colors.mint.500))]"
      }`}
    >
      <motion.div
        ref={target}
        role="button"
        style={{
          x: position === "right" ? sizes.width - 34 : 2,
        }}
        className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] rounded-full border-2 border-mint-700 bg-mint-300 cursor-pointer"
        title={title}
        onClick={(e) => {
          e.preventDefault();
          position === "left" ? setPosition("right") : setPosition("left");
          click();
        }}
      ></motion.div>
    </div>
  );
};
