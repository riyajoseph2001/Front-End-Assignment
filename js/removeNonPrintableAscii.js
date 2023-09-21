"use strict";
function removeNonPrintableAscii(inputStr) {
    const newString = inputStr.replace(/[^\x00-\x7F]/g, "");
    return newString;
}
const inputString = "Hidd©©©en??Ascii ©©®®®Charac££ter";
const replacedString = removeNonPrintableAscii(inputString);
console.log(replacedString);
