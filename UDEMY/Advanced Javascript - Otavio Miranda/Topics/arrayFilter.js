//-----------------------------------------\-----------------------------------------//
// Function 'filter':
// Given an array in the form:
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Return the numbers greater than 10
//-----------------------------------------\-----------------------------------------//
// Using a for-of loop:
// let i = 0, numbers_greater_than_10 = [];
// for(let greater of numbers) {
// if(greater > 10) {numbers_greater_than_10[i] = greater; i++;}
// }

// console.log(numbers_greater_than_10)

//-----------------------------------------\-----------------------------------------//
// Using filter in an extensive way:
// function filterCallback(value) {
// return value > 10;
// }
// const filteredNumbers = numbers.filter(filterCallback);

//-----------------------------------------\-----------------------------------------//
// Using a simplified version of filter:
// const filteredNumbers = numbers.filter(value => value > 10);
// console.log(filteredNumbers);

// The filter method also passes the arguments (value, index, array)

//-----------------------------------------\-----------------------------------------//
// Using a more complex example with an array of objects:
const people = [
    { name: 'John', age: 36 },
    { name: 'Maria', age: 34 },
    { name: 'Anna', age: 4 },
    { name: 'Nabem', age: 2 },
    { name: 'Let Pig', age: 5 }
];

// Task 1: Return people with a name with 5 or more letters.

const peopleWithLongNames = people.filter(obj => obj.name.length >= 5);

console.log('People with long names: ', peopleWithLongNames)

// Task 2: Return people over 30 years old.

const oldPeople = people.filter(obj => obj.age > 30);

console.log('Old people: ', oldPeople)

// Task 3: Return people whose name ends with "a".
const peopleWithNameA = people.filter(obj => obj.name.toLowerCase().endsWith('a'));

console.log('People whose name ends with "a": ', peopleWithNameA);