
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamationTriangle}from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './error.css'



const Error =({error})=>{
    return error &&<div  className="error-container">
        <FontAwesomeIcon className="icon" color="red" icon={faExclamationTriangle}/>
        <p className="error-message">{error}</p>

    </div> 
}

export default Error
