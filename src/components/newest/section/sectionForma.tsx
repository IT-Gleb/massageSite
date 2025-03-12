import React, { FC, PropsWithChildren } from "react";

type TFormaParams = PropsWithChildren<{
  title: string;
  Icon1: Readonly<React.JSX.Element> | null;
  Icon2: Readonly<React.JSX.Element> | null;
  isRotateIcon?: boolean;
  children?: Readonly<React.ReactNode>;
}>;

export const SectionForma: FC<TFormaParams> = ({
  title,
  Icon1,
  Icon2,
  isRotateIcon = false,
  children,
}) => {
  return (
    <div className="relative">
      <div
        className="absolute w-[50px] h-[50px] md:w-[80px] md:h-[80px] z-10 rounded-full overflow-hidden bg-emerald-500 dark:bg-slate-500 border-4 border-emerald-200 dark:border-slate-900 
            left-0 -top-2 md:-top-8"
      >
        <div className="w-[95%] h-[95%] text-emerald-100 dark:text-slate-100">
          {Icon1}
        </div>
      </div>

      <div className="bg-emerald-50 dark:bg-slate-600 rounded-3xl overflow-hidden ">
        <header className="bg-emerald-400 dark:bg-slate-800">
          <div className="flex gap-x-2 items-center w-fit mx-auto py-2">
            <div
              className={`hidden sm:block sm:w-[90px] ${
                isRotateIcon ? "rotate-45" : ""
              } `}
            >
              {Icon2}
            </div>
            <h2>{title}</h2>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
};
