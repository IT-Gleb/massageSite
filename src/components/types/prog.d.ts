declare type TTextPosition = {
  text: string;
};

declare type TPhrase = TTextPosition[];

declare type TTextItems = {
  name: string;
  date: string;
  text: string;
  index: number;
};

declare type TSizes = {
  width: number;
  height: number;
};

declare interface IimageProps {
  imageSrc: string;
  width: number;
  height: number;
}

declare type TScrollDownUp = "down" | "up";
