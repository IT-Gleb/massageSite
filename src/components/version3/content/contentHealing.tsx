"use client";

import React, { FC } from "react";
import { ContainerContent } from "./containerContent";

export const ContentHealing: FC = () => {
  return (
    <ContainerContent backgroundClass="bg-green-50/50">
      <h2 className="underline underline-offset-[10px]">Оздоровление</h2>
      <p className="my-10">
        Древнейшие методики оздоровления с использованием новейших технологий.
        Применяются:
      </p>
      <ul
        className="w-fit mx-auto my-5 flex gap-3 flex-wrap [&>li]:w-[160px] md:[&>li]:h-[150px] [&>li]:overflow-hidden 
        
      [&>li>div]:bg-rose-200 [&>li>div]:w-full [&>li>div]:h-[30px] [&>li>div]:py-1 [&>li>div]:px-1 [&>li>p]:p-1 [&>li>p]:font-inter"
      >
        <li className="place-content-end">
          <div></div>
          <p>Остеохондроз</p>
        </li>
        <li className="place-content-center">
          <div></div>
          <p>Остеопороз</p>
        </li>
        <li className="place-content-end">
          <div></div>
          <p>Позвоночная грыжа</p>
        </li>
        <li>
          <div></div>
          <p>Устраняет боли шейного отдела позвоночника</p>
        </li>
        <li className="place-content-center">
          <div></div>
          <p>Воспаление плечевого сустава</p>
        </li>
        <li>
          <div></div>
          <p>Ревматизм</p>
        </li>

        <li className="place-content-end">
          <div></div>
          <p>Сахарный диабет</p>
        </li>
        <li>
          <div></div>
          <p>Ревматоидный артрит бедренной кости и коленных суставов</p>
        </li>
        <li>
          <div></div>
          <p>Болезни почек</p>
        </li>
        <li>
          <div></div>
          <p>Простатит</p>
        </li>
        <li>
          <div></div>
          <p>Улучшение сна</p>
        </li>
        <li>
          <div></div>
          <p>Женские заболевания</p>
        </li>
        <li>
          <div></div>
          <p>Варикоз</p>
        </li>
        <li>
          <div></div>
          <p>Восстановление нервной системы</p>
        </li>
        <li>
          <div></div>
          <p>Коррекция фигуры</p>
        </li>
        <li>
          <div></div>
          <p>Выводит токсины</p>
        </li>
        <li>
          <div></div>
          <p>Нормализует кровяное давление</p>
        </li>
        <li>
          <div></div>
          <p>Лимфодренаж лица и шейно-воротниковой зоны</p>
        </li>
      </ul>
      <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
    </ContainerContent>
  );
};
