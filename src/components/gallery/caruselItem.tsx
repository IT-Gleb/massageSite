import { CaruselDataAttributeName } from "@/utils/functions";
import React, { FC, useEffect, useRef } from "react";

type TParamActiveIndex = {
  activeIndex: number;
};

export const CaruselItem: FC<TTextItems & TParamActiveIndex> = (param) => {
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (articleRef.current) {
      articleRef.current.setAttribute(
        CaruselDataAttributeName,
        param.index.toString()
      );
    }
  }, [param]);

  return (
    <article
      ref={articleRef}
      className={`max-[365px]:w-[268px] w-[275px] md:w-[320px] h-[240px] bg-pink-200 ${
        param.index === param.activeIndex
          ? "border-4 border-pink-700 dark:border-stone-400"
          : ""
      } relative`}
    >
      <header className="p-1 bg-pink-400 dark:bg-slate-700 h-[4vh] text-pink-100 dark:text-slate-300 text-[clamp(0.8rem,3vw,1.2rem)] flex items-start gap-x-4">
        <span className="font-materialSymbolsOulined text-[1.6rem]">check</span>
        {param.name}
      </header>
      <div className="absolute left-2 top-[64px] w-[90px] h-[90px] rounded-full bg-pink-300 dark:bg-slate-500 overflow-hidden content-center text-center">
        <div className="font-materialSymbolsOulined text-[4rem] text-pink-600 dark:text-slate-300">
          person
        </div>
      </div>
      <img
        src="/images/svg/back.svg"
        width="80"
        height="80"
        className="block float-start mr-6 mb-10"
      />
      <p className="indent-4 text-[clamp(0.7rem,4vw,1rem)]/[clamp(0.7rem,4vw,1rem)] mt-0 p-1 text-balance text-pink-600 dark:text-slate-600">
        {param.text}
      </p>
      <p className="text-[0.8rem] text-pink-500 dark:text-slate-500 p-1">
        {param.date}
      </p>
    </article>
  );
};
