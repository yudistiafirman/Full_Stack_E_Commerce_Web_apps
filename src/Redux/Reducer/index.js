import {combineReducers} from 'redux';

import userProfileReducer from './UserProfile/userProfileReducer';
import flashSaleReducer from './LandingPage/flashSaleReducer';
import bestSellerProductsReducer from './LandingPage/bestSellerProducts';
import rajaOngkirProvinceReducer from './UserProfile/rajaOngkirProvinceReducer';
import rajaOngkirCityReducer from './UserProfile/rajaOngkirCityReducer';
import shippingAddressReducer from './UserProfile/ShippingAddressReducer';
import usersTransactionsReducer from './UserProfile/usersTransactionsReducer';
import warehouseInventoryReducer from './UserProfile/warehouseInventoryReducer';
import flashSaleEventReducer from './UserProfile/flashSaleEventReducer';
import cartReducer from './Products/CartProducts';
import UpdateQtyReducer from './Products/UpdateQtyReducer';
import checkoutReducer from './Checkout/checkoutReducer';

const rootReducer = combineReducers({
    user: userProfileReducer,
    flashSale: flashSaleReducer,
    bestSellerProducts: bestSellerProductsReducer,
    rajaOngkirProvince: rajaOngkirProvinceReducer,
    rajaOngkirCity: rajaOngkirCityReducer,
    shippingAddress: shippingAddressReducer,
    usersTransactions: usersTransactionsReducer,
    warehouseInventory: warehouseInventoryReducer,
    flashSaleEvent: flashSaleEventReducer,
    cart : cartReducer,
    updateQty : UpdateQtyReducer,
    checkout : checkoutReducer
})

export default rootReducer