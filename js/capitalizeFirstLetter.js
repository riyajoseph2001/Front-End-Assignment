"use strict";
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
//input string
const inputStr = "hello world";
const resultString = capitalizeFirstLetter(inputStr);
console.log(resultString);
