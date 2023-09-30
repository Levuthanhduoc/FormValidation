// eslint-disable-next-line no-unused-vars
import './style.css';
import validation from "./validation";

function main(){
    const send = document.querySelector("#send-button");
    const email = document.querySelector("#email-input");
    const zipcode = document.querySelector("#zipcode-input");
    const password = document.querySelector("#password-input");
    const repassword = document.querySelector("#rePassword-input");
    send.addEventListener("click",(e)=>{
        e.preventDefault();
        validation.clearMessage();
        validation.check(email);
        validation.check(zipcode);
        validation.check(password);
        validation.check(repassword,password);
    })
    
}main();