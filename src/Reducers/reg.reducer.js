import { userRegistartionConstants } from "../Actions/constant"

const initState = {
    error: null,
    message: "",
    loading: false
}


export default (state = initState, action) => {
    switch (action.type) {
        case userRegistartionConstants.SIGNUP_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userRegistartionConstants.SIGNUP_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case userRegistartionConstants.SIGNUP_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
    }
    return state;
}