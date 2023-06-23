 // Remove the spaces found in a string using js

 function removespaces (DC) { // We can use /\s+/g,"" this method for whitespace removal
    let seperate = DC.split(" ")
    let join = seperate.join("")
    return join;
 }
 let DC = "I'm a Batman"
 console.log(removespaces(DC));


 // Sumn of natural numbers using recursion

 function Sum(n){
    if(n>0){
       return n+ Sum(n-1); // This is a recursive function
    }else return n
 }
 console.log(Sum(5));

