// Write a program to implement insertion sort on a list.

let list = [2,53,67,92,3,43]
for(let i=1;i<list.length;i++){
    let j=i;
while(j>0 && list[j]<list[j-1]){
    [list[j],list[j-1]]=[list[j-1],list[j]] // Easy way to swap to values
    j--;
}
}
console.log(list);

