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
  isAlt: boolean;
  altText?: string;
}

declare type TScrollDownUp = "down" | "up";
declare type TScrollLeftRight = "left" | "right";

declare type TParamActiveIndex = {
  activeIndex: number;
  selfRef: RefObject<HTMLElement> | null;
};
