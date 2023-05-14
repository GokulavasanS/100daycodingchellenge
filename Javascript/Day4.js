// Write a program to check if a string is a palindrome.

let gon = "radar"
let rev = ""
for(let i=gon.length-1;i>=0;i--){
     rev += gon[i]
}
if(rev === gon){
    console.log(`${gon} is a palindrome`);
}else{
    console.log(`${gon} is not a palindrome`);
}
// Easiest version
let isPalindrome = gon === gon.split("").reverse().join("");
console.log(isPalindrome ? `${gon} is a palindrome`:`${gon} is not a palindrome`)

// Write a program to find the largest number in a list.
let killua = [8,4,12,23,41]
let largestnum = killua[0];
for(let i=1;i<killua.length;i++){
    if( killua[i] > largestnum){
        largestnum = killua[i];
    }
}
console.log("The largest number is",largestnum);


