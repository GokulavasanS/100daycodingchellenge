 /* Create a js function that takes a number discs as an argument 
 and returns the minimum amount of steps needed to complete the game. */

 function towersofhonai(disc){
 if(disc<=0){
    return 0;
 }
 return Math.pow(2,disc)-1
}
console.log(towersofhonai(4)); // Formula for moving the disc to the third tower

// Given an integer numRows, return the first numRows of Pascal's triangle.

function pascaltriangle(numRows){
    let triangle = [[1]];
    if (numRows === 0) return 0
    if (numRows === 1) return triangle
    for (let i = 1; i<numRows; i++){
        let prevRows = triangle[triangle.length - 1];
        let currRows = [1];
        for (let j=1 ; j<prevRows.length; j++){
           currRows[j] = prevRows[j]+ prevRows[j-1]
        }
        currRows.push(1);
        triangle.push(currRows);
    }
    return triangle
}
console.log(pascaltriangle(5));


