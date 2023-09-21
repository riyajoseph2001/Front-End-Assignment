//variable to store object
let object = {};
//assigning keys and values
let keyOne = 0;
let keyOneValue = "Python";
let keyTwo = 1;
let keyTwoValue = "Javascript ";
let keyThree = 2;
let keyThreeValue = "Typescript";

Object.assign(object, { [keyOne]: keyOneValue });
Object.assign(object, { [keyTwo]: keyTwoValue });
Object.assign(object, { [keyThree]: keyThreeValue });

console.log(object);
