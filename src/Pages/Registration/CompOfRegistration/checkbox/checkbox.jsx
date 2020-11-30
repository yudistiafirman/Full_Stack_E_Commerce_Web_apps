import React from 'react'
import '../checkbox/checkbox.css'

const  FhCheckBox=({checked,onClick,disabled})=>{

    return<div className="term-container">
    <input type="checkbox" disabled={disabled} checked={checked} onClick={onClick}  style={{alignSelf:'center'}} />
<p >i have read and agreed with <a style={{color:'blue',cursor:'pointer'}}> term and condition pejoy.com</a></p> 

</div>

}

export default FhCheckBox