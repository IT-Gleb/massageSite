"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { useState, useEffect } from "react";

export const useNextThemeStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

//---------------------------------------------
type TThemeState = {
  dark: boolean;
};

type TThemeActions = {
  setTheme: (param: boolean) => void;
};

export const useThemeStore = create<TThemeState & TThemeActions>()(
  persist(
    (set, get) => ({
      dark: false,
      setTheme: (param: boolean) => set({ dark: param }),
    }),
    {
      name: "themeStorage",
      //   storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ dark: state.dark }),
    }
  )
);
