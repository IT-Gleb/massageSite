import React, { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

type TImageProps = {
  imageSrc: string;
};

export const Intro: FC<TImageProps> = ({ imageSrc }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-1vh", "100vh"]);

  return (
    <div ref={container} className="h-[50vh] overflow-hidden">
      <motion.div
        className="relative h-full object-cover object-left-top"
        style={{ y }}
      >
        <Image
          src={imageSrc}
          alt="Picture"
          fill
          //   style={{ objectFit: "cover" }}
          className="block w-full h-full"
        />
      </motion.div>
    </div>
  );
};
