import React, { FC, PropsWithChildren } from "react";

type TContainerProps = PropsWithChildren<{
  backgroundClass: string;
  children?: Readonly<React.ReactNode>;
}>;

export const ContainerContent: FC<TContainerProps> = ({
  backgroundClass,
  children,
}) => {
  return (
    <div className={`w-full ${backgroundClass}`}>
      <div
        className={`w-[96%] lg:w-[75%] xl:w-[65%] mx-auto relative overflow-hidden text-[2vw]/[2.2vw] lg:text-[1vw]/[1.2vw] pt-20`}
      >
        {children}
      </div>
    </div>
  );
};
