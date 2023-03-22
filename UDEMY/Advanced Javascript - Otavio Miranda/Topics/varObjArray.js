// Variables

// Person 1:
let name_1 = 'John';
let age_1 = 5;
let isApproved_1 = false;

// Person 2:
let name_2 = 'Maria';
let age_2 = 30;
let isApproved_2 = true;

// Object:
const person_1 = {
    name_1, // Class - Key and value
    age_1,
    isApproved_1
};

// Creating an object using constructor:
const person_2 = new Object();
person_2.name_2 = name_2;
person_2.age_2 = age_2;
person_2.isApproved_2 = isApproved_2;

// Destructuring assignment
const person = {
    //name: 'Comunista',
    surname: 'Rockfeller',
    age: 30,
    address: {
        street: 'Street 202',
        number: 320
    }
};

// If the 'name = John' variable doesn't exist in a certain object,
// We can define a default value -> nickname: Jo.

// const { name: nickname = 'Jo', surname, age } = person;
// console.log(nickname, surname);

// Extracting street, number, and full address:
const { address: { street, number }, address } = person;
console.log(street, number, address);

// It's also possible to get the rest:
// const { name, surname, age,... rest_data} = person;
// console.log(name, surname, rest_data);

// Arrays:
let family = [person_1, person_2];

// Accessing by Array destructuring (example with matrix):
let numbers = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// Suppose we want to save the rows as lists:

let [list_1, list_2, list_3] = numbers;

// And now, a, b, c are the first three elements of the second list (5,6,7) and the rest is the rest
let [a, b, c, ...rest] = list_2;

//console.log('a = ',a,'b = ', b,'c = ', c, 'rest =', rest);

/*
console.log(family[1]);
// you can check the variable type in the console like:
// typeof person.name (you can also access it like this)
*/
// Functions:
let siteColor = 'blue';
function resetColor(color, tone) {
    siteColor = color + ' ' + tone;
};

// console.log(siteColor);
// resetColor('red', 'dark');
// console.log(siteColor);