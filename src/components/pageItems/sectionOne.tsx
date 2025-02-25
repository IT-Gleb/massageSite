import React, { FC } from "react";
import { CardItem } from "../cards/cardItem";
import { CardIcon } from "../cards/cardIcon";
import infoData from "../../../public/json/data.json";

export const SectionOne: FC = () => {
  //console.log(infoData);

  return (
    <section className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-6 mt-10">
        {infoData.items.map((item, index) => {
          return (
            <CardItem
              key={index}
              title={item.title}
              icon={<CardIcon title={item.title} src={item.image} />}
              paragraphs={item.paragraphs}
            />
          );
        })}
      </div>
    </section>
  );
};
