 //  Get the first and last date of current month 

 function Sanemi(){
    let date = new Date()
    let first_day = new Date(date.getFullYear(),date.getMonth(),1)
    let last_day = new Date(date.getFullYear(),date.getMonth() + 1,0)
    console.log("First Date: ",first_day)
    console.log("Last Date: ",last_day);
 }
 Sanemi()
