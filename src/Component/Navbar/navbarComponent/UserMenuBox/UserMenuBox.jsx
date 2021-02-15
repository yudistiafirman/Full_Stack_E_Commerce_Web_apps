import { faHeart, faSignOutAlt, faUserCog, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



const UserMenuBox=({onMouseEnter,onMouseLeave})=>{
    return <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="user-menu-box">
           <span className="icon-up"/>
           <div className="user-menu-item">
            <FontAwesomeIcon icon={faWallet} style={{width:'25px',height:'25px',color:'#456268'}}/>
            <p>Transaction</p>
           </div>
           <div className="user-menu-item">
            <FontAwesomeIcon icon={faHeart} style={{width:'25px',height:'25px',color:'#456268'}}/>
            <p>Wishlist</p>
           </div>
           <div className="user-menu-item">
            <FontAwesomeIcon icon={faUserCog} style={{width:'25px',height:'25px',color:'#456268'}}/>
            <p>Profile</p>
           </div>
           <div className="user-menu-item">
            <FontAwesomeIcon icon={faSignOutAlt} style={{width:'25px',height:'25px',color:'#456268'}}/>
            <p>Logout</p>
           </div>
           


        </div>
}

export default UserMenuBox