// Write a program to implement merge sort on a list.

function mergesort(arr){
    if(arr.length < 2){
        return arr;
    }
    let mid = Math.floor(arr.length/2)
    let leftarr = arr.slice(0, mid);
    let rightarr = arr.slice(mid);

    return merge(mergesort(leftarr),mergesort(rightarr))
}

function merge(leftarr,rightarr){
    const result = []
    while(leftarr.length && rightarr.length){
        if(leftarr[0] <= rightarr[0]){
            result.push(leftarr.shift())
        }else{
            result.push(rightarr.shift())
        }
    }
    return [...result, ...leftarr, ...rightarr];
}


let list = [3,35,63,32,-1,64,73,-8]
console.log(mergesort(list));
