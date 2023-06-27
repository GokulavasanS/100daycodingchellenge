 // Program to trim a string

 let ninja = "    Working hard for the battle   "  // It'll remove the unnecessary space b/w start and end 
 let short = ninja.trim();
 console.log(short);

// Regex Pattern

let regex = new RegExp(/^h.*d$/) // It matches all the words that starting from "h" and ending with "d"
console.log(regex.test("hollywood"));
console.log(regex.test("holland"));
console.log(regex.test("hashira"));
