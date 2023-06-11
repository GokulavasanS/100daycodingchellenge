 // Find the number is armstrong number or not

 function Armstrong (n){
    let result = 0;
    let temp = n;
    let numlen = n.toString().length;

    while(temp > 0){
    let rem = temp%10;
    result += Math.pow(rem,numlen)
    temp = Math.floor(temp/10)
    }

    return n === result
 }
 console.log(Armstrong(153));
