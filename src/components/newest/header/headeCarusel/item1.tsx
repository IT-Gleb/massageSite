import React, { FC } from "react";

export const Item1: FC = () => {
  return (
    <div
      className="w-full grid grid-cols-[1fr_180px] bg-orange-600 border-l-4 border-orange-200 relative 
 before:absolute before:top-0 before:-left-3 before:border-l-2 before:border-orange-200 before:h-full"
    >
      <div className="row-span-2 overflow-hidden my-10 pl-2">
        <div className="p-4 text-[clamp(0.8rem,4vw,2.6rem)]/[clamp(0.9rem,4vw,2.9rem)] uppercase text-orange-300">
          Я смогу вам помочь, если...
        </div>
        <p className="p-4 text-[clamp(0.8rem,4vw,1.3rem)]/[clamp(0.9rem,4vw,1.5rem)] uppercase text-orange-200 text-right mt-[8%] xl:pr-[25%]">
          ...Если вы захотите помочь себе
        </p>
      </div>
      <div className="mt-auto">
        <div className="object-cover object-center overflow-hidden p-1">
          <img
            src="/images/massage1/massage1.jpg"
            alt="one"
            loading="lazy"
            className="block w-full h-full rounded-2xl"
          />
        </div>
        <div className="object-cover object-center overflow-hidden p-1">
          <img
            src="/images/massage1/massage2.jpg"
            alt="one"
            loading="lazy"
            className="block w-full h-full rounded-2xl"
          />
        </div>
      </div>
      <div className="col-span-2 row-span-1 flex items-center justify-end">
        <div className="w-[174px] object-fill object-center overflow-hidden p-1">
          <img
            src="/images/massage1/massage3.jpg"
            alt="one"
            loading="lazy"
            className="block w-full h-full rounded-2xl"
          />
        </div>
        <div className="w-[170px] object-fill object-center overflow-hidden p-1">
          <img
            src="/images/massage1/massage5.webp"
            alt="one"
            loading="lazy"
            className="block w-full h-full rounded-2xl"
          />
        </div>
        <div className="w-[180px] object-cover object-center overflow-hidden p-1">
          <img
            src="/images/massage1/massage4.jpg"
            alt="one"
            loading="lazy"
            className="block w-full h-full rounded-2xl"
          />
        </div>
        <div className="w-[170px] object-cover object-center overflow-hidden p-1">
          <img
            src="/images/massage1/massage6.jpg"
            alt="one"
            loading="lazy"
            className="block w-full h-full rounded-2xl"
          />
        </div>
        <div className="w-[180px] object-cover object-center overflow-hidden p-1">
          <img
            src="/images/massage1/massage5.jpg"
            alt="one"
            loading="lazy"
            className="block w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};
