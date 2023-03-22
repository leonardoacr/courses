// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 and 5 => input
// Not a number => 'Not a number'

function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return 'Not a number';
    }
    if ((input % 3 === 0) && (input % 5 === 0)) {
        return 'FizzBuzz';
    }
    else if (input % 3 === 0) {
        return 'Fizz';
    }
    else if (input % 5 === 0) {
        return 'Buzz';
    }
    else {
        return 'Input';
    }
}

const input = 15;
const result = fizzBuzz(input);
console.log(result);
