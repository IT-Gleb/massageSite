import { zeroToNumber } from "@/utils/functions";
import React, { FC } from "react";

type TRoundedProps = {
  title: number;
};

export const RoundedDigits: FC<TRoundedProps> = ({ title }) => {
  return (
    <div className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] lg:w-[28px] lg:h-[28px] 2xl:w-[32px] 2xl:h-[32px] mx-auto content-center rounded-full overflow-hidden bg-green-400 text-green-700 font-oswald border border-green-50 text-center">
      {zeroToNumber(title)}
    </div>
  );
};
