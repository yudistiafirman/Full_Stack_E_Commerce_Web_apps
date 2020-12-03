import React, { useState } from 'react'
import FhBtnSolid from '../../../CompOfRegistration/MyButton/button'
import FhInput from '../../../CompOfRegistration/MyInput/input'
import './ResetPass.css'
import {  faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import FhLoading from '../../../CompOfRegistration/Loading/Loading'
import Axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const ResetPassword =()=>{

    const [formReset,setFormReset]=useState({
        password_1:'',
        password_2:'',
        reveal_pass_1:false,
        reveal_pass_2:false,
        error:'',
        loading:false
        

    })
    let params=useParams()
    let history=useHistory()
    const {password_1,password_2,reveal_pass_1,reveal_pass_2,error,loading}=formReset
    const handleChange = text => e => {
        setFormReset({ ...formReset, [text]: e.target.value });
    }
    const onRevealPass=text=>{
        setFormReset({...formReset,[text]:!formReset[text]})
    }

    const onResetPassword=()=>{
        try {
            if(password_1!==password_2)throw new Error('password doesnt match')
            if(!password_1||!password_2)throw new Error('form empty')
        
    
            setFormReset({...formReset,loading:true})
            Axios.post('http://localhost:2000/auth/resetpassword/'+params.token,{newPassword:password_1})
            .then((response)=>{
                console.log(response.data.message)
                    Swal.fire({
                        title:'Success',
                        text:response.data.message,
                        icon:'success',
                        confirmButtonText:'please sign in',
                        timer:2000
                    })
                    window.location="http://localhost:3000/register"
                
            }).catch((err)=>{
                Swal.fire({
                    title:'Error',
                    text:err.response.data.message,
                    icon:'error',
                    confirmButtonText:'cool?',
                    timer:2000
                })
                
            })
        } catch (error) {
            Swal.fire({
                title:'Error',
                text:error.message,
                icon:'error',
                confirmButtonText:'cool?',
                timer:2000
            })
            setFormReset({...formReset,loading:false,password_1})
         
        }
    }
    console.log(password_1)
    return <div className="reset-container">
        <div className="reg-reset-container">
        <p className="reset-title">    Buat kata Sandi Baru   </p>
        <form action="">
        <p className="reset-error">{error?error:'password must at least has 6 character and contain number'}</p>
            <FhInput label="password" icon={reveal_pass_1? faEyeSlash:faEye}value={password_1} onChange={handleChange('password_1')} onClick={()=>onRevealPass('reveal_pass_1')} inputType={reveal_pass_1?"text":'password'} myClass="reset-hide-password"/>
            <FhInput label="confirm password" icon={reveal_pass_2? faEyeSlash:faEye}value={password_2} onChange={handleChange('password_2')} onClick={()=>onRevealPass('reveal_pass_2')} inputType={reveal_pass_2?"text":'password'} myClass="reset-hide-password"/>
            <FhBtnSolid onSubmit={onResetPassword} disabled={loading?true:password_1.length<7?true:false} label={loading?<FhLoading/>:"save"} />
        </form>
     
        </div>

    </div>
}


export default ResetPassword