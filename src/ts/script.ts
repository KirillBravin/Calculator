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
let sumFloating: number = 0;
let ifNumber: number | string;
let pointerParam: boolean = false;

// Numbers

function numbers(sum: number, number: number): number | string {
  if (sum === 0) {
    if (pointerParam === true) {
      sumFloating = number / 10;
      result_1.textContent = sumFloating.toFixed(1).toString();
      sum = sumFloating;
      return sum;
    } else {
      result_1.textContent = number.toString();
      sum = number;
      console.log(sum);
      return sum;
    }
  } else if (sum.toString().length < 6 && result_1.textContent !== null) {
    if (pointerParam === true && Number.isInteger(sum)) {
      sumFloating = number / 10;
      number = +result_1.textContent + sumFloating;
      result_1.textContent = number.toString();
      sum = +result_1.textContent;
      return sum;
    } else {
      result_1.textContent = result_1.textContent.concat(number.toString());
      sum = +result_1.textContent;
      console.log(sum);
      return sum;
    }
  } else if (
    sum.toString().length >= 6 &&
    sum.toString().length < 7 &&
    result_1.textContent !== null
  ) {
    result_1.style.fontSize = "70px";
    if (pointerParam === true && Number.isInteger(sum)) {
      sumFloating = number / 10;
      number = +result_1.textContent + sumFloating;
      result_1.textContent = number.toString();
      sum = +result_1.textContent;
      return sum;
    } else {
      result_1.textContent = result_1.textContent.concat(number.toString());
      sum = +result_1.textContent;
      console.log(sum);
      return sum;
    }
  } else if (
    sum.toString().length >= 7 &&
    sum.toString().length < 8 &&
    result_1.textContent !== null
  ) {
    result_1.style.fontSize = "60px";
    if (pointerParam === true && Number.isInteger(sum)) {
      sumFloating = number / 10;
      number = +result_1.textContent + sumFloating;
      result_1.textContent = number.toString();
      sum = +result_1.textContent;
      return sum;
    } else {
      result_1.textContent = result_1.textContent.concat(number.toString());
      sum = +result_1.textContent;
      console.log(sum);
      return sum;
    }
  } else if (
    sum.toString().length >= 8 &&
    sum.toString().length < 9 &&
    result_1.textContent !== null
  ) {
    result_1.style.fontSize = "55px";
    if (pointerParam === true && Number.isInteger(sum)) {
      sumFloating = number / 10;
      number = +result_1.textContent + sumFloating;
      result_1.textContent = number.toString();
      sum = +result_1.textContent;
      return sum;
    } else {
      result_1.textContent = result_1.textContent.concat(number.toString());
      sum = +result_1.textContent;
      console.log(sum);
      return sum;
    }
  } else if (sum.toString().length >= 9) {
    result_2.classList.remove("display-hidden");
    result_2.style.fontSize = "30px";
    return (result_2.textContent = "Error: The number is too big");
  } else {
    return "Error";
  }
}

function textLengthCheck(textLength: string) {
  if (textLength.length >= 10 && textLength.length < 11) {
    return (result_2.style.fontSize = "78px");
  } else if (textLength.length >= 11 && textLength.length < 12) {
    return (result_2.style.fontSize = "68px");
  } else if (textLength.length >= 12 && textLength.length < 13) {
    return (result_2.style.fontSize = "60px");
  } else if (textLength.length >= 13 && textLength.length < 14) {
    return (result_2.style.fontSize = "54px");
  } else if (textLength.length >= 14 && textLength.length < 15) {
    return (result_2.style.fontSize = "50px");
  } else if (textLength.length >= 15 && textLength.length < 16) {
    return (result_2.style.fontSize = "47px");
  } else if (textLength.length >= 16 && textLength.length < 17) {
    return (result_2.style.fontSize = "43px");
  } else if (textLength.length >= 17 && textLength.length < 18) {
    return (result_2.style.fontSize = "40px");
  } else if (textLength.length >= 18 && textLength.length < 19) {
    return (result_2.style.fontSize = "37px");
  } else if (textLength.length >= 19 && textLength.length < 20) {
    return (result_2.style.fontSize = "34px");
  } else if (textLength.length >= 23) {
    return (result_2.style.fontSize = "57px");
  }
}

