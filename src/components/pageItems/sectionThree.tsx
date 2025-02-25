import React, { FC, useEffect, useState } from "react";
import { getMeteo } from "../openmeteo/openmeteo";
import { whatPartDay } from "@/utils/functions";

type TMeteoData = {
  time: Date;
  temperature2m: number;
  apparentTemperature: number;
  isDay: number;
  precipitation: number;
  rain: number;
  showers: number;
  snowfall: number;
  windSpeed10m: number;
};

type TWeatherError = {
  status: boolean;
  message: string;
};

export const SectionThree: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [WeatherData, setWeather] = useState<Partial<TMeteoData>>({});
  const [WeatherError, setWeatherErr] = useState<TWeatherError>({
    status: false,
    message: "",
  });

  useEffect(() => {
    let isSubscribed: boolean = true;
    if (isSubscribed) {
      (async function loadMeteo() {
        setIsLoading(true);
        setWeatherErr({ status: false, message: "" });
        try {
          const currentMeteo: Partial<TMeteoData> | null = await getMeteo();
          if (currentMeteo) {
            setWeather(currentMeteo);
          }

          //          console.log(currentMeteo);
        } catch (err) {
          console.log(
            "Ошибка получения сводки погоды!",
            (err as Error).message
          );
          setWeatherErr({ status: true, message: (err as Error).message });
        } finally {
          setIsLoading(false);
        }
      })();
    }

    return () => {
      isSubscribed = false;
    };
  }, []);

  if (isLoading) {
    return (
      <div className="w-fit mx-auto animate-pulse text-[0.65rem,3vw,0.85rem]/[1rem]">
        Идёт загрузка...
      </div>
    );
  }

  if (WeatherError.status) {
    return null;
  }

  return (
    <section className="p-4 my-10">
      <article className="w-[98%] md:w-fit mx-auto bg-emerald-300 text-[0.8rem]/[1.6rem] dark:bg-slate-800 p-2 font-sans">
        <div className="flex flex-col gap-y-2 items-start sm:flex-row sm:items-center sm:flex-wrap gap-x-2 justify-evenly text-emerald-700 dark:text-slate-400">
          <div className="font-bold font-roboto text-[clamp(0.8rem,2vw,1.2rem)]">
            Сочи
          </div>
          <div className="flex items-start sm:items-center md:justify-between gap-x-2">
            <span className="text-emerald-700 dark:text-slate-500">
              {whatPartDay(new Date(WeatherData.time as Date).valueOf())}
            </span>
            <span className="font-materialSymbolsOulined text-[2rem]">
              {WeatherData.isDay ? "light_mode" : "mode_night"}
            </span>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="text-emerald-700 dark:text-slate-500">
              Осадки:
            </span>
            <span className="font-materialSymbolsOulined text-[2rem]/[2rem]">
              {Math.round(WeatherData.precipitation as number) === 0
                ? "circle"
                : "filter_drama"}
            </span>
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <span className="text-emerald-700 dark:text-slate-500">
              Температура:
            </span>
            <span className="font-roboto font-bold text-[clamp(1rem,2vw,2rem)]/[2.1rem]">
              {Math.round(WeatherData.temperature2m as number)}
              <sup>
                <small>0</small>
              </sup>
            </span>
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <span className="text-emerald-700 dark:text-slate-500 whitespace-nowrap">
              Воспринимается как:
            </span>
            <span className="font-roboto font-bold text-[clamp(1rem,2vw,2rem)]/[2.1rem]">
              {Math.round(WeatherData.apparentTemperature as number)}
              <sup>
                <small>0</small>
              </sup>
            </span>
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <span className="text-[0.8rem]/[1.6rem] text-emerald-700 dark:text-slate-500 whitespace-nowrap">
              Ветер:
            </span>
            <span className="font-roboto font-bold text-[clamp(1rem,2vw,2rem)]/[2.1rem]">
              {Math.round(WeatherData.windSpeed10m as number)}
              <small className="font-normal"> м/сек</small>
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};
