import React from 'react'
import {homeIcon,categoryIcon,userIcon}from '../../../../Support/imageurl/drowdownicon'

const MenuSliding=()=>{


    return  <ul id="menu">
                <a href="#">
                <li><img src={homeIcon} alt="#"/> <span>Home</span>  </li>
                </a>
                <a href="#">
                <li> <img src={categoryIcon} alt="#"/><span>Category</span></li>
                </a>
                <a href="#">
                <li> <img src={userIcon} alt="#"/><span>Account</span></li>
                </a>
                </ul>
   
}

export default MenuSliding
        
   
    
   
  
       
   

