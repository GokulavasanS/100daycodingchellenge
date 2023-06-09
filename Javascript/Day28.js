 /* This Triangular Number Sequence is generated from a pattern of dots that form a triangle.
    The first 5 numbers of the sequence, or dots, are:
            1, 3, 6, 10, 15
This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.*/

function Triangular(n){
    return n*(n+1)/2
}
console.log(Triangular(6));

/*A salesman has a number of cities to visit. He wants to calculate the total number of possible paths he could take, 
visiting each city once before returning home. 
Return the total number of possible paths a salesman can travel, given n cities.*/

// Traveling salesman program is all about factorial of a num

function Factorial(num){
    let fact = 1;
    for(let i=num;i>1;i--){
        fact *= i
    }
    return fact
}
console.log(Factorial(3));

