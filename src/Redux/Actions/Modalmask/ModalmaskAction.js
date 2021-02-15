import { ONHIDECATEGORY, ONHIDESEARCH, ONHIDESHOPPINGCART, ONHIDEUSERMENU, ONSHOWCATEGORY, ONSHOWSEARCH, ONSHOWSHOPPINGCART, ONSHOWUSERMENU } from "../../Reducer/Modalmask/reducesType"


export const onShowShoppingCart=()=>{
 
    return{
        type:ONSHOWSHOPPINGCART
    }
}

export const onHideShoppongCart=()=>{
    return{
        type:ONHIDESHOPPINGCART
    }
}

export const onShowCategory=()=>{
  
    return{
        type:ONSHOWCATEGORY
    }
}

export const onHideCategory=()=>{
    return{
        type:ONHIDECATEGORY
    }
}

export const onShowCart=()=>{
   
    return{
        type:ONSHOWSEARCH
    }
}

export const onHideCart=()=>{
    return{
        type:ONHIDESEARCH
    }
}

export const onShowUserMenu=()=>{
    return{
        type:ONSHOWUSERMENU
    }
}

export const onHideUserMenu=()=>{
    return{
        type:ONHIDEUSERMENU
    }
}