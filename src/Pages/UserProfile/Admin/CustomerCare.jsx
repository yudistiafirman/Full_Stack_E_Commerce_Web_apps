import React, { Component } from 'react';
import Socket from 'socket.io-client';

const io = Socket('http://localhost:4000')

export class SeeTransactions extends Component{

    state = {
        usersConnected: []
    }

    componentDidMount(){
        io.on('users-connected', (data) => {
            console.log(data)
            this.setState({usersConnected: data})
        })
    }

    onGetUsersConnected = () => {
        io.emit('get-users-connected')
    }

    onAdminJoin = (room) => {
        io.emit('admin-connected', (room))
    }

    mapUsersConnected = () => {
        return this.state.usersConnected.map((value, index) => {
            return(
                <div className="mx-0 mt-3 mb-0 px-5 py-3" style={{border: "1px solid #0095da", borderRadius: 5}}>
                    <div className="row justify-content-between align-items-center">
                        <div className="font-weight-bold pa-font-size-18">
                            User : 
                            <p className="font-weight-light pa-font-size-20 pa-dark-grey">
                                {value.username}
                            </p>
                        </div>
                        <div>
                            <div onClick={() => this.onAdminJoin(value.room)} className="btn mx-0 my-2 px-5 py-2 font-weight-bold pa-button-submit pa-main-light" style={{borderRadius: 10}}>
                                Join 
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
            // CUSTOMER CARE
            <div>
                <div className="row justify-content-between px-3 py-0">
                <div className="font-weight-bold pa-font-size-30">
                    Customer Care 
                </div>
                <div onClick={() => this.onGetUsersConnected()} className="btn mx-0 my-2 px-3 py-1 font-weight-bold pa-button-submit pa-main-light" style={{borderRadius: 10}}>
                    Refresh
                </div>
                </div>
                <div className="mx-0 my-1 border-bottom">

                </div>
                <div>
                    {
                        this.mapUsersConnected()
                    }
                </div>
            </div>
        )
    }
}

export default SeeTransactions