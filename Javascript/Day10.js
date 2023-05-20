 
// Write a program to capitalize the first letter of each word in a string.

let johnsnow = "you know nothing johnsnow"
let word = johnsnow.split(" ")
let cap = word.map(word => word.charAt(0).toUpperCase()+ word.slice(1))
let capjoin = cap.join(" ")
console.log(capjoin);


// Write a program to find the area of a circle.

function circle(radius){
    let area = parseInt(Math.PI*radius*radius)
    return area;
} 
console.log(circle(10));