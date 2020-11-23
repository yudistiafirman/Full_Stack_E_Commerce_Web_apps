import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import ShippingAddressLists from './ShippingAddressLists';
import AddShippingAddress from './AddShippingAddress';

import './UserProfile.css';

import NotFound from './../../Support/Images/Not Found.webp';

export class ShippingAddress extends Component{

    state = {
        routes: [
            {
                path: "/member/shipping-address",
                exact: true,
                page: () => <ShippingAddressLists />
            },
            {
                path: "/member/shipping-address/add-address",
                page: () => <AddShippingAddress />
            }
        ],
        activeLink: 'Profile'
    }

    render(){
        return(
            // SHIPPING ADDRESS
            <Switch>
                {this.state.routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.page />}
                    />
                ))}
            </Switch>
        )
    }
}

export default ShippingAddress