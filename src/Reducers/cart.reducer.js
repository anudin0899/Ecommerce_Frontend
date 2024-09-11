import { cartConstant } from "../Actions/constant"

const initialState = {
    loading: false,
    error: null,
    cart: {}
}


export default (state = initialState, action) => {
    switch (action.type) {
        case cartConstant.CART_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case cartConstant.CART_SUCCESS:
            state = {
                ...state,
                loading: false,
                cart: action.payload.cartItem,
                error: null
            }
            break;
        case cartConstant.CART_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
            }
            break;
        case cartConstant.GET_CART_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case cartConstant.GET_CART_SUCCESS:
            state = {
                ...state,
                loading: false,
                cart: action.payload.products,
                error: null
            }
            break;
        case cartConstant.GET_CART_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
            }
            break;
    }
    return state;
}