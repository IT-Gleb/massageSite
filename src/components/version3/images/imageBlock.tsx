import React, { FC } from "react";

export const ImageBlock: FC<IimageProps> = ({ imageSrc, width, height }) => {
  return (
    <div
      className={`object-cover object-left-top overflow-hidden`}
      style={{ width, height }}
    >
      <img
        src={imageSrc}
        alt=""
        loading="lazy"
        className="block w-full h-full"
      />
    </div>
  );
};
