import { productConstant } from "../Actions/constant";


const initialState = {
    error: null,
    loading: false,
    productDetail: {},
    products: [],
    productsByPrice: {
        under5k: [],
        under10k: [],
        under15k: [],
        under20k: [],
        under30k: [],
        under40k: [],
        above50k: []
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case productConstant.GET_ALL_PRODUCT_BY_SLUG_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case productConstant.GET_ALL_PRODUCT_BY_SLUG_SUCCESS:
            state = {
                ...state,
                loading: false,
                products: action.payload.productList.products,
                productsByPrice: {
                    ...action.payload.productList.productsByPrice
                }
            }
            break;
        case productConstant.GET_ALL_PRODUCT_BY_SLUG_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
                products: [],
                productsByPrice: {}
            }
            break;
        case productConstant.GET_PRODUCT_DETAILS_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case productConstant.GET_PRODUCT_DETAILS_SUCCESS:
            state = {
                ...state,
                loading: false,
                productDetail: action.payload.product,
            }
            break;
        case productConstant.GET_PRODUCT_DETAILS_FAILURE: {
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
        }
    }
    return state;
}