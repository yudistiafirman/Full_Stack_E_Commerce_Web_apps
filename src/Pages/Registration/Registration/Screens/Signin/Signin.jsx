import React, {  useEffect, useState } from 'react'
import '../Signin/style.css'
import {  faEye, faTimesCircle,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import FhInput from '../../../CompOfRegistration/MyInput/input'
import FhBtn from '../../../CompOfRegistration/MyButton/button'
import FhSocialButton from '../../../CompOfRegistration/SocialButton/SocialButton'
import FhLoading from '../../../CompOfRegistration/Loading/Loading'
import LoginToast from '../../../CompOfRegistration/toast/logintoast'
import {authenticate,isAuth}from '../../helper/auth'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import Error from '../../../CompOfRegistration/errorcontainer/error'
import { ValidateEmail, ValidatePassword } from '../../helper/validator'

const SignIn = ({onClick,myClass})=>{

    const [formLogin,setFormLogin]=useState({
        loading:false,
        email:'',
        error_email:'',
        password:'',
        error_password:'',
        reveal_pass:false,
        error:'',
        enabled:false

    })
    let history=useHistory()
  
    const {error,email,password,reveal_pass,loading,enabled,error_email,error_password}=formLogin
    
useEffect(()=>{
    let validateMail=ValidateEmail(email)
    
    if(!validateMail){
        setFormLogin({...formLogin,error_email:'invalid email format',enabled:false})
    }else{
        setFormLogin({...formLogin,enabled:true,error_email:''})
    }

},[email])
useEffect(()=>{
       

let validatePass=ValidatePassword(password)
if(!validatePass){
    setFormLogin({...formLogin,enabled:false,error_password:' minimum 6 length contain 1 number'})
}else{
    setFormLogin({...formLogin,enabled:true,error_password:''})
}
    },[password])



        const handleChange=text=>e=>{
            setFormLogin({...formLogin,[text]:e.target.value})
        }
    const onResetInput=()=>{
    setFormLogin({...formLogin,email:''})
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        setFormLogin({...formLogin,loading:true})
   

        Axios.post('http://localhost:2000/auth/login',{email,password})
        .then((response)=>{
            authenticate(response,()=>{
                setFormLogin({...formLogin,loading:false,password:'',email:'',error:''})
                isAuth()&&isAuth().user_role==='admin'
                ?history.push('/')
                :isAuth()&&isAuth().is_verified===0?
                history.push('/verification')
                :history.push('/')
            })
         
        }).catch((err)=>{
       
            setFormLogin({...formLogin,error:err.response.data.message,loading:true})
            setTimeout(()=>{
                setFormLogin({...formLogin,error:'',loading:false})
            },4000)

        })
    }
  

              
            
          

      
       
   


const sendGoogleToken = tokenId => {
    Axios
      .post(`http://localhost:2000/auth/register/google`, {
        idToken: tokenId
      })
      .then(res => {
          console.log(res.data)
            informParent(res)
    
      })
      .catch(error => {
        
        setFormLogin({...formLogin,error:error.res.data.message,disabled:true,loading:true})
        setTimeout(()=>{
        setFormLogin({...formLogin,error:'',disabled:false,loading:false})
        },4000)
      
      });
  };
  const informParent = response => {
    authenticate(response, () => {
    
      isAuth()&&isAuth().user_role==='admin'
                ?window.location='/'
                :isAuth()&&isAuth().is_verified===0?
                history.push('/verification')
                :history.push('/')
    });
  };

 
  
   

    const facebookClick=()=>{
      console.log('this is facebook login')
    }
    const responseFacebook=(response)=>{
      
      
         
            Axios.post('http://localhost:2000/auth/register/facebook',{userID:response.userID,accessToken:response.accessToken})
            .then((response)=>{
           informParent(response)
            })
            .catch((error)=>{
                // setFormLogin({...formLogin,error:error.response.data.message,disabled:true,loading:true})
                setTimeout(()=>{
                    setFormLogin({...formLogin,error:'',disabled:false,loading:false})
                },4000)
            })
        }
    

    const responseGoogle = (response) => {
        if(!response.error){
            sendGoogleToken(response.tokenId)
        }
      
      }

      
    const onRevealPass=()=>{
        setFormLogin({...formLogin,reveal_pass:!reveal_pass})
    }

    
    return  <form className={myClass} >
        
            <h2 className="title">Sign in</h2>
         
            {email.length>2 &&    <div className="invalid-email">
             <Error error={email.length>2?error_email:null}/>
            </div>
           }
            <FhInput label="email" icon={faTimesCircle} onChange={handleChange('email')} value={email} onClick={onResetInput} myClass={email?"reset-input display-inline":'reset-input'}/>
            
            {password.length>2 &&    <div className="invalid-password">
             <Error error={password.length>2?error_password:null}/>
            </div>
           }
            <FhInput label="password" icon={reveal_pass? faEyeSlash:faEye}value={password} onChange={handleChange('password')} onClick={onRevealPass} inputType={reveal_pass?"text":'password'} myClass="hide-password"/>
    
            <div className="forgot-text-container">
                <p style={{cursor:'pointer'}} onClick={onClick}>forgot password?</p>
            </div>


           
            <FhBtn onSubmit={handleSubmit}   label={loading?<FhLoading/>:"Sign in"} disabled={error_email||error_password?true:loading?true:false} buttonType="solid"/>

            <p className="social-text">Or Sign in with social platforms</p>

            <div className="social-media" >
            <FhSocialButton type="facebook" onFailure={responseFacebook} facebookClick={facebookClick} responseFacebook={responseFacebook}/>
           <FhSocialButton type="google" onFailureGooge={responseGoogle} onSuccessGoogle={responseGoogle}/>
            </div>
            <LoginToast error={error}/>
        </form>

}

export default SignIn