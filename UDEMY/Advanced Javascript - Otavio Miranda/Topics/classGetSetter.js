// Creating the Car class
const _velocity = Symbol('velocity');

class Car {
    constructor(name) {
        this.name = name;
        this[_velocity] = 0;
    }
    set speed(value) {
        if (typeof value !== 'number') return;
        if (value >= 100 || value <= 0) return;
        this[_velocity] = value;
    }

    get speed() {
        return this[_velocity];
    }

    // Creating methods to accelerate or decelerate the car:
    accelerate() {
        // Sets maximum speed of 100
        if (this[_velocity] >= 100) return;
        this[_velocity]++;
    }

    brake() {
        // Sets minimum speed of 0
        if (this[_velocity] < 0) return;
        this[_velocity]--;
    }
}

// Creating a new car instance:
const car1 = new Car('Beetle');

for (let i = 0; i <= 200; i++) {
    car1.accelerate();
}

car1.speed = 50;
console.log(car1.speed);