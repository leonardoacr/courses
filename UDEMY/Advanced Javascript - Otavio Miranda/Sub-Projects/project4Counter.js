// Create a function that displays the number of * characters in a line of text.

const text = 'Hello:, I am a very interesting text with several asterisks:, look at this cool asterisk :*';
let asteriskCount = 0;

console.log(text);
countAsterisks(text);
console.log('Number of asterisks (*):', asteriskCount);

// Function to count the number of characters in a string: 'string'.length -> text.length

function countAsterisks(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '*') {
            asteriskCount++;
        }
    }
}