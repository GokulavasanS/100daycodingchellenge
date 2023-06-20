/* Write a function that takes an array and a number as input and 
rotates the array to the right by the given number of positions. 
The function should modify the original array in-place. */

function arrayrotation (arr,rotationcount){
    for(let i=0;i<rotationcount;i++){
        let eliminate = arr.pop();
         arr.unshift(eliminate)
    }
    return arr
}
let arr = [1,2,3,4,5]
let rotationcount = 3;
console.log(arrayrotation(arr,rotationcount));
