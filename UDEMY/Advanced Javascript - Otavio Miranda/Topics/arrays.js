// Finding elements in a primitive array:
// const numbers = [1, 2, 3, 4, 1, 7];

// Adding elements to the array:
// Beginning:
// numbers.unshift(0);

// // Middle:
// numbers.splice(3, 0, 100); // The middle term is to delete some value

// // End:
// numbers.push(5);

// Removing elements:
// Beginning:
// const start = numbers.shift();

// Middle:
// const middle = numbers.splice(1, 2); // Removes the values 2 and 3

// End:
// const last = numbers.pop();

// Emptying an array:
// Creating an array 'numbers2' to delete:
// let numbers2 = numbers;

// Clearing the array:
// numbers2.length = 0;

// Combining arrays
// const first = [1,2,3];
// const second = [4,5,6];

// // Combining:
// const combined = first.concat(second);

// console.log(combined);

// console.log(numbers.includes(1)); // Checks if the number 1 exists (true or false)
// console.log(numbers.indexOf(2)); // Returns the index of the value 2.
// console.log(numbers.lastIndexOf(1)); // Returns the indexes of 1.

// Using forEach to iterate an array:
const numbers = [1, 2, 4, 5, 6, 7, 8];

numbers.forEach((number, index) => console.log(number, index));