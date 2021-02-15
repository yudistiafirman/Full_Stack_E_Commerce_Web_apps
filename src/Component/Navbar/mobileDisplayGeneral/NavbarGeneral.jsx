import { faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './NavbarGeneral.css'
import MobileLogo from '../../../Support/Images/new_logo.png.png'
import {isAuth}from '../../../Pages/Registration/Registration/helper/auth'


const NavbarGeneral=({})=>{
    return <div className="navbar-general">
    
          {!isAuth()&&  <div className="general-signin">
                <FontAwesomeIcon color="#fff" style={{width:'20px',height:'20px'}} icon={faSignInAlt}/>
                <p>Enter</p>

            </div>}
            <div className="navbar-general-searchbox"  >
            <input type="text" placeholder="what are you looking for ?" />
          
            <div className="navbar-general-search-icon" >
            <FontAwesomeIcon icon={faSearch} style={{margin:'auto'}}   color="#ffff"/>
            </div>
       </div>
       <img src={MobileLogo} alt="#" id="rab-logo-general"/>

          </div>
}


export default NavbarGeneral