import React from 'react'
import './RadioInput.css'


const RadioInput=({label,click,onClick,onBlur})=>{
    return     <div className="radio-container">
               <input className="radio-circle" checked={click} onClick={onClick} onBlur={onBlur} type="radio"/>
         
          
             
               <div className="radio-label" htmlFor="sms">{label}</div>
              </div>

}


export default RadioInput