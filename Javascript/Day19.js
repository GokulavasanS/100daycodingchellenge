// Write a program to implement bubble sort on a list.

let list = [34,23,53,62,12,0,7,3];
let nav = list.length;

for(let i=0;i<nav;i++){
    for(let j=0;j<nav-i-1;j++){
        if(list[j] > list[j+1]) {
            let temp = list[j];
            list[j] = list [j+1];
            list[j+1] = temp;
        }
    }
}
console.log(list);
