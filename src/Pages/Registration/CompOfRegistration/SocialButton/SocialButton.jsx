import React from 'react'
import '../SocialButton/SocialButton.css'
import {faFacebook}from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import GoogleLogo from '../../Support/image/5847f9cbcef1014c0b5e48c8.png'

const FhSocialButton =({type,facebookClick,responseFacebook,onFailure,onSuccessGoogle,onFailureGooge,disabled})=>{

    if(type==="facebook"){
        return  <FacebookLogin
        appId={`${process.env.REACT_APP_FACEBOOK_CLIENT}`}
         autoLoad={false}
         buttonStyle={{outline:"none",border:'none'}}
    
         fields="name,email,picture"
         onClick={facebookClick}
         cssClass="reg-social-icon facebook"
         textButton="facebook"
         onFailure={onFailure}
         callback={responseFacebook} 
         icon={<FontAwesomeIcon icon={faFacebook}/>}/
         >
    }

    if(type==="google"){
        return <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
         buttonText="Login"
          render={renderProps=> ( <div onClick={renderProps.onClick} href="#" style={{textDecoration:'none',cursor:'pointer'}} className="reg-social-icon">
          <img alt="#" src={GoogleLogo} style={{width:'15px',height:'15px',cursor:'pointer'}}/>
              <p style={{marginRight:'20px'}}>google</p>
          </div>
          
            )}
            onSuccess={onSuccessGoogle}
            onFailure={onFailureGooge}
             cookiePolicy={'single_host_origin'}
/>  
        
       
     
    }

    if(type==="sign-up-facebook"){
        return   <FacebookLogin
        appId={`${process.env.REACT_APP_FACEBOOK_CLIENT}`}
         autoLoad={false}
         buttonStyle={{outline:"none",border:'none'}}
        isDisabled={disabled}
         fields="name,email,picture"
         onClick={facebookClick}
         cssClass={disabled?"reg-social-icon-button facebook-button disabled":"reg-social-icon-button facebook-button"}
         
         textButton="facebook"
         onFailure={onFailure}
         callback={responseFacebook} 
         icon={<FontAwesomeIcon style={{marginRight:'10px'}} icon={faFacebook}/>}/
         >
    }

    if(type==="sign-up-google"){
        return <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
         buttonText="Login"
          render={renderProps=> ( <button style={{textDecoration:'none',outline:'none',cursor:disabled?"not-allowed":"pointer"}} disabled={disabled}  onClick={renderProps.onClick} className="reg-social-icon-button google-button">
    
          <img alt="#" src={GoogleLogo} className="google-image"/>
          <p style={{marginRight:'15px'}} >google</p>
   </button>
          
            )}
            onSuccess={onSuccessGoogle}
            onFailure={onFailureGooge}
            cookiePolicy={'single_host_origin'}
/>  
        
        
        

    }
}

export default FhSocialButton