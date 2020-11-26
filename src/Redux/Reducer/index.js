import {combineReducers} from 'redux';
import flashSaleReducer from './LandingPage/flashSaleReducer';
import shippingAddressReducer from './UserProfile/ShippingAddressReducer';

const rootReducer = combineReducers({
    flashSale: flashSaleReducer,
    shippingAddress: shippingAddressReducer
})

export default rootReducer