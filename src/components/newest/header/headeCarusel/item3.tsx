import React, { FC } from "react";

export const Item3: FC = () => {
  return (
    <article className="block w-[400px] 2xl:flex 2xl:items-start 2xl:justify-between 2xl:gap-x-2">
      <div className="hidden 2xl:block 2xl:w-[460px] h-[500px] bg-[url('/images/massage1/massage7.jpg')] bg-no-repeat bg-cover bg-right-top overflow-hidden rounded-e-full border-8 border-orange-200"></div>
      <div className="2xl:content-center w-full h-full p-2 text-orange-200">
        <h3 className="text-[clamp(1.8rem,4vw,2.8rem)]/[3.2rem] font-roboto font-semibold xl:w-fit xl:mx-auto uppercase text-orange-900 mt-5">
          Биоэнергомассажер
        </h3>
        <p className="max-w-[90%] xl:mx-auto my-20">
          Новый технологический прогресс в сфере массажа и лечения
        </p>
        <ul className="max-w-[90%] xl:mx-auto mt-20">
          <li>Прошёл все испытания</li>
          <li>100% безопасен</li>
          <li>Имеет все сертификаты мирового стандарта</li>
        </ul>
      </div>
    </article>
  );
};
