import React from 'react'
import {faExclamationTriangle}from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import './logintoast.css'


const LoginToast = ({error})=>{
    function launch_toastlogin(){
        let x = document.getElementById("reg-login-toast")
        x.className = "show_login";
       setTimeout(function(){ x.className = x.className.replace("show_login", "")}, 4000);
    }
    error&&launch_toastlogin()
    return  <div id="reg-login-toast">
    <FontAwesomeIcon icon={faExclamationTriangle} id="img-login"/>
    <div id="reg-login-desc">{error}</div>
</div>

}

export default LoginToast