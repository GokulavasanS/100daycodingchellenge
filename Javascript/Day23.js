// Create a function that calculates the number of different squares in an n * n square grid.

function numberofSquares(n) {
    let square = 0;
	for(let i=1;i<=n;i++){
	square += i * i
	}
	return square
}
console.log(numberofSquares(3));

// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

function largestswap(n){
    let fnum = Math.floor(n/10);
    let snum = n % 10;
    return fnum>=snum
}
console.log(largestswap(32));

