// Using prototypes in constructor functions

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
}

const person1 = new Person('Luiz', 'O.');
const person2 = new Person('Maria', 'A.');

console.log(person1.fullName());