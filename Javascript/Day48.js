 // Convert a Number to a String with Commas as Thousands Separators and add rupees sign in the first

 let amnt = 24697834;
 let convertstr = amnt.toLocaleString('en-IN',{style:'currency',currency:'INR'});
 console.log(convertstr);

//  To find the common elements between two arrays.
function commonelements (vijay,ajith){
    let result = [];
    for(let i=0;i<vijay.length;i++){
        if(ajith.includes(vijay[i]))
        result.push(vijay[i])
    }
    return result;
}

let vijay = ["actor","singer","dancer","motivator"]
let ajith = ["actor","racer"]
console.log(commonelements (vijay,ajith));

