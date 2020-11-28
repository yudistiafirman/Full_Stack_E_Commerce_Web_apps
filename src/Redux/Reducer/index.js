import {combineReducers} from 'redux';

import userProfileReducer from './UserProfile/userProfileReducer';
import flashSaleReducer from './LandingPage/flashSaleReducer';
import bestSellerProductsReducer from './LandingPage/bestSellerProducts';
import rajaOngkirProvinceReducer from './UserProfile/rajaOngkirProvinceReducer';
import rajaOngkirCityReducer from './UserProfile/rajaOngkirCityReducer';
import shippingAddressReducer from './UserProfile/ShippingAddressReducer';
import warehouseInventoryReducer from './UserProfile/warehouseInventoryReducer';
import flashSaleEventReducer from './UserProfile/flashSaleEventReducer';

const rootReducer = combineReducers({
    user: userProfileReducer,
    flashSale: flashSaleReducer,
    bestSellerProducts: bestSellerProductsReducer,
    rajaOngkirProvince: rajaOngkirProvinceReducer,
    rajaOngkirCity: rajaOngkirCityReducer,
    shippingAddress: shippingAddressReducer,
    warehouseInventory: warehouseInventoryReducer,
    flashSaleEvent: flashSaleEventReducer
})

export default rootReducer