 /* Given an unsorted array Arr of size N of positive integers. One number 'A' from 
 set {1, 2,....,N} is missing and one number 'B' occurs twice in array. Find these two numbers. */

function findTwoElement (arr) {
    let n = arr.length;
    let total_sum = (n*(n+1))/2;
    let arr_sum = arr.reduce((a,b) => a+b,0)
    let arr_set = new Set(arr)

    let duplicate = arr.find(num => arr.indexOf(num) && arr.lastIndexOf !== n)
    let missing_num = total_sum - (arr_sum - duplicate)
    

return [duplicate,missing_num];
}

let arr = [1,4,5,2,4]
let [duplicate,missing_num] = findTwoElement(arr)
console.log(`Duplicate: ${duplicate} Missing_num : ${missing_num}`);
