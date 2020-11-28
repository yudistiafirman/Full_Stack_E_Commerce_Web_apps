import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { onGetDataUsers } from './../../Redux/Actions/UserProfile/userProfileAction';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

import ScrollFunction from './../../Support/Functions/NavbarScroll.js';

import './../../Support/CSS-Utils/utils.css';
import './Navbar.css';

import PejoyLogo from './../../Support/Images/Pejoy Logo.png';
import MenuIcon from './../../Support/Images/Menu.png';
import ShoppingBag from './../../Support/Images/Shopping Bag.png';
import TShirtIcon from './../../Support/Images/T-Shirt.png';
import PantsIcon from './../../Support/Images/Trousers.png';
import ShirtIcon from './../../Support/Images/Shirt.png';
import JacketIcon from './../../Support/Images/Jacket.png';
import ShoesIcon from './../../Support/Images/Shoes.png';
import HatIcon from './../../Support/Images/Hat.png';
import EmptyCart from './../../Support/Images/Empty Cart.webp';
import UserIcon from './../../Support/Images/User.png';
import HistoryTransactionIcon from './../../Support/Images/Invoice.png';
import Wishlist from './../../Support/Images/Wishlist.png';
import UploadIcon from './../../Support/Images/Upload.png';

export class Navbar extends Component {
    state = {
        loginStatus: true,
        loginErrorMessage: '',
        openDropdown: false,
        openCart: false,
        openAccount: false
    }

    componentDidMount(){
        const data = {
            id: 1
        }
        this.props.onGetDataUsers(data)

        window.onscroll = function() { ScrollFunction() }
    }

    onOpenSidebar = () => {
        this.refs.sidebar.style.width = "250px";
    }

    onCloseSidebar = () => {
        this.refs.sidebar.style.width = "0px";
    }

