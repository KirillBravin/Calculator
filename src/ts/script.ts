let result_1: HTMLElement = document.querySelector(".result-1") as HTMLElement;
let result_2: HTMLElement = document.querySelector(".result-2") as HTMLElement;

const reset: HTMLElement = document.querySelector(".reset") as HTMLElement;
const power: HTMLElement = document.querySelector(".power") as HTMLElement;
const root: HTMLElement = document.querySelector(".root") as HTMLElement;
const divide: HTMLElement = document.querySelector(".divide") as HTMLElement;
const seven: HTMLElement = document.querySelector(".seven") as HTMLElement;
const eight: HTMLElement = document.querySelector(".eight") as HTMLElement;
const nine: HTMLElement = document.querySelector(".nine") as HTMLElement;
const multiplication: HTMLElement = document.querySelector(
  ".multiplication"
) as HTMLElement;
const four: HTMLElement = document.querySelector(".four") as HTMLElement;
const five: HTMLElement = document.querySelector(".five") as HTMLElement;
const six: HTMLElement = document.querySelector(".six") as HTMLElement;
const subtraction: HTMLElement = document.querySelector(
  ".subtraction"
) as HTMLElement;
const one: HTMLElement = document.querySelector(".one") as HTMLElement;
const two: HTMLElement = document.querySelector(".two") as HTMLElement;
const three: HTMLElement = document.querySelector(".three") as HTMLElement;
const addition: HTMLElement = document.querySelector(
  ".addition"
) as HTMLElement;
const switch_button: HTMLElement = document.querySelector(
  ".switch"
) as HTMLElement;
const zero: HTMLElement = document.querySelector(".zero") as HTMLElement;
const pointer: HTMLElement = document.querySelector(".pointer") as HTMLElement;
const result_button: HTMLElement = document.querySelector(
  ".result-button"
) as HTMLElement;

let sum: number = 0;
let sum2: number = 0;

one.addEventListener("click", () => {
  const one = 1;
  if (result_1.textContent === "0") {
    result_1.textContent = "1";
    sum += one;
  } else if (result_1.textContent !== null) {
    result_1.textContent = result_1.textContent.concat(one.toString());
    sum += one;
  }
});

two.addEventListener("click", () => {
  const two = 2;
  if (result_1.textContent === "0") {
    result_1.textContent = "2";
    sum += two;
  } else {
    result_1.textContent?.concat("asd");
    sum += two;
  }
});
