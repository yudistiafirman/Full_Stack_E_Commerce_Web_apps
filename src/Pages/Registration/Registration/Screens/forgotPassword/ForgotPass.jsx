import React, { useState } from 'react'
import FhBtnSolid from '../../../CompOfRegistration/MyButton/button'
import FhInput from '../../../CompOfRegistration/MyInput/input'
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'


const ForgotPassword =({onClick})=>{

    const [reset,setReset]=useState(false)
    const [loginInput,setLoginInput]=useState('')

    const onChangeEmail=(e)=>{
        setLoginInput(e.target.value)
        if(e.target.value.length===0){
            setReset(false)
        }else{
            setReset(true)
        }
           
    }
    
    const onClickEmail=()=>{
        setLoginInput('')
        setReset(false)
    }
    return  <form >
            <h2 className="title">Forgot password</h2>
       
             <FhInput label="email" icon={faTimesCircle} onChange={onChangeEmail} value={loginInput} onClick={onClickEmail} myClass={reset?"reset-input display-inline":'reset-input'}/>
       
           <FhBtnSolid label="Submit" onSubmit={onClick} buttonType="solid"/>
            </form>
}

export default ForgotPassword