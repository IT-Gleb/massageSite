"use client";

import { SvgLogo1 } from "@/components/svg_components/svgLogo1";
import { ThemeButton } from "@/components/ui/buttons/themeButton";
import { InfoObj } from "@/utils/info";
import React, { FC } from "react";

export const HeaderTop: FC = () => {
  return (
    <header className="w-full min-h-[100vh] bg-orange-500 text-orange-100 flex flex-col ">
      <section className=" bg-[linear-gradient(to_right,theme(colors.orange.700),theme(colors.orange.600),theme(colors.orange.700))]">
        <nav className="w-full mx-auto h-[5vh] overflow-hidden flex items-center gap-x-2 justify-between text-[clamp(0.7rem,2vw,1.1rem)]/[clamp(1rem,2vw,1.2rem)] font-roboto">
          <div className="flex items-center justify-between gap-x-2 px-2">
            <div className="w-[70px] rotate-45 ml-6 mt-4">
              <SvgLogo1 />
            </div>
            <div className="flex items-center gap-x-2">
              <span className="font-materialSymbolsOulined">phone</span>
              {InfoObj.phone_mask}
            </div>
          </div>

          <div className="flex items-center justify-evenly gap-x-4 px-2 uppercase xl:pr-20">
            <div className="flex items-center gap-x-1">
              <span className="font-materialSymbolsOulined">biotech</span>
              Технология
            </div>
            <div className="flex items-center gap-x-1">
              <span className="font-materialSymbolsOulined">prescriptions</span>
              Показания
            </div>
            <div className="flex items-center gap-x-1">
              <span className="font-materialSymbolsOulined">pin_drop</span> Как
              найти
            </div>
            <div>
              <ThemeButton />
            </div>
          </div>
        </nav>
      </section>
      <section className="grid grid-cols-[120px_550px_1fr] h-[95vh] overflow-hidden">
        <div className="bg-orange-700 vertical-text content-center py-12 uppercase text-[clamp(2rem,8vw,4rem)]/[clamp(2rem,8vw,4rem)] font-roboto">
          <div className="h-fit my-auto text-orange-400">
            <span className="text-[clamp(1.2rem,8vw,2.8rem)]/[clamp(1.2rem,8vw,2.8rem)]">
              биоэнергомассаж
            </span>{" "}
            <span className="text-orange-300">fohow</span>
          </div>
        </div>
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
              <span className="font-materialSymbolsOulined">check</span> от
              массажа Гуаша
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
        <div className="bg-orange-700 overflow-hidden rounded-es-[58%]">
          <div className="max-w-[80%] mx-auto pl-5">
            <div className="w-full grid grid-cols-[1fr_1fr_180px]">
              <div className="col-span-2 row-span-2 overflow-hidden">
                <div className="p-4 text-[clamp(0.8rem,4vw,1.3rem)]/[clamp(0.9rem,4vw,1.5rem)]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae vitae magni possimus atque corrupti quod ipsa,
                  officia sapiente deserunt sed animi exercitationem a nam,
                  omnis, odit tempora. Magnam amet pariatur, voluptates eveniet
                  aut possimus sequi corporis eligendi sint voluptate sed illum
                  dolore provident quibusdam voluptatum nesciunt animi nobis
                  repudiandae ea aspernatur. Deleniti eveniet sunt facilis
                  mollitia! Porro vitae itaque, sit veniam dolorum distinctio
                  deleniti labore, corrupti nostrum quis deserunt fugit natus ex
                  error fugiat neque odio eligendi numquam ad at harum
                  voluptatibus! Facere, fugit? Enim delectus praesentium neque
                  sunt voluptatum ullam ipsa eligendi non aut labore
                  perspiciatis cumque, corporis minima consequatur eos provident
                  illum, eius quisquam? Nesciunt vitae veritatis asperiores
                  magni corporis repudiandae vero necessitatibus, adipisci
                  accusamus ea optio eius.
                </div>
                <p className="p-4 text-[clamp(0.8rem,4vw,1.3rem)]/[clamp(0.9rem,4vw,1.5rem)]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi fugit praesentium vel veniam minus, assumenda
                  provident numquam perferendis blanditiis necessitatibus.
                  Quibusdam, non facere possimus distinctio, molestias aut quo
                  magnam ab maiores, pariatur sint. Voluptatibus error beatae
                  suscipit, fugiat odit architecto quasi deleniti dolorem iure
                  similique totam est distinctio corporis dicta ullam iste
                  consectetur sunt veniam! Delectus adipisci laudantium nisi
                </p>
                <p className="p-4 text-[clamp(0.8rem,4vw,1.3rem)]/[clamp(0.9rem,4vw,1.5rem)]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi fugit praesentium vel veniam minus, assumenda
                  provident numquam perferendis blanditiis necessitatibus.
                  Quibusdam, non facere possimus distinctio, molestias aut quo
                  magnam ab maiores, pariatur sint. Voluptatibus error beatae
                  suscipit, fugiat odit architecto quasi deleniti dolorem iure
                  suscipit, fugiat odit architecto quasi deleniti dolorem iure
                </p>
              </div>
              <div className="row-span-2 mt-auto">
                <div className="object-cover object-center">
                  <img
                    src="/images/massage1/massage1.jpg"
                    alt="one"
                    loading="lazy"
                    className="block w-full h-full"
                  />
                </div>
                <div className="object-cover object-center">
                  <img
                    src="/images/massage1/massage2.jpg"
                    alt="one"
                    loading="lazy"
                    className="block w-full h-full"
                  />
                </div>
              </div>
              <div className="col-span-3 row-span-1 flex items-center justify-end">
                <div className="w-[180px] object-fill object-center">
                  <img
                    src="/images/massage1/massage3.jpg"
                    alt="one"
                    loading="lazy"
                    className="block w-full h-full"
                  />
                </div>
                <div className="w-[180px] object-cover object-center">
                  <img
                    src="/images/massage1/massage4.jpg"
                    alt="one"
                    loading="lazy"
                    className="block w-full h-full"
                  />
                </div>
                <div className="w-[180px] object-cover object-center">
                  <img
                    src="/images/massage1/massage5.jpg"
                    alt="one"
                    loading="lazy"
                    className="block w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
