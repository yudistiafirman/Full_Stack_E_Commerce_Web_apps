import {combineReducers} from 'redux';
import flashSaleReducer from './LandingPage/flashSaleReducer';
import bestSellerProductsReducer from './LandingPage/bestSellerProducts';
import shippingAddressReducer from './UserProfile/shippingAddressReducer';
import warehouseInventoryReducer from './UserProfile/warehouseInventoryReducer';
import flashSaleEventReducer from './UserProfile/flashSaleEventReducer';

const rootReducer = combineReducers({
    flashSale: flashSaleReducer,
    bestSellerProducts: bestSellerProductsReducer,
    shippingAddress: shippingAddressReducer,
    warehouseInventory: warehouseInventoryReducer,
    flashSaleEvent: flashSaleEventReducer
})

export default rootReducer