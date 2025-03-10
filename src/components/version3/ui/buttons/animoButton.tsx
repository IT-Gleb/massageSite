import React, { FC, Ref, RefObject, useEffect, useState } from "react";
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
    animate(target.current, {
      x: position === "left" ? 2 : (sizes as TSizes).width - 34,
    });
  }, [position, (sizes as TSizes).width]);

  return (
    <div
      ref={btnRef as RefObject<HTMLDivElement>}
      className={`w-[80px] h-[28px] md:w-[120px] md:h-[32px] p-[2px] border-2 border-green-400 rounded-3xl overflow-hidden
      ${
        position === "left"
          ? "bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100))]"
          : "bg-[linear-gradient(to_right,theme(colors.green.100),theme(colors.green.300))]"
      }`}
    >
      <motion.div
        ref={target}
        role="button"
        style={{
          x: position === "right" ? (sizes as TSizes).width - 34 : 2,
        }}
        className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] rounded-full border-2 border-green-600 bg-green-300 cursor-pointer"
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
