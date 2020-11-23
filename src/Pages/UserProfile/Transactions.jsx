import React, { Component } from 'react';

import './UserProfile.css';

import NotFound from './../../Support/Images/Not Found.webp';

export class Transactions extends Component{
    render(){
        return(
            // TRANSACTIONS
            <div>
                <div className="font-weight-bold pa-font-size-30">
                    Transactions
                </div>
                <div className="mx-0 my-3 border-bottom">

                </div>
                <div className="px-0 py-0">
                    <div className="row justify-content-start px-3 py-0">
                        <div>
                            <div className="px-3 py-1 pa-bg-main-light pa-light" style={{borderRadius: 100}}>
                                Payment
                            </div>
                        </div>
                        <div className="px-2 py-0">
                            <div className="px-3 py-1 pa-bg-light-grey pa-main-light" style={{borderRadius: 100}}>
                                On Proccess
                            </div>
                        </div>
                        <div>
                            <div className="px-3 py-1 pa-bg-light-grey pa-main-light" style={{borderRadius: 100}}>
                                Complete
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-0 my-5 px-3 py-3 pa-transaction-card">
                    <div className="row px-3 py-0">
                        <div className="col-2 px-1 py-5 border">

                        </div>
                        <div className="px-4 py-0">
                            <div className="font-weight-bold pa-font-size-18 pa-main-light">
                                MARHEN J Rico Mini Tas Classic
                            </div>
                            <div className="pa-font-size-12 pa-dark-grey" style={{marginTop: -5, marginBottom: 0}}>
                                Quantity: 3
                            </div>
                            <div className="px pt-1 pb-0">
                                Rp.1.019.000
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-0 pt-5 pb-0 text-center">
                    <img src={NotFound} width="40%" />
                </div>
                <div className="px-0 pt-0 pb-0 text-center pa-font-size-20 font-weight-bold">
                    Lho, Kok Masih Kosong?
                </div>
                <div className="pt-0 pb-3 text-center pa-dark-grey">
                    Mau diisi apa ya Bag sebesar ini?
                </div>
            </div>
        )
    }
}

export default Transactions