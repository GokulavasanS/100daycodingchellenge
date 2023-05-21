// Write a program to convert Celsius to Fahrenheit
 let  celcius = 25;
const fahrenheit = celcius * 9/5 + 32  // Remember the formula
console.log(fahrenheit);

// Write a program to generate a random number between 1 and 100.

let random = parseInt(Math.random()*100)+1 ; //Here we adding 1 bcuz random method generate b/w 0 to 99 so we add 1 for "1 to 100"
console.log(random);

// Write a program to find the greatest common divisor (GCD) of two numbers using function.

function gcd (a,b){
    if(b == 0){
        return a; // means a is the gcd value
    }
else{
    return gcd(b,a%b)
}}
console.log(gcd(26,48));
