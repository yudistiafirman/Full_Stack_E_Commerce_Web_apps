import React, { useState } from 'react'
import '../Registration/registration.css'
import ForgotPassword from './Screens/forgotPassword/ForgotPass'
import LeftPanel from './Screens/LeftPanel/leftPanel'
import RigthPanel from './Screens/RigthPanel/rightPanel'
import SignIn from './Screens/Signin/Signin'
import SignUp from './Screens/Signup/SignUp'







const Registration =()=>{
  
   

    const [signUp,setSignUp]=useState(false)
    const [isForgot,setIsForgot]=useState(false)
    
    return (
        <div >
        <div className={signUp?"reg-container sign-up-mode":'reg-container'}>
            <div className="forms-container">
                <div className="signin-signup">

                <SignIn myClass={isForgot?"sign-in-form when-forgot-appear":"sign-in-form"} 
                      onClick={()=>setIsForgot(!isForgot)}/>
                <SignUp myClass="sign-up-form"/>

                 </div>
           </div>

            <div className="panels-container">

                <LeftPanel onClick={()=>setSignUp(!signUp)}/>
                <RigthPanel onClick={()=>setSignUp(!signUp)}/>

            </div>

            <div className={signUp ===true && isForgot===true?" forgotContainer when-sign-up-mode afterForgotContainer":isForgot?" afterForgotContainer forgotContainer":"forgotContainer"}>
               <ForgotPassword onClick={()=>setIsForgot(!isForgot)}/>
            </div>

    </div>
</div>
    )
}


export default Registration

 






     
        


          
           
                

    
    
      
      
          
         
           
                