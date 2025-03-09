import React, { FC } from "react";

type TCardItemProps = {
  title: string;
  imageSrc: string;
};

export const CardService: FC<TCardItemProps> = ({ title, imageSrc }) => {
  return (
    <article className="flex items-center gap-x-2 border border-green-700/50 shadow-sm bg-green-300/20">
      <header className="w-[120px] h-[120px] overflow-hidden object-cover object-left-top [mask-image:linear-gradient(to_right,theme(colors.black)_60%,theme(colors.transparent))]">
        <img
          src={imageSrc}
          alt="Изображение массаж Fohow"
          arial-hidden="true"
          className="-scale-x-100"
        />
      </header>
      <main className="flex-auto place-content-center ">
        <p className="p-2 text-[3.6vw]/[3.8vw] lg:text-[1.2vw]/[1.4vw]">
          {title}
        </p>
      </main>
    </article>
  );
};
