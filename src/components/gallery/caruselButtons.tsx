import React, { FC, useEffect, useState } from "react";

type TButtonsParam = {
  count: number;
  activeIndex: number;
  clickButton: (param: number) => void;
};

export const CaruselButtons: FC<TButtonsParam> = (param) => {
  const [buttons, setButons] = useState<number[]>([]);

  useEffect(() => {
    let tmp: number[] = [];
    let indx: number = 0;
    for (let i: number = 0; i < param.count; i++) {
      tmp.push(indx);
      indx++;
    }
    setButons(tmp);
  }, [param.count]);

  return (
    <div className="w-fit mx-auto flex items-center gap-x-3 mt-3">
      {buttons.map((item, index) => {
        return (
          <button
            key={index}
            type="button"
            onClick={() => param.clickButton(item)}
            className={`w-[10px] h-[10px] rounded-full border border-pink-500 dark:border-slate-300  ${
              index === param.activeIndex
                ? "bg-pink-500 dark:bg-slate-200"
                : "bg-transparent"
            }`}
          ></button>
        );
      })}
    </div>
  );
};
