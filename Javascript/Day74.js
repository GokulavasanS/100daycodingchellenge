/* Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array
 whose sum equals a specific target number.

Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 2, 3 */

function Pair_Equals_Target (arr,target){
    for(let i=0;i<arr.length;i++){
        for (let j= i+1;j<arr.length;j++){
        if(arr[i]+arr[j] === target){
        return [i,j]
        }
    }           
 }  
    return "No target value" 
}

let arr = [80,20,10,40,50,60,70]
let target = 30
let Doama = Pair_Equals_Target(arr,target)
console.log(Doama);