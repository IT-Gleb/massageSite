"use client";

import { useThemeStore } from "@/store/themeStore";
import React, { FC, useState } from "react";

type TBtnProps = {
  title: string;
};

export const PrimaryButton: FC<TBtnProps> = (param) => {
  const { dark: isDark, setTheme } = useThemeStore((state) => state);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTheme(!isDark);
    //document.body.classList.toggle("dark");
    document.documentElement.classList.toggle("dark"); //Сменить класс у корневого DOM-элемента на странице
  };
  return (
    <button
      type="button"
      title={param.title}
      className="bg-slate-600 text-white dark:bg-blue-600 dark:text-yellow-300 text-[0.8rem] font-roboto p-1 rounded-md content-center active:scale-90"
      onClick={handleClick}
    >
      {param.title}
    </button>
  );
};
