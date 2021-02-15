import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



const NavbarAccBtn=({onClick})=>{
    return  <button onClick={onClick} ><FontAwesomeIcon icon={faSignInAlt} />Enter</button>
}

export default NavbarAccBtn