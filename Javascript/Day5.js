// Write a program to sort a list in ascending order.

const hisoka = [34,6,92,54,13];
hisoka.sort((a,b) => a-b) // descending order means use b-a
console.log(hisoka)

// Write a program to find the second-largest number in a list.

const chrollo = [3,90,2,33,23,65]
let largest = chrollo[0]
let secondlargest= chrollo[0];

for(let i=1;i<chrollo.length;i++){
    if(chrollo[i]>largest){
    secondlargest=largest;
    largest=chrollo[i]
    }else
    if(chrollo[i]>secondlargest && chrollo[i]!=largest){
    secondlargest = chrollo[i]
} 
}
console.log(secondlargest);
// Modern way to get this using sort
const seclargest = chrollo.sort((a,b) => b-a)
console.log(seclargest[1])


// Write a program to calculate the sum of all the elements in a list.

let sum=0;
for(let i=0;i<chrollo.length;i++){
   sum += chrollo[i];
}
console.log(sum);


