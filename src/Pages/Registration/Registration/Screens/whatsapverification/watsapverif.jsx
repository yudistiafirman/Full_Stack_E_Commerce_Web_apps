import React, { useRef, useState } from 'react'
import './watsap.css'
import Fhinput from '../../../CompOfRegistration/MyInput/input'
import ReCAPTCHA from "react-google-recaptcha";
import FhButton from '../../../CompOfRegistration/MyButton/button'
import FhLoading from '../../../CompOfRegistration/Loading/Loading'
import FhCard from '../../../CompOfRegistration/Card/Card';
import Modal from '../../../CompOfRegistration/Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';

const PhoneVerification =()=>{
        const [formData,setFormData]=useState({
            loading:false,
            disabled:true,
            error_response:'',
        
            captca_token:'',    
            phone:'',
          
        })

        const [modal,setModal]=useState({
            open:false,
            message:'',
            errormodal:''
         
        })
        const reCaptcha = useRef()
        const {loading,disabled,error_response,phone,captca_token,error}=formData
        const {open,message,errormodal}=modal

 
        
        const onChangePhone=(e)=>{
                if(e.target.value.length>12){
                    
                }else{
                    setFormData({...formData,phone:e.target.value,error_response:''})
       
                }
             
        }

      const onSubmitPhone=(e)=>{
            e.preventDefault()
            setFormData({...formData,loading:true})
            let numberToveri=`+62${phone}`
            Axios.post('http://localhost:2000/auth/phoneverification',{captchaToken:captca_token,phonenumber: Number(numberToveri),id:1})
            .then((response)=>{
                console.log(response.data)
                setModal({...modal,open:!open,message:response.data.message})
                setFormData({...formData,loading:false,disabled:false,captca_token:'',error_response:''})
            })
            .catch(error=>{
              
                setFormData({...formData,loading:false,disabled:true,captca_token:'',error_response:error.response.data.message})
                reCaptcha.current.reset()
            })
           
                
         
      }
 
    return   <div className="ver-phone-container">
          <Modal open={open} onClickModal={()=>setModal({...modal,open:!open})} errormessage={errormodal}  message={message}/>
                <p className="ver-title"> Please insert your phone number</p>

                 <div className="ver-form-container">
                     <div className="ver-code-area">
                     <div className="ver-label">kode area</div>
                      <p >+62</p>
                     </div>
                     <form  action="">
                         <Fhinput onChange={onChangePhone} value={phone} label="nomor hape" inputType="number" maximum="12" />
                     </form>
                   
                </div>
                
              
                  <div className={phone.length>0&& phone.length<10?"verify-error":error_response?"verify-error":"display-none"}>
                  <FontAwesomeIcon style={{color:'red',marginRight:'17px',marginLeft:'5px'}} icon={faExclamationTriangle}/>     
                  <p className="verify-error-message">{error_response?error_response:"too short for phone number"}</p> 
              
                 </div>
              
                        
           
            <div className="recaptcha-container">
              <ReCAPTCHA
              ref={reCaptcha}
              sitekey={`${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`}
              onChange={(token)=>setFormData({...formData,captca_token:token,disabled:false})}
              onExpired={e=>setFormData({...formData,captca_token:'',disabled:true})}   />
           </div>
          
         
  

          <div className="ver-button-container">
             <div style={{margin:'10px'}}><FhButton   label="Later"/></div>
             <div style={{margin:'10px'}}><FhButton onSubmit={onSubmitPhone} disabled={captca_token&&phone.length>9?false:disabled?true:false} label={loading?<FhLoading/>:'verify'}/></div>
        </div>

      
       </div>
    }
       
    export default PhoneVerification
            
           
       
 



          



              
              
           
     