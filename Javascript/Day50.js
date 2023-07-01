 // To find the maximum product of two elements in an array.

 function maxproduct (arr){
    let maxvalue = arr[0] * arr[1];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            let product = arr[i] * arr[j]
            if(product > maxvalue){
                maxvalue = product
            }
        }
    }
    return maxvalue;
 }
 let arr = [4,7,3,8,2,6];
 console.log(maxproduct(arr));

