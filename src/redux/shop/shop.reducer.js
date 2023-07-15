// import SHOP_DATA from "./shop.data";

import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    collections: null
};

const ShopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                cllections: action.payload
            }
        default:
            return state;
    }
}

export default ShopReducer;