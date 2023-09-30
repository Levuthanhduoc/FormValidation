const validation = (()=>{
    const errorMessage = (target,txt)=>{
        const mesage = document.createElement("div");
        mesage.classList.add("errorMessage");
        mesage.textContent = txt;
        target.appendChild(mesage);
        return mesage;
    }
    const clearMessage = ()=>{
        const mesage = document.querySelectorAll(".errorMessage");
        if(mesage !== undefined && mesage !== null){
            mesage.forEach(item =>{
                item.remove();
            })
        } 
    }

    const email =(target)=>{
        let valid = false;
        let message = "";
        const input = target;
        if(input.validity.typeMismatch){
            message = "Incorrect email address"
        }
        else if(input.value === ""){
            message = "Please enter email Address";
        }else if(input.validity.valid){
            valid =true;
        }
        return{valid,message}
    }

    const zipcode =(target)=>{
        let valid = false;
        let message = "";
        const input = target;
        if(input.validity.badInput){
            message = "Please enter a number";
        }
        else if(input.value === ""){
            message = "Please enter zipcode";
        }
        else if(input.value.length < 4){
            message ="zipcode too short";
        }
        else if(input.validity.valid){
            valid =true;
        }
        return{valid,message}
    }

    const password = (target)=>{
        let valid = false;
        let message = "";
        const input = target;
        if(input.value ===""){
            message = "Please enter a password";
        }else if(input.value.length < 9){
            message ="password must longer than 8 character";
        }else if(input.validity.valid){
            valid =true;
        }
        return{valid,message}
    }

    const repassword = (target,confirm)=>{
        let valid = false;
        let message = "";
        const input = target;
        const pass = confirm;
        if(pass!==undefined && pass !== null){
            if(input.value ===""){
                message = "Please confirm password";
            }
            else if(input.value !== pass.value){
                message = "Password mismatch";
            }
            else if(input.validity.valid){
                valid =true;
            }
        }
        return{valid,message}
    }

    const check = (target,confirmPass)=>{
        const input = target;
        const confirm = confirmPass;
        let val = {};
        switch(input.id){
            case "email-input": val = email(input);break;
            case "zipcode-input": val = zipcode(input);break;
            case "password-input": val = password(input);break;
            case "rePassword-input": val = repassword(input,confirm);break; 
            default: return;
        }
        if(!val.valid){
            errorMessage(input.parentNode,val.message);
            input.style.backgroundColor = "#ee8c8c";
        }
        else if(input.validity.valid){
            input.style.backgroundColor = "#76e660";
        }
    };
    return {check,clearMessage}
})();
export default validation;