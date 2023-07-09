 // write a program to count the number of characters in a string
 
function find(target){
let chip = "Ate so many species";
let count = 0;
for(let i=0;i<chip.length;i++){
    if(chip[i].toLowerCase() === target) count++
}
return count;
}
console.log(find("s"));
