 // Program to print repeating characters and their count from a string

 let place = "Mississippi";
 let char_count = {};
 for(let i=0;i<place.length;i++){
    let char = place[i];
    if(char_count[char]){
        char_count[char]++;
    }else{
        char_count[char] = 1;
    }
}
    for (let char in char_count){
        if(char_count[char]>1){
            console.log(`${char} : ${char_count[char]}`);
        }
    }
 
