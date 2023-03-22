// Function that returns the greater or smaller value using functions
let number1 = 100, number2 = 250;

let greaterValue = max(number1, number2);
let smallerValue = min(number1, number2);

console.log('Greater value:', greaterValue);
console.log('Smaller value:', smallerValue);

function max(number1, number2) {
    return number1 > number2 ? number1 : number2;
}

function min(number1, number2) {
    return number1 < number2 ? number1 : number2;
}