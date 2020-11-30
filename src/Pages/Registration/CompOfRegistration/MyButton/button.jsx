import React from 'react'
import '../MyButton/button.css'



const FhBtnSolid =({label,onSubmit,buttonType,disabled})=>{

    

return     <button type="submit" disabled={disabled} style={{backgroundColor:disabled?"#e8e8e8" :null,cursor:disabled?"not-allowed":"pointer",outline:'none' }} onClick={onSubmit} className={buttonType==="transparent" ?"mybtn transparent":"mybtn"}>{label}</button>
}

export default FhBtnSolid