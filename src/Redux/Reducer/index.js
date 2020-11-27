import {combineReducers} from 'redux';
import flashSaleReducer from './LandingPage/flashSaleReducer';
import bestSellerProductsReducer from './LandingPage/bestSellerProducts';
import shippingAddressReducer from './UserProfile/ShippingAddressReducer';
import flashSaleEventReducer from './UserProfile/flashSaleEventReducer';

const rootReducer = combineReducers({
    flashSale: flashSaleReducer,
    bestSellerProducts: bestSellerProductsReducer,
    shippingAddress: shippingAddressReducer,
    flashSaleEvent: flashSaleEventReducer
})

export default rootReducer