import React, { FC, PropsWithChildren } from "react";

type TItemProps = PropsWithChildren<{
  title: string;
  imageSrc: string;
  children?: React.ReactNode;
}>;

export const ItemSectionOne: FC<TItemProps> = ({
  title,
  imageSrc,
  children,
}) => {
  return (
    <div
      className="h-full bg-[radial-gradient(circle_at_left_top,theme(colors.green.500),theme(colors.green.300)_40%,theme(colors.green.100))]
   text-neutral-800 font-inter indent-3 [&>p]:text-pretty [&>p]:p-2"
    >
      <div className="h-[6vh] bg-green-600 mb-2 p-1 overflow-hidden content-center">
        <h5 className="text-neutral-200 text-center font-oswald">{title}</h5>
      </div>
      <div className="w-[160px] h-auto object-cover overflow-hidden rounded-3xl float-left mx-2">
        <img
          src={imageSrc}
          alt="massage1"
          loading="lazy"
          className="block w-full h-full"
        />
      </div>
      {children}
    </div>
  );
};
