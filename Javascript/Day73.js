 /* Write a JavaScript program to display the colors in the following way.

Here is the sample array:
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
Output
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red." ....*/

function choiceofcolor (color){
    let i= 0
    while(i < color.length){
        let suffix;
        if(i==0)  suffix ="st"
        else if (i==1) suffix = "nd"
        else if (i==2) suffix = "rd"
        else if (i>10 && i<20) suffix = "th"
        else suffix = "th"

    console.log(`${i+1}${suffix} choice is ${color[i]}`);
    i++;
    }  
}
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
choiceofcolor(color)