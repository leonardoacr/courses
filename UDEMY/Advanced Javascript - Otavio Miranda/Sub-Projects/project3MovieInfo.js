// Create a method to read properties of an object and
// display only string properties that are in that object

const movie = {
    title: 'Avengers',
    year: 2021,
    director: 'Robin',
    character: 'Thor'
}

displayStringProperties(movie);

function displayStringProperties(obj) {
    for (prop in obj) {
        if (typeof obj[prop] === 'string') {
            console.log(prop, ':', obj[prop]);
        }
    }
}