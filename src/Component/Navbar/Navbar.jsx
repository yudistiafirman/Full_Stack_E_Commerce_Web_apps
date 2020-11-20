import React, { Component } from 'react';
import Link from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown, faStream } from '@fortawesome/free-solid-svg-icons';

import './../../Support/CSS-Utils/utils.css';
import './Navbar.css';

import MenuIcon from './../../Support/Images/Menu.png';
import ShoppingBag from './../../Support/Images/Shopping Bag.png';
import TShirtIcon from './../../Support/Images/T-Shirt.png';
import PantsIcon from './../../Support/Images/Trousers.png';
import ShirtIcon from './../../Support/Images/Shirt.png';
import JacketIcon from './../../Support/Images/Jacket.png';
import WalletIcon from './../../Support/Images/Wallet.png';
import HatIcon from './../../Support/Images/Hat.png';
import EmptyCart from './../../Support/Images/Empty Cart.webp';
import HistoryTransactionIcon from './../../Support/Images/Invoice.png';
import UserIcon from './../../Support/Images/User.png';
import Wishlist from './../../Support/Images/Wishlist.png';

export class Navbar extends Component {
    state = {
        loginStatus: true,
        loginErrorMessage: '',
        openDropdown: false,
        openCart: false,
        openAccount: false
    }

    render(){
        return(
            // NAVBAR
            <div>
                {/* Mobile Section */}
                <div className="pa-navbar-mobile-display px-0 py-4">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-1" style={{zIndex: 1}}>
                                <img src={MenuIcon} width="20" />
                            </div>
                            <div className="col-10 col-md-11">
                                <div className="input-group">
                                    <input type="text" placeholder="Kamu lagi cari apa?" className="form-control bg-light border border-light pa-input" style={{width: 0, height: 37, borderRadius: "5px 0px 0px 5px", zIndex: 1}} />
                                    <div className="input-group-prepend">
                                        <span className="bg-light" style={{width: 20, marginLeft: -1, marginRight: 0, borderRadius: "0px 5px 5px 0px", zIndex: 2}}>
                                            <div className="row">
                                                <div className="px-2 py-1 pa-bg-main-dark rounded pa-light pa-clickable-element" style={{marginLeft: 0, marginRight: 6, marginTop: 3, marginBottom: 0}}> 
                                                    <FontAwesomeIcon icon={faSearch} className="fa-md" />
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Desktop Section */}
                <div className="pa-navbar-desktop-display px-0 py-4 pa-bg-main-light">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-2 align-self-center">
                                <img src="https://www.static-src.com/frontend/static/img/logo-blibli-white.f8255fc.svg" width="150" />
                            </div>
                            <div className="col-7">
                                <div className="input-group">
                                    <input type="text" placeholder="Kamu lagi cari apa?" className="form-control bg-light border border-light pa-input" style={{width: 0, height: 44, borderRadius: "5px 0px 0px 5px", zIndex: 1}} />
                                    <div className="input-group-prepend">
                                        <span className="bg-light" style={{width: 155, marginLeft: -1, marginRight: 0, borderRadius: "0px 5px 5px 0px", zIndex: 2}}>
                                            <div className="row">
                                                <div onClick={() => this.setState({openDropdown: !this.state.openDropdown, openCart: false, openAccount: false})} className="px-3 py-1 border border-left-1 border-right-0 border-top-0 border-bottom-0 pa-dark-grey pa-clickable-element navbar-search-dropdown" style={{marginLeft: 0, marginRight: 6, marginTop: 6, marginBottom: 0}}> 
                                                    Kategori <FontAwesomeIcon icon={faChevronDown} className="fa-sm pa-dark-grey" />
                                                    {
                                                        this.state.openDropdown?
                                                            <div className="navbar-search-dropdown-content">
                                                                <div>
                                                                    <p className="font-weight-bold pa-dark">Cari Kategori</p>
                                                                </div>
                                                                <div className="row justify-content-center ml-5 mr-0">
                                                                    <div className="col-4">
                                                                        <div className="row align-items-center px-3 py-3">
                                                                            <div>
                                                                                <img src={TShirtIcon} width="30" />
                                                                            </div>
                                                                            <div className="px-3 py-0">
                                                                                T-Shirt
                                                                            </div>
                                                                        </div>
                                                                        <div className="row align-items-center px-3 py-3">
                                                                            <div>
                                                                                <img src={PantsIcon} width="30" />
                                                                            </div>
                                                                            <div className="px-3 py-0">
                                                                                Pants
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <div className="row align-items-center px-3 py-3">
                                                                            <div>
                                                                                <img src={ShirtIcon} width="30" />
                                                                            </div>
                                                                            <div className="px-3 py-0">
                                                                                Shirt
                                                                            </div>
                                                                        </div>
                                                                        <div className="row align-items-center px-3 py-3">
                                                                            <div>
                                                                                <img src={WalletIcon} width="30" />
                                                                            </div>
                                                                            <div className="px-3 py-0">
                                                                                Wallet
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <div className="row align-items-center px-3 py-3">
                                                                            <div>
                                                                                <img src={JacketIcon} width="30" />
                                                                            </div>
                                                                            <div className="px-3 py-0">
                                                                                Jacket
                                                                            </div>
                                                                        </div>
                                                                        <div className="row align-items-center px-3 py-3">
                                                                            <div>
                                                                                <img src={HatIcon} width="30" />
                                                                            </div>
                                                                            <div className="px-3 py-0">
                                                                                Hat
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        :
                                                            null
                                                    }
                                                </div>
                                                <div className="px-3 py-1 pa-bg-main-dark rounded pa-light pa-clickable-element" style={{marginLeft: 0, marginRight: 6, marginTop: 6, marginBottom: 0}}> 
                                                    <FontAwesomeIcon icon={faSearch} className="fa-md" />
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => this.setState({openCart: !this.state.openCart, openDropdown: false, openAccount: false})} className="col-1 px-0 py-3 text-center pa-clickable-element navbar-cart-dropdown">
                                <img src={ShoppingBag} alt="Shopping Bag Icon" width="20" height="20" />

