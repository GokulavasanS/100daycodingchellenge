 // Alphabet pattern

function alphPattern (val){
    let alph = "abcdefghijklmnopqrstuvwxyz"
    let current_val = 0;
    
    for(let i=1;i<=val;i++){
        let row = ''

        for(let j=1;j<=val-i;j++){
            row += ' '
        }

            for(let k=1;k<=i;k++){
                row += alph[current_val]
                current_val = (current_val+1) % 26
            }
            console.log(row);
        }
    
    
}
alphPattern(7);
