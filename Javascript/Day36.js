 /* Given an integer n, return a counter function. This counter function initially
  returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).*/

  function counter (n){
    let currentval = n;
    return function(){
     return currentval++
  }
}
let mycounter = counter(10)
console.log(mycounter());
console.log(mycounter());
console.log(mycounter());

