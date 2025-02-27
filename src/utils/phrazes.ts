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
  _indx: 0,
  data: changeYValues(phrazesData),
  get index() {
    return this._indx;
  },
  set index(param: number) {
    let minimum = Math.max(param, 0);
    if (Math.round(minimum) < this.data.length) {
      this._indx = param;
    }
  },
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
