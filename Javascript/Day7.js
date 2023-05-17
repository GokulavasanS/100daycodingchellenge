// Write a program that takes a string as input and counts the number of vowels in the string. 

let flash = "Mississippi";
let vowels = 0;
for(let i=0;i<flash.length;i++){
    if("AEIOUaeiou".includes(flash[i])){
        vowels++
    }
}
console.log(vowels);
