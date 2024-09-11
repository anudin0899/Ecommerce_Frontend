import { pageConstant } from "../Actions/constant";


const initialState = {
    error: null,
    loading: false,
    page: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case pageConstant.GET_SINGLEPAGE_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null
            }
            break;
        case pageConstant.GET_SINGLEPAGE_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                page: action.payload.pages
            }
            break;
        case pageConstant.GET_SINGLEPAGE_FAILURE: {
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
                page: {}
            }
        }
    }
    return state;
}