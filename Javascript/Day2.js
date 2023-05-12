//Write a program to check if a number is even or odd. 
const num = parseInt(prompt("Enter the num: "))
if(num%2 === 0){  // "===" This is a strict equlity operator, that can compare both datatype and values
    console.log("Even Number");
}else{
    console.log("Odd Number");
}

//Write a program to print the first 10 even numbers.

for(let i=2;i<=20;i++){ // using two increment operator will make the i double (or) use i+=2 
    console.log(i);
    i++;
}

// Write a program to find the maximum of two numbers.
let num1 = 9456935995
let num2 = 9455338476
if(num1 > num2){
    console.log(`num1 is greater than num2`)
}else{
    console.log(`num2} is greater than num1d`)
}
// Alternative
console.log(Math.max(num1,num2));
console.log(Math.max(4,6,2,11,35));  // We can use to find the maximum of more than two numbers by passing them as separate arguments

