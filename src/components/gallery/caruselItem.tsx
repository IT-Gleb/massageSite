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
      className={`max-[365px]:w-[268px] w-[275px] md:w-[320px] h-[240px] bg-green-50 dark:bg-slate-100 ${
        param.index === param.activeIndex
          ? "border-2 border-green-700 dark:border-neutral-300"
          : ""
      } relative`}
    >
      <header className="px-2 py-3 place-content-start bg-green-500 dark:bg-slate-700 h-[4vh] text-green-100 dark:text-slate-300 text-[clamp(0.8rem,3vw,1.2rem)] flex items-start gap-x-4">
        <span
          aria-hidden="true"
          className="font-materialSymbolsOulined text-[1.6rem]"
        >
          check
        </span>
        {param.name}
      </header>
      <div
        className="w-[90px] h-[90px] rounded-full border-4 border-green-500 dark:border-slate-500 bg-green-100/50 dark:bg-slate-500 overflow-hidden
       content-center text-center float-start mt-2 ml-2 mr-2"
      >
        <div
          aria-hidden="true"
          className="font-materialSymbolsOulined text-[4rem] text-green-700 dark:text-slate-300"
        >
          person
        </div>
      </div>
      <p className="indent-4 text-[clamp(0.7rem,4vw,1rem)]/[clamp(0.7rem,4vw,1rem)] mt-0 py-2 px-1 text-balance text-green-700 dark:text-slate-600">
        {param.text}
      </p>
      <p
        aria-hidden="true"
        className="text-[0.8rem] text-green-500 dark:text-slate-500 p-1"
      >
        {param.date}
      </p>
    </article>
  );
};
