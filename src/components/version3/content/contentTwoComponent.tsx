import React, { FC } from "react";
import { ContentItemNumbered } from "./contentItemNumbered";

const protivStrings: { num: number; text: string }[] = [
  { num: 1, text: "неверие пациента в действие методики" },

  {
    num: 2,
    text: "наличие опухолей, заболеваний крови, вирусных заболеваний, психических заболеваний, тяжелых заболеваний сердца, головного мозга, легких",
  },
  {
    num: 3,
    text: "переломы, кровотечения, склонность к кровотечениям, разрывы мышц, сухожилий, связок",
  },
  { num: 2, text: "Внимательно ознакомьтесь" },
  { num: 2, text: "Уточните противопоказания у специалиста" },
  {
    num: 4,
    text: "гнойные артриты, повреждения кожного покрова, язвы, нарывы, фурункулы",
  },
  {
    num: 5,
    text: "дефекты развития или дегенеративные сужения позвоночного канала, отчетливые сужения межпозвоночных отверстий",
  },
  { num: 6, text: "беременность, менструации, послеродовые кровотечения" },
  {
    num: 7,
    text: "старческая немощь, переутомление, ощущение сильного голода, а также не ранее чем через 30 минут после обильного приема пищи или употребления алкогольных напитков",
  },
  {
    num: 8,
    text: "сильная гипертония(давление 160/120), после перенесенных операций на сердце, наличие кардиостимулятора и других инородных предметов в теле",
  },
  { num: 9, text: "дети младше 7-ми лет" },
  { num: 2, text: "Проконсультируйтесь с лечащим врачем" },
];

export const ContentTwoComponent: FC = () => {
  return (
    <section className="w-[96%] lg:w-[75%] xl:w-[65%] mx-auto min-h-screen bg-green-50 relative overflow-hidden text-[2vw]/[2.2vw] lg:text-[1vw]/[1.2vw] pt-20">
      <h2 className="underline underline-offset-4 w-fit ml-5">
        противопоказания
      </h2>
      <ul
        className="grid grid-cols-5 gap-2 text-[0.9vw]/[1.2vw] mt-10 mx-5 
        [&>li>div>p]:shadow-md
       [&>li>div]:h-fit [&>li>div]:py-3 [&>li>div]:bg-green-50 [&>li>div]:rounded-lg [&>li>div>p]:border [&>li>div>p]:border-red-700
       [&>li>div>p]:p-2 [&>li>div>p]:text-yellow-800 [&>li>div>p]:first-letter:uppercase [&>li>div>p]:pb-5
       "
      >
        {protivStrings.map((item, index) => {
          if ([3, 4, 11].includes(index)) {
            return (
              <li
                key={index}
                className="col-span-2 place-content-center font-mono text-[1.6vw]/[1.8vw] text-center uppercase"
              >
                {item.text}
              </li>
            );
          }
          return (
            <li key={index} className="place-content-evenly">
              <ContentItemNumbered numered={item.num}>
                <p>{item.text}.</p>
              </ContentItemNumbered>
            </li>
          );
        })}
      </ul>
      <div className="w-full h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
    </section>
  );
};
