import { SvgLoading } from "@/components/svg_components/svgLoading";
import React, { FC } from "react";

type TUpdateProps = {
  title: string;
  click: () => void;
};

export const UpdateButton: FC<TUpdateProps> = ({ title, click }) => {
  return (
    <button
      type="button"
      title={title}
      onClick={() => click()}
      className="min-w-[60px] p-1 rounded-md bg-green-600 text-green-50 active:scale-90 place-content-center group"
    >
      <div className="w-[22px] h-[22px] mx-auto group-active:text-yellow-300">
        <SvgLoading />
      </div>
    </button>
  );
};
