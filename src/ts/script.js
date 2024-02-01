"use strict";
let result_1 = document.querySelector(".result-1");
let result_2 = document.querySelector(".result-2");
const reset = document.querySelector(".reset");
const power = document.querySelector(".power");
const root = document.querySelector(".root");
const divide = document.querySelector(".divide");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const multiplication = document.querySelector(".multiplication");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const subtraction = document.querySelector(".subtraction");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const addition = document.querySelector(".addition");
const switch_button = document.querySelector(".switch");
const zero = document.querySelector(".zero");
const pointer = document.querySelector(".pointer");
const result_button = document.querySelector(".result-button");
result_2.classList.add("display-hidden"); // Hides second result when you start the app
let sum = 0;
let sum2 = 0;
let sumFloating = 0;
let ifNumber;
let pointerParam = false;
// Numbers
function numbers(sum, number) {
    if (sum === 0) {
        if (pointerParam === true) {
            sumFloating = number / 10;
            result_1.textContent = sumFloating.toFixed(1).toString();
            sum = sumFloating;
            return sum;
        }
        else {
            result_1.textContent = number.toString();
            sum = number;
            console.log(sum);
            return sum;
        }
    }
    else if (sum.toString().length < 6 && result_1.textContent !== null) {
        if (pointerParam === true && Number.isInteger(sum)) {
            sumFloating = number / 10;
            number = +result_1.textContent + sumFloating;
            result_1.textContent = number.toString();
            sum = +result_1.textContent;
            return sum;
        }
        else {
            result_1.textContent = result_1.textContent.concat(number.toString());
            sum = +result_1.textContent;
            console.log(sum);
            return sum;
        }
    }
    else if (sum.toString().length >= 6 &&
        sum.toString().length < 7 &&
        result_1.textContent !== null) {
        result_1.style.fontSize = "70px";
        if (pointerParam === true && Number.isInteger(sum)) {
            sumFloating = number / 10;
            number = +result_1.textContent + sumFloating;
            result_1.textContent = number.toString();
            sum = +result_1.textContent;
            return sum;
        }
        else {
            result_1.textContent = result_1.textContent.concat(number.toString());
            sum = +result_1.textContent;
            console.log(sum);
            return sum;
        }
    }
    else if (sum.toString().length >= 7 &&
        sum.toString().length < 8 &&
        result_1.textContent !== null) {
        result_1.style.fontSize = "60px";
        if (pointerParam === true && Number.isInteger(sum)) {
            sumFloating = number / 10;
            number = +result_1.textContent + sumFloating;
            result_1.textContent = number.toString();
            sum = +result_1.textContent;
            return sum;
        }
        else {
            result_1.textContent = result_1.textContent.concat(number.toString());
            sum = +result_1.textContent;
            console.log(sum);
            return sum;
        }
    }
    else if (sum.toString().length >= 8 &&
        sum.toString().length < 9 &&
        result_1.textContent !== null) {
        result_1.style.fontSize = "55px";
        if (pointerParam === true && Number.isInteger(sum)) {
            sumFloating = number / 10;
            number = +result_1.textContent + sumFloating;
            result_1.textContent = number.toString();
            sum = +result_1.textContent;
            return sum;
        }
        else {
            result_1.textContent = result_1.textContent.concat(number.toString());
            sum = +result_1.textContent;
            console.log(sum);
            return sum;
        }
    }
    else if (sum.toString().length >= 9) {
        result_2.classList.remove("display-hidden");
        result_2.style.fontSize = "30px";
        return (result_2.textContent = "Error: The number is too big");
    }
    else {
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
// Operators
let newAddition = 0;
let newSubtraction = 0;
let newMultiplication = 0;
let newDivide = 0;
let newPower = 0;
let newRoot = 0;
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
        sum = sum + newAddition;
        newAddition = 0;
        result_1.textContent = sum.toString();
    }
    if (newSubtraction !== 0) {
        result_2.textContent = `${newSubtraction.toString()} - ${sum.toString()} =`;
        sum = newSubtraction - sum;
        newSubtraction = 0;
        result_1.textContent = sum.toString();
    }
    if (newMultiplication !== 0) {
        // result_2.style.fontSize = "28px";
        let textLengthChecker = `${newMultiplication.toString()} * ${sum.toString()} =`;
        if (textLengthChecker.length >= 9 && textLengthChecker.length < 12) {
            result_2.style.fontSize = "69px";
        }
        else if (textLengthChecker.length >= 12 &&
            textLengthChecker.length < 17) {
            result_2.style.fontSize = "40px";
        }
        else if (textLengthChecker.length >= 17) {
            result_2.style.fontSize = "28px";
        }
        else {
            result_2.style.fontSize = "80px";
        }
        result_2.textContent = `${newMultiplication.toString()} * ${sum.toString()} =`;
        sum = newMultiplication * sum;
        newMultiplication = 0;
        if (sum.toString().length >= 8 && sum.toString().length < 9) {
            result_1.style.fontSize = "58px";
        }
        else if (sum.toString().length >= 9 && sum.toString().length < 13) {
            result_1.style.fontSize = "51px";
        }
        else if (sum.toString().length >= 9 && sum.toString().length < 14) {
            result_1.style.fontSize = "46px";
        }
        else if (sum.toString().length >= 9 && sum.toString().length < 15) {
            result_1.style.fontSize = "41px";
        }
        else {
            result_1.style.fontSize = "32px";
        }
        result_1.textContent = sum.toString();
    }
    if (newDivide !== 0) {
        result_2.textContent = `${newDivide.toString()} ÷ ${sum.toString()} =`;
        sum = newDivide / sum;
        if (Math.floor(sum) !== sum) {
            result_1.textContent = sum.toFixed(6).toString();
        }
        else {
            result_1.textContent = sum.toString();
        }
        newDivide = 0;
    }
});
addition.addEventListener("click", (e) => {
    e.preventDefault();
    if (newSubtraction != 0) {
        newAddition = newSubtraction;
    }
    else if (newMultiplication != 0) {
        newAddition = newMultiplication;
    }
    else {
        newAddition = sum;
    }
    sum = 0;
    result_1.textContent = sum.toString();
    result_1.style.fontSize = "80px";
    result_2.classList.remove("display-hidden");
    if (newAddition.toString().length > 6) {
        result_2.style.fontSize = "59px";
        result_2.textContent = `${newAddition.toString()}  +`;
    }
    else {
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
    }
    else {
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
    }
    else {
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
        result_2.style.fontSize = "59px";
        result_2.textContent = `${newDivide.toString()}  ÷`;
    }
    else {
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
        }
        else {
            result_2.textContent = `${newPower.toString()}`;
        }
    }
    else {
        newPower = Math.pow(sum, 2);
        sum = 0;
        result_1.textContent = sum.toString();
        result_2.classList.remove("display-hidden");
        if (newPower.toString().length > 9) {
            result_2.style.fontSize = "28px";
            result_2.textContent = `${newPower.toString()}`;
        }
        else {
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
            }
            else {
                result_2.textContent = `${newRoot.toFixed(6).toString()}`;
            }
        }
        else {
            if (newRoot.toString().length > 7) {
                result_2.style.fontSize = "57px";
                result_2.textContent = `${newRoot.toString()}`;
            }
            else {
                result_2.textContent = `${newRoot.toString()}`;
            }
        }
    }
    else {
        newRoot = Math.sqrt(sum);
        sum = 0;
        result_1.textContent = sum.toString();
        result_2.classList.remove("display-hidden");
        if (Math.floor(newRoot) !== newRoot) {
            if (newRoot.toString().length > 7) {
                result_2.style.fontSize = "57px";
                result_2.textContent = `${newRoot.toFixed(6).toString()}`;
            }
            else {
                result_2.textContent = `${newRoot.toFixed(6).toString()}`;
            }
        }
        else {
            if (newRoot.toString().length > 7) {
                result_2.style.fontSize = "57px";
                result_2.textContent = `${newRoot.toString()}`;
            }
            else {
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
