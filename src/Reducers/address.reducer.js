import { addressConstant } from "../Actions/constant"

const initState = {
    address: [],
    error: null,
    loading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case addressConstant.GET_ADDRESS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case addressConstant.GET_ADDRESS_SUCCESS:
            state = {
                ...state,
                loading: false,
                address: action.payload.addresses
            }
            break;
        case addressConstant.GET_ADDRESS_FAILURE:
            state = {
                loading: false,
                address: [],
                error: action.payload.error
            }
    }
    return state;
}