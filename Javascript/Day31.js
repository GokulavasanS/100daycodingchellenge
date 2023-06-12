/*  Given a string text of words separated by a single space (no leading or trailing spaces)
 and a string brokenLetters of all distinct letter keys that are broken,
 return the number of words in text you can fully type using this keyboard. */

 let hashira = "Slay the demons";
 let brokenLetters = "ed"
 let count = 0
 let words = hashira.split(" ")
 for(let word of words){
    let canType = true
    for(let letter of word){
        if(brokenLetters.includes(letter)){
            canType = false
            break;
        }
    }
    if (canType) count++
    }
console.log(count);
 

