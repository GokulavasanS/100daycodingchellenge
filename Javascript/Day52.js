// Permutation of a string

function Permutation (str){
    let result = [];
    let count = 0;
    if(str.length < 2) return {permutations: [str] , count : 1};
    for(let i=0; i<str.length;i++){
        const char = str[i]
        if(str.indexOf(char) != i)continue
        let remainingstr = str.slice(0,i)+str.slice(i+1,str.length)
        let subpermutation = Permutation(remainingstr);
        for(let substr of subpermutation.permutations){
            result.push(char + substr)
            count++;
        }
    }
    return {permutations: result, count: count}; // If you want to return two elements you can use variable and call it through 
}

let str = "abcd"; // we can also use number in the string to find out the permutation
let result = Permutation(str);
console.log(result.permutations);
console.log("Total Permutation count: ",result.count); 