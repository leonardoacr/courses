// Type 1: Performs a task and doesn't return anything.
function sayName(name) {
    console.log(name);
}

sayName('John');

// Type 2: Returns a value (for example multiplication):
function multiplyByTwo(value) {
    return value * 2;
}

// console.log(multiplyByTwo(5));

let result = multiplyByTwo(5) + 10;

console.log(result);