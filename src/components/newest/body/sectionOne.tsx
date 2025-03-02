import { SvgLogo1 } from "@/components/svg_components/svgLogo1";
import React, { FC } from "react";

const protivStrings: string[] = [
  "неверие пациента в действие методики",
  "наличие опухолей, заболеваний крови, вирусных заболевний, психических заболеваний, тяжелых заболеваний сердца, головного мозга, легких",
  "переломы, кровотечения, склонность к кровотечениям, разрывы мышц, сухожилий, связок",
  "переломы, кровотечения, склонность к кровотечениям, разрывы мышц, сухожилий, связок",
  "гнойные артриты, повреждения кожного покрова, язвы, нарывы, фурункулы",
  "дефекты развития или дегенеративные сужения позвоночного канала, отчетливые сужения межпозвоночных отвестий",
  "беременность, менструации, послеродовые кровотечения",
  "старческая немощь, переутомление, ощущение сильного голода, а также не ранее чем через 30 минут после обильного приема пищи или употребления алкогольных напитков",
  "сильная гипертония(давление 160/120), после перенесенных операций на сердце, наличие кардиостимулятора и других инородных предметов в теле",
  "дети младше 7-ми лет",
];

export const SectionOne: FC = () => {
  return (
    <section className="bg-emerald-200 dark:bg-slate-600 rounded-3xl overflow-hidden">
      <header className="bg-emerald-400 dark:bg-slate-800">
        <div className="flex gap-x-2 items-center w-fit mx-auto py-2">
          <div className="hidden sm:block sm:w-[90px] rotate-45">
            <SvgLogo1 />
          </div>
          <h2>Биоэнергомассаж</h2>
        </div>
      </header>
      <article
        className="indent-4 text-[clamp(1rem,2vw,1.2rem)]/[1.3rem] px-1 sm:px-4
      [&>div]:border-4 [&>div]:border-emerald-500 [&>div]:dark:border-slate-600
      [&>p]:first-letter::uppercase [&>p]:first-letter:font-bold
      dark:text-slate-300
      "
      >
        <header
          className="flex gap-x-1 sm:w-fit sm:mx-auto items-center my-5 py-1
        bg-[linear-gradient(to_right,theme(colors.emerald.400),theme(colors.transparent))]
        dark:bg-[linear-gradient(to_right,theme(colors.slate.800),theme(colors.transparent))]"
        >
          <span className="font-materialSymbolsOulined text-[1.4rem]/[1.5rem] md:text-[clamp(1.5rem,2vw,1.8rem)]/[1.5rem] text-neutral-700 dark:text-neutral-200 ">
            info
          </span>
          <h3 className="dark:text-neutral-200 text-center">
            Аппаратная восстановительная физеотерапия
          </h3>
        </header>
        <div className="w-[140px] object-cover object-left-top rounded-2xl float-right overflow-hidden">
          <img
            src="/images/massage1/massage2.jpg"
            alt="физеотерапия масаж"
            loading="lazy"
            className="block w-full h-full"
          />
        </div>
        <p>
          Физиотерапия нового покаления с применением импульсного тока низкой
          частоты, проводится специальными перчатками с серебрянной ниттью,
          которые подключены к прибору с токами тойже частоты что и клетки
          нашего организмаю Массаж обеспечивает глубокое проникновение в
          мышцы,суставы, кости, причем при обычной процедуре ручного массажа
          этого достичь невозможно.
        </p>
        <div className="w-[140px] object-cover object-left-top rounded-2xl float-left overflow-hidden mr-2">
          <img
            src="/images/massage1/massage3.jpg"
            alt="физеотерапия масаж"
            loading="lazy"
            className="block w-full h-full"
          />
        </div>
        <p>
          В процессе бионергомассажа улучшается кровообращение,
          восстанавливается микроциркуляция, проходят боли в позвоночнике,
          плечевых, коленных, локтевых суставах и т.п. Снижается гипертонус
          мышц, проходят межпохвоночные грыжи, вплоть до полного исчезновения.
          Выводятся токсины, ускоряется обмен веществ, снижается вес, пассивная
          нагрузка для людей с малоподвижным образом жизни, отличные результаты
          при поблемах в органах малого таза (простатит, бесплодие и др.).
          Массаж проводится по мередианам и биологически активным точкам.
          Очущения приятные, сопровождаются легкой вибрацией.
        </p>
        <div className="w-[140px] object-cover object-left-top rounded-2xl float-right overflow-hidden mr-2 min-[768px]:hidden">
          <img
            src="/images/massage1/massage5.jpg"
            alt="физеотерапия масаж"
            loading="lazy"
            className="block w-full h-full"
          />
        </div>
        <p>
          После массажа наносится лечебный согревающий бальзам и делается
          обертывание пленкой. Вся процедура занимает примерно 1.5-2 часа.
        </p>
      </article>
      <article className="text-[clamp(0.75rem,2vw,1rem)]/[1.1rem] px-1 sm:px-4 mt-10">
        <div className="flex items-start gap-x-2 w-fit mx-auto">
          <span className="font-materialSymbolsOulined text-[clamp(1.4rem,2vw,1.8rem)]/[1.9rem] text-neutral-500 dark:text-neutral-300">
            info
          </span>
          <h3 className="w-fit mx-auto font-roboto font-semibold uppercase text-[clamp(1.1rem,2vw,1.8rem)]/[1.9rem] dark:text-neutral-200">
            Противопоказания:
          </h3>
        </div>
        <ul
          className="my-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 w-[95%] mx-auto
        [&>li>div]:flex [&>li>div]:items-start [&>li>div]:gap-x-2 
        [&>li>div>:nth-child(1)]:font-materialSymbolsOulined
        [&>li>div>:nth-child(2)]:font-inter [&>li>div>:nth-child(2)]:indent-4
        [&>li>div>:nth-child(1)]:text-yellow-300 [&>li>div>:nth-child(1)]:dark:text-yellow-200
        [&>li>div>:nth-child(2)]:first-letter:uppercase [&>li>div>:nth-child(2)]:first-letter:font-semibold
        [&>li>div>:nth-child(2)]:text-neutral-200"
        >
          {protivStrings.map((item, index) => (
            <li key={index}>
              <div
                className="p-2 overflow-hidden rounded-xl bg-emerald-600 dark:bg-slate-800 h-full 
              outline outline-1 outline-offset-4 dark:outline-slate-400"
              >
                <span>thumb_down</span>
                <span className="inline-block">{item}</span>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
