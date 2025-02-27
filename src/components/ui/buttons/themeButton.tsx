import React, { FC, useEffect } from "react";
import { motion, useAnimate } from "motion/react";
import { useThemeStore } from "@/store/themeStore";
import { useShallow } from "zustand/shallow";

export const ThemeButton: FC = () => {
  const [scope, animate] = useAnimate();
  const { dark: isDark, setTheme } = useThemeStore(
    useShallow((state) => state)
  );

  const handleClick = () => {
    if (setTheme) {
      setTheme(!isDark);
      document.documentElement.classList.toggle("dark");
    }
  };

  useEffect(() => {
    animate(
      scope.current,
      { x: isDark ? 30 : 0 },
      { duration: 0.35, ease: "circOut" }
    );
  });

  return (
    <div
      className="w-[60px] h-[30px] bg-orange-800 dark:bg-slate-700 p-1 content-center overflow-hidden rounded-2xl"
      title="Переключить тему"
    >
      <motion.div
        ref={scope}
        className="w-[22px] h-[22px] bg-orange-500 dark:bg-slate-500 rounded-full cursor-pointer select-none text-center relative"
        role="button"
        onClick={handleClick}
      >
        {!isDark && (
          <div className="font-materialSymbolsOulined text-[0.8rem] text-orange-100 absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
            sunny
          </div>
        )}
        {isDark && (
          <div className="font-materialSymbolsOulined text-[0.8rem] text-orange-100 dark:text-slate-200 absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
            brightness_3
          </div>
        )}
      </motion.div>
    </div>
  );
};
