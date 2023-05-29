// Write a program to implement linear search on an unsorted list.

let list = [2,6,64,23,0,72,93,1,25];  // We can easily find the target using indexOf method
let target = 3; 
let found = false;

for(let i=0;i<list.length;i++){
    if(list[i] === target){
        console.log("The index of the target value is",i);
        found = true;
        break
    }
}
if(!found){
    console.log("The value is not in the list");
}