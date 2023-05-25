//Write a program to find the Fibonacci sequence up to a given number.

let kakashi = 10;  // This is a val upto which the sequence will be generated 
let dolu = 0;
let bolu = 1;
console.log(dolu);
console.log(bolu);
for(let i=2; i<=kakashi;i++){
    let bheem = dolu + bolu;
    console.log(bheem);
    dolu = bolu;
    bolu = bheem;
}
