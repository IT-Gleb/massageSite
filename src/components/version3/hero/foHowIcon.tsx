import React, { FC } from "react";

export const FoHowIcon: FC = () => {
  return (
    <div className="relative w-fit mx-auto select-none flex flex-col items-start justify-start">
      <div className="uppercase font-oswald font-bold text-[30vw]/[32.5vw] lg:text-[clamp(5vw,10vw,10vw)]/[clamp(5vw,10vw,10vw)] text-indigo-900">
        fohow
      </div>
      <div
        className="font-oswald font-light text-[4vw]/[6vw] lg:text-[clamp(0.8vw,2vw,1.2vw)]/[clamp(0.8vw,2vw,1.4vw)] text-indigo-800 text-start pr-[30%] lg:pr-[40%] 2xl:pr-[25%]
      border-b-4 border-b-indigo-900 place-self-center"
      >
        биоэнергомассаж
      </div>
      <div className="absolute right-[8%] min-[1400px]:right-[10%] min-[2200px]:right-[15%] top-[70%] lg:top-[60%] -translate-y-[10%] z-[2]">
        <div className="relative w-[100px] h-[100px] sm:w-[135px] sm:h-[135px] 2xl:w-[150px] 2xl:h-[150px] bg-white rounded-full border-4 lg:border-[6px] border-indigo-900 object-fit object-cover overflow-hidden">
          <img
            aria-hidden="true"
            src={"/images/massage1/chemodan.webp"}
            alt="Биоэнергомассажёр-современный прибор для массажа fohow"
            loading="lazy"
            decoding="async"
            fetchPriority="high"
            className="block w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
