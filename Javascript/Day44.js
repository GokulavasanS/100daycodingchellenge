 // Find the Sum of All Divisors of a Number in js

 function sumofdivisors (num){
    let sum = 0 ;
    for (let i=0;i<=num/2 ; i++){
        if(num%i === 0 ){
            sum+=i
        }
    }
    return sum + num;
 }
 console.log(sumofdivisors(12));
