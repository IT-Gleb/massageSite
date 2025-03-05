import React, { FC } from "react";

export const ImageRounded: FC<IimageProps> = ({ imageSrc, width, height }) => {
  return (
    <div
      className="object-center rounded-full overflow-hidden border-8 border-green-600"
      style={{ width, height, objectFit: "cover" }}
    >
      <img
        aria-hidden="true"
        src={imageSrc}
        alt="массаж"
        loading="lazy"
        className="block w-full h-full"
      />
    </div>
  );
};
