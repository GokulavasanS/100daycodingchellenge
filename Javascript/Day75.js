 /* Write a special maths code without order of precedence 
i/p:
14-25*3

o/p:
-33
explaination
14-25=-11
-11*3 = -33
 */

function Special_math(str){
    let operations = "+-*/"
    let result = "";
    let temp = 0;
    let a= "";

    for(let i=0;i<str.length;i++){
        if(operations.includes(str[i])){
            temp = 1;
            a = str[i];
        }else if((!(operations.includes(str[i]))) && temp==1){
            result = String(eval(result+ a +str[i]))
            temp = 0
        }else if (!operations.includes(str[i])){
            result += str[i]
        }
    }
    return result;
}

str = "1-2*3"
console.log(Special_math(str));

