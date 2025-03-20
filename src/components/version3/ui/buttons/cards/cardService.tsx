import React, { FC } from "react";

type TCardItemProps = {
  title: string;
  imageSrc: string;
  index: number;
  altText?: string;
};

export const CardService: FC<TCardItemProps> = ({
  title,
  imageSrc,
  index,
  altText,
}) => {
  return (
    <article className="flex items-start gap-x-2 border border-green-700/50 shadow-sm bg-green-300/20">
      <header className="w-[120px] h-[120px] overflow-hidden object-cover object-left-top [mask-image:linear-gradient(to_right,theme(colors.black)_60%,theme(colors.transparent))]">
        <img
          src={imageSrc}
          alt={altText !== undefined ? altText : ""}
          loading="lazy"
          decoding="auto"
          className="block w-full h-full -scale-x-100"
        />
      </header>
      <div className="flex-auto flex items-start justify-end">
        <p className="text-[3.6vw]/[3.8vw] lg:text-[1.2vw]/[1.4vw] w-[80%] pt-5">
          {title}
        </p>
        <div className="w-[60px] h-[60px] sm:h-[65px] bg-green-200 flex-grow overflow-hidden rounded-es-full">
          <h6 className="block text-slate-400 w-fit mx-auto pt-4 text-[6vw]/[6.1wv] sm:pt-1 sm:text-[2em]/[2.1em] md:text-[1.6em]/[1.6em] md:pt-0 lg:pt-3 lg:text-[1.5em]/[1.5em] xl:pt-1 font-oswald">
            {index}
          </h6>
        </div>
      </div>
    </article>
  );
};
