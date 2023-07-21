 // Find the smallest number in the list without using in-built function

function smallest_value(arr){
    let min_val = arr[0]
   for(let i=0;i<arr.length;i++){
    if (arr[i] < min_val){
        min_val = arr[i]
    }
   }
   return min_val
}
result = smallest_value([14,72,5,6,90,8])
console.log(result); // We can also sort the array and print the first index