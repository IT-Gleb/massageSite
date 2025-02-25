import React, { FC, useEffect, useRef } from "react";

const maxLength: number = 364; //Максимальное количество символов в

type TCardParams = {
  title: string;
  icon: React.JSX.Element;
  paragraphs: string[];
};

export const CardItem: FC<TCardParams> = (param) => {
  const pRef = useRef<HTMLParagraphElement>(null);
  // console.log(param.paragraphs);

  useEffect(() => {
    let isSubscribed: boolean = true;
    if (isSubscribed) {
      let text: string = "";
      if (param.paragraphs.length > 0) {
        param.paragraphs.forEach((item) => {
          if (!text.includes(item)) {
            text += item;
          }
        });
      }
      text = text.substring(0, maxLength) + "...";
      pRef.current?.insertAdjacentHTML("beforebegin", text);
    }
    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <article className="flex flex-col bg-pink-50 dark:bg-slate-300 outline-[6px] rounded-se-lg rounded-ss-lg overflow-hidden">
      <header className="flex items-center gap-x-2 bg-pink-300 dark:bg-slate-700 p-2">
        <h4 className="font-roboto font-bold text-[clamp(1rem,2vw,1.3rem)]/[clamp(clamp(1rem,2vw,1.3rem))] text-pink-600 dark:text-slate-200 whitespace-nowrap">
          {param.title}
        </h4>
      </header>
      <main className="p-2 flex-auto text-pink-800 dark:text-slate-800 font-inter indent-4 text-[clamp(0.7rem,3vw,0.9rem)]/[clamp(0.7rem,3vw,1.1rem)]">
        <div className="float-start mr-4 mb-1">{param.icon}</div>
        <p ref={pRef} className="text-balance">
          <code id="subject"></code>
        </p>
      </main>
      <footer className="min-h-[2vh] bg-pink-300 dark:bg-slate-700"></footer>
    </article>
  );
};
