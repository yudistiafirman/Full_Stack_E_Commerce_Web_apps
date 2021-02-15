import React, { useEffect, useState } from 'react'
import FhBtnSolid from '../../../CompOfRegistration/MyButton/button'
import FhInput from '../../../CompOfRegistration/MyInput/input'
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Error from '../../../CompOfRegistration/errorcontainer/error'
import FhLoading from '../../../CompOfRegistration/Loading/Loading'
import './ForgotPass.css'
import {ValidateEmail}from '../../helper/validator'
const ForgotPassword =({onClick})=>{

    const [reset,setReset]=useState(false)
    const [email,setEmail]=useState('')
    const [error_email,setErroremail]=useState('')

    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        let validateMail=ValidateEmail(email)
    console.log(validateMail)
    if(!validateMail){
       setErroremail('invalid email format')
    }else{
        setErroremail('')
    }


    },[email])
    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
        if(e.target.value.length===0){
            setReset(false)
        }else{
            setReset(true)
        }
           
    }
    
    const onClickEmail=()=>{
        setEmail('')
        setReset(false)
    }

    const onSubmitEmail=(e)=>{
      e.preventDefault()
           setLoading(true)
            Axios.post('http://localhost:2000/auth/forgotpass',{email:email})
            .then((response)=>{
                setLoading(false)
                Swal.fire({
                    title:'Success',
                    text:response.data.message,
                    icon:'success',
                    confirmButtonText: 'sound good?'
                })
            }).catch((error)=>{
                setLoading(false)
                setEmail('')
                Swal.fire({
                    title:'Error',
                    text:error.response.data.message,
                    icon:'error',
                    confirmButtonText: 'Cool'
                    
                })
            })
        } 
    
    return  <form >
            <h2 className="title">Forgot password</h2>
            {email.length>2 &&    <div className="forgot-invalid-email">
             <Error error={email.length>2?error_email:null}/>
            </div>
           }
             <FhInput label="email" icon={faTimesCircle} onChange={onChangeEmail} value={email} onClick={onClickEmail} myClass={reset?"reset-input display-inline":'reset-input'}/>
            <div style={{display:'flex',justifyContent:'center',width:'80%'}}>
            <FhBtnSolid label={loading?<FhLoading/>:'submit'} disabled={error_email?true:loading?true:false} onSubmit={onSubmitEmail} buttonType="solid"/>
            <p style={{cursor:'pointer',color:'blue',position:'absolute',top:'160px',right:'170px'}} onClick={onClick}>Back to Login</p>
            </div>
          
            </form> 
}

export default ForgotPassword