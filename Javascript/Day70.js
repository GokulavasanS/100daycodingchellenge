 // Find the first occurance of E in a string

let Jikka = "Slash pieces using wood katana"
let Shugen = Jikka.toLowerCase()
let First_occurrence = -1;
let Second_occurrence = -1;
let count = 0
for (let i=0;i<Shugen.length;i++){
    if(Shugen[i] === "e"){
        count++
        if(count === 1){
            First_occurrence= i
        }else if(count === 2){
            Second_occurrence = i
            break
        }
    }
}
console.log(`First and Second occurance of E are in the index ${First_occurrence},${Second_occurrence}` )

// Alternative method using indexOf
let first = Jikka.indexOf("e")
let second = Jikka.indexOf("e",first+1)
console.log(first,second)