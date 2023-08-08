// How to count number of data types in an array in JavaScript 
 
function countDataTypes (arr){
    return arr.reduce((a,b) => {
         if(a[typeof b]){
             a[typeof b]++
         }else{
             a[typeof b] = 1;
         }
         return a;
     },{})
 }
 let arr = [1,"Hinata",function(){},{},3.34]
 console.log(countDataTypes(arr));