import React, { FC } from "react";

export const ImageRounded: FC<IimageProps> = ({
  imageSrc,
  width,
  height,
  isAlt,
  altText,
}) => {
  return (
    <div
      className="object-center rounded-full overflow-hidden border-8 border-green-600"
      style={{ width, height, objectFit: "cover" }}
    >
      {isAlt ? (
        <img
          aria-hidden="true"
          src={imageSrc}
          alt={isAlt ? altText : ""}
          loading="lazy"
          decoding="async"
          className="block w-full h-full"
        />
      ) : (
        <img
          aria-hidden="true"
          src={imageSrc}
          loading="lazy"
          decoding="async"
          className="block w-full h-full"
        />
      )}
    </div>
  );
};
