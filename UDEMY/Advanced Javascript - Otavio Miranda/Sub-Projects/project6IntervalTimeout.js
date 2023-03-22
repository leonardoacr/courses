// Project that counts from 0 to 12 with time formatted in BR (Brazil) hours
let seconds = 0;

function counter() {
    seconds++;
    return formatTime(seconds);
}

const timer = setInterval(function () {
    console.log(counter());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 12000);

// Date function to create clock formatting
function formatTime(seconds) {
    let time = new Date(seconds * 1000);
    return time.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}