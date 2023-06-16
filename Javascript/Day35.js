// Converting Romanletters into Numbers

function romantoInt(s){
   const romantoIntMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let result = 0
    for(let i=0;i<s.length;i++){
        if(romantoIntMap[s[i]] < romantoIntMap[s[i+1]]){
            result -= romantoIntMap[s[i]]
        }
        else{
            result += romantoIntMap[s[i]]
        }
    }
    return result
}
console.log(romantoInt("MXL"));