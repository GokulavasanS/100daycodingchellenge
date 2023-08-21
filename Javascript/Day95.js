 // Converting multi-dimensional array to object

function arr2obj (arr){
    let obj = {}
    arr.forEach((s) => {
     let key = s[0];
     let value = s[1];
    
    obj[key] = value;
})
return obj;
}
console.log(arr2obj([
    ["john",2],
    ["rose",4],
    ["ship",6]
    ]));
