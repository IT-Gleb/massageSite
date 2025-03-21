import React, { FC } from "react";

type TTextTitle = {
  title: string;
};

export const TextTitle: FC<TTextTitle> = ({ title }) => {
  return (
    <div
      className="flex items-center gap-x-2 before:content-[''] before:w-[5%] before:h-[20px] before:bg-[url('/images/svg/back_dark.svg')]
    after:content-[''] after:w-[15%] after:h-[20px] after:bg-[url('/images/svg/back_dark.svg')]"
    >
      <h2 className="whitespace-nowrap text-indigo-900 font-inter font-extrabold">
        {title}
      </h2>
    </div>
  );
};

export default TextTitle;
