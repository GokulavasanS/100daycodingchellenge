/* Given an array arr and a chunk size size, return a chunked array.
 A chunked array contains the original elements in arr, but consists of subarrays each of length size.
  The length of the last subarray may be less than size if arr.length is not evenly divisible by size. */

function chunkArray(arr, size) {
    let result = [];
    for(let i=0; i<arr.length;i+= size){
        result.push(arr.slice(i,i+size));
    }
    return result;
}
let arr = [1,2,3,4,5,6,7,8,9]
let size = 2;
console.log(chunkArray(arr,size));

/*  Chunking an array can be useful for a variety of reasons.
 For example, it can be used to divide a large dataset into smaller, more manageable pieces for processing or analysis. */