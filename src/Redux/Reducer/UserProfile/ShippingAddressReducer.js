import { SAVESHIPPINGADDRESS_LOADING, SAVESHIPPINGADDRESS_SUCCESS, SAVESHIPPINGADDRESS_ERROR } from './../../Actions/UserProfile/ActionTypes';

const data = {
    loading: false,
    data: null,
    error: null
}

function shippingAddressReducer (state = data, action){
    switch(action.type){
        case SAVESHIPPINGADDRESS_LOADING: 
            return {loading: true, data: null, error: null}
        case SAVESHIPPINGADDRESS_SUCCESS:
            return {loading: false, data: action.payload, error: null}
        case SAVESHIPPINGADDRESS_ERROR:
            return {...state, loading: false, error: action.payload}
        default: 
            return state
    }
}

export default shippingAddressReducer