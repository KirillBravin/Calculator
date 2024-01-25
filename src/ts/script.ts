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

result_2.classList.add("display-hidden"); // Hides second result when you start the app

let sum: number = 0;
let sum2: number = 0;
let ifNumber: number | string;

function numbers(sum: number, number: number): number | string {
  if (sum === 0) {
    result_1.textContent = number.toString();
    sum = number;
    console.log(sum);
    return sum;
  } else if (sum > -999999 && sum < 999999 && result_1.textContent !== null) {
    result_1.textContent = result_1.textContent.concat(number.toString());
    sum = +result_1.textContent;
    console.log(sum);
    return sum;
  } else if (sum > -9999999 && sum < 9999999 && result_1.textContent !== null) {
    result_1.style.fontSize = "70px";
    result_1.textContent = result_1.textContent.concat(number.toString());
    sum = +result_1.textContent;
    console.log(sum);
    return sum;
  } else if (
    sum > -99999999 &&
    sum < 99999999 &&
    result_1.textContent !== null
  ) {
    result_1.style.fontSize = "60px";
    result_1.textContent = result_1.textContent.concat(number.toString());
    sum = +result_1.textContent;
    console.log(sum);
    return sum;
  } else if (
    sum > -999999999 &&
    sum < 999999999 &&
    result_1.textContent !== null
  ) {
    result_1.style.fontSize = "55px";
    result_1.textContent = result_1.textContent.concat(number.toString());
    sum = +result_1.textContent;
    console.log(sum);
    return sum;
  } else if (sum <= -999999 || sum >= 999999) {
    result_2.classList.remove("display-hidden");
    result_2.style.fontSize = "30px";
    return (result_2.textContent = "Error: The number is too big");
  } else {
    return "Error";
  }
}

one.addEventListener("click", (e) => {
  e.preventDefault();
  ifNumber = numbers(sum, 1);
  if (typeof ifNumber === "number") {
    sum = ifNumber;
  }
});

two.addEventListener("click", (e) => {
  e.preventDefault();
  ifNumber = numbers(sum, 2);
  if (typeof ifNumber === "number") {
    sum = ifNumber;
  }
});

three.addEventListener("click", (e) => {
  e.preventDefault();
  ifNumber = numbers(sum, 3);
  if (typeof ifNumber === "number") {
    sum = ifNumber;
  }
});

four.addEventListener("click", (e) => {
  e.preventDefault();
  ifNumber = numbers(sum, 4);
  if (typeof ifNumber === "number") {
    sum = ifNumber;
  }
});

five.addEventListener("click", (e) => {
  e.preventDefault();
  ifNumber = numbers(sum, 5);
  if (typeof ifNumber === "number") {
    sum = ifNumber;
  }
});

six.addEventListener("click", (e) => {
  e.preventDefault();
  ifNumber = numbers(sum, 6);
  if (typeof ifNumber === "number") {
    sum = ifNumber;
  }
});

seven.addEventListener("click", (e) => {
  e.preventDefault();
  ifNumber = numbers(sum, 7);
  if (typeof ifNumber === "number") {
    sum = ifNumber;
  }
});

eight.addEventListener("click", (e) => {
  e.preventDefault();
  ifNumber = numbers(sum, 8);
  if (typeof ifNumber === "number") {
    sum = ifNumber;
  }
});

nine.addEventListener("click", (e) => {
  e.preventDefault();
  ifNumber = numbers(sum, 9);
  if (typeof ifNumber === "number") {
    sum = ifNumber;
  }
});

zero.addEventListener("click", (e) => {
  e.preventDefault();
  ifNumber = numbers(sum, 0);
  if (typeof ifNumber === "number") {
    sum = ifNumber;
  }
});
