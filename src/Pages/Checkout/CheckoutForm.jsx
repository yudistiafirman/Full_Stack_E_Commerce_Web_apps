import React from 'react';
import Axios from 'axios';
import { ApiUrl } from '../../Constant/ApiUrl';
import { UncontrolledAlert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import Loader from 'react-loader-spinner';
import Billing from '../../Pages/Checkout/Checkout_components/Billing';
import {getUserCheckoutShippingAddress, geMyOrders} from './../../Redux/Actions/Checkout/checkoutAction'



export class Checkout extends React.Component {

    state = {
        routes: [
            // {
            //     path: "/checkout/checkout-shipping-address",
            //     exact: true,
            //     page: () => <CheckoutAddress />
            // },
            // {
            //     path: "checkout/checkout-Myorders",
            //     page: () => <Myorders />
            // },
        ],
        activeLink: null
    }

    componentDidMount(){
        const token = localStorage.getItem('token')

        this.props.getUserCheckoutShippingAddress(token)
    }

    getDataUnpaid = () => {
     

        var idUser = Number(localStorage.getItem('id'))
        var idTransaction = this.props.match.params.idTransactions
        // console.log(idTransaction)
        
        Axios.get(ApiUrl + 'transactions/' + idTransaction)
        .then((res) => {
            if(res.data.idUser !== idUser || res.data.status === 'Paid'){
                window.location = '/my-transaction'
            }else{
                // console.log(res.data)
                this.setState({data : res.data})
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onPayment = () => {
        var idUser = localStorage.getItem('id')
        var idTransaction = this.props.match.params.idTransactions

        this.state.data.detail.forEach((value, index) => {

            Axios.get(ApiUrl + 'products?name=' + value.productName)
            .then((res) => {
                console.log(res.data[0].id)

                Axios.patch(ApiUrl + 'products/' + res.data[0].id, {stock : res.data[0].stock - value.productQuantity, sold : res.data[0].sold + value.productQuantity})
                .then((res) => {
                    console.log(res)

                    Axios.get(ApiUrl + 'transactions?idUser=' + idUser)
                    .then((res) => {
                        console.log(res.data)

                        Axios.patch(ApiUrl + 'transactions/' + idTransaction, {status : 'Paid', createdAt : new Date()})
                        .then((res) => {
                            console.log(res.data)
                            window.scrollTo(0,0)
                            this.setState({alertMessage : true})
                            setTimeout(function(){window.location = '/my-transaction'}, 1000)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
            })
            .catch((err) => {
                console.log(err)
            })
        })
    }

    mapUsersShippingAddress = () => {
        return this.props.shippingAddress.data.data.map((value, index) => {
            return(
                <div key={index} className="mx-0 my-3 px-5 pt-3 pb-3 border rounded">
                    <div className="row justify-content-between align-items-center px-3 py-0">
                        <div className="font-weight-bold pa-font-size-18">
                            {value.receiver_name}
                        </div>
                        <div>
                            {
                                value.is_main_address === 1?
                                    <span className="px-2 py-1 rounded pa-bg-secondary pa-light">
                                        Main Address
                                    </span>
                                :
                                    null
                            }
                        </div>
                    </div>
                    <div>
                        {value.address_detail}, {value.city}, {value.province}
                    </div>
                    <div>
                        Phone : {value.phone_number}
                    </div>
                </div>
            )
        })
    }

    render(){

        // if(this.props.user.data === null){
        //     return(
        //         <div>
        //             <div className="container px-0 py-5 px-md-0 py-md-5">
        //                 <div className="px-0 py-4 px-md-0 py-md-5">
        //                     <div className="px-3 py-0 px-md-3 py-md-3">
        //                         <Router>
        //                             <div className="row px-0 py-0 px-md-0 py-md-4">
        //                                 <div className="d-none d-md-block col-3">
        //                                     <div>
        //                                         <Skeleton width={150} height={150} duration={1} />
        //                                     </div>
        //                                     <div>
        //                                         <h3 className="font-weight-bold">
        //                                             <Skeleton width={250} height={20} duration={1} />
        //                                         </h3>
        //                                     </div>
        //                                     <div className="pa-font-size-15 pa-dark-grey" style={{marginTop: -10, marginBottom: 25}}>
        //                                         <Skeleton width={150} height={10} duration={1} />
        //                                     </div>
        //                                     <div className="mx-0 my-3 px-3 pt-0 pb-3 border-bottom">
        //                                         <Link to="/checkout/checkout-shipping-address" onClick={() => this.setState({activeLink: 'CheckoutAddress'})} className="pa-link">
        //                                             <span className={this.state.activeLink === 'CheckoutAddress'? "font-weight-bold pa-font-size-18 pa-secondary" : "pa-font-size-18 pa-main-light"}>
        //                                                 <Skeleton width={150} height={10} duration={1} />
        //                                             </span>
        //                                         </Link>
        //                                     </div>
        //                                     <div className="mx-0 my-3 px-3 pt-0 pb-3 border-bottom">
        //                                         <Link to="checkout/checkout-Myorders" onClick={() => this.setState({activeLink: 'Myorders'})} className="pa-link">
        //                                             <span className={this.state.activeLink === 'Myorders'? "font-weight-bold pa-font-size-18 pa-secondary" : "pa-font-size-18 pa-main-light"}>
        //                                                 <Skeleton width={150} height={10} duration={1} />
        //                                             </span>
        //                                         </Link>
        //                                     </div>
        //                                 </div>
        //                                 <div className="col-12 col-md-9">
        //                                     <Switch>
        //                                         {this.state.routes.map((route, index) => (
        //                                             <Route
        //                                                 key={index}
        //                                                 path={route.path}
        //                                                 exact={route.exact}
        //                                                 children={<route.page />}
        //                                             />
        //                                         ))}
        //                                     </Switch>
        //                                 </div>
        //                             </div>
        //                         </Router>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // }


        return(
            <div>
                {/* CHECKOUT SECTION */}
                <div className="container-fluid my-0 px-5 py-5">
                <div className="py-5"/>
                    <div className="row justify-content-center">
                        {/* Shipping Address */}
                        <div className="col-12 col-md-6 py-3">
                            <div className="px-3 pt-3 pb-1">
                                <h4>Shipping Address</h4>
                            </div>
                            <div className="px-4 py-1 border myCss-bg-light-grey">
                                <p className="mt-3 mb-0 font-weight-bold">
                                    lorem ipsum dolor sit amet, consectetur adip
                                </p>
                                <p className="mt-0 mb-0">
                                Jl. Petemon IV No.32-A, RT 014/RW 008 (Gang Sebelah Bank BCA), Kel. Petemon, Kec. Sawahan, Kota Surabaya, Jawa Timur, 60252
                                </p>
                                <p className="mt-3 mb-0 font-weight-bold myCss-secondary">
                                    Notes :
                                </p>
                                <p>
                                    tesdt 123123123
                                </p>
                            </div>
                            
                            <div className="pt-3 pb-3">
                              
                            </div>
                        
                <div className="container px-0 py-5 px-md-0 py-md-5">
                    <div className="px-0 py-4 px-md-0 py-md-5">
                        <div className="px-3 py-0 px-md-3 py-md-3">
                            <Router>
                                <div className="row px-0 py-0 px-md-0 py-md-4">
                                    <div className="d-none d-md-block col-3">
                                        <div className="mx-0 my-3 px-3 pt-0 pb-3 border-bottom">
                                            <Link to="/checkout/checkout-shipping-address" onClick={() => this.setState({activeLink: 'CheckoutAddress'})} className="pa-link">
                                                <span className={this.state.activeLink === 'CheckoutAddress'? "font-weight-bold pa-font-size-18 pa-secondary" : "pa-font-size-18 pa-main-light"}>
                                                    Checkout Address
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="mx-0 my-3 px-3 pt-0 pb-3 border-bottom">
                                            <Link to="checkout/checkout-Myorders" onClick={() => this.setState({activeLink: 'Myorders'})} className="pa-link">
                                                <span className={this.state.activeLink === 'Myorders'? "font-weight-bold pa-font-size-18 pa-secondary" : "pa-font-size-18 pa-main-light"}>
                                                    My orders
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

            {/* <div>
                <div className="container px-0 py-5 px-md-0 py-md-5">
                    <div className="px-0 py-4 px-md-0 py-md-5">
                        <div className="px-3 py-0 px-md-3 py-md-3">
                            <Router>
                                <div className="row px-0 py-0 px-md-0 py-md-4">
                                    <div className="d-none d-md-block col-3">
                                        <div className="mx-0 my-3 px-3 pt-0 pb-3 border-bottom">
                                            <Link to="/checkout/checkout-shipping-address" onClick={() => this.setState({activeLink: 'CheckoutAddress'})} className="pa-link">
                                                <span className={this.state.activeLink === 'CheckoutAddress'? "font-weight-bold pa-font-size-18 pa-secondary" : "pa-font-size-18 pa-main-light"}>
                                                    Checkout Address
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="mx-0 my-3 px-3 pt-0 pb-3 border-bottom">
                                            <Link to="checkout/checkout-Myorders" onClick={() => this.setState({activeLink: 'Myorders'})} className="pa-link">
                                                <span className={this.state.activeLink === 'Myorders'? "font-weight-bold pa-font-size-18 pa-secondary" : "pa-font-size-18 pa-main-light"}>
                                                    My orders
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
            </div> */}


                        {/* My Orders & Payment Methods */}
                        <div className="col-12 col-md-6 py-3">
                            <div className="px-3 pt-3 pb-1">
                                <h4>My Orders</h4>
                                <div className="row pt-1">
                                    {
                                        this.state.alertMessage?
                                            <UncontrolledAlert className="w-100 border border-0 rounded-0 myCss-bg-secondary myCss-light">
                                                Your Payment Is Success! You Will Directed To Transaction History.
                                            </UncontrolledAlert>
                                        :
                                            null
                                    }
                                    <div className="col-8 py-2 border border-right-0 font-weight-bold myCss-bg-light-grey">
                                        Items
                                    </div>
                                    <div className="col-4 py-2 border font-weight-bold myCss-bg-light-grey">
                                        Sub-Total
                                    </div>
                                    {
                                        this.state.data? 
                                        this.state.data.detail.map((value,index) => {
                                            return(
                                                <div key={index} className="col-12 row mx-0 px-0">
                                                    <div className="col-8 py-2 border border-top-0 border-right-0">
                                                        <span>{value.productName}<span className="font-weight-bold"> ( x{value.productQuantity} )</span></span>
                                                    </div>
                                                    <div className="col-4 ml-0 py-2 border border-top-0">
                                                        {
                                                            value.productDiscount?
                                                                <span>Rp.{(value.productPrice - (value.productPrice * (value.productDiscount / 100))).toLocaleString('id-ID')} <span className="myCss-font-size-14"><del>{value.productPrice.toLocaleString('id-ID')}</del></span></span>
                                                            :
                                                                <span>{value.productPrice.toLocaleString('id-ID')}</span>
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :
                                        <div className="col-12 row mx-0 px-0">
                                            <div className="col-8 py-2 border border-top-0 border-right-0">
                                                <Loader type="ThreeDots" color="#005eb8" height={30} width={30} />
                                            </div>
                                            <div className="col-4 ml-0 py-2 border border-top-0">
                                                <Loader type="ThreeDots" color="#005eb8" height={30} width={30} />
                                            </div>
                                        </div>
                                    }
                                    <div className="col-8 py-2 border border-top-0 border-right-0">
                                        <span className="font-weight-bold">Sub-Total</span>
                                    </div>
                                    <div className="col-4 py-2 border border-top-0">
                                        {this.state.data? 'Rp.' + (this.state.data.totalPrice - 495).toLocaleString('id-ID') : <Loader type="ThreeDots" color="#005eb8" height={30} width={30} />}
                                    </div>
                                    <div className="col-8 py-2 border border-top-0 border-right-0">
                                        <span className="font-weight-bold">Shipping Rates</span>
                                    </div>
                                    <div className="col-4 py-2 border border-top-0">
                                        Rp.10.000
                                    </div>
                                    <div className="col-8 py-2 border border-top-0 border-right-0">
                                        <span className="myCss-secondary font-weight-bold">Total</span>
                                    </div>
                                    <div className="col-4 py-2 border border-top-0">
                                        {this.state.data? 'Rp.' + (this.state.data.totalPrice + 20000).toLocaleString('id-ID') : <Loader type="ThreeDots" color="#005eb8" height={30} width={30} />}
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 pt-5 pb-1">
                                <h4>Payment Methods</h4>
                                <div className="row pt-1">
                                    <div className="col-2 py-2 border border-right-0 text-center font-weight-bold myCss-bg-light-grey">
                                        <img src="https://www.freepnglogos.com/uploads/logo-bca-png/bank-central-asia-logo-bank-central-asia-bca-format-cdr-png-gudril-1.png" alt="BCA" width="100%" />
                                    </div>
                                    <div className="col-8 py-2 border border-left-0 border-right-0 font-weight-bold myCss-bg-light-grey">
                                        BCA Bank Transfer
                                    </div>
                                    <div onClick={() => this.setState({ paymentMethods1Toggle : !this.state.paymentMethods1Toggle })} className="col-2 py-2 border border-left-0 text-right myCss-clickable-element myCss-bg-light-grey">
                                        {
                                            this.state.paymentMethods1Toggle?
                                                <FontAwesomeIcon icon={faChevronDown} className="fa-xs" />
                                            :
                                                <FontAwesomeIcon icon={faChevronRight} className="fa-xs" />
                                        }
                                    </div>
                                    {
                                        this.state.paymentMethods1Toggle?
                                            <div className="col-12 py-2 border border-top-0">
                                                0000 - 000000 - 000 ( A/N PT. Pelopor Toko Online Indonesia )
                                            </div>
                                        :
                                            null
                                    }
                                    <div className="col-2 py-2 border border-top-0 border-right-0 text-center font-weight-bold myCss-bg-light-grey">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_BRI.png" alt="BRI" width="100%" />
                                    </div>
                                    <div className="col-8 py-2 border border-top-0 border-left-0 border-right-0 font-weight-bold myCss-bg-light-grey">
                                        BRI Bank Transfer
                                    </div>
                                    <div onClick={() => this.setState({ paymentMethods2Toggle : !this.state.paymentMethods2Toggle })} className="col-2 py-2 border border-top-0 border-left-0 text-right myCss-clickable-element myCss-bg-light-grey">
                                        {
                                            this.state.paymentMethods2Toggle?
                                                <FontAwesomeIcon icon={faChevronDown} className="fa-xs" />
                                            :
                                                <FontAwesomeIcon icon={faChevronRight} className="fa-xs" />
                                        }
                                    </div>
                                    {
                                        this.state.paymentMethods2Toggle?
                                            <div className="col-12 py-2 border border-top-0">
                                                0812-1234-1234 ( A/N PT. Pelopor Toko Online Indonesia )
                                            </div>
                                        :
                                            null
                                    }
                                    <div className="col-2 py-2 border border-right-0 text-center font-weight-bold myCss-bg-light-grey">
                                        <img src="https://1.bp.blogspot.com/-ftTB8bnkTPA/XUJbw4V3afI/AAAAAAAABto/F_-6eIBe7iMuS_5AJodNooYTtBuCaMZ6gCEwYBhgL/s1600/Logo%2BGopay%2BBaru.png" alt="Gopay" width="100%" />
                                    </div>
                                    <div className="col-8 py-2 border border-left-0 border-right-0 font-weight-bold myCss-bg-light-grey">
                                        Gopay
                                    </div>
                                    <div onClick={() => this.setState({ paymentMethods3Toggle : !this.state.paymentMethods3Toggle })} className="col-2 py-2 border border-left-0 text-right myCss-clickable-element myCss-bg-light-grey">
                                        {
                                            this.state.paymentMethods3Toggle?
                                                <FontAwesomeIcon icon={faChevronDown} className="fa-xs" />
                                            :
                                                <FontAwesomeIcon icon={faChevronRight} className="fa-xs" />
                                        }
                                    </div>
                                    {
                                        this.state.paymentMethods3Toggle?
                                            <div className="col-12 py-2 border border-top-0">
                                                0812 - 1234 - 1234 ( A/N PT. Pelopor Toko Online Indonesia )
                                            </div>
                                        :
                                            null
                                    }
                                    <div className="col-12 px-0 py-0 mx-0 my-3">
                                        {
                                            this.state.data?
                                                <input type="button" value="Pay My Orders" onClick={this.onPayment} className="btn rounded-0 w-100 py-2 myCss-bg-secondary myCss-light"/>
                                            :
                                                <input type="button" disabled value="Pay My Orders" onClick={this.onPayment} className="btn rounded-0 w-100 py-2 myCss-bg-secondary myCss-light"/>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )




    }
}



            
    


const mapStateToProps = (state) => {
    return{
        shippingAddress: state.shippingAddress
    }
}

const mapDispatchToProps = { getUserCheckoutShippingAddress, geMyOrders }

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)