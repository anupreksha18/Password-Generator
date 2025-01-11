const password=document.querySelector("#Password");
const button=document.querySelector(".button button");
const copy=document.querySelector(".display i");
let length=12;
button.addEventListener('click',generatePassword)
function generatePassword(){
    let allChar="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let newpassword="";
   while(newpassword.length<length)
   {
    newpassword+=allChar[Math.floor(Math.random()*allChar.length)];
   }
    password.value=newpassword;
}
copy.addEventListener('click',copypassword);

function copypassword(){
    password.select();
    document.execCommand("copy");
}
