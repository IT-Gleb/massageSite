import React, { FC } from "react";

type TTextTitle = {
  title: string;
};

export const TextTitle: FC<TTextTitle> = ({ title }) => {
  return (
    <div className="relative">
      <h2 className="pl-8 underline underline-offset-8">{title}</h2>
    </div>
  );
};
