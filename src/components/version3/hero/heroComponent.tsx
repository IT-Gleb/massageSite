"use client";

import React, { FC } from "react";
import { FoHowIcon } from "./foHowIcon";
import { ItemSectionOne } from "./itemSectionOne";

export const HeroComponent: FC = () => {
  return (
    <section className="flex flex-col bg-green-100">
      <div className="text-[0.8rem] font-oswald px-2 text-neutral-600 bg-white w-fit overflow-hidden">
        Я смогу почь вам, если... Вы захотите помочь себе.
      </div>

      <section className="min-h-[45vh] grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-x-2 xl:gap-x-10">
        <div className="mx-auto sm:ml-auto sm:mx-0 content-center xl:content-start">
          <FoHowIcon />
        </div>
        <div className="mx-auto sm:mx-0 content-center xl:content-end text-indigo-900 font-roboto">
          <h3 className="w-fit pr-5 pb-2 border-b-2 border-b-indigo-900 ">
            Новый вид массажа
          </h3>
          <ul
            className="text-[clamp(0.6vw,2vw,0.85vw)]/[clamp(0.7vw,2vw,1vw)] mt-6 
          [&>li]:flex [&>li]:gap-x-2
          [&>li>:nth-child(1)]:font-materialSymbolsOulined [&>li>:nth-child(1)]:text-indigo-900"
          >
            <li>
              <span>thumb_up</span>
              <span>Инновационный прибор</span>
            </li>
            <li>
              <span>thumb_up</span>
              <span>Ультрозвуковая насадка</span>
            </li>
            <li>
              <span>thumb_up</span>
              <span>Прогресс в сфере массажа и лечения</span>
            </li>
            <li>
              <span>thumb_up</span>
              <span>Эффект 5 массажей</span>
            </li>
          </ul>
          <p className="text-[clamp(0.7vw,2vw,0.85vw)]/[clamp(0.7vw,2vw,0.9vw)] font-oswald my-5 text-green-700">
            Прошел все испытания. 100% безопасен. Имеет все сертификаты мирового
            стандарта.
          </p>
        </div>
      </section>
      <section className="min-h-[55vh] bg-green-300">
        <div className="w-[60%] mx-auto grid grid-cols-3 gap-x-2 text-[clamp(0.8vw,1.5vw,1.1vw)]/[clamp(0.8vw,1.5vw,1.2vw)]">
          <ItemSectionOne
            title="Биоэнергомассаж"
            imageSrc="/images/massage1/massage2.jpg"
          >
            <p>
              В процессе бионергомассажа улучшается кровообращение,
              восстанавливается микроциркуляция, проходят боли в позвоночнике,
              плечевых, коленных, локтевых суставах и т.п.
            </p>
            <p>
              Снижается гипертонус мышц, проходят межпозвоночные грыжи, вплоть
              до полного исчезновения. Выводятся токсины, ускоряется обмен
              веществ, снижается вес, пассивная нагрузка для людей с
              малоподвижным образом жизни, отличные результаты при проблемах в
              органах малого таза (простатит, бесплодие и др.).
            </p>
            <p>
              Массаж проводится по мередианам и биологически активным точкам.
              Очущения приятные, сопровождаются легкой вибрацией.
            </p>
            <p>
              После массажа наносится лечебный согревающий бальзам и делается
              обертывание пленкой. Вся процедура занимает примерно 1.5-2 часа.
            </p>
          </ItemSectionOne>
          <ItemSectionOne
            title={"Аппаратная восстановительная физеотерапия"}
            imageSrc="/images/massage1/massage3.jpg"
          >
            <p>
              Физиотерапия нового покаления с применением импульсного тока
              низкой частоты, проводится специальными перчатками с серебрянной
              ниттью, которые подключены к прибору с токами тойже частоты что и
              клетки нашего организма.
            </p>
            <p>
              Массаж обеспечивает глубокое проникновение в мышцы,суставы, кости,
              причем при обычной процедуре ручного массажа этого достичь
              невозможно.
            </p>
            <p className="font-bold">
              <sup>*</sup>Имеются противопоказания. Консультируйтесь у
              специалиста.
            </p>
          </ItemSectionOne>
        </div>
      </section>
    </section>
  );
};
