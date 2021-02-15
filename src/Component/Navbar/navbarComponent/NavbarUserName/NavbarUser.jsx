import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useLocation } from 'react-router-dom'
import './NavbarUser.css'
import {isAuth}from '../../../../Pages/Registration/Registration/helper/auth'


const NavbarUserName=({onMouseEnter,onMouseLeave})=>{
    const location=useLocation()

    const detectLocation=()=>{
        const currentLocation= location.pathname
        return currentLocation
    }
    if(detectLocation()!=='/register'){
        return <div className="user-email" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <FontAwesomeIcon icon={faUser}/>
    <p>{isAuth().user_name?isAuth().user_name.slice(0,12):isAuth().email.slice(0,12)}...</p>
        <FontAwesomeIcon id='icon-down' icon={faChevronDown}/>
    </div>
    }else{
        return null
    }
   
}

export default NavbarUserName