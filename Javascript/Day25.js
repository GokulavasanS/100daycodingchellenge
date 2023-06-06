// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

function numofdigits(n){
let count = 0;

while(n >0){
    count++
    n = Math.floor(n/10);
}
    return count
}
console.log(numofdigits(1578463));

/* Create a function that takes two numbers as arguments (num, length)
 and returns an array of multiples of num until the array length reaches length.*/

function arrofmultiples(num,length){
    let result = []
    for(let i=1;i<=length;i++){
        result.push(num*i)
    }
    return result
}
console.log(arrofmultiples(24,8));