    render(){
        return(
            // NAVBAR
            <div>
                {/* Mobile Section */}
                <div id="navbar" className="px-0 py-3 pa-navbar-mobile-display" style={{transition: '0.3s', zIndex: 1}}>
                    <div className="container">
                        <div  className="row justify-content-center align-items-center">
                            <div onClick={() => this.onOpenSidebar()} className="col-1 pa-clickable-element">
                                <img src={MenuIcon} width="30" />
                            </div>
                            <div className="col-11">
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
                <div className="w-100 px-0 py-3 position-fixed pa-navbar-desktop-display pa-bg-main-light" style={{zIndex: 10}}>
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-2 align-self-center">
                                <Link to="/" className="pa-clickable-element pa-link">
                                    <img src={PejoyLogo} width="150" />
                                </Link>
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
                                                                <div className="px-3 py-0">
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
                                                                                <img src={ShoesIcon} width="32" />
                                                                            </div>
                                                                            <div className="px-3 py-0">
                                                                                Shoes
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
                                                                                Accecories
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="w-100 text-center font-weight-bold pa-secondary">
                                                                    <Link to='/list-product' className="pa-link">
                                                                        <span className="font-weight-bold pa-secondary">
                                                                            See All Products
                                                                        </span>
                                                                    </Link>
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

                                            <div className="px-0 pt-3 pb-0 pa-font-size-20 font-weight-bold">
                                                Lho, Kok Sepi?
                                            </div>
                                            <div className="pt-0 pb-3 pa-dark-grey">
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
                                                {
                                                    this.props.user.data === null?
                                                        null
                                                    :
                                                        'Hai, ' + this.props.user.data.data[0].email.slice(0, 10)
                                                }

                                                {
                                                    this.state.openAccount?
                                                        <div className="navbar-account-dropdown-content px-5 py-3">
                                                            <div className="row px-0 py-1 pa-dark">
                                                                <div>
                                                                    <img src={UserIcon} width="30" />
                                                                </div>
                                                                <div className="px-3 py-0 align-self-center">
                                                                    <Link to='/member' onClick={() => this.setState({openAccount: false})} className="pa-link">
                                                                        Profile
                                                                    </Link>
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
                                                            <div className="row px-0 py-2 pa-dark">
                                                                <div>
                                                                    <img src={UploadIcon} width="30" />
                                                                </div>
                                                                <div className="px-3 py-0 align-self-center">
                                                                    Upload
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
                                            <div  className="btn px-3 py-0 ml-0 mr-2" style={{borderWidth: 2, borderColor: "#fdfdfd", color: "#fdfdfd"}}>
                                                <Link to='/register' className="pa-link">
                                                    Masuk
                                                </Link>
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



                {/* SIDEBAR SECTION */}
                <div ref="sidebar" className="pa-sidebar-display sidebar">
                    <div className="row">
                        <div className="text-align-center menu-title">
                            Menu
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTimes} onClick={() => this.onCloseSidebar()} className="close-icon pa-clickable-element" />
                        </div>
                    </div>
                    <hr style={{marginTop: -25, marginBottom: 0, backgroundColor: "#f3f3f3"}} />
                    <div className="px-3 pt-4 pb-0 pa-clickable-element sidebar-menu">
                        <Link to='/' onClick={() => this.onCloseSidebar()} className="pa-link" >
                            Home
                        </Link>
                    </div>
                    <div className="px-3 pt-4 pb-0 sidebar-menu">
                        Kategori
                    </div>
                    <div className="px-5 py-3 pa-clickable-element sidebar-sub-menu">
                        <Link to='/products?category=1' onClick={() => this.onCloseSidebar()} className="pa-link" >
                            T-Shirt
                        </Link>
                    </div>
                    <hr style={{marginLeft: 49, marginTop: -15, marginBottom: 0, backgroundColor: "#f3f3f3"}} />
                    <div className="px-5 py-3 pa-clickable-element sidebar-sub-menu">
                        <Link to='/products?category=2' onClick={() => this.onCloseSidebar()} className="pa-link" >
                            Shirt
                        </Link>
                    </div>
                    <hr style={{marginLeft: 49, marginTop: -15, marginBottom: 0, backgroundColor: "#f3f3f3"}} />
                    <div className="px-5 py-3 pa-clickable-element sidebar-sub-menu">
                        <Link to='/products?category=4' onClick={() => this.onCloseSidebar()} className="pa-link" >
                            Jacket
                        </Link>
                    </div>
                    <hr style={{marginLeft: 49, marginTop: -15, marginBottom: 0, backgroundColor: "#f3f3f3"}} />
                    <div className="px-5 py-3 pa-clickable-element sidebar-sub-menu">
                        <Link to='/products?category=3' onClick={() => this.onCloseSidebar()} className="pa-link" >
                            Pants
                        </Link>
                    </div>
                    <hr style={{marginLeft: 49, marginTop: -15, marginBottom: 0, backgroundColor: "#f3f3f3"}} />
                    <div className="px-5 py-3 pa-clickable-element sidebar-sub-menu">
                        <Link to='/products?category=6' onClick={() => this.onCloseSidebar()} className="pa-link" >
                            Shoes
                        </Link>
                    </div>
                    <hr style={{marginLeft: 49, marginTop: -15, marginBottom: 0, backgroundColor: "#f3f3f3"}} />
                    <div className="px-5 py-3 pa-clickable-element sidebar-sub-menu">
                        <Link to='/products?category=5' onClick={() => this.onCloseSidebar()} className="pa-link" >
                            Accecories
                        </Link>
                    </div>
                    <hr style={{marginLeft: 49, marginTop: -15, marginBottom: 0, backgroundColor: "#f3f3f3"}} />
                    <div className="row justify-content-between align-items-center px-3 py-0">
                        <div className="px-3 pt-4 pa-clickable-element sidebar-menu">
                            Cart
                        </div>
                        <div>
                            <div className="mx-3 my-0 pa-bg-danger" style={{borderRadius: 100}}>
                                <span className="px-3 py-1 pa-font-size-12 pa-light">
                                    5
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between align-items-center px-3 py-0">
                        <div className="px-3 pt-4 pa-clickable-element sidebar-menu">
                            Wishlist
                        </div>
                        <div>
                            <div className="mx-3 my-0 pa-bg-danger" style={{borderRadius: 100}}>
                                <span className="px-3 py-1 pa-font-size-12 pa-light">
                                    10
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 pt-4 pb-2 sidebar-menu">
                        Payment Upload
                    </div>
                    <div className="px-3 pt-4 pb-2 pa-clickable-element sidebar-menu">
                        <Link onClick={() => this.onCloseSidebar(), () => window.location = '/member/transactions'} className="pa-link" >
                            Transactions
                        </Link>
                    </div>
                    <div className="px-3 pt-4 pb-0 pa-clickable-element sidebar-menu">
                        <Link onClick={() => this.onCloseSidebar(), () => window.location = '/member'} className="pa-link" >
                            Profile
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

const mapDispatchToProps = { onGetDataUsers }

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)