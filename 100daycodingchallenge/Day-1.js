// Write a program that prints "Hello, World!" to the console.

console.log("Hello, World!");  // I'm a coder :)

// Write a program that takes a user's name as input and prints a personalized greeting to the console.

let uname = prompt("Enter the name: ");
console.log(`Welcome home ${uname}:-)`);   // "Backtick is a template literal"

// Write a program that takes two numbers as input and prints their sum to the console.

let fnum = Number(prompt("First num: "));
let snum = Number(prompt("Second num: "));  // Normally prompt only take a string if you want as a number you have to give it explicitly eg:parseInt
let sum = fnum+snum;
console.log("sum: "+sum);
