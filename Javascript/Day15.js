// Write a program to check if a given string is a valid email address.

let email = "gk24@gmail.com"
if(email.includes("@")&& email.includes(".")){
    console.log("valid email");
}else{
    console.log("Not valid");
}