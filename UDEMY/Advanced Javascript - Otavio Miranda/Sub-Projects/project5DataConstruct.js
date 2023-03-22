// const threeHours = 60 * 60 * 3 * 1000;
// const oneDay = 60 * 60 * 24 * 1000;
// const date = new Date(0 + threeHours + oneDay); // Date(0): 01/01/1970 Unix Timestamp or Unix Epoch -> The argument is in milliseconds
// const date = new Date(); // Current Date and Time
// const date = new Date(2019, 3, 20, 15, 14, 27, 500); // April 20th, 2019 -> year, month, day, 15h:14m:27s:500ms (Note: month starts at 0)
// const date = new Date('2019-04-20 20:20:59.100'); // String Format.

// console.log('Day', date.getDate());
// console.log('Month', date.getMonth() + 1);
// console.log('Hour', date.getHours());
// console.log('Minutes', date.getMinutes());
// console.log('Seconds', date.getSeconds());
// console.log('Milliseconds', date.getMilliseconds());
// console.log('Day of the Week', date.getDay()); // 0 - Sunday and 6 - Saturday

// const date = new Date();
// console.log(date.toString());

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// Let's create a function to display the date in the BR format. The problem is that the function normally does not add zeros to the left, so
// it is necessary to create our own function for that.

// function zeroToTheLeft(num){
// return num >= 10 ? num : 0${num};
// }

// function formataData(date) {
// const day = zeroToTheLeft(date.getDate());
// const month = zeroToTheLeft(date.getMonth() + 1);
// const year = zeroToTheLeft(date.getFullYear());
// const hour = zeroToTheLeft(date.getHours());
// const min = zeroToTheLeft(date.getMinutes());
// const sec = zeroToTheLeft(date.getSeconds());

// return ${day}/${month}/${year} ${hour}:${min}:${sec};
// }

// const date = new Date();
// const brazilDate = formataData(date);
// console.log(brazilDate);

// Function to get time and format it to BR:
// function mostraHora(){
// let date = new Date();

// return date.toLocaleTimeString('pt-BR', {
// hour12: false
// });
// }

// console.log(mostraHora());

// Function to write time and format it to BR:
// const string_hora = '00:10:20';
// function escreveHora(){
// let date = new Date('1979-01-01 ' + string_hora);

// return date.toLocaleTimeString('pt-BR', {
// hour12: false
// });
// }

// console.log(escreveHora());

function zeroToTheLeft(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(date) {
    const day = zeroToTheLeft(date.getDate() + 1);
    const month = zeroToTheLeft(date.getMonth() + 1);
    const year = zeroToTheLeft(date.getFullYear());
    return `${day}/${month}/${year}`;
}

const date = new Date();
const brazilDate = formataData(date);
console.log(brazilDate);