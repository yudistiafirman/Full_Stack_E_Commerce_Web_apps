import React, { useEffect } from 'react'
import {faExclamationTriangle}from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import './toast.css'


const FhToast=({error})=>{
    function launch_toast(){
        let x = document.getElementById("reg-toast")
        x.className = "show";
       setTimeout(function(){ x.className = x.className.replace("show", "")}, 4000);
    }
    error&&launch_toast()
return <div id="reg-toast">
          <FontAwesomeIcon icon={faExclamationTriangle} id="img"/>
          <div id="reg-desc">{error}</div>
    </div>
   

  
}


export default FhToast