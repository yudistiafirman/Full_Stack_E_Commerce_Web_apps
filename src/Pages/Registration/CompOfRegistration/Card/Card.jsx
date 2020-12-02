import React from 'react'
import './Card.css'
import Fhbutton from '../MyButton/button'

const FhCard =({title,title_2,description,image})=>{

   
    
   return   <div className="fh-card-container">
    
              <div id="card">
                <p className="fh-card-title">{title}</p>
                <img src={image} alt="#"/>

                  <div id="content">
                   <p className="fh-card-title">{title_2}</p>
                   <p className="fh-card-desc">{description}</p>
                   
                
               
                 </div>
             </div>
           </div> 
}


export default FhCard