// Write a program to merge two sorted lists into a single sorted list.

let list1 = [3,57,2,85,73,1,94];
let list2 = [35,43,89,0,54,37];
let list3 = list1.concat(list2)

console.log(list1.sort((a,b) => a-b));
console.log(list2.sort((a,b) => a-b));
console.log(list3.sort((a,b) => a-b));


// Write a program to reverse a list in place.

let rev = list1.reverse();
console.log(rev);