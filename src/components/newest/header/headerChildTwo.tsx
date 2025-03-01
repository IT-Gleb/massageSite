import React, { FC } from "react";

export const HeaderChildTwo: FC = () => {
  return (
    <div>
      <ul className="uppercase p-2 text-orange-200 text-[clamp(1rem,4vw,1.8rem)]/[clamp(1rem,4vw,2.2rem)]">
        <li className="p-1 text-orange-950">
          Оздоровительный сеанс бионергомассажа эффективный способ достичь
          такого же результата как:
        </li>
        <li className="p-1 flex items-center gap-x-1">
          <span className="font-materialSymbolsOulined">check</span> от
          Иглоукалывания
        </li>
        <li className="p-1 flex items-center gap-x-1">
          {" "}
          <span className="font-materialSymbolsOulined">check</span>от
          вакуумного массажа
        </li>
        <li className="p-1 flex items-center gap-x-1">
          <span className="font-materialSymbolsOulined">check</span> от массажа
          Гуаша
        </li>
        <li className="p-1 flex items-center gap-x-1">
          <span className="font-materialSymbolsOulined">check</span> от
          моксотерапии
        </li>
      </ul>
      <div className="p-2 mt-10">
        <h4 className="text-orange-950 text-[clamp(0.8rem,4vw,1.2rem)]/[clamp(clamp(0.8rem,4vw,1.2rem))] font-bold font-roboto uppercase">
          Один сеанс применения биоэнергомассажа равнозначен:
        </h4>
        <ul className="py-2 text-[clamp(0.8rem,4vw,1.2rem)]/[clamp(1.5rem,4vw,1.8rem)] text-orange-200">
          <li className="flex items-center gap-x-1">
            <span className="font-materialSymbolsOulined">check</span>
            <span className="first-letter:uppercase">
              10 сеансам обычного массажа всего тела
            </span>
          </li>
          <li className="flex items-center gap-x-1">
            <span className="font-materialSymbolsOulined">check</span>
            45 минутам детоксикации лимфы
          </li>
          <li className="flex items-center gap-x-1">
            <span className="font-materialSymbolsOulined">check</span>1 часу
            очищения энергетических каналов тела
          </li>

          <li className="flex items-center gap-x-1">
            <span className="font-materialSymbolsOulined">check</span>
            <span className="first-letter:uppercase">
              по потерям жировой ткани - бегу на 6км
            </span>
          </li>
          <li className="flex items-center gap-x-1">
            <span className="font-materialSymbolsOulined">check</span>
            <span className="first-letter:uppercase">
              поглощению анионов на протяжении 3-х часов
            </span>
          </li>
          <li className="flex items-center gap-x-1">
            <span className="font-materialSymbolsOulined">check</span>
            500 повторений жима от груди лежа
          </li>
          <li className="flex items-center gap-x-1">
            <span className="font-materialSymbolsOulined">check</span>
            выведению 4,1 г токсинов из внутренних органов
          </li>
        </ul>
      </div>
    </div>
  );
};
