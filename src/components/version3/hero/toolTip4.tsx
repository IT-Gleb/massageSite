import React, { FC } from "react";

interface TTooltipProps {
  text: string;
}

export const ToolTip4: FC<TTooltipProps> = ({ text }) => {
  return (
    <div
      className="w-[200px] h-[200px] content-top overflow-hidden p-2 
  [mask-image:url('/images/svg/tooltip4.svg')] [mask-repeat:no-repeat] [mask-size:100%_100%] [mask-position:left_top]
  bg-[url('/images/svg/tooltip4.svg')] bg-cover bg-left-top bg-no-repeat"
    >
      <div className="font-oswald text-[0.5em] text-center p-2">{text}</div>
    </div>
  );
};
