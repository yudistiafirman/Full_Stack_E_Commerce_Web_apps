import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import './UserProfile.css';

export class AddShippingAddress extends Component{
    render(){
        return(
            // ADD SHIPPING ADDRESS
            <div>
                <div className="row justify-content-start align-items-center px-3 py-0">
                    <div className="pl-0 pr-3 py-0" style={{marginTop: -5, marginBottom: 0}}>
                        <Link to="/member/shipping-address" className="pa-link pa-font-size-25">
                            <FontAwesomeIcon icon={faArrowCircleLeft} />
                        </Link>
                    </div>
                    <div>
                        <div className="font-weight-bold pa-font-size-30" style={{marginTop: -5, marginBottom: 0}}>
                            Shipping Address
                        </div>
                    </div>
                </div>
                <div className="px-0 py-4">
                    <form>
                        <div className="form-group">
                            <label className="pa-main-light">Address Label</label>
                            <input type="text" className="form-control" placeholder="Ex. Home, Office, Restaurant" />
                        </div>
                        <div className="form-group">
                            <label  className="pa-main-light">Consignee</label>
                            <input type="text" className="form-control" placeholder="Ex. Sutiyono Lamso" />
                        </div>
                        <div className="form-group">
                            <label  className="pa-main-light">Phone Number</label>
                            <input type="text" className="form-control" placeholder="Ex. 081118140006" />
                        </div>
                        <div className="form-group">
                            <label  className="pa-main-light">Address</label>
                            <input type="text" className="form-control" placeholder="Ex. Jalan Bandung No. 01" />
                        </div>
                        <div className="form-group">
                            <label  className="pa-main-light">City</label>
                            <input type="text" className="form-control" placeholder="Ex. Kota Bandung" />
                        </div>
                        <div className="form-group">
                            <label  className="pa-main-light">Province</label>
                            <input type="text" className="form-control" placeholder="Ex. Jawa Barat" />
                        </div>
                    </form>
                    <div className="btn mx-0 my-2 px-5 py-2 font-weight-bold pa-button-submit pa-main-light" style={{borderRadius: 10}}>
                        Add Address
                    </div>
                </div>
            </div>
        )
    }
}

export default AddShippingAddress