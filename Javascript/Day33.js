 /* You are given an integer n that consists of exactly 3 digits.
We call the number n fascinating if, after the following modification, 
the resulting number contains all the digits from 1 to 9 exactly once and does not contain any 0's:
Concatenate n with the numbers 2 * n and 3 * n.
Return true if n is fascinating, or false otherwise.*/

function isfascinating(n){
    if(n < 100 || n > 999){
        return false
    }
    let mul2 = 2 * n;
    let mul3 = 3 * n;
    let concat = n.toString().concat(mul2,mul3)
    for(let i = 1;i<=9; i++){
        if(!concat.includes(i.toString())){
            return false
        }
    }
    return true;
 }
 console.log(isfascinating(192));
