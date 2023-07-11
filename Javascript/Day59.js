 /* Write a program to remove all the numbers in a string.
  Get inputs from user and print the output */

let Chip = prompt("Enter the words: ")
let result = Chip.replace(/\d+/g, "") // d+ used to match all the numbers and g for searching globally
console.log(result);

/* Given five positive integers, find the minimum and maximum values that can be calculated
 by summing exactly four of the five integers. Then print the respective minimum and maximum values
  as a single line of two space-separated long integers.*/

let monk = [19,82,73,34,59];
monk.sort((a,b) => a-b);
let minsum = monk.slice(0,4).reduce((a,b) => a+b,0);
let maxsum = monk.slice(1,5).reduce((a,b) => a+b,0);
console.log(`Minsum = ${minsum},Maxsum =${maxsum}`);





