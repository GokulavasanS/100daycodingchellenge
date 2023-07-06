 /* get a string from user and do the following
After getting input from user check whether 
the string starts with 1192 then print the remaining string in reverse order.
 If no input matches print "No such value".*/

 let Otis = prompt("Type the word: ");
 let Jo = Otis.startsWith(1192)
 if(!Jo){
    console.log( "No such value");
 }
 else{
    let rev = Otis.slice(4).split("").reverse().join("")
    console.log(rev);
 }
