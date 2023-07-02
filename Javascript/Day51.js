 //  To find the missing number in a given range of numbers.
 
 function missingnum (giyu){
 let find = [];
 giyu.sort((a,b) => a-b); // sorting an array to find the difference 
 for(let val of giyu){
    while(giyu[val+1] - giyu[val] > 1){
        find.push(giyu[val] + 1);
        giyu[val]++
    }
}
    if(find.length === 0){
        return -1
    }
 
 return find
}
let giyu = [1,5,3,8,9,2,6,7];
console.log(missingnum(giyu));
 
