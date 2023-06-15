/* Given a string S, find the first non-repeating character in it and return its index.
 If it does not exist, return -1.*/ 

 function firstuniquechar(Str){
    let frequency = {} // Creating Hash table for finding non-repeating char
    for(let char of Str){
        if(frequency[char]){
            frequency[char]++
        }else{
            frequency[char] = 1
        }
    }
    for(let i=0;i<Str.length;i++){
        let char = Str[i]
        if(frequency[char] === 1){
            return i
        }
    }
    return -1
 }

 console.log(firstuniquechar("Boom Kaboom"));
 console.log(firstuniquechar("aabb"));