// Write a program to find the least common multiple (LCM) of two numbers.

function lcm(a,b) {
  return (a*b) / gcd(a,b) 
}
function gcd(a,b){
    if(b==0){
        return a ;
    }
    else{
        return gcd(b,a%b);
    }
}
console.log(lcm(6,3));

// Write a program to find the sum of the digits of a number. 

let cheeka = 195274;
let sum = 0;
while(cheeka > 0)
{
    let val = cheeka %10;
    sum+= val;
    cheeka = Math.floor(cheeka/10);
}
console.log(sum);
