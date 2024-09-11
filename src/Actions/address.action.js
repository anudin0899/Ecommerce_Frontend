import AuthInstance from "../Instance/AuthInstance";
import { addressConstant } from "./constant";

export const getAddress = () => {
    return async dispatch => {
        dispatch({ type: addressConstant.GET_ADDRESS_REQUEST });
        try {
            const res = await AuthInstance.get('address/get_address');
            console.log(res);

            if (res.status === 200) {
                const { userAddress: { address } } = res.data;
                dispatch({
                    type: addressConstant.GET_ADDRESS_SUCCESS,
                    payload: { addresses: address }
                });
            } else {
                dispatch({
                    type: addressConstant.GET_ADDRESS_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        } catch (error) {
            dispatch({
                type: addressConstant.GET_ADDRESS_FAILURE,
                payload: { error: error.data.response.error }
            });
        }

    }
}

export const addAddress = (payload) => {
    return async dispatch => {
        dispatch({ type: addressConstant.ADD_ADDRESS_REQUEST });
        try {
            const res = await AuthInstance.post('address/create_address', { payload });
            console.log(res, "addres");

            if (res.status === 200) {
                const { address } = res.data;
                dispatch({
                    type: addressConstant.ADD_ADDRESS_SUCCESS,
                    payload: { addresses: address }
                });
            } else {
                dispatch({
                    type: addressConstant.ADD_ADDRESS_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        } catch (error) {
            dispatch({
                type: addressConstant.ADD_ADDRESS_FAILURE,
                payload: { error: error.data.response.error }
            });
        }

    }
}