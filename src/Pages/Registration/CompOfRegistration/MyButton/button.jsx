import React from 'react'
import '../MyButton/button.css'



const FhBtnSolid =({label,onSubmit,buttonType})=>{

    

    return     <input value={label} type="submit"  onClick={onSubmit} className={buttonType==="transparent"?"mybtn transparent":"mybtn "}/>
}

export default FhBtnSolid