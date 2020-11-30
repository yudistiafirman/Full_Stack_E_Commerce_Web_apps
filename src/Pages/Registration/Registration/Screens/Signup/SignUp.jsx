import React, { useState } from 'react'
import FhInput from '../../../CompOfRegistration/MyInput/input'
import FhSocialButton from '../../../CompOfRegistration/SocialButton/SocialButton'
import {  faEye, faTimesCircle,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import '../Signup/SignUp.css'
import FhCheckBox from '../../../CompOfRegistration/checkbox/checkbox'
import FhBtnSolid from '../../../CompOfRegistration/MyButton/button'
import Axios from 'axios'
import FhLoading from '../../../CompOfRegistration/Loading/Loading'
import {Redirect} from 'react-router-dom'
import FhToast from '../../../CompOfRegistration/toast/toast'


const SignUp =({myClass})=>{
    

    const [formData,setFormData]=useState({
        loading:false,
        username:'',
        email:'',
        password:'',
        reveal_pass:false,
        checked:false,
        error:'',
        disabled:false
    })
    
      

    

    const {disabled,error,username,email,password,reveal_pass,checked,loading}=formData
  
 
    const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
}
    
    const onResetInput=text=>{
        setFormData({...formData,[text]:''})
    }

    const onRevealPass=text=>{
        setFormData({...formData,[text]:!formData[text]})
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
 
        try {
            setFormData({...formData,loading:true})
            if(!username||!email||!password)  throw new Error('input field must be filled up')
    
            Axios.post('http://localhost:2000/auth/register',{username,email,password})
            .then((response)=>{
                console.log(response)
                setFormData({...formData,loading:false,checked:false,password:'',email:'',username:'',error:''})
            }).catch((err)=>{
                setFormData({...formData,error:err.response.data.message,disabled:true,loading:true})
                setTimeout(()=>{
                    setFormData({...formData,error:'',disabled:false,loading:false})
                },4000)
              
   
            })
          
           
        } catch (error) {
            console.log(error)
            setFormData({...formData,error:error.message,disabled:true,loading:true})
            setTimeout(()=>{
               setFormData({...formData,error:'',disabled:false,loading:false})
           },4000)
         
            
        }
    
    }

    const sendGoogleToken = tokenId => {
        Axios
          .post(`http://localhost:2000/auth/register/google`, {
            idToken: tokenId
          })
          .then(res => {
            console.log(res.data);
        
          })
          .catch(error => {
            setFormData({...formData,error:error.res.data.message,disabled:true,loading:true})
            setTimeout(()=>{
            setFormData({...formData,error:'',disabled:false,loading:false})
            },4000)
          
          });
      };

      const sendFacebookToken =  (userID, accessToken) => {
        Axios.post('http://localhost:2000/auth/register/facebook',{userID,accessToken})
                .then((response)=>{
                    console.log(response.data)
                })
                .catch((error)=>{
                    setFormData({...formData,error:error.response.data.message,disabled:true,loading:true})
                    setTimeout(()=>{
                        setFormData({...formData,error:'',disabled:false,loading:false})
                    },4000)
                })
    }

    const facebookClick=()=>{
        console.log('this is facebook login')
      }
    const responseFacebook=(response)=>{

        sendFacebookToken(response.userID, response.accessToken)
      }
    const responseGoogle = (response) => {
        if(!response.error){}
        sendGoogleToken(response.tokenId)
    }
     


     

 
return <form action="" className={myClass}>
      
    <h2 className="title">Sign up</h2>
       
     <FhSocialButton type="sign-up-facebook" facebookClick={facebookClick}  onFailure={responseFacebook} responseFacebook={responseFacebook}/>
     
     <FhSocialButton type="sign-up-google" onSuccessGoogle={responseGoogle} onFailureGooge={responseGoogle}/>
   

    <FhInput label="username" icon={faTimesCircle} onChange={handleChange('username')} value={username} onClick={()=>onResetInput('username')} myClass={username?"reset-input display-inline":'reset-input'}/>
    <FhInput label="email" icon={faTimesCircle} onChange={handleChange('email')} value={email} onClick={()=>onResetInput('email')} myClass={email?"reset-input display-inline":'reset-input'}/>
    <FhInput label="password" value={password} onChange={handleChange('password')} icon={reveal_pass? faEyeSlash:faEye} onClick={()=>onRevealPass('reveal_pass')} inputType={reveal_pass?"text":'password'} myClass="hide-password"/>
   

    <FhCheckBox disabled={disabled} onClick={()=>setFormData({...formData,checked:!checked})} checked={checked} />

    <FhBtnSolid onSubmit={handleSubmit}   label={loading?<FhLoading/>:"Sign up"} disabled={loading&&checked?true :checked?false:true} buttonType="solid"/>
    
    <FhToast error={error}/>

</form>
}

export default SignUp
  
   
    
 
     
