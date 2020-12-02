import {combineReducers} from 'redux';

import userProfileReducer from './UserProfile/userProfileReducer';
import myTransactionsReducer from './UserProfile/myTransactionsReducer';
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
import DeleteCartReducer from './Products/DeleteCartReducer'
import AddCartReducer from './Products/AddCartReducer'

const rootReducer = combineReducers({
    user: userProfileReducer,
    myTransactions: myTransactionsReducer,
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
    checkout : checkoutReducer,
    deleteCart : DeleteCartReducer,
    addCart : AddCartReducer
})

export default rootReducer