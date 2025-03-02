import React, { FC } from "react";

const stringItems: string[] = [
  "10 сеансам обычного массажа всего тела",
  "45 минутам детоксикации лимфы",
  "1 часу очищения энергетических каналов тела",
  "по потерям жировой ткани - бегу на 6км",
  "поглощению анионов на протяжении 3-х часов",
  "500 повторений жима от груди лежа",
  "выведению 4,1 г токсинов из внутренних органов",
];

export const HeaderChildTwo: FC = () => {
  return (
    <div
      className="px-2 mt-5 bg-[url('/images/svg/back_dark.svg')] dark:bg-[url('/images/svg/back.svg')] border-b-8 border-b-emerald-300 dark:border-b-slate-800 relative 
     after:content-[''] after:absolute after:left-0 after:-bottom-4 after:right-0 after:z-10 after:w-full after:h-[4px] after:bg-emerald-200 after:dark:bg-slate-800"
    >
      <h4
        className="w-[90%] mx-auto text-yellow-300 dark:text-yellow-200 text-[clamp(0.9rem,2vw,1.8rem)]/[clamp(clamp(1rem,2vw,1.8rem))] font-bold font-roboto uppercase p-1
      bg-[linear-gradient(to_right,theme(colors.transparent),theme(colors.emerald.700)_3%,theme(colors.emerald.600)_45%,theme(colors.transparent))]
      dark:bg-[linear-gradient(to_right,theme(colors.transparent),theme(colors.slate.500)_3%,theme(colors.slate.400)_45%,theme(colors.transparent))]
      "
      >
        Один сеанс применения биоэнергомассажа равнозначен:
      </h4>
      <ul
        className=" my-5 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-2 w-[90%] mx-auto text-[clamp(0.85rem,2vw,1.4rem)]/[clamp(1rem,2.5vw,1.8rem)] text-emerald-50 dark:text-slate-50 
      [&>li>div>:nth-child(1)]:font-bold [&>li>div>:nth-child(1)]:rotate-[-24deg] [&>li>div>:nth-child(1)]:text-emerald-400  dark:[&>li>div>:nth-child(1)]:text-green-300
      "
      >
        {stringItems.map((item, index) => (
          <li key={index} className="flex items-start gap-x-1">
            <div className="w-full h-full bg-emerald-900 text-slate-200 dark:bg-slate-900 dark:text-slate-200 p-4 flex items-start gap-x-1 overflow-hidden rounded-xl">
              <span className="font-materialSymbolsOulined ">thumb_up</span>
              <span className="first-letter:uppercase line-clamp-2">
                {item}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

/*
      <ul className="uppercase p-2 text-emerald-200 text-[clamp(1rem,4vw,1.8rem)]/[clamp(1rem,4vw,2.2rem)]">
        <li className="p-1 text-emerald-950">
          Оздоровительный сеанс бионергомассажа эффективный способ достичь
          такого же результата как:
        </li>
        <li className="p-1 flex items-center gap-x-1">
          <span className="font-materialSymbolsOulined">thumb_up</span> от
          Иглоукалывания
        </li>
        <li className="p-1 flex items-center gap-x-1">
          {" "}
          <span className="font-materialSymbolsOulined">thumb_up</span>от
          вакуумного массажа
        </li>
        <li className="p-1 flex items-center gap-x-1">
          <span className="font-materialSymbolsOulined">thumb_up</span> от массажа
          Гуаша
        </li>
        <li className="p-1 flex items-center gap-x-1">
          <span className="font-materialSymbolsOulined">thumb_up</span> от
          моксотерапии
        </li>
      </ul>

*/
