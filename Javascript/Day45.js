//  To Display Current Date and time using js

let date = new Date; // Constructor method used to create a date
let today = date.toDateString();
let time = date.toLocaleTimeString();
console.log("Date: ",today);
console.log("Time: ",time);