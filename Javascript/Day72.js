 /* Write a JavaScript program that accepts a string as input and swaps the case of each character.
  For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.*/

function megumi(str){
let fushiguro = ""
for(let i=0;i<str.length;i++){
    if(str[i] === str[i].toUpperCase()){
        fushiguro += str[i].toLowerCase()
    }else{
        fushiguro += str[i].toUpperCase();
    }
}return fushiguro
}

console.log(megumi("The Flashy Fighter"));
console.log(megumi("I'm Batman"));
