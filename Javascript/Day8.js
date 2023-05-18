// Write a program to check if a given number is prime or not. (Late night @10.35 Pm)

let leo = 47;
let prime = leo>1
for(let i=2;i<=Math.sqrt(leo);i++){
    if(leo%i === 0){
        prime = false
        break;
    }
}
if(prime){
    console.log(`${leo} is  a prime number`);
}else{
    console.log(`${leo} is not a prime number`);
}
