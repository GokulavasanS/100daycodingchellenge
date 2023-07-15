 /* To check whether a string "Script" appears at the 5th (index 4) position in a given string.
  If "Script" appears in the string, return the string without "Script" otherwise return the original one.*/

  function checkAndRemove(str){
    if(str.length<5) return str;
    let result = str.substring(4);
    if(result === "script"){
    result = str.replace(result,"")
       return result;
    }
    return str;
  }
console.log(checkAndRemove("Javascript"))
console.log(checkAndRemove("Java"));