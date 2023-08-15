 // How to Copy Array by Value in JavaScript ?

// Using spread operator
let santoki = [1,2,3,"chidori","sage mode"]
let kakashi = [...santoki]
console.log(kakashi)

// Using Array.from method
let itachi = Array.from(santoki)
console.log(itachi);

// Using Array.slice method
let madara = santoki.slice(3,santoki.length)
console.log(madara);
