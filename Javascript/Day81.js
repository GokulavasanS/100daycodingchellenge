 /* You will be given an array with 5 numbers. The first 2 numbers represent a range,
  and the next two numbers represent another range. The final number in the array is X.
     The goal of your program is to determine if both ranges overlap by at least X numbers.
      For example, in the array [4, 10, 2, 6, 3] the ranges 4 to 10 and 2 to 6 overlap 
      by at least 3 numbers (4, 5, 6), so your program should return true. 
If the array is [10, 20, 4, 14, 4] then the ranges are:
10 11 12 13 14 15 16 17 18 19 20
4 5 6 7 8 9 10 11 12 13 14
These ranges overlap by at least 4 numbers, namely: 10, 11, 12, 13, 14 so your program should return true.
 */

let num = [1,6,4,10,2]
let first_loop = []
let second_loop = []
let overlap = []
for(let i = num[0];i<=num[1];i++){
    first_loop.push(i)
}
for (let j= num[2];j<=num[3];j++)  {
    second_loop.push(j)
}
for(let k=0;k<second_loop.length;k++){
if(first_loop.includes(second_loop[k])){
    overlap.push(second_loop[k])
}
}
if(overlap.length>=num[num.length -1]){
    console.log("True")
}else{
    console.log("False")
}
console.log("The range of 1st loop: "+ first_loop)
console.log("The range of 2nd loop: "+ second_loop)
console.log("Overlapping Value: "+ overlap);

