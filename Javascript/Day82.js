 /* Suppose you want climb a staircase of N steps, and on each step you can take either 1 or 2 steps.
  How many distinct ways are there to climb the staircase?
  For example, if you wanted to climb 4 steps, you can take the following distinct number of steps: */

function Climbing_Staircase (N) {
    if (N === 1) return 1;
    if (N === 2) return 2;

    return Climbing_Staircase(N-1) + Climbing_Staircase (N-2)
}
console.log(Climbing_Staircase(7))

// Empty an array 
// #1st way by assigning empty list
let arr = [2,5,6,3,7,1]
arr = [] // Easiest way to empty the arr if it is not referenced to another variable
console.log(arr)

// #2nd way using length=0
let array = ['s','h','y']
array.length = 0
console.log(array);

// #3rd way using pop method
let val = [2,6,'go']
while(val.length){
val.pop()
}
console.log(val);