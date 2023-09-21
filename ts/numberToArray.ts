function numberToDigitsArray(num: number): number[] {
    const numStr = num.toString();
    const digitsArray=[];
    for(let i=0;i<numStr.length;i++){
        const digit = parseInt(numStr.charAt(i));
        digitsArray.push(digit);
    }
    return digitsArray;
}
//input number
const num = 123445;
const digits = numberToDigitsArray(num);
console.log(digits)