                                {
                                    this.state.openCart?
                                        <div className="navbar-cart-dropdown-content">
                                            <img src={EmptyCart} alt="Empty Cart Image" width="300px" />
                                            <div className="pa-font-size-20 font-weight-bold">
                                                Lho, Kok Sepi?
                                            </div>
                                            <div className="pa-dark-grey">
                                                Mau diisi apa ya Bag sebesar ini?
                                            </div>
                                        </div>
                                    :
                                        null
                                }
                            </div>
                            <div className="col-2">
                                {/* After & Before Login */}
                                {
                                    this.state.loginStatus?
                                        <div className="row justify-content-center">
                                            <div>
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAS1BMVEUAAAB11P910//b9f951v911v/b9P/c9f/b9P/B7P910/921P910//a8//c9P921v/b9v/h///a9P/b8/900//a9P/Q8P+86f+U3f+okt7OAAAAFHRSTlMA8MBSRCWwd+bb2JqMhEQ9HBGfa4HeIjwAAABuSURBVBjTfc1bDoAgDETRARHf70Hd/0qNYqimxvt5Mmlxl/my9BlezeHKP60Id53YFFJjwl5Qzi6Cxc9S39TfJVdFq1yi3JL7tq7bTto82mD4yAzXLproubXkOws4qhwajQ1qjTWMRgN+hFZbewDUURSlNbYjfgAAAABJRU5ErkJggg==" width="15" />
                                            </div>
                                            <div className="pl-2 pr-0 py-0" style={{borderWidth: 2, color: "#fdfdfd"}}>
                                                Hi, Muhammad...

                                                {
                                                    this.state.openAccount?
                                                        <div className="navbar-account-dropdown-content px-5 py-3">
                                                            <div className="row px-0 py-1 pa-dark">
                                                                <div>
                                                                    <img src={UserIcon} width="30" />
                                                                </div>
                                                                <div className="px-3 py-0 align-self-center">
                                                                    Profile
                                                                </div>
                                                            </div>
                                                            <div className="row px-0 py-2 pa-dark">
                                                                <div>
                                                                    <img src={HistoryTransactionIcon} width="30" />
                                                                </div>
                                                                <div className="px-3 py-0 align-self-center">
                                                                    Transaction
                                                                </div>
                                                            </div>
                                                            <div className="row px-0 py-2 pa-dark">
                                                                <div>
                                                                    <img src={Wishlist} width="30" />
                                                                </div>
                                                                <div className="px-3 py-0 align-self-center">
                                                                    Wishlist
                                                                </div>
                                                                <div className="align-self-center pa-bg-danger" style={{borderRadius: 100}}>
                                                                    <span className="px-3 py-0 pa-font-size-12 pa-light">
                                                                        1
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    :
                                                        null
                                                }
                                            </div>
                                            <div onClick={() => this.setState({openAccount: !this.state.openAccount, openDropdown: false, openCart: false})} className="pl-2 pr-0 py-0 pa-clickable-element navbar-account-dropdown">
                                                <FontAwesomeIcon icon={faChevronDown} className="fa-sm pa-light" />
                                            </div>
                                        </div>
                                    :
                                        <div className="row justify-content-center">
                                            <div className="btn px-3 py-0 ml-0 mr-2" style={{borderWidth: 2, borderColor: "#fdfdfd", color: "#fdfdfd"}}>
                                                Masuk
                                            </div>
                                            <div className="btn px-3 py-0 pa-bg-light" style={{borderWidth: 2, borderColor: "#fdfdfd", color: "#0095da"}}>
                                                Daftar
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar