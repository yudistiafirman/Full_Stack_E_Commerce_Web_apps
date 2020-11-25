import React from 'react'
import FhBtnSolid from '../../../CompOfRegistration/MyButton/button'
import DesignerGirl from '../../../Support/image/desktop.svg'
import SignUp from '../Signup/SignUp'

const LeftPanel=({onClick})=>{
    return   <div className="panel left-panel">

            <div className="content">
            <h3>New here?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste aliquam vitae minima, voluptate molestias eos consequatur quas non quo porro fugiat, eius pariatur ipsa sunt repellendus similique ut iure!</p>
            <FhBtnSolid label="sign up" onSubmit={onClick} />
            </div>
            <img src={DesignerGirl} className="image" alt=""/>

            </div>
    }
    
    export default LeftPanel
        


