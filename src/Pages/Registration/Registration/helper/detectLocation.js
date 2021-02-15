import React from 'react'
import { useLocation } from 'react-router-dom'






let location= useLocation()

export const detectLocation=()=>{

    let currentLocation= location.pathname
    return currentLocation
}