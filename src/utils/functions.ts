export const CaruselDataAttributeName: string = "carusel-item";
export const ancorsArray: { ancor: string; idString: string }[] = [
  { ancor: "#services", idString: "services" },
  { ancor: "#videoCaps", idString: "videoCaps" },
  { ancor: "#locationCaps", idString: "locationCaps" },
];

//Рандом целого числа из диапазона
export function randomInteger(min: number, max: number): number {
  let rand: number = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

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

//Вернуть строку утро-вечер-ночь из переданной даты
export function whatPartDay(param: number): string {
  const partsDay: string[] = ["утро", "день", "вечер", "ночь"];
  let result: string = "";

  const dt = new Date(param);
  const hours = dt.getUTCHours();

  const nights: number[] = [23, 24, 0, 1, 2, 3, 4];
  const mornings: number[] = [5, 6, 7, 8, 9, 10, 11];
  const days: number[] = [12, 13, 14, 15, 16, 17, 18];
  const evnings: number[] = [19, 20, 21, 22];
  nights.includes(hours)
    ? (result = partsDay[3])
    : mornings.includes(hours)
    ? (result = partsDay[0])
    : days.includes(hours)
    ? (result = partsDay[1])
    : evnings.includes(hours)
    ? (result = partsDay[2])
    : (result = partsDay[0]);
  //console.log(dt.toString(), hours, result);

  return result;
}

//Нужно разобраться
export function throttle(func: any, ms: number) {
  let isThrottled = false,
    savedArgs: any;
  // savedThis: any;

  const wrapper = () => {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      // savedThis = this as any;
      return;
    }

    func.call(arguments); // (1)

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.call(savedArgs);
        savedArgs = null;
      }
    }, ms);
  };

  return wrapper;
}
