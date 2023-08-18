// Calculate the number of days between two dates

function Calculate_dates(d1, d2) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);

  let differenceInTime = date2.getTime() - date1.getTime();
  let differenceInDays = differenceInTime / (1000 * 3600 * 24); // Formula to calculate days

  return [date1, date2, differenceInDays];
}
let d1 = "08/18/23";
let d2 = "09/03/23";
let result = Calculate_dates(d1, d2);
console.log(`The Difference b/w two dates
   ${result[0]} and
   ${result[1]} 
   is ${result[2]}`);
