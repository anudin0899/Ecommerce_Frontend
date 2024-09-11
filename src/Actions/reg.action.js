import Instance from "../Instance/axiosInstance";
import { userRegistartionConstants } from "./constant"


export const signup = (user) => {
    return async (dispatch) => {

        dispatch({ type: userRegistartionConstants.SIGNUP_REQUEST });
        const res = await Instance.post('/admin/signup', {
            ...user
        })

        if (res.status === 200) {
            const { message } = res.data;
            dispatch({
                type: userRegistartionConstants.SIGNUP_SUCCESS,
                payload: { message }
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: userRegistartionConstants.SIGNUP_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}