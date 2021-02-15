import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './DateButton.css'


const DateButton=({type,dmy,onClick,clicked,onBlur})=>{
    return   <button onClick={onClick} onBlur={onBlur} className="dob-box">
    <div className="dob-icon">
    <span className="dob-value" >{dmy}</span>
    <label className={dmy?'dob-label-after':'dob-label'} htmlFor="day">{type}</label>
    <div className={clicked?"dob-icon-down dob-icon-up":'dob-icon-down'}><FontAwesomeIcon icon={faChevronDown}/></div>
   
    </div>
  

   
</button>
}

export default DateButton