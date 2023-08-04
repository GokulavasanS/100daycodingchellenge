 /* You will be given an array of several arrays that each contain integers
 and your goal is to write a function that will sum up all the numbers in all the arrays.
  For example, if the input is [[3, 2], [1], [4, 12]] 
then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22. Solve without and with reduce.*/

// Without using reduce function
let yuji = [[9, 19], [34], [40, 112,10]];
let sum = 0
for(let i =0;i<yuji.length;i++){
    for(let j=0;j<yuji[i].length;j++){
        sum += yuji[i][j]
    }
}
console.log(sum)

// With using reduce function
let result = yuji.flat().reduce((a,b) => a+b)// Here i used a flat method to convert sub-arr into a single arr
console.log(result)
