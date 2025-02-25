import Image from "next/image";
import React, { FC } from "react";

type TIconParams = {
  src: string;
  title: string;
};

export const CardIcon: FC<TIconParams> = (param) => {
  return (
    <div className="w-[75px] h-[75px] md:w-[90px] md:h-[90px] 2xl:w-[120px] 2xl:h-[120px] relative object-cover object-center overflow-hidden rounded-full border-4 border-emerald-300 dark:border-slate-600">
      <Image src={param.src} fill alt={param.title} />
    </div>
  );
};
