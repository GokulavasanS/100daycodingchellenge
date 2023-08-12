// Scope of Var and let

var hukum = "Tiger ka hukum"
let val = 3;

function super_star (){
    console.log(hukum) // var variable have global scope
    function star(val){ // It is within function scope will not produce o/p
        console.log(val)
    }
}
super_star();
