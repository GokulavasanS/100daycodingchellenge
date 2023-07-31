 /* Desired pattern on the given i/p
 i/p: 
3

o/p:
*23
1*3
12*
*/

function pattern (n){
    for(let i=1;i<=n;i++){
        line = "";
    
    for(let j=1;j<=n;j++){
        if(j===i){
            line += "*"
        }else{
            line += j
        }
    }
    console.log(line)
    }
}
pattern(2)
