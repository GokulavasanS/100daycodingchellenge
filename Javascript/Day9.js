// Write a program to find the sum of all prime numbers between 1 and 100.

function gojo(num){
let sum = 0;
    for(let i=2;i<=num;i++){
        let prime = true
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j === 0){
                prime = false;
                break;
            }
        }
    
    if(prime){
        sum +=i;
    }}
    return sum
}
console.log(gojo(100));

// Write a program to find the length of a string.

let gig = "Minato"
console.log(gig.length)

// Write a program to find the number of words in a string.

let life = "Loneliness is a part of our life"
let wordcount = 0;
let jingle = life.split(" ").length
console.log(jingle)



