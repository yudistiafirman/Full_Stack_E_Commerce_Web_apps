import React from 'react'
import FhBtnSolid from '../../../CompOfRegistration/MyButton/button'
import ManWithRocket from '../../../Support/image/undraw_launching_125y.svg'
const RigthPanel=({onClick})=>{

    return  <div className="panel right-panel">
    <div className="content">
         <h3 className="reg-header">One of us?</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste aliquam vitae minima, voluptate molestias eos consequatur quas non quo porro fugiat, eius pariatur ipsa sunt repellendus similique ut iure!</p>
            <FhBtnSolid buttonType="transparent" label="Sign In" onSubmit={onClick}/>
     </div>
    <img src={ManWithRocket} className="image" alt=""/>
   </div>

}

export default RigthPanel

