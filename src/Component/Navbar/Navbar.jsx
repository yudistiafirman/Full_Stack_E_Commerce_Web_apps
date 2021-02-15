import React,{useEffect, useRef, useState} from 'react';
import { Link,  useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { onGetDataUsers } from './../../Redux/Actions/UserProfile/userProfileAction';
import { getCartData } from './../../Redux/Actions/Products/CartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import ShoppingBag from './../../Support/Images/Shopping Bag.png';
import Logo from './../../Support/Images/new_logo.png.png'
import {square} from './../../Support/imageurl/square'
import {onShowCart,onHideCart,onHideCategory,onShowCategory,onShowShoppingCart,onHideShoppongCart,onShowUserMenu,onHideUserMenu}from './../../Redux/Actions/Modalmask/ModalmaskAction'
import UserCart from '../Navbar/navbarComponent/UserCart/UserCart';
import BrandBox from './navbarComponent/BrandBox/BrandBox';
import CategoryBox from '../Navbar/navbarComponent/CategoryBox/CategoryBox';
import UserMenuBox from '../Navbar/navbarComponent/UserMenuBox/UserMenuBox';
import { isAuth } from '../../Pages/Registration/Registration/helper/auth';
import NavbarMobileRegister from './mobileDisplay/navbarMobile';
import NavbarUserName from '../Navbar/navbarComponent/NavbarUserName/NavbarUser';
import NavbarAccBtn from '../Navbar/navbarComponent/NavbarAccBtn/NavbarAccBtn';
import NavbarGeneral from './mobileDisplayGeneral/NavbarGeneral';





const Navbar=({modalmask,onShowShoppingCart,onHideShoppongCart,onShowCategory,onHideCategory,onShowCart,onHideCart,onShowUserMenu,onHideUserMenu})=>{
    const [extension,setExtension]=useState(false)
 

    let history=useHistory()
    let location=useLocation()
    useEffect(()=>{
        extension?addExtensions():removeExtenstion()
    },[extension])


    const detectLocation=()=>{
        let currentLocation= location.pathname
        return currentLocation
    }

    const remove=useRef(null)

 
    const addExtensions=()=>{
        let bottom=remove.current
        bottom.classList.add('remove-bottom-radius')
        onShowCategory()
    }

    const removeExtenstion=()=>{
        let bottom=remove.current
        bottom.classList.remove('remove-bottom-radius')
        onHideCategory()
    }
       
    return <div className={detectLocation()==='/register'?'my-navbar':'my-navbar image-none'}>
     
        <img src={Logo} alt="#" id="rab-logo"/>
        <div className="navbar-category">
        <img src={square} onMouseEnter={()=>onShowCart()} onMouseLeave={()=>onHideCart()} style={{width:'20px',height:'20px',cursor:"pointer"}} alt="#"/>
        <p>Category</p>
        </div>
      
        <div className="my-navbar-searchbox"  ref={remove}>
            <input type="text" placeholder="what are you looking for ?"  onClick={()=>setExtension(!extension)}/>
          
            <div className="navbar-search-icon" >
            <FontAwesomeIcon icon={faSearch} style={{margin:'auto'}}   color="#ffff"/>
            </div>
       </div>
     
       <img src={ShoppingBag} onMouseEnter={()=>onShowShoppingCart()} onMouseLeave={()=>onHideShoppongCart()} id="shopping-bag" />
     
      {isAuth() && detectLocation()!=='/profile'? <NavbarUserName onMouseEnter={()=>onShowUserMenu()} onMouseLeave={()=>onHideUserMenu()}/>:<NavbarAccBtn onClick={()=>history.push('/register')}/>}
      {detectLocation()==='/'?<NavbarGeneral/> :<NavbarMobileRegister/>}
      {modalmask.showUserMenu&&<UserMenuBox onMouseEnter={()=>onShowUserMenu()}  onMouseLeave={()=>onHideUserMenu()}/>}
      {modalmask.showShoppingCart&&<UserCart onMouseLeave={()=>onShowShoppingCart} onMouseEnter={()=>onHideShoppongCart()}/>}
      {modalmask.showCatergory&& <BrandBox />}
      {modalmask.showSearchCategory && <CategoryBox onMouseEnter={()=>onShowCart()} onMouseLeave={()=>onHideCart()} /> }

       
    </div>
           
}
        
const mapStateToProps = (state) => {
    return{
        user: state.user,
        cart: state.cart,
        modalmask:state.modal
    }
}

const mapDispatchToProps = {
     onGetDataUsers, 
     getCartData,
     onShowCart,
     onHideCart,
     onShowShoppingCart,
     onHideShoppongCart,
     onShowCategory,
     onHideCategory ,
     onShowUserMenu,
     onHideUserMenu
    }

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
   










       
            

      
    
      

    
