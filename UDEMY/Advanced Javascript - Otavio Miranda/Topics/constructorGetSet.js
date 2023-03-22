// Reading and setting a variable with get and set methods

// Every time a variable is declared, the 'set' method returns double its value

//-----------------------------------------\-----------------------------------------//
// Object:
// _v = 0; // Initializing with private variable

// let obj = {
// get v() {
// return 'Value: ' + _v;
// },
// set v(value) {
// _v = value * 2;
// }
// }

// obj.v = 2;
// console.log(obj.v);
// obj.v = 5;
// console.log(obj.v);

//-----------------------------------------\-----------------------------------------//
// Factory Function
// function doubleValue(input) {
// return {
// get input() {
// return 'Input value: ' + input;
// },
// set input(value) {
// input = value * 2;
// }
// };
// }

// let input1 = 2;
// let output1 = doubleValue(input1);
// output1.input = input1;

// console.log(output1.input);

//-----------------------------------------\-----------------------------------------//
// Constructor Function
function Double(input) {
    Object.defineProperty(this, 'input', {
        enumerable: true,
        configurable: true,
        get: function () {
            return 'Input value: ' + input;
        },
        set: function (value) {
            input = value * 2;
        }
    });
}

let input1 = 2;
let output1 = new Double(input1);
output1.input = input1;
console.log(output1.input);