 // Longest Substring Without Repeating Characters

function lengthofLongestSubstring(s){
    let maxlength = 0;
    let start = 0;
    let charmap = new Map();

    for(let i=0;i<s.length;i++){
        let char = s[i]
        if(charmap.has(char)){
            start = Math.max(charmap.get(char)+1,start)
        }
        maxlength = Math.max(maxlength,i-start+1)
        charmap.set(char,i)
    }
    return maxlength;
}
let s = "aabcba"
console.log(lengthofLongestSubstring(s));