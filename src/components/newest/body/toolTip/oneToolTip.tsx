import { InfoObj } from "@/utils/info";
import React, { FC } from "react";
import { motion } from "motion/react";

type TTextParam = {
  text: string;
};

export const OneToolTip: FC<TTextParam> = ({ text }) => {
  return (
    <motion.div
      initial={{ scale: 0.35 }}
      animate={{ scale: [0.9, 1, 1, 0.9] }}
      transition={{ duration: 1, repeat: Infinity, ease: "circInOut" }}
      className="fixed right-0 bottom-12 w-[150px] h-[150px] md:w-[280px] md:h-[280px] bg-rose-500 dark:bg-red-700 z-20
           [mask-image:url('/images/svg/toolTip2.svg')] dark:[mask-image:url('/images/svg/toolTip3.svg')] 
           [mask-repeat:no-repeat] [mask-position:left_top] [mask-size:100%_100%]
           bg-[url('/images/svg/toolTip2.svg')] dark:bg-[url('/images/svg/toolTip3.svg')] bg-no-repeat bg-cover bg-left-top"
    >
      <div className="absolute left-[50%] top-[30%] translate-x-[-50%] translate-y-[-50%]">
        <a href={`tel:+${InfoObj.phoneReg}`}>
          <p className="text-[0.7rem]/[1rem] md:text-[1rem]/[1rem] text-neutral-100 font-bold w-fit mx-auto mt-6 md:mt-10 text-center">
            {text}
          </p>
          <span className="block font-materialSymbolsOulined text-[0.75rem]/[0.8rem] md:text-[2rem]/[2.1rem] mt-2 md:mt-4 w-[30px] h-[30px] md:w-[50px] md:h-[50px] text-neutral-100 rounded-full p-[6px] md:p-1 mx-auto border-2 md:border-4 border-neutral-100 bg-emerald-600 dark:bg-rose-500">
            phone
          </span>
        </a>
      </div>
    </motion.div>
  );
};
