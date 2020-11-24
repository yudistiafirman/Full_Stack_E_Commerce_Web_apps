import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router, useLocation } from "react-router-dom";

import AddProduct from './AddProduct';

export class Admin extends Component{

    state = {
        routes: [
            {
                path: "/member/admin-dashboard",
                exact: true,
                page: () => <AddProduct />
            }
        ]
    }

    render(){
        return(
            // ADMIN
            <div>
                <div className="font-weight-bold pa-font-size-30 pa-secondary">
                    Admin Dashboard
                </div>
                <div className="mx-0 my-3 border-bottom">

                </div>
                <Router>
                    <div className="px-0 py-0">
                        <div className="row justify-content-start px-3 py-0">
                            <div>
                                <div className="px-3 py-1 pa-bg-main-light pa-light" style={{borderRadius: 100}}>
                                    Add Product
                                </div>
                            </div>
                            <div className="px-2 pt-0 pb-2">
                                <div className="px-3 py-1 pa-bg-light-grey pa-main-light" style={{borderRadius: 100}}>
                                    Products
                                </div>
                            </div>
                            <div className="px-2 pt-0 pb-2">
                                <div className="px-3 py-1 pa-bg-light-grey pa-main-light" style={{borderRadius: 100}}>
                                    Warehouse Inventory
                                </div>
                            </div>
                            <div className="px-2 py-0">
                                <div className="px-3 py-1 pa-bg-light-grey pa-main-light" style={{borderRadius: 100}}>
                                    Customer Care
                                </div>
                            </div>
                            <div>
                                <div className="px-3 py-1 pa-bg-light-grey pa-main-light" style={{borderRadius: 100}}>
                                    Flash Sale
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-0 py-5">
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
                </Router>
            </div>
        )
    }
}

export default Admin