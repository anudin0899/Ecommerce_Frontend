import Instance from "../Instance/axiosInstance";
import isTokenExpired from "../utilities/tokenExpired";
import { authConstants, cartConstant } from "./constant";
import { toast } from "react-toastify";

export const login = (user) => {
    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST });
        try {
            const res = await Instance.post('/signin', {
                ...user
            })

            if (res.status === 200) {
                const { token, userInfo } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(userInfo));
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: {
                        token, userInfo
                    }
                });
                toast.success("User login successfully")
            } else {
                if (res.status === 400) {
                    dispatch({
                        type: authConstants.LOGIN_FAILURE,
                        payload: { error: res.data.error }
                    });
                }
            }

        } catch (error) {
            if (error?.response?.status === 404) {
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: { error: error.response.data.message }
                });
                toast.error(error?.data?.error || error.response?.data?.message);
            } else {
                if (user.password.length < 8) {
                    toast.error("minimun 8 character is needed")
                } else {
                    toast.error("Something went wrong");
                }
            }
        }
    }
}



export const isUserLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem("token");
        if (token && !isTokenExpired(token)) {
            const user = JSON.parse(localStorage.getItem("user"));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: "Session expired, please log in again" }
            });
            // toast.error("Session expired")
            localStorage.clear(); 
        }
    }
}


export const signout = () => {

    return async (dispatch) => {
        dispatch({ type: authConstants.LOGOUT_REQUEST });
        const res = await Instance.post('/signout');

        if (res.status === 200) {
            localStorage.clear();
            // localStorage.removeItem('user');
            // localStorage.removeItem('token');
            dispatch({
                type: authConstants.LOGOUT_SUCCESS
            })
            dispatch({
                type: cartConstant.RESET_CART
            })
        } else {
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: { error: res.data.error }
            });

        }

    }
}