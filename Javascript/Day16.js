 function BinarySearch(list,target){
    let start = 0;
    let end = list.length-1;
   

    while(start <= end){
        let mid = Math.floor((start+end)/2)
        if(list[mid] === target){
            return mid;
        }if(list[mid] <= target){
            start = mid + 1;
        }else {
            end = mid - 1;
        }
    }
    return -1
 }

let  list = [2,5,3,35,62,43,65,1,6,68]
let Sort = list.sort((a,b) => a-b)
console.log("Sorted list = ",Sort);
console.log("The index of the target is ",BinarySearch(Sort,62));
