import { zeroToNumber } from "@/utils/functions";
import React, { FC, RefObject } from "react";

type TCardHealingProps = {
  title: string;
  Num: number;
  isSelected: boolean;
  thisRef: RefObject<HTMLDivElement | null>;
};

export const CardHealing: FC<TCardHealingProps> = ({
  Num,
  title,
  isSelected,
  thisRef,
}) => {
  return (
    <div
      ref={thisRef}
      className={`relative min-h-[5vh] pl-5 lg:pl-8 py-2 mt-1 place-content-start transition-all ${
        isSelected
          ? "bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.emerald.200),theme(colors.transparent))] text-indigo-950 font-semibold font-roboto"
          : "bg-[linear-gradient(to_right,theme(colors.green.200),theme(colors.transparent))] font-verdana"
      } `}
    >
      <div
        className={`absolute w-[28px] h-[28px] md:w-[34px] md:h-[34px] lg:w-[36px] lg:h-[36px] left-0 translate-x-[-50%] top-[50%] translate-y-[-50%]
           text-[1.3em]/[1.3em] md:text-[1em]/[1em] lg:text-[0.9em]/[0.9em] font-oswald place-content-center ${
             isSelected
               ? "bg-sky-500 text-yellow-100"
               : "bg-rose-300 text-green-50"
           } rounded-full text-center overflow-hidden`}
      >
        {zeroToNumber(Num)}
      </div>
      <span
        className={`text-[1.6em]/[1.6em] lg:text-[1.2em]/[1.2em] first-letter:uppercase`}
      >
        {title}
      </span>
    </div>
  );
};

export default CardHealing;
