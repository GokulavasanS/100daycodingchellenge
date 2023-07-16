 /*To remove a character at the specified position in a given string and return the modified string.   */

function removeChar (str,index){
    let cut1 = str.slice(0,index);
    let cut2 = str.slice(index+1)
    return cut1 + cut2;
}
console.log(removeChar("hello",0));

//To display the city name if the string begins with "Los" or "New" otherwise return blank. 

function displayCity (str) {
    if(str.length>= 3 && (str.slice(0,3) === "Los" || str.slice(0,3) === "New")) {
        return str;
    }
    return " "
}
console.log(displayCity("New york"));
console.log(displayCity("London"));