import phrazesData from "../../public/json/prazes.json";
import { shuffleArray } from "./functions";

function changeYValues(param: TPhrase) {
  let yValues: string[] = [];
  let result: TPhrase = [];

  for (let i of param) {
    yValues.push(i.text);
  }
  yValues = shuffleArray<string>(yValues);
  for (let indx of yValues) {
    result.push({ text: indx });
  }
  return result;
}

export const phrazesObj = {
  index: 0,
  data: changeYValues(phrazesData),
  get item() {
    return this.data[this.index].text;
  },
  set item(param: string) {
    this.data[this.index].text = param;
  },
  get count() {
    return this.data.length;
  },
};
