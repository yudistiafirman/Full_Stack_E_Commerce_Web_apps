import {combineReducers} from 'redux';

import userProfileReducer from './UserProfile/userProfileReducer';
import flashSaleReducer from './LandingPage/flashSaleReducer';
import bestSellerProductsReducer from './LandingPage/bestSellerProducts';
import shippingAddressReducer from './UserProfile/shippingAddressReducer';
import warehouseInventoryReducer from './UserProfile/warehouseInventoryReducer';
import flashSaleEventReducer from './UserProfile/flashSaleEventReducer';

const rootReducer = combineReducers({
    user: userProfileReducer,
    flashSale: flashSaleReducer,
    bestSellerProducts: bestSellerProductsReducer,
    shippingAddress: shippingAddressReducer,
    warehouseInventory: warehouseInventoryReducer,
    flashSaleEvent: flashSaleEventReducer
})

export default rootReducer