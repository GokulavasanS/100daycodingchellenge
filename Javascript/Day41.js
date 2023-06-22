 //  find the LCM of two numbers.

 function LCM(n1,n2){
    // To find the larger number
    let min = (n1>n2)? n1 : n2;

    while(true){ // untill the condition is satisfied
        if(min%n1===0 && min%n2===0){
            return `LCM of ${n1} and ${n2} is ${min}`
        }
        min++
    } 
 }
console.log(LCM(128,92));
// alternate method is like lcm = n1*n2/gcd(n1,n2)

// To find a ASCII value of a number

let pie = "M";
let ascii = pie.charCodeAt(0)
console.log(`ASCII value of ${pie} is ${ascii}`);