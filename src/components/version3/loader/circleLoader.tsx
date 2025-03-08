import React, { FC, memo, useState } from "react";

type TLoaderProps = {
  colorBegin: string;
  colorEnd: string;
  percent: number;
};

export const CircleLoader: FC<TLoaderProps> = memo(
  ({ percent, colorBegin, colorEnd }) => {
    return (
      <div
        className={
          "w-[100%] h-[100%] overflow-hidden rounded-full relative p-1"
        }
        style={{
          background: `conic-gradient(from 0deg, ${colorBegin} ${percent}%, ${colorEnd} 0%)`,
        }}
      >
        <div className="bg-green-50 w-[90%] h-[90%] rounded-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"></div>
      </div>
    );
  }
);
