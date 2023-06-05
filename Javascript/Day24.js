 // Create a function to return the amount of potatoes there are in a string.

 function countpotatos(str){
    let count = 0;
    let index = str.indexOf("potato") // indexOf method used to find the first occurence of the string present in the input
    
        while (index !== -1){
            count++
            index = str.indexOf("potato",index + 1)
        }
        return count
    
}
console.log(countpotatos("potato,mango,apple,potato"));