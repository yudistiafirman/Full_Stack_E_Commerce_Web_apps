import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Profile from '../Profile/ProfilePages/UserProfile/UserProfile'
import { isAuth } from '../Registration/Registration/helper/auth'

import ProfileNav from './ProfileNav/ProfileNav'
import Cart from './ProfilePages/Cart/Cart'
import WishList from './ProfilePages/WishList/WishList'




const ProfileRoute=()=>{


   
if(!isAuth()){
return <Redirect to="/"/>
}
   return <BrowserRouter>
<ProfileNav/> 

   <Switch>
<Route exact path='/profile' component={Profile}/>
<Route path='/profile/cart' component={Cart}/>
<Route path='/profile/wishlist' component={WishList}/>



</Switch>

   
   </BrowserRouter>








}

export default ProfileRoute