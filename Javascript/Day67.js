 // Adding the ordinal suffix to the given number

function Ordinal_number(num){
    if (10< num %100  && num%100 <20){
        ordinal = "th"
    }
    else {
        if(num%10 === 1){
            ordinal = "st"
        }
    else if(num%10 === 2){
        ordinal = "nd"
    }
    else if (num%10 === 3){
        ordinal = "rd"
    }
    else{
        ordinal = "th"
    }
}
    return num+ordinal
}
console.log(Ordinal_number(8808))