import { InfoObj } from "@/utils/info";
import React from "react";
import { motion } from "motion/react";

export const PhoneButton = () => {
  return (
    <motion.div
      initial={{ x: 6500 }}
      animate={{ x: [6500, -50, 0] }}
      transition={{ duration: 2 }}
      className="fixed z-10 bottom-[80px] right-1 w-[80px] h-[50px] bg-slate-700 dark:bg-yellow-600 text-white
     [mask-image:url('/images/svg/caplya.svg')]
    "
    >
      <a href={`tel:${InfoObj.phoneReg}`}>
        <div
          className="font-materialSymbolsOulined text-[1.8rem]/[1.8rem] absolute top-1 left-2 p-1 rounded-full bg-slate-500 dark:bg-amber-700
         border-2 border-slate-300 dark:border-amber-200"
        >
          phone
        </div>
      </a>
    </motion.div>
  );
};
