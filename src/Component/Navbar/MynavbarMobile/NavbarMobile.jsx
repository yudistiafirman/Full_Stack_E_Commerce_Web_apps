import React, { useState } from 'react'

import './NavbarMobile.css'
import { useLocation } from 'react-router-dom'
import { cartIcon, categoryIcon, homeIcon, userIcon } from '../../../Support/imageurl/drowdownicon'



const  NavbarMobile=({})=>{
    const [index,setIndex]=useState(0)
    const location=useLocation()
    const bottomTabData=[
        {image:homeIcon,text:'Home'},
        {image:categoryIcon,text:'Category'},
        {image:cartIcon,text:'Cart'},
        {image:userIcon,text:'Account'}
    ]
    const detectLocation=()=>{
        let currentLocation= location.pathname
        return currentLocation
    }

    if(detectLocation()!=='/register'){
        return <div className="my-navbar-mobile">
                    {
                        bottomTabData.map((value,idx)=>{

                            return <div onClick={()=>setIndex(idx)} className={idx===index?"my-navbar-mobile-icon-container active":"my-navbar-mobile-icon-container"}>
                                  <img src={value.image} alt='#'/>
                                   <p>{value.text}</p>
                                   <div className="border-tab"/>
        
                        </div>
                        })
                    }

              
              </div>
    }else{
        return null
    }
}

export default NavbarMobile