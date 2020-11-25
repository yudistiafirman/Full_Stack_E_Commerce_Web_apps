import Axios from 'axios';
import { UrlAPI } from './../../../Support/Constants/UrlAPI';
import { SAVESHIPPINGADDRESS_LOADING, SAVESHIPPINGADDRESS_SUCCESS, SAVESHIPPINGADDRESS_ERROR } from './ActionTypes';

export const onSaveShippingAddress = (data) => {
    return (dispatch) => {
        dispatch({
            type: SAVESHIPPINGADDRESS_LOADING
        })

        Axios.post(UrlAPI + 'member/shipping-address/add-address', data)
        .then((res) => {
            if(res.data.error){
                dispatch({
                    type: SAVESHIPPINGADDRESS_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: SAVESHIPPINGADDRESS_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: SAVESHIPPINGADDRESS_ERROR,
                payload: err.message
            })
        })    
    }
}

export const getUsersShippingAddress = (data) => {
    return (dispatch) => {
        dispatch({
            type: SAVESHIPPINGADDRESS_LOADING
        })

        Axios.post(UrlAPI + 'member/shipping-address', data)
        .then((res) => {
            console.log(res.data)
            if(res.data.error){
                dispatch({
                    type: SAVESHIPPINGADDRESS_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: SAVESHIPPINGADDRESS_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: SAVESHIPPINGADDRESS_ERROR,
                payload: err.message
            })
        })    
    }
}
