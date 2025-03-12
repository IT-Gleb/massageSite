import React, { FC } from "react";

export const ImageBlock: FC<IimageProps> = ({
  imageSrc,
  width,
  height,
  isAlt,
}) => {
  return (
    <div
      className={`object-cover object-left-top overflow-hidden`}
      style={{ width, height }}
    >
      {isAlt ? (
        <img
          src={imageSrc}
          alt=""
          loading="lazy"
          className="block w-full h-full"
        />
      ) : (
        <img src={imageSrc} loading="lazy" className="block w-full h-full" />
      )}
    </div>
  );
};
