 // How to convert Integer array to String array ?

// Using array.map function
let intarr = [2,5,6,4,31,64]
let strarr1 = intarr.map(function(str){
    return str.toString()
})
console.log(typeof(strarr1[0])) // To find its type

// Using join and split methods
let strarr2 = intarr.join().split(",")
console.log(typeof(strarr2[1]))

// We can simply convert the num into string using coercion of "String(num)"

