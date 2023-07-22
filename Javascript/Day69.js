 // Find the two min value in a list and difference it without using inbuilt function 

 let value = [23,52,3,73,243,14,92]
 let Firstmin = Infinity
 let Secondmin = Infinity
 for(let i=0;i<value.length;i++){
    if(value[i] < Firstmin){
        Secondmin = Firstmin
        Firstmin = value[i]
    }else if(value[i] < Secondmin){
        Secondmin = value[i]
    }
 }
 let result = Number(Secondmin - Firstmin)
 console.log(`The difference of ${Secondmin} and ${Firstmin} is ${result}`)
