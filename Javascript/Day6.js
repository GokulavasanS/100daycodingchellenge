// Write a program to remove all the duplicates from a list.

const shinchan = [3,63,24,3,72,3,24];
let unique = [...new Set(shinchan)] // Here we using spread operator(...) and set method to remove duplicate elements in shinchan
console.log(unique)

// Write a program to count the number of occurrences of an element in a list.

let elementtocount = 3; // here we giving 3 to know how many 3's occur in the array
let count = 0;
for(let i=0;i<shinchan.length;i++){
    if(shinchan[i] === elementtocount){
        count++
    }
}
console.log(count);

// Write a program to check if a list is empty.

if(!shinchan.length){
    console.log("List is empty");
}else console.log("List is not empty");

// Write a program to concatenate two lists.

const shiro = [4,26,73,34]
let newlist = shinchan.concat(shiro); // concat is a method use to concatenate two arrays
console.log(newlist);

