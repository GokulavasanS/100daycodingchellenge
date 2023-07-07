 // Create a solution class and read value and print true if it contains at least 3 even digits else print false

class solution { 
    constructor (val){
        this.val = val;
    }
     evendigits () {
        let count = 0;
        for(let i=0; i<this.val.length;i++){
            if(this.val[i]%2 === 0) count++
        }
        if(count>=3){
            return "True"
        } else return "False"
    }
}  
let result = new solution("893456")
console.log(result.evendigits()); 
 
