import React, { Component } from 'react';

import './UserProfile.css';

export class Profile extends Component{
    render(){
        return(
            // PROFILE
            <div>
                <div className="font-weight-bold pa-font-size-30">
                    Profile
                </div>
                <div className="px-0 py-4">
                    <div className="form-group">
                        <label className="pa-main-light">Fullname</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label  className="pa-main-light">Email Account</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label  className="pa-main-light">Phone Number</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="btn mx-0 my-2 px-5 py-2 font-weight-bold pa-button-submit pa-main-light" style={{borderRadius: 10}}>
                        Save Profile
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile