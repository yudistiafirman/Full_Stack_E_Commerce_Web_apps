import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Profile from './Profile';
import Transactions from './Transactions';
import ShippingAddress from './ShippingAddress';

import DefaultUserProfile from './../../Support/Images/Default User Profile.png';

export class UserProfile extends Component{

    state = {
        routes: [
            {
                path: "/member",
                exact: true,
                page: () => <Profile />
            },
            {
                path: "/member/transactions",
                page: () => <Transactions />
            },
            {
                path: "/member/shipping-address",
                page: () => <ShippingAddress />
            }
        ],
        activeLink: null
    }

    render(){
        return(
            // USER PROFILE
            <div>
                <div className="container px-0 py-5 px-md-0 py-md-5">
                    <div className="px-0 py-4 px-md-0 py-md-5">
                        <div className="px-3 py-0 px-md-3 py-md-3">
                            <Router>
                                <div className="row px-0 py-0 px-md-0 py-md-4">
                                    <div className="d-none d-md-block col-3">
                                        <div>
                                            <img src={DefaultUserProfile} width="100px" />
                                        </div>
                                        <div>
                                            <h3 className="font-weight-bold">
                                                ryan.fandy@ gmail.com
                                            </h3>
                                        </div>
                                        <div className="pa-font-size-15 pa-dark-grey" style={{marginTop: -10, marginBottom: 25}}>
                                            Member Sejak Dec 20
                                        </div>
                                        <div className="mx-0 my-3 px-3 pt-0 pb-3 border-bottom">
                                            <Link to="/member" onClick={() => this.setState({activeLink: 'Profile'})} className="pa-link">
                                                <span className={this.state.activeLink === 'Profile'? "font-weight-bold pa-font-size-18 pa-secondary" : "pa-font-size-18 pa-main-light"}>
                                                    Profile
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="mx-0 my-3 px-3 pt-0 pb-3 border-bottom">
                                            <Link to="/member/transactions" onClick={() => this.setState({activeLink: 'Transaction'})} className="pa-link">
                                                <span className={this.state.activeLink === 'Transaction'? "font-weight-bold pa-font-size-18 pa-secondary" : "pa-font-size-18 pa-main-light"}>
                                                    Transaction
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="mx-0 my-3 px-3 pt-0 pb-3 border-bottom">
                                            <Link to="/member/shipping-address" onClick={() => this.setState({activeLink: 'Shipping Address'})} className="pa-link">
                                                <span className={this.state.activeLink === 'Shipping Address'? "font-weight-bold pa-font-size-18 pa-secondary" : "pa-font-size-18 pa-main-light"}>
                                                    Shipping Address
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="mx-0 my-3 px-3 pt-0 pb-3 border-bottom">
                                            <Link to="" onClick={() => this.setState({activeLink: 'Logout'})} className="pa-link">
                                                <span className={this.state.activeLink === 'Logout'? "font-weight-bold pa-font-size-18 pa-secondary" : "pa-font-size-18 pa-main-light"}>
                                                    Logout
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-9">
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
                                    </div>
                                </div>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile