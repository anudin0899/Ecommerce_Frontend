import Instance from "../Instance/axiosInstance";
import { pageConstant } from "./constant";

export const getPageProduct = (payload) => {
    return async dispatch => {
        dispatch({ type: pageConstant.GET_SINGLEPAGE_REQUEST })
        try {
            const { cid, type } = payload;
            const res = await Instance.get(`/page/get_pagebycategory/${cid}/${type}`);
            if (res.status === 201) {
                dispatch({
                    type: pageConstant.GET_SINGLEPAGE_SUCCESS,
                    payload: { pages: res.data.page }
                });
            } else {
                dispatch({
                    type: pageConstant.GET_SINGLEPAGE_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    }
}