import React, { FC } from "react";
import * as motion from "motion/react-client";

export const Item2: FC = () => {
  return (
    <article className="p-2">
      <div className="flex items-start justify-between gap-x-2">
        <div className="w-[320px] h-[200px] object-cover object-center overflow-hidden rounded-2xl">
          <img
            src="/images/massage1/massage1.jpg"
            alt="Прибор"
            className="block w-full h-full"
            loading="lazy"
          />
        </div>
        <ul className="block font-roboto font-bold text-[clamp(1rem,4vw,1.7rem)]/[clamp(1.1rem,4vw,2rem)]">
          <li className="flex items-center gap-x-2">
            <span className="font-materialSymbolsOulined text-green-500">
              check
            </span>
            Новый вид массажа
          </li>
          <li className="flex items-center gap-x-2">
            <span className="font-materialSymbolsOulined text-green-500">
              check
            </span>
            Аналогов в мире нет
          </li>
          <li className="flex items-start gap-x-2">
            <span className="font-materialSymbolsOulined text-green-500">
              check
            </span>
            Инновационный прибор
            <br /> в основе массажа заложена
            <br /> квантовая технология + клеточное <br /> питание
          </li>
          <li className="flex items-center gap-x-2">
            <span className="font-materialSymbolsOulined text-green-500">
              check
            </span>
            Ультразвуковая насадка
          </li>
        </ul>
      </div>
      <h3 className="w-fit mx-auto font-roboto font-bold uppercase text-center text-[clamp(2rem,4vw,3rem)]/[clamp(2rem,4vw,3rem)] text-orange-900 my-5">
        биоэнергетический массаж
      </h3>
      <div className="flex items-start justify-between gap-x-2 relative z-auto">
        <div className="w-[320px] h-[200px] object-cover object-center overflow-hidden rounded-2xl">
          <img
            src="/images/massage1/massage7.jpg"
            alt="Прибор"
            className="block w-full h-full"
            loading="lazy"
          />
        </div>

        <ul className="block text-[clamp(0.6rem,4vw,0.8rem)]/[clamp(0.8rem,4vw,1.1rem)]">
          <li>Сидячая работа в одном положении?</li>
          <li>Мышци забились после тренировок?</li>
          <li>Болит спина и ломит суставы?</li>
        </ul>

        <div className="w-[320px] h-[200px] object-cover object-center overflow-hidden rounded-2xl">
          <img
            src="/images/massage1/massage6.jpg"
            alt="Прибор"
            className="block w-full h-full"
            loading="lazy"
          />
        </div>
        <motion.div
          initial={{ scale: 0.75 }}
          animate={{
            scale: [0.75, 1, 1, 1, 0.75],
          }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          className="w-[180px] h-[122px] absolute left-[55%] bottom-8 z-auto bg-rose-600 p-1 content-center
                [mask-image:url('/images/svg/toolTip.svg')] [mask-repeat:no-repeat] [mask-position:center] [mask-size:75%]
                "
        >
          <p className=" w-[75%] mx-auto text-[clamp(0.6rem,4vw,0.7rem)]/[0.9rem] text-white font-bold text-center">
            Добро пожаловать ко мне... На стол.
          </p>
        </motion.div>
      </div>
    </article>
  );
};
