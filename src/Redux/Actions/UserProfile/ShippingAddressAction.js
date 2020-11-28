import Axios from 'axios';
import { UrlAPI } from '../../../Support/Constants/UrlAPI';
import { SHIPPINGADDRESS_LOADING, SHIPPINGADDRESS_SUCCESS, SHIPPINGADDRESS_ERROR } from './ActionTypes';

export const onSaveShippingAddress = (data) => {
    return (dispatch) => {
        dispatch({
            type: SHIPPINGADDRESS_LOADING
        })

        Axios.post(UrlAPI + 'member/shipping-address/add-address', data)
        .then((res) => {
            console.log(res)
            if(res.data.error){
                dispatch({
                    type: SHIPPINGADDRESS_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: SHIPPINGADDRESS_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: SHIPPINGADDRESS_ERROR,
                payload: err.message
            })
        })    
    }
}

export const onGetShippingAddressToEdit = (data) => {
    return (dispatch) => {
        dispatch({
            type: SHIPPINGADDRESS_LOADING
        })

        Axios.post(UrlAPI + 'member/shipping-address/edit-address', data)
        .then((res) => {
            console.log(res)
            if(res.data.error){
                dispatch({
                    type: SHIPPINGADDRESS_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: SHIPPINGADDRESS_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: SHIPPINGADDRESS_ERROR,
                payload: err.message
            })
        })    
    }
}

export const onUpdateShippingAddress = (data) => {
    return (dispatch) => {
        dispatch({
            type: SHIPPINGADDRESS_LOADING
        })

        Axios.post(UrlAPI + 'member/shipping-address/update-address', data)
        .then((res) => {
            console.log(res)
            if(res.data.error){
                dispatch({
                    type: SHIPPINGADDRESS_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: SHIPPINGADDRESS_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: SHIPPINGADDRESS_ERROR,
                payload: err.message
            })
        })    
    }
}

export const onDeleteShippingAddress = (data) => {
    return (dispatch) => {
        dispatch({
            type: SHIPPINGADDRESS_LOADING
        })
        console.log(data)
        Axios.delete(UrlAPI + 'member/shipping-address/delete-address/' + data.address_id + '/' + data.users_id)
        .then((res) => {
            console.log(res)
            if(res.data.error){
                dispatch({
                    type: SHIPPINGADDRESS_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: SHIPPINGADDRESS_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: SHIPPINGADDRESS_ERROR,
                payload: err.message
            })
        })    
    }
}

export const getUsersShippingAddress = (data) => {
    return (dispatch) => {
        dispatch({
            type: SHIPPINGADDRESS_LOADING
        })

        Axios.post(UrlAPI + 'member/shipping-address', data)
        .then((res) => {
            console.log(res.data)
            if(res.data.error){
                dispatch({
                    type: SHIPPINGADDRESS_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: SHIPPINGADDRESS_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: SHIPPINGADDRESS_ERROR,
                payload: err.message
            })
        })    
    }
}
