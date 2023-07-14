 // Given an array of integers, where all elements but one occur twice, find the unique element.

 // using hash table to find the unique value
function uniqueValue(n){
    let count={};
    for(let num of n){
        if(!(num in count)){
            count[num] = 1;
        }else{
            count[num]++
        }
    }
    for(let val in count){
        if(count[val] === 1){
            return val
        }
    }
    return count;
}
console.log(uniqueValue([1,2,1,3,4,3,2,5,5]));



 // using XOR operator to find the unique value
 function uniqueElement(n){
    let result = 0;
    for(let val of n){
        result ^= val;
   }
    return result;
 }
 let n = [1,2,1,3,4,3,2,5,5]
 console.log(uniqueElement(n))
