import React, { useEffect, useRef, useState } from 'react'
import FhCard from '../../../CompOfRegistration/Card/Card'
import PhoneVerification from '../whatsapverification/watsapverif'
import './verifcation.css'
import {cardData}from '../../helper/data'
import FhBtnSolid from '../../../CompOfRegistration/MyButton/button'

const Verification =()=>{
    const [slideIndex,setSlideIndex]=useState(0)
 
    useEffect(()=>{
        const slider=(index)=>{
            let slide=document.getElementById('slider')
            slide.style.transitionDuration='0.5s'
            slide.style.transform=`translate(-${330*index}px)`
        }
        if(slideIndex<cardData.length){
            slider(slideIndex)
        }
       
     
    },[slideIndex])

 

  

 if(slideIndex<0){
     window.location="http://localhost:3000"
 }
 if(slideIndex>cardData.length-1){
     return <div className="ver-container">
         <PhoneVerification/>
     </div>
 }
    return <div className="ver-container">
                 
            <div style={{overflow:'hidden',position:'absolute',width:'330px',height:'80%'}}>

                <div id="slider" style={{width:'330px',height:'80%',display:'flex',marginTop:'30px'}}>
                     {
                         cardData.map((value,index)=>{
                           return <FhCard key={index} title={value.title} title_2={value.title_2} image={value.image} description={value.desc} trans_label={value.left} solid_label={value.right} leftClick={()=>setSlideIndex(slideIndex-1)} rightClick={()=>setSlideIndex(slideIndex+1)}/>
                  
                       })
                      }
              </div> 
                   <div className="dot-container">
                          {
                             cardData.map((val,idx)=>{
                           return  <span key={idx} className={idx===slideIndex?"dot active":'dot'}></span>
                         })
                         }
                  </div>
              
                 <div style={{display:'flex',justifyContent:'space-around'}}>
                      <div>
                         <FhBtnSolid label={slideIndex>0?"Kembali":"Nanti Saja"} onSubmit={()=>setSlideIndex(slideIndex=>slideIndex-1)}/>
                    </div>
          

                     <div>
                  <FhBtnSolid label={slideIndex===cardData.length-1?"Verifikasi":"Lanjut"} onSubmit={()=>setSlideIndex(slideIndex=>slideIndex+1)}/>      
                  </div>
              </div>
            </div>
            
            <a style={{textDecoration:'none'}} className={slideIndex===0?"displaynone":"prev"} onClick={()=>setSlideIndex(slideIndex-1)}>&#10094;</a>
            <a style={{textDecoration:'none'}} className={slideIndex===cardData.length-1?"displaynone":"next"} onClick={()=>setSlideIndex(slideIndex+1)}>&#10095;</a>
           
    </div>
}

export default Verification
       
            
           
                   
                

