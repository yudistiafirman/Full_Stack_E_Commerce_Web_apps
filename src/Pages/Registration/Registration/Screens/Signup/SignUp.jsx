import React, { useEffect, useState } from 'react'
import FhInput from '../../../CompOfRegistration/MyInput/input'
import FhSocialButton from '../../../CompOfRegistration/SocialButton/SocialButton'
import {  faEye, faTimesCircle,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import '../Signup/SignUp.css'
import FhCheckBox from '../../../CompOfRegistration/checkbox/checkbox'
import FhBtnSolid from '../../../CompOfRegistration/MyButton/button'
import Axios from 'axios'
import FhLoading from '../../../CompOfRegistration/Loading/Loading'
import {Redirect, useHistory} from 'react-router-dom'
import FhToast from '../../../CompOfRegistration/toast/toast'
import { authenticate, isAuth }from '../../helper/auth'
import ErrorContainer from '../../../CompOfRegistration/errorcontainer/error'
import { ValidateEmail, ValidatePassword, ValidateUsername } from '../../helper/validator'
const SignUp =({myClass})=>{
    

    const [formData,setFormData]=useState({
        loading:false,
        username:'',
        error_username:'',
        email:'',
        error_email:'',
        password:'',
        error_password:'',
        reveal_pass:false,
        checked:false,
        error:'',
        disabled:false,
        error_input:''
    })
    let history=useHistory()
    const {error_username,error_email,error_password,disabled,error,username,email,password,reveal_pass,checked,loading,error_input}=formData
    useEffect(()=>{

        if(!ValidateEmail(email)){
            setFormData({...formData,error_email:'not valid email'})
        }else{
            setFormData({...formData,error_email:''})
        }
    },[email])
    
    useEffect(()=>{
   
        if(!ValidatePassword(password)){
            setFormData({...formData,error_password:'minimum 6 length  contain 1 number  '})
        }else{
            setFormData({...formData,error_password:''})
        }
    },[password])

  useEffect(()=>{

      if(!ValidateUsername(username)){
          setFormData({...formData,error_username:'at least contain 6 characters'})
      }else{
          setFormData({...formData,error_username:''})
      }
  },[username])
 
   const handleChange=text=>e=>{
       setFormData({...formData,[text]:e.target.value})
   }
    const onResetInput=text=>{
        setFormData({...formData,[text]:''})
    }

    const onRevealPass=()=>{
        setFormData({...formData,reveal_pass:!reveal_pass})
    }

    const handleSubmit= (e)=>{

      
        try {
            setFormData({...formData,loading:true})
            if(!email||!password||!username) throw new Error('form cannot be empty')
            if(!ValidateUsername(username))throw new Error('at least contain 6 characters')
            if(!ValidateEmail(email))throw new Error('invalid email format')
            if(!ValidatePassword(password))throw new Error('minimum 6 length at least contain 1 number ')
          
        

            Axios.post('http://localhost:2000/auth/register',{username,email,password})
            .then((response)=>{
                authenticate(response,()=>{
                    setFormData({...formData,loading:false,checked:false,password:'',email:'',username:'',error:''})
                    isAuth()&&isAuth().user_role==='admin'
                    ?history.push('/')
                    :isAuth()&&isAuth().is_verified===0?
                    history.push('/verification')
                    :history.push('/')
                })
               console.log(response)
            }).catch((err)=>{
                setFormData({...formData,error:err.response.data.message,disabled:true,loading:true})
                console.log(err)
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
              console.log(res.data)
            informParent(res)
        
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
                    informParent(response)
                })
                .catch((error)=>{
                    setFormData({...formData,error:error.response.data.message,disabled:true,loading:true})
                    setTimeout(()=>{
                        setFormData({...formData,error:'',disabled:false,loading:false})
                    },4000)
                })
    }
    const informParent = response => {
        authenticate(response, () => {
        
          isAuth()&&isAuth().user_role==='admin'
                    ?history.push('/')
                    :isAuth()&&isAuth().is_verified===0?
                    history.push('/verification')
                    :history.push('/')
        });
      };
    const facebookClick=()=>{
        console.log('this is facebook login')
      }
    const responseFacebook=(response)=>{

            sendFacebookToken(response.userID, response.accessToken)
        
      }
    const responseGoogle = (response) => {
        if(!response.error){
            sendGoogleToken(response.tokenId)
        }
    
    }
     


     

 
return <form action="" className={myClass}>
      
    <h2 className="sign-up-title">Sign up</h2>
       
     <FhSocialButton type="sign-up-facebook"  facebookClick={facebookClick}  onFailure={responseFacebook} responseFacebook={responseFacebook}/>
     
     <FhSocialButton type="sign-up-google"  onSuccessGoogle={responseGoogle} onFailureGooge={responseGoogle}/>

     {username.length>2 &&    <div className="signup-invalid-username">
             <ErrorContainer error={error_username.length>2?error_username:null}/>
        </div>
    }
    <FhInput label="username" icon={faTimesCircle} onChange={handleChange('username')} value={username} onClick={()=>onResetInput('username')} myClass={username?"reset-input display-inline":'reset-input'}/>
    {email.length>2 &&    <div className="signup-invalid-email">
             <ErrorContainer error={email.length>2?error_email:null}/>
            </div>
    }
    <FhInput label="email" icon={faTimesCircle} onChange={handleChange('email')} value={email} onClick={()=>onResetInput('email')} myClass={email?"reset-input display-inline":'reset-input'}/>
    {password.length>2 &&    <div className="signup-invalid-password">
             <ErrorContainer error={password.length>2?error_password:null}/>
            </div>
     }
    <FhInput label="password" value={password} onChange={handleChange('password')} icon={reveal_pass? faEyeSlash:faEye} onClick={()=>onRevealPass('reveal_pass')} inputType={reveal_pass?"text":'password'} myClass="hide-password"/>
   

    {/* <FhCheckBox onClick={()=>setFormData({...formData,checked:!checked})} checked={checked} /> */}
    <div class="form-check">
    <input type="checkbox" class="form-check-input" onClick={()=>setFormData({...formData,checked:!checked})}  />
    <label class="form-check-label" for="exampleCheck1">I accept <a style={{color:'blue'}}>term and condition from pejoy.com</a></label>
  </div>
    <FhBtnSolid onSubmit={handleSubmit}   label={loading?<FhLoading/>:"Sign up"} disabled={loading?true:checked?false:true} buttonType="solid"/>
    
    <FhToast error={error}/>

</form>
}

export default SignUp
  
   
    
 
     
