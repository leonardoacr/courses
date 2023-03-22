function rand(min, max) {
    min *= 1000; // multiply by 1000 to get time in seconds
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function waitForIt(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('MESSAGE IS NOT A STRING');
        setTimeout(() => {
            // console.log(msg);
            resolve(msg);
        }, time);
    });
}

// then is called with resolve and catch with reject
// waitForIt('Phrase 1', rand(1, 3))
// .then(response => {
// console.log(response);
// return waitForIt('Phrase 2', rand(1, 3));
// })
// .then(response => {
// console.log(response);
// return waitForIt('Phrase 2', rand(1, 3));
// })
// .then(response => {
// console.log(response);
// return waitForIt(5, rand(1, 3));
// })
// .catch(e => {
// console.log('ERROR: ', e)
// })

// Useful methods:
// Promise.all:
const promises = [
    'First value',
    waitForIt('Promise 1', 3),
    waitForIt('Promise 2', 0.5),
    waitForIt('Promise 3', 1),
    'Last value'];

// Resolves all promises in order
Promise.all(promises)
    .then((value) => {
        console.log(value);
    }).catch((error) => {
        console.log('all: ' + error)
    })

// Tries to resolve one by one and the first one that resolves it delivers
Promise.race(promises)
    .then((value) => {
        console.log('race: ' + value)
    }).catch((error) => {
        console.log('error')
    })