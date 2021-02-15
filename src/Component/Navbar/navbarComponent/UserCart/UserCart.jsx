import React from 'react'
import './UserCart.css'
import EmptyCart from '../../../../Support/Images/Empty Cart.webp';

const UserCart =({onMouseEnter,onMouseLeave})=>{
   return <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="user-cart">
    <span class='icon-up'/>
    <img src={EmptyCart} alt="#"/>
    <p style={{fontWeight:'bold'}}>Why is it still empty?</p>
    <p>are your sure to let your cart crying?</p>
    <p>without giving them some stuff to carry?</p>
   </div>
}


export default UserCart