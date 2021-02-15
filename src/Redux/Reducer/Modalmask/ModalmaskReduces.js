const { act } = require("react-dom/test-utils")
const { ONSHOWSHOPPINGCART, ONHIDESHOPPINGCART, ONSHOWCATEGORY, ONHIDECATEGORY, ONSHOWSEARCH, ONHIDESEARCH, ONSHOWUSERMENU, ONHIDEUSERMENU } = require("./reducesType")

const data={
    showShoppingCart:false,
    showCatergory:false,
    showSearchCategory:false,
    showUserMenu:false,
    modalMask:false
}


const modalMaskReducer=(state=data,action)=>{
    switch(action.type){
        case ONSHOWSHOPPINGCART:
            return{...state,showShoppingCart:true,modalMask:true}
        case ONHIDESHOPPINGCART:
            return{...state,showShoppingCart:false,modalMask:false}
        case ONSHOWCATEGORY:
            return{...state,showCatergory:true,modalMask:true}
        case ONHIDECATEGORY:
            return{...state,showCatergory:false,modalMask:false}
        case ONSHOWSEARCH:
            return{...state,showSearchCategory:true,modalMask:true}
        case ONHIDESEARCH:
            return{...state,showSearchCategory:false,modalMask:false}
        case ONSHOWUSERMENU:
            return{...state,showUserMenu:true,modalMask:true}
        case ONHIDEUSERMENU:
            return{...state,showUserMenu:false,modalMask:false}
        default:
            return state
    }
}

export default modalMaskReducer