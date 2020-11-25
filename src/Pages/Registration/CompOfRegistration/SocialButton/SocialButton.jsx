import React from 'react'
import '../SocialButton/SocialButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import GoogleLogo from '../../Support/image/5847f9cbcef1014c0b5e48c8.png'

const FhSocialButton =({type})=>{

    if(type==="facebook"){
        return <a href="#" style={{textDecoration:'none'}} className="reg-social-icon facebook">
        <FontAwesomeIcon icon={faFacebook} />
        <p style={{marginRight:'20px'}}>facebook</p>
    </a>
    }

    if(type==="google"){
        return   <a href="#" style={{textDecoration:'none'}} className="reg-social-icon">
        <img src={GoogleLogo} style={{width:'15px',height:'15px'}}/>
            <p style={{marginRight:'20px'}}>google</p>
        </a>
     
    }

    if(type==="sign-up-facebook"){
        return  <a style={{textDecoration:'none'}} className="reg-social-icon-button facebook-button" >
            
        <FontAwesomeIcon style={{marginRight:'38px',extDecoration:'none'}} icon={faFacebook} />
    
        
        <p style={{marginRight:'-25px'}}>sign up with facebook</p>
    
   
    </a>
    }

    if(type==="sign-up-google"){
        return <a style={{textDecoration:'none'}} className="reg-social-icon-button google-button">
    
        <img src={GoogleLogo} className="google-image"/>
        <p style={{paddingLeft:'15px'}}>sign up with google</p>
 </a>

    }
}

export default FhSocialButton