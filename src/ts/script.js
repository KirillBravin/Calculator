"use strict";
var result_1 = document.querySelector(".result-1");
var result_2 = document.querySelector(".result-2");
var reset = document.querySelector(".reset");
var power = document.querySelector(".power");
var root = document.querySelector(".root");
var divide = document.querySelector(".divide");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var multiplication = document.querySelector(".multiplication");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var subtraction = document.querySelector(".subtraction");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var addition = document.querySelector(".addition");
var switch_button = document.querySelector(".switch");
var zero = document.querySelector(".zero");
var pointer = document.querySelector(".pointer");
var result_button = document.querySelector(".result-button");
result_2.classList.add("display-hidden"); // Hides second result when you start the app
var sum = 0;
var sum2 = 0;
var ifNumber;
// Numbers
function numbers(sum, number) {
    if (sum === 0) {
        result_1.textContent = number.toString();
        sum = number;
        console.log(sum);
        return sum;
    }
    else if (sum > -999999 && sum < 999999 && result_1.textContent !== null) {
        result_1.textContent = result_1.textContent.concat(number.toString());
        sum = +result_1.textContent;
        console.log(sum);
        return sum;
    }
    else if (sum > -9999999 && sum < 9999999 && result_1.textContent !== null) {
        result_1.style.fontSize = "70px";
        result_1.textContent = result_1.textContent.concat(number.toString());
        sum = +result_1.textContent;
        console.log(sum);
        return sum;
    }
    else if (sum > -99999999 &&
        sum < 99999999 &&
        result_1.textContent !== null) {
        result_1.style.fontSize = "60px";
        result_1.textContent = result_1.textContent.concat(number.toString());
        sum = +result_1.textContent;
        console.log(sum);
        return sum;
    }
    else if (sum > -999999999 &&
        sum < 999999999 &&
        result_1.textContent !== null) {
        result_1.style.fontSize = "55px";
        result_1.textContent = result_1.textContent.concat(number.toString());
        sum = +result_1.textContent;
        console.log(sum);
        return sum;
    }
    else if (sum <= -999999 || sum >= 999999) {
        result_2.classList.remove("display-hidden");
        result_2.style.fontSize = "30px";
        return (result_2.textContent = "Error: The number is too big");
    }
    else {
        return "Error";
    }
}
one.addEventListener("click", function (e) {
    e.preventDefault();
    ifNumber = numbers(sum, 1);
    if (typeof ifNumber === "number") {
        sum = ifNumber;
    }
});
two.addEventListener("click", function (e) {
    e.preventDefault();
    ifNumber = numbers(sum, 2);
    if (typeof ifNumber === "number") {
        sum = ifNumber;
    }
});
three.addEventListener("click", function (e) {
    e.preventDefault();
    ifNumber = numbers(sum, 3);
    if (typeof ifNumber === "number") {
        sum = ifNumber;
    }
});
four.addEventListener("click", function (e) {
    e.preventDefault();
    ifNumber = numbers(sum, 4);
    if (typeof ifNumber === "number") {
        sum = ifNumber;
    }
});
five.addEventListener("click", function (e) {
    e.preventDefault();
    ifNumber = numbers(sum, 5);
    if (typeof ifNumber === "number") {
        sum = ifNumber;
    }
});
six.addEventListener("click", function (e) {
    e.preventDefault();
    ifNumber = numbers(sum, 6);
    if (typeof ifNumber === "number") {
        sum = ifNumber;
    }
});
seven.addEventListener("click", function (e) {
    e.preventDefault();
    ifNumber = numbers(sum, 7);
    if (typeof ifNumber === "number") {
        sum = ifNumber;
    }
});
eight.addEventListener("click", function (e) {
    e.preventDefault();
    ifNumber = numbers(sum, 8);
    if (typeof ifNumber === "number") {
        sum = ifNumber;
    }
});
nine.addEventListener("click", function (e) {
    e.preventDefault();
    ifNumber = numbers(sum, 9);
    if (typeof ifNumber === "number") {
        sum = ifNumber;
    }
});
zero.addEventListener("click", function (e) {
    e.preventDefault();
    ifNumber = numbers(sum, 0);
    if (typeof ifNumber === "number") {
        sum = ifNumber;
    }
});
// Operators
var newAddition = 0;
var newSubtraction = 0;
var newMultiplication = 0;
var newDivide = 0;
var newPower = 0;
var newRoot = 0;
reset.addEventListener("click", function (e) {
    e.preventDefault();
    sum = 0;
    result_1.textContent = sum.toString();
    result_2.classList.add("display-hidden");
    console.log(sum);
});
result_button.addEventListener("click", function (e) {
    e.preventDefault();
    if (newAddition !== 0) {
        result_2.textContent = "".concat(newAddition.toString(), " + ").concat(sum.toString(), " =");
        sum = sum + newAddition;
        newAddition = 0;
        result_1.textContent = sum.toString();
    }
    if (newSubtraction !== 0) {
        result_2.textContent = "".concat(newSubtraction.toString(), " - ").concat(sum.toString(), " =");
        sum = newSubtraction - sum;
        newSubtraction = 0;
        result_1.textContent = sum.toString();
    }
    if (newMultiplication !== 0) {
        result_2.textContent = "".concat(newMultiplication.toString(), " * ").concat(sum.toString(), " =");
        sum = newMultiplication * sum;
        newMultiplication = 0;
        result_1.textContent = sum.toString();
    }
    if (newDivide !== 0) {
        result_2.textContent = "".concat(newDivide.toString(), " / ").concat(sum.toString(), " =");
        sum = newDivide / sum;
        if (Math.floor(sum) !== sum) {
            result_1.textContent = sum.toFixed(2).toString();
        }
        else {
            result_1.textContent = sum.toString();
        }
        newDivide = 0;
    }
});
addition.addEventListener("click", function (e) {
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
    result_2.classList.remove("display-hidden");
    result_2.textContent = "".concat(newAddition.toString(), "  +");
});
subtraction.addEventListener("click", function (e) {
    e.preventDefault();
    newSubtraction = sum;
    sum = 0;
    result_1.textContent = sum.toString();
    result_2.classList.remove("display-hidden");
    result_2.textContent = "".concat(newSubtraction.toString(), "  -");
});
multiplication.addEventListener("click", function (e) {
    e.preventDefault();
    newMultiplication = sum;
    sum = 0;
    result_1.textContent = sum.toString();
    result_2.classList.remove("display-hidden");
    result_2.textContent = "".concat(newMultiplication.toString(), "  *");
});
divide.addEventListener("click", function (e) {
    e.preventDefault();
    newDivide = sum;
    sum = 0;
    result_1.textContent = sum.toString();
    result_2.classList.remove("display-hidden");
    result_2.textContent = "".concat(newDivide.toString(), "  /");
});
power.addEventListener("click", function (e) {
    e.preventDefault();
    if (newPower !== 0) {
        newPower = Math.pow(newPower, 2);
        sum = 0;
        result_2.classList.remove("display-hidden");
        result_2.textContent = "".concat(newPower.toString());
    }
    else {
        newPower = Math.pow(sum, 2);
        sum = 0;
        result_1.textContent = sum.toString();
        result_2.classList.remove("display-hidden");
        result_2.textContent = "".concat(newPower.toString());
    }
});
