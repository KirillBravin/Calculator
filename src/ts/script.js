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
var sum = 0;
var sum2 = 0;
one.addEventListener("click", function () {
    var one = 1;
    if (result_1.textContent === "0") {
        result_1.textContent = "1";
        sum += one;
    }
    else if (result_1.textContent !== null) {
        result_1.textContent = result_1.textContent.concat(one.toString());
        sum += one;
    }
});
two.addEventListener("click", function () {
    var _a;
    var two = 2;
    if (result_1.textContent === "0") {
        result_1.textContent = "2";
        sum += two;
    }
    else {
        (_a = result_1.textContent) === null || _a === void 0 ? void 0 : _a.concat("asd");
        sum += two;
    }
});
