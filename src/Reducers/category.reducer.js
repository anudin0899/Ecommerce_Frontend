import { categoryConstant } from "../Actions/constant";

const intialState = {
    categories: [],
    loading: false,
    error: null
};



export default (state = intialState, action) => {
    switch (action.type) {
        case categoryConstant.GET_ALL_CATEGORY_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        case categoryConstant.GET_ALL_CATEGORY_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
                categories: []
            }
            break;
       
    }
    return state
}