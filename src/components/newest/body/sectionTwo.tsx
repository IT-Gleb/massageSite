import { SvgLogo2 } from "@/components/svg_components/svgLogo2";
import { SvgLogo3 } from "@/components/svg_components/svgLogo3";
import React, { FC } from "react";
import { SectionForma } from "../section/sectionForma";
import { SvgLogo1 } from "@/components/svg_components/svgLogo1";

const eelings: string[] = [
  "Лимфодренаж воротниковой зоны",
  "Лимфодренаж лица",
  "Устраняет застой крови",
  "Нормализует кровяное давление",
  "Коррекция фигуры",
  "Варикоз",
  "Воспаление нервной системы",
  "Улучшение сна",
  "Женские заболевания, бесплодие",
  "ревматоидный артрит коленных суставов",
  "ревматоидный артрит бедеренной кости",
  "Простатит",
  "Сахарный диабет",
  "Болезни почек",
  "Ревматизм",
  "воспаление плечевого сустава",
  "Устраняет боли шейного отдела позвоночника",
  "Позвоночная грыжа",
  "Остеохондроз",
  "Остеопороз",
  "Выводит токсины",
];

export const SectionTwo: FC = () => {
  return (
    <SectionForma title="массаж" Icon1={<SvgLogo2 />} Icon2={<SvgLogo3 />}>
      <article className="mt-5">
        <div
          className="uppercase text-center text-[clamp(1rem,2vw,1.2rem)]/[clamp(1rem,2vw,1.2rem)] w-fit mx-auto p-2 flex items-start gap-x-2
          bg-[linear-gradient(to_right,theme(colors.transparent)_0%,theme(colors.emerald.400)_10%,theme(colors.transparent))]
        dark:bg-[linear-gradient(to_right,theme(colors.transparent)_0%,theme(colors.slate.800)_10%,theme(colors.transparent))]
        "
        >
          <span className="font-materialSymbolsOulined">info</span>с помощью
          биоэнергомассажера
        </div>

        <aside className="flex items-start justify-center gap-x-2 gap-y-2 flex-wrap mt-5">
          <div className="w-[120px] md:w-[160px] overflow-hidden rounded-2xl object-cover object-left-top">
            <img
              src="/images/massage1/massage7.jpg"
              alt="прибор"
              loading="lazy"
            />
          </div>
          <div className="w-[120px] md:w-[160px] overflow-hidden rounded-2xl object-cover object-left-top">
            <img
              src="/images/massage1/massage1.jpg"
              alt="прибор"
              loading="lazy"
            />
          </div>
          <div className="w-[120px] h-[110px] md:w-[160px] md:h-[148px] overflow-hidden rounded-2xl object-fill object-left-top">
            <img
              src="/images/massage1/massage6.jpg"
              alt="прибор"
              loading="lazy"
            />
          </div>
          <div className="w-[120px] md:w-[160px] overflow-hidden rounded-2xl object-cover object-left-top">
            <img
              src="/images/massage1/massage4.jpg"
              alt="прибор"
              loading="lazy"
            />
          </div>
          <div className="w-[120px] md:w-[160px] overflow-hidden rounded-2xl object-cover object-left-top">
            <img
              src="/images/massage1/massage5.jpg"
              alt="прибор"
              loading="lazy"
            />
          </div>
          <div className="w-[120px] md:w-[160px] overflow-hidden rounded-2xl object-cover object-left-top">
            <img
              src="/images/massage1/massage2.jpg"
              alt="прибор"
              loading="lazy"
            />
          </div>
        </aside>

        <div className=" indent-4 text-[clamp(0.7rem,2vw,1.1rem)]/[clamp(0.9rem,2.5vw,1.3rem)] text-justify p-1 mt-5 w-[95%] mx-auto">
          <p>
            Это высокотехнологичный прибор, разработанный на основе теории
            традиционной китайской медицины об энергетических каналах и
            внутренних органах.
          </p>
          <p>
            Данный прибор объединяет в себе передовые достижения в
            биоинформатике, энергетике, неврологии и других областях.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 w-[95%] mx-auto my-5 uppercase px-2 text-neutral-200
          [&>li>div>:nth-child(2)]:first-letter:uppercase [&>li>div>:nth-child(2)]:first-letter:font-bold [&>li>div>:nth-child(1)]:text-yellow-200
          [&>li>div]:flex [&>li>div]:items-center [&>li>div]:gap-x-4 text-[clamp(0.75rem,2vw,1.3rem)]/[1.5rem]
          [&>li>div>:nth-child(1)]:font-materialSymbolsOulined [&>li>div>:nth-child(1)]:scale-x-[-1] [&>li>div>:nth-child(1)]:text-[1.2rem]/[1.4rem]
          "
        >
          {eelings
            .map((item, index) => (
              <li key={index}>
                <div className="bg-emerald-700 dark:bg-slate-800 h-full p-2 outline-1 outline outline-offset-4 outline-emerald-700 dark:outline-slate-300">
                  <span>thumb_up</span>
                  <span className="inline-block">{item}</span>
                </div>
              </li>
            ))
            .reverse()}
        </ul>
      </article>
    </SectionForma>
  );
};
