import React, { useState } from 'react'
import FhInput from '../../../CompOfRegistration/MyInput/input'
import FhSocialButton from '../../../CompOfRegistration/SocialButton/SocialButton'
import {  faEye, faTimesCircle,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import '../Signup/SignUp.css'
import FhCheckBox from '../../../CompOfRegistration/checkbox/checkbox'
import FhBtnSolid from '../../../CompOfRegistration/MyButton/button'


const SignUp =({myClass})=>{
    const [reveal,setReveal]=useState(false)
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

   
return <form action="" className={myClass}>
      
    <h2 className="title">Sign up</h2>
       
     <FhSocialButton type="sign-up-facebook"/>
     <FhSocialButton type="sign-up-google"/>
   
     <p className="middle-vertical-line">or</p>
      
     <FhInput label="email" icon={faTimesCircle} onChange={onChangeEmail} value={loginInput} onClick={onClickEmail} myClass={reset?"reset-input display-inline":'reset-input'}/>
     <FhInput label="password" icon={reveal? faEyeSlash:faEye} onClick={()=>setReveal(!reveal)} inputType={reveal?"text":'password'} myClass="hide-password"/>
    <FhCheckBox/>
    <FhBtnSolid label="Sign Up" buttonType="solid"/>

</form>
}

export default SignUp
  
   
    
 
     
