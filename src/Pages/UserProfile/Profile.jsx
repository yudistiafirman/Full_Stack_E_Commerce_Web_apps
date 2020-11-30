import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

import './UserProfile.css';

export class Profile extends Component{
    render(){
        if(this.props.user.data === null){
            return(
                <div>
                    <div className="font-weight-bold pa-font-size-30">
                        <Skeleton width={250} height={30} duration={1} />
                    </div>
                    <div className="px-0 py-4">
                        <div className="form-group">
                            <Skeleton width={150} height={10} duration={1} />
                            <Skeleton width="100%" height={45} duration={1} />
                        </div>
                        <div className="form-group">
                            <Skeleton width={150} height={10} duration={1} />
                            <Skeleton width="100%" height={45} duration={1} />
                        </div>
                        <div className="form-group">
                            <Skeleton width={150} height={10} duration={1} />
                            <Skeleton width="100%" height={45} duration={1} />
                        </div>
                        <div className="btn mx-0 my-2 px-5 py-2 font-weight-bold pa-button-submit pa-main-light" style={{borderRadius: 10}}>
                            <Skeleton width={150} height={15} duration={1} />
                        </div>
                    </div>
                </div>
            )
        }

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

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Profile)