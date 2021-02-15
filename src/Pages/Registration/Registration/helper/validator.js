export  function ValidateEmail(email){
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(mailformat)){
         return true;
             }else{

                 return false;
     }
}   

export function ValidatePassword(password){
    let passFormat=/^(?=.*\d)(?=.*[a-z]).{6,}$/
    if(password.match(passFormat)){
        return true;
            }else{

         return false;
    }
}

export function ValidateUsername(username){
    if(username.length<7){
        return false
    }else{
        return true
    }
}