function textLengthCheckerDivide(textLength: string) {
  if (textLength.length >= 8 && textLength.length < 10) {
    result_1.style.fontSize = "67px";
  } else if (textLength.length >= 10 && textLength.length < 12) {
    result_1.style.fontSize = "58px";
  } else if (textLength.length >= 12 && textLength.length < 14) {
    result_1.style.fontSize = "54px";
  } else if (textLength.length >= 14) {
    result_1.style.fontSize = "35px";
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

// Operators

let newAddition: number = 0;
let newSubtraction: number = 0;
let newMultiplication: number = 0;
let newDivide: number = 0;
let newPower: number = 0;
let newRoot: number = 0;

reset.addEventListener("click", (e) => {
  e.preventDefault();
  result_1.style.fontSize = "80px";
  result_2.style.fontSize = "80px";
  sum = 0;
  newAddition = 0;
  newSubtraction = 0;
  newMultiplication = 0;
  newDivide = 0;
  newPower = 0;
  newRoot = 0;
  pointerParam = false;
  result_1.textContent = sum.toString();
  result_2.classList.add("display-hidden");
  console.log(sum);
});

result_button.addEventListener("click", (e) => {
  e.preventDefault();
  if (newAddition !== 0) {
    result_2.textContent = `${newAddition.toString()} + ${sum.toString()} =`;
    textLengthCheck(result_2.textContent);
    sum = sum + newAddition;
    newAddition = 0;
    result_1.textContent = sum.toString();
  }
  if (newSubtraction !== 0) {
    result_2.textContent = `${newSubtraction.toString()} - ${sum.toString()} =`;
    textLengthCheck(result_2.textContent);
    sum = newSubtraction - sum;
    newSubtraction = 0;
    result_1.textContent = sum.toString();
  }
  if (newMultiplication !== 0) {
    // result_2.style.fontSize = "28px";
    let textLengthChecker = `${newMultiplication.toString()} * ${sum.toString()} =`;
    if (textLengthChecker.length >= 9 && textLengthChecker.length < 12) {
      result_2.style.fontSize = "69px";
    } else if (
      textLengthChecker.length >= 12 &&
      textLengthChecker.length < 17
    ) {
      result_2.style.fontSize = "40px";
    } else if (textLengthChecker.length >= 17) {
      result_2.style.fontSize = "28px";
    } else {
      result_2.style.fontSize = "80px";
    }
    result_2.textContent = `${newMultiplication.toString()} * ${sum.toString()} =`;
    sum = newMultiplication * sum;
    newMultiplication = 0;
    if (sum.toString().length >= 8 && sum.toString().length < 9) {
      result_1.style.fontSize = "58px";
    } else if (sum.toString().length >= 9 && sum.toString().length < 13) {
      result_1.style.fontSize = "51px";
    } else if (sum.toString().length >= 9 && sum.toString().length < 14) {
      result_1.style.fontSize = "46px";
    } else if (sum.toString().length >= 9 && sum.toString().length < 15) {
      result_1.style.fontSize = "41px";
    } else {
      result_1.style.fontSize = "32px";
    }
    result_1.textContent = sum.toString();
  }
  if (newDivide !== 0) {
    result_2.textContent = `${newDivide.toString()} ÷ ${sum.toString()} =`;
    textLengthCheck(result_2.textContent);
    sum = newDivide / sum;
    if (Math.floor(sum) !== sum) {
      result_1.textContent = sum.toFixed(8).toString();
      textLengthCheckerDivide(result_1.textContent);
    } else {
      result_1.textContent = sum.toString();
      textLengthCheckerDivide(result_1.textContent);
    }
    newDivide = 0;
  }
});

addition.addEventListener("click", (e) => {
  e.preventDefault();
  if (newSubtraction != 0) {
    newAddition = newSubtraction;
  } else if (newMultiplication != 0) {
    newAddition = newMultiplication;
  } else {
    newAddition = sum;
  }
  sum = 0;
  result_1.textContent = sum.toString();
  result_1.style.fontSize = "80px";
  result_2.classList.remove("display-hidden");
  if (newAddition.toString().length > 6) {
    result_2.style.fontSize = "59px";
    result_2.textContent = `${newAddition.toString()}  +`;
  } else {
    result_2.textContent = `${newAddition.toString()}  +`;
  }
});

subtraction.addEventListener("click", (e) => {
  e.preventDefault();
  newSubtraction = sum;
  sum = 0;
  result_1.textContent = sum.toString();
  result_1.style.fontSize = "80px";
  result_2.classList.remove("display-hidden");
  if (newSubtraction.toString().length > 6) {
    result_2.style.fontSize = "59px";
    result_2.textContent = `${newSubtraction.toString()}  -`;
  } else {
    result_2.textContent = `${newSubtraction.toString()}  -`;
  }
});

multiplication.addEventListener("click", (e) => {
  e.preventDefault();
  newMultiplication = sum;
  sum = 0;
  result_1.textContent = sum.toString();
  result_1.style.fontSize = "80px";
  result_2.classList.remove("display-hidden");
  if (newMultiplication.toString().length > 6) {
    result_2.style.fontSize = "59px";
    result_2.textContent = `${newMultiplication.toString()}  *`;
  } else {
    result_2.textContent = `${newMultiplication.toString()}  *`;
  }
});

divide.addEventListener("click", (e) => {
  e.preventDefault();
  newDivide = sum;
  sum = 0;
  result_1.textContent = sum.toString();
  result_1.style.fontSize = "80px";
  result_2.classList.remove("display-hidden");
  if (newDivide.toString().length > 6) {
    result_2.style.fontSize = "58px";
    result_2.textContent = `${newDivide.toString()}  ÷`;
  } else {
    result_2.textContent = `${newDivide.toString()}  ÷`;
  }
});

power.addEventListener("click", (e) => {
  e.preventDefault();
  if (newPower !== 0) {
    newPower = Math.pow(newPower, 2);
    sum = 0;
    result_2.classList.remove("display-hidden");
    if (newPower.toString().length > 9) {
      result_2.style.fontSize = "28px";
      result_2.textContent = `${newPower.toString()}`;
    } else {
      result_2.textContent = `${newPower.toString()}`;
    }
  } else {
    newPower = Math.pow(sum, 2);
    sum = 0;
    result_1.textContent = sum.toString();
    result_2.classList.remove("display-hidden");
    if (newPower.toString().length > 9) {
      result_2.style.fontSize = "28px";
      result_2.textContent = `${newPower.toString()}`;
    } else {
      result_2.textContent = `${newPower.toString()}`;
    }
  }
});

root.addEventListener("click", (e) => {
  e.preventDefault();
  if (newRoot !== 0) {
    newRoot = Math.sqrt(newRoot);
    sum = 0;
    result_2.classList.remove("display-hidden");
    if (Math.floor(newRoot) !== newRoot) {
      if (newRoot.toString().length > 7) {
        result_2.style.fontSize = "57px";
        result_2.textContent = `${newRoot.toFixed(6).toString()}`;
      } else {
        result_2.textContent = `${newRoot.toFixed(6).toString()}`;
      }
    } else {
      if (newRoot.toString().length > 7) {
        result_2.style.fontSize = "57px";
        result_2.textContent = `${newRoot.toString()}`;
      } else {
        result_2.textContent = `${newRoot.toString()}`;
      }
    }
  } else {
    newRoot = Math.sqrt(sum);
    sum = 0;
    result_1.textContent = sum.toString();
    result_2.classList.remove("display-hidden");
    if (Math.floor(newRoot) !== newRoot) {
      if (newRoot.toString().length > 7) {
        result_2.style.fontSize = "57px";
        result_2.textContent = `${newRoot.toFixed(6).toString()}`;
      } else {
        result_2.textContent = `${newRoot.toFixed(6).toString()}`;
      }
    } else {
      if (newRoot.toString().length > 7) {
        result_2.style.fontSize = "57px";
        result_2.textContent = `${newRoot.toString()}`;
      } else {
        result_2.textContent = `${newRoot.toString()}`;
      }
    }
  }
});

switch_button.addEventListener("click", (e) => {
  e.preventDefault();
  sum = -sum;
  result_1.textContent = sum.toString();
});

pointer.addEventListener("click", (e) => {
  e.preventDefault();
  pointerParam = !pointerParam;
});
