 // Write a program to find the median of a list of numbers.

 let yoyo = [3,4,5,2,9]
 let sortednum = yoyo.sort((a,b) => a-b);
 let mid = parseInt(sortednum.length/2)

 if(sortednum.length%2 === 0){
    console.log(sortednum[mid]);
 }else{
    console.log((sortednum[mid] + sortednum[mid-1]) / 2);
 }
