import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './UserProfile.css';

import NotFound from './../../Support/Images/Not Found.webp';

export class ShippingAddressLists extends Component{
    render(){
        return(
            // SHIPPING ADDRESS LISTS
            <div>
                <div className="row justify-content-between align-items-center px-3 py-0">
                    <div>
                        <div className="font-weight-bold pa-font-size-30" style={{marginTop: -5, marginBottom: 0}}>
                            Shipping Address
                        </div>
                    </div>
                    <div>
                        <Link to="/member/shipping-address/add-address" className="pa-link">
                            <div className="btn mx-0 my-2 px-3 py-1 font-weight-bold pa-button-submit pa-main-light" style={{borderRadius: 10}}>
                                Add Address
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="mx-0 my-3 px-5 pt-3 pb-3 border rounded">
                    <div className="row justify-content-between align-items-center px-3 py-0">
                        <div className="font-weight-bold pa-font-size-18">
                            M. Defryan Tridya Isfandy
                        </div>
                        <div>
                            <span className="px-3 py-1 rounded pa-bg-secondary pa-light">
                                Main Address
                            </span>
                        </div>
                    </div>
                    <div>
                        Jalan Bandung No. 1, Kec. Bandung, Kota Bandung, Jawa Barat.
                    </div>
                    <div>
                        Phone : 08118140006
                    </div>
                    <div className="px-0 pt-3 pb-0">
                        <span className="font-weight-bold pa-main-light">
                            Edit
                        </span>
                        <span className="px-2 py-0 font-weight-bold pa-danger">
                            Delete
                        </span>
                    </div>
                </div>
                <div className="px-0 pt-5 pb-0 text-center">
                    <img src={NotFound} width="40%" />
                </div>
                <div className="px-0 pt-0 pb-0 text-center pa-font-size-20 font-weight-bold">
                    Belum Ada Alamat Pengiriman
                </div>
                <div className="pt-0 pb-3 text-center pa-dark-grey">
                    Isi alamat pengirimanmu sekarang lalu berbelanja ya!
                </div>
            </div>
        )
    }
}

export default ShippingAddressLists