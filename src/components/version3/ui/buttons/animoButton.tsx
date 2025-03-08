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
      className="w-[80px] h-[28px] md:w-[120px] md:h-[32px] p-1 border rounded-3xl overflow-hidden bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.500))]"
    >
      <motion.div
        ref={target}
        role="button"
        style={{
          x: position === "right" ? sizes.width - 34 : 2,
        }}
        className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] rounded-full bg-green-700 border-2 border-slate-100 cursor-pointer"
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
