import {combineReducers} from 'redux'
import shippingAddressReducer from './UserProfile/ShippingAddressReducer';

const rootReducer = combineReducers({
    shippingAddress: shippingAddressReducer
})

export default rootReducer