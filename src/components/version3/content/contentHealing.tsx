"use client";

import React, { FC } from "react";
import { ContainerContent } from "./containerContent";
import { TextTitle } from "../ui/buttons/heading/textTitle";
import { RoundedDigits } from "../ui/buttons/top/roundedDigits";

export const ContentHealing: FC = () => {
  return (
    <ContainerContent backgroundClass="bg-green-50/50">
      <TextTitle title="Оздоровление" />
      <p className="my-10">
        Древнейшие методики оздоровления с использованием новейших технологий.
        Массаж Fohow применяется:
      </p>
      <ul
        className="w-fit mx-auto px-[5rem] xl:px-[2rem] my-5 flex gap-4 flex-wrap [&>li]:w-[175px] md:[&>li]:h-[195px] [&>li]:overflow-hidden [&>li]:pb-2 
            [&>li>div]:bg-green-200 [&>li>div]:w-full [&>li>div]:h-[30px] md:[&>li>div]:h-[40px] lg:[&>li>div]:h-[36px] 2xl:[&>li>div]:h-[38px]
      [&>li>div]:text-center [&>li>div]:border-b [&>li>div]:border-b-slate-200 [&>li>div]:py-1 [&>li>div]:px-1 [&>li>p]:indent-1 [&>li>p]:p-1 [&>li>p]:font-verdana 
      [&>li>p]:border [&>li>p]:border-t-0 [&>li>p]:border-green-300 [&>li>p]:shadow-md"
      >
        <li className="place-content-start">
          <div>
            <RoundedDigits title={1} />
          </div>
          <p>Остеохондроз</p>
        </li>
        <li className="place-content-center">
          <div>
            <RoundedDigits title={2} />
          </div>
          <p>Остеопороз</p>
        </li>
        <li>
          <aside className="[mask-image:radial-gradient(theme(colors.black),theme(colors.transparent)_60%,theme(colors.transparent))]">
            <img src="/images/massage1/massage1.webp" alt="" loading="lazy" />
          </aside>
        </li>
        <li className="place-content-center xl:place-content-end">
          <div>
            <RoundedDigits title={3} />
          </div>
          <p>Позвоночная грыжа</p>
        </li>
        <li>
          <div>
            <RoundedDigits title={4} />
          </div>
          <p>Устраняет боли шейного отдела позвоночника</p>
        </li>
        <li className="place-content-center">
          <div>
            <RoundedDigits title={5} />
          </div>
          <p>Воспаление плечевого сустава</p>
        </li>
        <li className="place-content-start">
          <div>
            <RoundedDigits title={6} />
          </div>
          <p>Ревматизм</p>
        </li>

        <li className="place-content-center">
          <div>
            <RoundedDigits title={7} />
          </div>
          <p>Сахарный диабет</p>
        </li>
        <li className="place-content-center">
          <div>
            <RoundedDigits title={8} />
          </div>
          <p>Ревматоидный артрит бедренной кости и коленных суставов</p>
        </li>
        <li className="place-content-start">
          <div>
            <RoundedDigits title={9} />
          </div>
          <p>Болезни почек</p>
        </li>
        <li>
          <aside className="[mask-image:radial-gradient(theme(colors.black),theme(colors.transparent)_60%,theme(colors.transparent))]">
            <img src="/images/massage1/massage6.webp" alt="" loading="lazy" />
          </aside>
        </li>
        <li className="place-content-center xl:place-content-end">
          <div>
            <RoundedDigits title={10} />
          </div>
          <p>Простатит</p>
        </li>
        <li>
          <aside className="[mask-image:radial-gradient(theme(colors.black),theme(colors.transparent)_65%,theme(colors.transparent))]">
            <img src="/images/massage1/massage5.webp" alt="" loading="lazy" />
          </aside>
        </li>
        <li className="place-content-center">
          <div>
            <RoundedDigits title={11} />
          </div>
          <p>Улучшение сна</p>
        </li>
        <li className="place-content-start">
          <div>
            <RoundedDigits title={12} />
          </div>
          <p>Женские заболевания</p>
        </li>
        <li className="place-content-end">
          <div>
            <RoundedDigits title={13} />
          </div>
          <p>Варикоз</p>
        </li>
        <li className="place-content-center">
          <div>
            <RoundedDigits title={14} />
          </div>
          <p>Восстановление нервной системы</p>
        </li>
        <li className="place-content-end">
          <div>
            <RoundedDigits title={15} />
          </div>
          <p>Коррекция фигуры</p>
        </li>
        <li className="place-content-start">
          <div>
            <RoundedDigits title={16} />
          </div>
          <p>Выводит токсины</p>
        </li>
        <li className="place-content-center">
          <div>
            <RoundedDigits title={17} />
          </div>
          <p>Нормализует кровяное давление</p>
        </li>
        <li className="place-content-center">
          <div>
            <RoundedDigits title={18} />
          </div>
          <p>Лимфодренаж лица и шейно-воротниковой зоны</p>
        </li>
      </ul>
      <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
    </ContainerContent>
  );
};
