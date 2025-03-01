import React, { FC } from "react";

export const HeaderChildOne: FC = () => {
  return (
    <div className="bg-orange-700 vertical-text content-center py-12 uppercase text-[clamp(2rem,8vw,4rem)]/[clamp(2rem,8vw,4rem)] font-roboto">
      <div className="h-fit my-auto text-orange-400 whitespace-nowrap">
        <span className="text-[clamp(1.2rem,8vw,2.2rem)]/[clamp(1.2rem,8vw,2.4rem)]">
          биоэнергомассаж
        </span>{" "}
        <span className="text-orange-300">fohow</span>
      </div>
    </div>
  );
};
