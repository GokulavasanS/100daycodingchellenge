 // Generating a Strong Password

 function Generatestrongpwd(length){
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
    let result = ""
    for(let i = 0;i<length;i++){
        result += charset[Math.floor(Math.random() * charset.length)]
    }
    return result
 }
 console.log(Generatestrongpwd(8));
