/* Given a positive integer number N, reduce the number of digits of N by computing the sum of all the digits 
 to get a new number. If this new number exceeds 9, then sum the digits of this new number to get another number
 and continue this way until a single digit value is obtained as the ‘digit sum’.
  The task here is to find out whether the result of the digit sum done this way is ‘1’ or not.
   If the result is 1 return UNO else not. */

let N = 4321;
let newnum = N;
let digitsum = 0;

    while(newnum > 9){
     digitsum = newnum.toString().split("").reduce((acc,curr) => acc + Number(curr),0)
     newnum = digitsum;
    }
    if(digitsum === 1) console.log("UNO");
    else console.log("NOT");




