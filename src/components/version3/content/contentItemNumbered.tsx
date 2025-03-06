import React, { FC, PropsWithChildren } from "react";

interface INumbered {
  numered: number;
  clasString?: string;
  cildren?: React.ReactNode;
}

export const ContentItemNumbered: FC<PropsWithChildren<INumbered>> = ({
  numered,
  clasString,
  children,
}) => {
  return (
    <div className={`${clasString ? clasString : ""}`}>
      <span className="float-left text-slate-400 text-[5vw]/[5.5vw] lg:text-[2.5vw]/[3vw] mt-2 mx-4 font-verdana ">
        {numered}
      </span>
      {children}
    </div>
  );
};
