import Axios from 'axios';
import { UrlAPI } from '../../../Support/Constants/UrlAPI';
import { CHECKOUTSHIPPINGADDRESS_LOADING, CHECKOUTSHIPPINGADDRESS_SUCCESS, CHECKOUTSHIPPINGADDRESS_ERROR } from './ActionTypes';


export const getUserCheckoutShippingAddress = (data) => {
    return (dispatch) => {
        dispatch({
            type: CHECKOUTSHIPPINGADDRESS_LOADING
        })

        Axios.post(UrlAPI + 'member/checkout-shipping-address', data)
        .then((res) => {
            console.log(res.data)
            if(res.data.error){
                dispatch({
                    type: CHECKOUTSHIPPINGADDRESS_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: CHECKOUTSHIPPINGADDRESS_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: CHECKOUTSHIPPINGADDRESS_ERROR,
                payload: err.message
            })
        })    
    }
}

export const geMyOrders = (data) => {
    return (dispatch) => {
        dispatch({
            type: CHECKOUTSHIPPINGADDRESS_LOADING
        })

        Axios.post(UrlAPI + 'member/checkout-Myorders', data)
        .then((res) => {
            console.log(res.data)
            if(res.data.error){
                dispatch({
                    type: CHECKOUTSHIPPINGADDRESS_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: CHECKOUTSHIPPINGADDRESS_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: CHECKOUTSHIPPINGADDRESS_ERROR,
                payload: err.message
            })
        })    
    }
}
