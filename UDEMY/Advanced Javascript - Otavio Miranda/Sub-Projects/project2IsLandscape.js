// Write a function called isLandscape that
// takes two arguments, width and height
// of an image (number).
// Return 'landscape' if the image is in landscape mode
// and 'portrait' if not.

const width = 1920, height = 1080;
const result = isLandscape(width, height);

console.log('Input (Width, Height) = (', width, ',', height, ')');
console.log(result);

function isLandscape(width, height) {
    return width > height ? 'landscape' : 'portrait';
}