 // Insert a string at a specific index

// Using slice method
let string1 = "Tobi Senju"
let insert_string = "rama"
let joined_string = string1.slice(0,4) +insert_string+string1.slice(4)
console.log(joined_string);

// Using splice method
let string2 = "Hashi Senju"
let add_string = "rama"
string2 = string2.split("")
string2.splice(5,0,add_string) 
let join = string2.join("")
console.log(join);
