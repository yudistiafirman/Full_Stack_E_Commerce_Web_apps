import React from 'react'
import '../MyInput/inputstyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FhInput=({onChange,value,label,inputType,onClick,myClass,icon,maximum})=>{

 
    return    <div className="input-field">
                
                <input type={inputType} onChange={onChange} value={value}  required/>
                <label htmlFor={label}>{label}</label>
                <FontAwesomeIcon onClick={onClick} className={myClass} icon={icon}/>
            </div>
                
                     
               

         
}

export default FhInput
            
                  
                
   