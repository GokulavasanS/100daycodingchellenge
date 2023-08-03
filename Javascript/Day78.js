 /* Write a function called lucky_sevens which takes an array of integers
  and returns true if any three consecutive elements sum to 7.*/

function lucky_sevens (list){
    if(list<=3){
        return "Can't determine the value"
    }
    else{
        for(let i=2;i<list.length;i++){
            if(list[i]+list[i-1]+list[i-2] === 7){
                return "True"
            }
        }
    }
    return "False"
}
let list = [2,4,5,2,7,6,1,3,3,8]
console.log(lucky_sevens(list))


