import React, { FC } from "react";

type TUpParams = {
  title: string;
  description?: string;
};

export const UpButton: FC<TUpParams> = (param) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  };

  return (
    <button
      type="button"
      className="min-w-[60px] h-[28px] rounded-lg p-1 active:scale-90 bg-pink-700 text-pink-100 dark:text-slate-100 dark:bg-slate-700 font-roboto overflow-hidden text-[clamp(0.6rem,3vw,0.85rem)]/[clamp(0.9rem,3vw,01rem)]"
      title={param.description ? param.description : "Какое-то описание"}
      onClick={handleClick}
    >
      {param.title}
    </button>
  );
};
