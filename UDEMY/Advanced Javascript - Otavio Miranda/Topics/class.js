// Creating a class
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    speak() {
        console.log(`${this.name} is speaking.`);
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
    drink() {
        console.log(`${this.name} is drinking.`);
    }
}

// Instantiating a new person
const p1 = new Person('Luiz', 'Miranda');
const p2 = new Person('John', 'Mayer')

// The advantage of using classes is that the methods are automatically added to the proto,
// unlike constructor functions that need to be added manually
console.log(p1)