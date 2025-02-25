export const CaruselDataAttributeName: string = "carusel-item";

//Рандом целого числа из диапазона
export function randomInteger(min: number, max: number): number {
  let rand: number = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

type TArrayItem = {
  item: number | string;
};

//Перемешивает отсортированный массив и не только отсортированный
export function shuffleArray<T>(paramArray: Array<T>): Array<T> {
  let res: Array<T> = [];
  if (Array.isArray(paramArray)) {
    res = Array.from(paramArray);
    for (let i: number = 0; i < res.length; i++) {
      let j: number = Math.floor(Math.random() * (i + 1));
      [res[j], res[i]] = [res[i], res[j]];
    }
  }

  return res;
}

//Вернуть тукущий год
export function getNowYear(): number {
  let result: number = 0;
  const dtNow = new Date();

  result = dtNow.getFullYear();

  return result;
}
