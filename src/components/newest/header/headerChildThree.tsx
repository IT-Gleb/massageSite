import React, { FC } from "react";
import { HeadeCarusel } from "./headeCarusel/headeCarusel";

export const HeaderChildThree: FC = () => {
  return (
    <div className="bg-orange-700 hidden lg:block xl:rounded-es-[60%] min-[2200px]:rounded-es-[48%] bg-[url('/images/svg/back.svg')] bg-repeat overflow-hidden">
      <HeadeCarusel />
    </div>
  );
};
