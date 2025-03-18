import { zeroToNumber } from "@/utils/functions";
import React, { FC, RefObject, useEffect, useRef } from "react";

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
      className={`relative min-h-[5vh] pl-5 py-2 mt-1 place-content-start ${
        isSelected
          ? "bg-[linear-gradient(to_right,theme(colors.green.600),theme(colors.transparent))] text-green-50 font-semibold font-roboto"
          : "bg-[linear-gradient(to_right,theme(colors.green.200),theme(colors.transparent))] font-verdana"
      } `}
    >
      <div
        className={`absolute w-[22px] h-[22px] lg:w-[30px] lg:h-[30px] left-0 translate-x-[-50%] top-[5%] lg:top-[15%] text-[1.1em]/[1.1em] md:text-[0.7em]/[0.75em] lg:text-[0.8em]/[0.8em] font-oswald place-content-center ${
          isSelected ? "bg-yellow-300 text-black" : "bg-rose-300 text-green-50"
        } rounded-full text-center overflow-hidden`}
      >
        {zeroToNumber(Num)}
      </div>
      <span className="text-[1.2em]/[1.2em] lg:text-[1em]/[1em]">{title}</span>
    </div>
  );
};
