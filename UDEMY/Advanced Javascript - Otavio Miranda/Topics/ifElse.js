// If the time is between 06:00 to 12:00: Good morning!
// If it's between 12:00 and 18:00: Good afternoon!
// Otherwise : Good night!

let hour = 13;

if (hour > 6 && hour < 12) {
    console.log("Good Morning!")
}
else if (hour > 12 && hour < 18) {
    console.log("Good Afternoon!")
}
else {
    console.log("Good Night!")
}