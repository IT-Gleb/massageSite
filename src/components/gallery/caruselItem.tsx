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
      className={`max-[365px]:w-[268px] w-[275px] md:w-[320px] h-[240px] bg-emerald-50 dark:bg-slate-100 ${
        param.index === param.activeIndex
          ? "border-4 border-emerald-700 dark:border-neutral-300"
          : ""
      } relative`}
    >
      <header className="p-1 bg-emerald-500 dark:bg-slate-700 h-[4vh] text-emerald-100 dark:text-slate-300 text-[clamp(0.8rem,3vw,1.2rem)] flex items-start gap-x-4">
        <span className="font-materialSymbolsOulined text-[1.6rem]">check</span>
        {param.name}
      </header>
      <div
        className="w-[90px] h-[90px] rounded-full border-4 border-emerald-500 dark:border-slate-500 bg-emerald-100 dark:bg-slate-500 overflow-hidden
       content-center text-center float-start mt-2 ml-2 mr-2"
      >
        <div className="font-materialSymbolsOulined text-[4rem] text-emerald-600 dark:text-slate-300">
          person
        </div>
      </div>
      <p className="indent-4 text-[clamp(0.7rem,4vw,1rem)]/[clamp(0.7rem,4vw,1rem)] mt-0 py-2 px-1 text-balance text-emerald-600 dark:text-slate-600">
        {param.text}
      </p>
      <p className="text-[0.8rem] text-emerald-500 dark:text-slate-500 p-1">
        {param.date}
      </p>
    </article>
  );
};
