// Example using the .this statement in an object

// Creating a person object, the this inside the method searches for the attribute inside the object itself:

var person = {
    name: 'John',
    age: 24,
    speakData() {
        console.log("My name is " + this.name + " and I'm " + this.age + ' years old');
    },
    // Creating a function to change the value of the attribute using this:
    birthday() {
        this.age += 1;
    }
};

person.speakData();
person.birthday();
person.speakData();