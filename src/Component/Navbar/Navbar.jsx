import React, { Component } from 'react';
import Link from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown, faStream } from '@fortawesome/free-solid-svg-icons';

import './../../Support/CSS-Utils/utils.css';

import ShoppingBag from './../../Support/Images/Shopping Bag.png'

export class Navbar extends Component {
    state = {
        loginStatus: false,
        loginErrorMessage: ''
    }

    render(){
        return(
            <div>
                {/* NAVBAR */}
                <div className="px-0 py-4 pa-bg-main-light">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-2 align-self-center">
                                <img src="https://www.static-src.com/frontend/static/img/logo-blibli-white.f8255fc.svg" width="150" />
                            </div>
                            <div className="col-5">
                                <div className="input-group">
                                    <input type="text" placeholder="Search" className="form-control bg-light border border-light pa-input" style={{width: 0, height: 44, borderRadius: "5px 0px 0px 5px", zIndex: 1}} />
                                    <div className="input-group-prepend">
                                        <span className="bg-light" style={{width: 155, marginLeft: -1, marginRight: 0, borderRadius: "0px 5px 5px 0px", zIndex: 2}}>
                                            <div className="row">
                                                <div className="px-3 py-1 pa-dark-grey pa-clickable-element border border-left-1 border-right-0 border-top-0 border-bottom-0" style={{marginLeft: 0, marginRight: 6, marginTop: 6, marginBottom: 0}}> 
                                                    Kategori <FontAwesomeIcon icon={faChevronDown} className="fa-sm pa-dark-grey" />
                                                </div>
                                                <div className="px-3 py-1 pa-bg-main-dark rounded pa-light pa-clickable-element" style={{marginLeft: 0, marginRight: 6, marginTop: 6, marginBottom: 0}}> 
                                                    <FontAwesomeIcon icon={faSearch} className="fa-md" />
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 text-center">
                                <img src={ShoppingBag} alt="Shopping Bag Icon" width="20" height="20" />
                            </div>
                            <div className="col-2">
                                <div className="row justify-content-center">
                                    <div className="btn px-3 py-0 ml-0 mr-2" style={{borderWidth: 2, borderColor: "#fdfdfd", color: "#fdfdfd"}}>
                                        Masuksss
                                    </div>
                                    <div className="btn px-3 py-0 pa-bg-light" style={{borderWidth: 2, borderColor: "#fdfdfd", color: "#0095da"}}>
                                        Daftarrr
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar