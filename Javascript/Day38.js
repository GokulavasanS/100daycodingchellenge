 // Create a calculator class contains all the operations

 class Calculator{
    add(a,b){
        return a+b;
    } 
    sub(a,b){
        return a-b;
    }
    mul(a,b){
        return a*b;
    }
    div (a,b){
        if(b===0){
            return "Cannot divide by zero it will be Infinity";
        }
    else{
        return Math.floor(a/b);
    }
    }
}
let calculator= new Calculator;
console.log(calculator.add(8,12));
console.log(calculator.sub(78,44));
console.log(calculator.mul(9,24));
console.log(calculator.div(88,0));
