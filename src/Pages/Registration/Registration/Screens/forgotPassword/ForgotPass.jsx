import React, { useState } from 'react'
import FhBtnSolid from '../../../CompOfRegistration/MyButton/button'
import FhInput from '../../../CompOfRegistration/MyInput/input'
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { text } from '@fortawesome/fontawesome-svg-core'
import FhLoading from '../../../CompOfRegistration/Loading/Loading'

const ForgotPassword =({onClick})=>{

    const [reset,setReset]=useState(false)
    const [email,setEmail]=useState('')

    const [loading,setLoading]=useState(false)

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

             <FhInput label="email" icon={faTimesCircle} onChange={onChangeEmail} value={email} onClick={onClickEmail} myClass={reset?"reset-input display-inline":'reset-input'}/>
            <div style={{display:'flex',justifyContent:'space-around',width:'80%'}}>
            <FhBtnSolid label={loading?<FhLoading/>:'submit'} disabled={!email?true:loading?true:false} onSubmit={onSubmitEmail} buttonType="solid"/>
            <FhBtnSolid label="Log in" onSubmit={onClick} buttonType="solid"/>
            </div>
          
            </form>
}

export default ForgotPassword