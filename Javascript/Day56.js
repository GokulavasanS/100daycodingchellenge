 // Print a pyramid star pattern

 let row = 5;
    for (let i=0;i<row;i++){ // To define the rows in the pattern
       let str = "";
        for(let j=0;j<row-i-1;j++){ // To define the spaces in the pattern
        str += " ";
        }
        for(let k=0;k<i+1;k++){ // To print the pattern
        str += "*";
        str += " "; // For the in b/w spaces;
        }
        console.log(str);
    }
