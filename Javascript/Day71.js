 /* Write a JavaScript conditional statement to find the sign of the product of three numbers.
  Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is - */

let numbers = [5,-9,45]
let mulValue = 1
for(let i=0;i<numbers.length;i++){
    mulValue *= numbers[i];
}
if(mulValue>0){
    alert("The sign is +");
}else if(mulValue < 0 ){
    alert("The sign is -")
}else{
    alert("The product is zero (neutral)")
}

