import Image from "next/image";
import React, { FC } from "react";

export const FoHowIcon: FC = () => {
  return (
    <div className="relative w-fit select-none flex flex-col items-start justify-start">
      <div className="uppercase font-oswald font-bold text-[clamp(5vw,10vw,10vw)]/[clamp(5vw,10vw,10vw)] text-indigo-900 w-fit ">
        fohow
      </div>
      <div
        className="font-oswald font-thin text-[clamp(0.8vw,2vw,1.2vw)]/[clamp(0.8vw,2vw,1.4vw)] text-indigo-800 text-start pr-[40%] 
      border-b-4 border-b-indigo-900 place-self-center"
      >
        бионергомассажёр
      </div>
      <div className="absolute right-1 xl:right-[12%] top-[60%] -translate-y-[10%] z-[2]">
        <div className="relative w-[45px] h-[45px] sm:w-[75px] sm:h-[75px] md:w-[125px] md:h-[125px] rounded-full border-4 border-indigo-900 object-fit object-cover overflow-hidden">
          <Image
            aria-hidden="true"
            src={"/images/massage1/chemodan.jpg"}
            alt="Биоэнергомассажёр"
            fill
            className="block w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
