/* Given a number, return an array containing the two halves of the number.
 If the number is odd, make the rightmost number higher. */

 function numsplit(int){
    const res = [];
    if(int%2 === 0){
    let div = int/2;
    res.push(div);
    res.push(div);
    }
    else{
        let divi = Math.floor(int/2);
    res.push(divi);
        let rem = int - divi;
    res.push(rem);
    }
    return res;
 }
 console.log(numsplit(77));
 console.log(numsplit(96));
 
 // Concise version instead of push
 return int%2 === 0? [div,div] : [div,int - div]



