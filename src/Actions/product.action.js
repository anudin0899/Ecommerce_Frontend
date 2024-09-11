import Instance from "../Instance/axiosInstance"
import { productConstant } from "./constant";

export const getProductBySlug = (cid) => {
    return async dispatch => {
        dispatch({ type: productConstant.GET_ALL_PRODUCT_BY_SLUG_REQUEST })
        try {
            const res = await Instance.get(`product/product_bycategory/${cid}`);

            if (res.status === 200) {
                dispatch({
                    type: productConstant.GET_ALL_PRODUCT_BY_SLUG_SUCCESS,
                    payload: { productList: res.data }
                });
            } else {
                dispatch({
                    type: productConstant.GET_ALL_PRODUCT_BY_SLUG_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        } catch (error) {
            console.error("Error fetching product:", error.response.data);
            dispatch({
                type: productConstant.GET_ALL_PRODUCT_BY_SLUG_FAILURE,
                payload: { error: error.response.data }
            });
        }
    }
}

export const getProductDetails = (pid) => {
    return async dispatch => {
        dispatch({ type: productConstant.GET_PRODUCT_DETAILS_REQUEST })
        try {
            const res = await Instance.get(`product/product_detail/${pid}`);

            if (res.status === 200) {
                dispatch({
                    type: productConstant.GET_PRODUCT_DETAILS_SUCCESS,
                    payload: { product: res.data.product }
                });
            } else {
                dispatch({
                    type: productConstant.GET_PRODUCT_DETAILS_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        } catch (error) {
            console.error("Error fetching product:", error.response.data);
            dispatch({
                type: productConstant.GET_PRODUCT_DETAILS_FAILURE,
                payload: { error: error.response.data }
            });
        }
    }
}


