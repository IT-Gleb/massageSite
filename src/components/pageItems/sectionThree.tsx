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
  const [partDay, setPartDay] = useState<string>("");

  useEffect(() => {
    let isSubscribed: boolean = true;
    if (isSubscribed) {
      (async function loadMeteo() {
        setIsLoading(true);
        setWeatherErr({ status: false, message: "" });
        try {
          const currentMeteo: Partial<TMeteoData> | null = await getMeteo();
          if (currentMeteo) {
            //console.log(currentMeteo);
            setWeather(currentMeteo);
            setPartDay(
              whatPartDay(new Date(currentMeteo.time as Date).valueOf())
            );
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
      <article className="w-[98%] md:w-fit mx-auto bg-emerald-200 text-[0.8rem]/[1.6rem] dark:bg-slate-800 p-2 font-sans">
        <div className="grid grid-cols-2 md:flex md:flex-row md:items-start gap-x-2 justify-evenly text-emerald-700 dark:text-slate-400">
          <div className="block md:flex md:items-center md:gap-x-3">
            <div className="font-bold font-roboto text-[clamp(0.8rem,2vw,1.2rem)]">
              Сочи
            </div>
            <div className="flex items-start justify-between gap-x-2 py-1">
              <span className="text-emerald-700 dark:text-slate-500">
                {partDay}
              </span>
              <span className="font-materialSymbolsOulined text-[2rem] rotate-45">
                {partDay === "ночь"
                  ? "mode_night"
                  : partDay === "день"
                  ? "flare"
                  : partDay === "вечер"
                  ? "routine"
                  : partDay === "утро"
                  ? "sunny_snowing"
                  : "clear_day"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <span className="text-emerald-700 dark:text-slate-500">
                Осадки:
              </span>
              <span className="font-materialSymbolsOulined text-[2rem]/[2rem]">
                {(WeatherData.precipitation as number) === 0
                  ? "sunny"
                  : (WeatherData.rain as number) !== 0
                  ? "rainy"
                  : (WeatherData.showers as number) !== 0
                  ? "rainy_light"
                  : (WeatherData.snowfall as number) !== 0
                  ? "weather_snowy"
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
          <div className="md:hidden font-materialSymbolsOulined text-[7rem]/[7.5rem] text-right">
            {(WeatherData.precipitation as number) === 0
              ? "sunny"
              : (WeatherData.rain as number) !== 0
              ? "rainy"
              : (WeatherData.showers as number) !== 0
              ? "rainy_light"
              : (WeatherData.snowfall as number) !== 0
              ? "weather_snowy"
              : "filter_drama"}
          </div>
        </div>
      </article>
    </section>
  );
};
