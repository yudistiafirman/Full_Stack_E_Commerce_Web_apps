import React, {  useState } from 'react'
import '../Signin/style.css'
import {  faEye, faTimesCircle,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import FhInput from '../../../CompOfRegistration/MyInput/input'
import FhBtn from '../../../CompOfRegistration/MyButton/button'
import FhSocialButton from '../../../CompOfRegistration/SocialButton/SocialButton'
import FhLoading from '../../../CompOfRegistration/Loading/Loading'
import LoginToast from '../../../CompOfRegistration/toast/logintoast'
import Axios from 'axios'

const SignIn = ({onClick,myClass})=>{

    const [formLogin,setFormLogin]=useState({
        loading:false,
        email:'',
        password:'',
        reveal_pass:false,
        error:'',

    })
  
    const {error,email,password,reveal_pass,loading}=formLogin

    const handleChange = text => e => {
        setFormLogin({ ...formLogin, [text]: e.target.value });
    }
    const onResetInput=text=>{
    setFormLogin({...formLogin,[text]:''})
    }

    const handleSubmit= (e)=>{
    e.preventDefault()

    try {
        setFormLogin({...formLogin,loading:true})
        if(!email||!password) throw new Error('input field must be filled up')

        Axios.post('http://localhost:2000/auth/login',{email,password})
        .then((response)=>{
            console.log(response)
            setFormLogin({...formLogin,loading:false,password:'',email:'',error:''})
        }).catch((err)=>{

            
            setFormLogin({...formLogin,error:err.response.data.message,loading:true})
            setTimeout(()=>{
                setFormLogin({...formLogin,error:'',loading:false})
            },4000)
          

        })
      
       
    } catch (error) {
        setFormLogin({...formLogin,error:error.message,loading:true})
        setTimeout(()=>{
           setFormLogin({...formLogin,error:'',loading:false})
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
        setFormLogin({...formLogin,error:error.res.data.message,disabled:true,loading:true})
        setTimeout(()=>{
        setFormLogin({...formLogin,error:'',disabled:false,loading:false})
        },4000)
      
      });
  };

  const sendFacebookToken =  (userID, accessToken) => {
    Axios.post('http://localhost:2000/auth/register/facebook',{userID,accessToken})
            .then((response)=>{
                console.log(response.data)
            })
            .catch((error)=>{
                setFormLogin({...formLogin,error:error.response.data.message,disabled:true,loading:true})
                setTimeout(()=>{
                    setFormLogin({...formLogin,error:'',disabled:false,loading:false})
                },4000)
            })
}
    const facebookClick=()=>{
      console.log('this is facebook login')
    }
    const responseFacebook=(response)=>{
        if(!response.status==="unknown"){
            sendFacebookToken(response.userID, response.accessToken)
        }
    }

    const responseGoogle = (response) => {
        if(!response.error){
            sendGoogleToken(response.tokenId)
        }
      
      }

      
    const onRevealPass=text=>{
        setFormLogin({...formLogin,[text]:!formLogin[text]})
    }
    return  <form className={myClass}>
        
            <h2 className="title">Sign in</h2>

            <FhInput label="email" icon={faTimesCircle} onChange={handleChange('email')} value={email} onClick={()=>onResetInput('email')} myClass={email?"reset-input display-inline":'reset-input'}/>
            <FhInput label="password" icon={reveal_pass? faEyeSlash:faEye}value={password} onChange={handleChange('password')} onClick={()=>onRevealPass('reveal_pass')} inputType={reveal_pass?"text":'password'} myClass="hide-password"/>
    
            <div className="forgot-text-container">
                <p style={{cursor:'pointer'}} onClick={onClick}>forgot password?</p>
            </div>


           
            <FhBtn onSubmit={handleSubmit}   label={loading?<FhLoading/>:"Sign in"} disabled={loading?true:false} buttonType="solid"/>

            <p className="social-text">Or Sign in with social platforms</p>

            <div className="social-media" >
            <FhSocialButton type="facebook" onFailure={responseFacebook} facebookClick={facebookClick} responseFacebook={responseFacebook}/>
           <FhSocialButton type="google" onFailureGooge={responseGoogle} onSuccessGoogle={responseGoogle}/>
            </div>
            <LoginToast error={error}/>
        </form>

}

export default SignIn