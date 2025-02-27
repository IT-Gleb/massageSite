import { randomInteger } from "./functions";

const words: string =
  "jdhfjdskdckdhfjhsdjkhfjdshfjkhfkjhsdfkkjsdfhkjdhsfeuir347839";
const MaxLength: number = 1000;

function randomWord(): string {
  let result: string = "";
  let start: number = randomInteger(1, words.length - 9);
  result = words.substring(start, start + 8);

  return result;
}

export let wkArray: string[] = [];

function initArray(): string[] {
  let res: string[] = [];

  for (let i: number = 0; i < MaxLength; i++) {
    res.push(randomWord());
  }

  return res;
}

wkArray = initArray().sort();

const wkSet = new Set(wkArray.map((item) => item));
export const wkMap = new Map();
wkArray = Array.from(wkSet).sort();

export const arr1 = [6, 3, 2, [5, 7, 8], 10, 9, 6, 4, 2, [2, 5, 0, [1, 15, 3]]];
export function returnData(param1: any): number[] {
  let res: number[] = [];

  if (!Array.isArray(param1)) {
    return res;
  }

  const uniqData = new Set(Array.from(param1).flat(Infinity));
  res = Array.from(uniqData).sort((a, b) => {
    if (Number(a) > Number(b)) {
      return 1;
    } else {
      return -1;
    }
  }) as number[];

  return res;
}
