import React, { useCallback, useState } from 'react'
import '../Signin/style.css'
import {  faEye, faTimesCircle,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import FhInput from '../../../CompOfRegistration/MyInput/input'
import FhBtn from '../../../CompOfRegistration/MyButton/button'
import FhSocialButton from '../../../CompOfRegistration/SocialButton/SocialButton'


const SignIn = ({onClick,myClass})=>{

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


    return  <form className={myClass}>
        
            <h2 className="title">Sign in</h2>

            <FhInput label="email" icon={faTimesCircle} onChange={onChangeEmail} value={loginInput} onClick={onClickEmail} myClass={reset?"reset-input display-inline":'reset-input'}/>
            <FhInput label="password" icon={reveal? faEyeSlash:faEye} onClick={()=>setReveal(!reveal)} inputType={reveal?"text":'password'} myClass="hide-password"/>
    
            <div className="forgot-text-container">
                <p style={{cursor:'pointer'}} onClick={onClick}>forgot password?</p>
            </div>

            <FhBtn label="Sign In" buttonType="solid"/>

            <p className="social-text">Or Sign in with social platforms</p>

            <div className="social-media" >
                         <FhSocialButton type="facebook"/>
                         <FhSocialButton type="google"/>
            </div>
       
            </form>
}

export default SignIn