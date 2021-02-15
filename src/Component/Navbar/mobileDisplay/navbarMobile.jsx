import { faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuSliding from '../navbarComponent/MenuSliding/MenuSliding'
import ShoppingBag from '../../../Support/Images/Shopping Bag.png'
import React from 'react'



const NavbarMobileRegister=()=>{

    return <div>
            <FontAwesomeIcon icon={faChevronLeft} id="left-icon" color="#ffff"/>
            <FontAwesomeIcon icon={faSearch} id="search-icon"   color="#ffff"/>
            <img src={ShoppingBag}  id="shopping-bag-register" />
  
                <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />

                <label class="menu__btn" for="menu__toggle">
                <span/>
               </label>
  
   
               <MenuSliding/>
               </div>
         </div>

}

export default NavbarMobileRegister