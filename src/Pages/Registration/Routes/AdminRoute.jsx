import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../Registration/helper/auth'

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuth() && isAuth().user_role === 'admin' ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: props.location }
                    }}
                />
            )
        }
    ></Route>
);

export default AdminRoute;