import Axios from 'axios';
import { ApiUrl } from '../../../Constant/ApiUrl';
import { CART_ERROR, CART_LOADED, CART_LOADING, UPDATE_CART_ERROR, UPDATE_CART_LOADED, UPDATE_CART_LOADING } from './ActionTypes';


export const getCartData = (token) => {
    return (dispatch) => {
        dispatch({
            type: CART_LOADING
        })

        Axios.post(ApiUrl + 'products/cart', {token : token})
        .then((res) => {
            if(res.data.error){
                dispatch({
                    type: CART_ERROR,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: CART_LOADED,
                    payload: res.data.cartData
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: CART_ERROR,
                payload: err.message
            })
        })    
    }
}

export const updateQty = (data) => {
    return(dispatch) => {
        dispatch({
            type : UPDATE_CART_LOADING
        })

        Axios.patch(ApiUrl + 'products/cart/update-cart', data)
        .then((res) => {
            if(res.data.error){
                dispatch({
                    type : UPDATE_CART_ERROR,
                    payload : res.data.message
                })
            }else{
                dispatch({
                    type : UPDATE_CART_LOADED,
                    payload : res.data.message
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: UPDATE_CART_ERROR,
                payload: err.message
            })
        })
    }
}

