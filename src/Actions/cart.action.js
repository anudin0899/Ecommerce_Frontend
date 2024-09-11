import { cartConstant } from "./constant";
import Instance from "../Instance/axiosInstance";
import { toast } from "react-toastify";
import store from "../Store/store";
import AuthInstance from "../Instance/AuthInstance";

export const addTOCart = (product, quantity = 1) => {
    return async (dispatch) => {

        const { cart: { cart }, auth } = store.getState();
        const updatedCart = { ...cart };

        // Calculate the new quantity, default to 1 if product not in cart
        const qty = updatedCart[product._id] && updatedCart[product._id].qty
            ? parseInt(updatedCart[product._id].qty) + quantity
            : quantity;

        // Update the product's quantity in the copied cart
        // updatedCart[product._id] = {
        //     ...product,
        //     qty
        // };

        // Dispatch the updated cart to Redux store
        // dispatch({
        //     type: cartConstant.CART_SUCCESS,
        //     payload: { cartItem: updatedCart }
        // });

        // Store cart in localStorage in case the user is not authenticated
        // localStorage.setItem("cart", JSON.stringify(updatedCart));

        if (auth.authenticate) {
            try {
                // Send the updated cart to the server if authenticated
                const payload = {
                    cartItems: [{ product: product._id, quantity: qty }]
                };

                const res = await AuthInstance.post('cart/add_to_cart', payload);
                console.log(res, "res");

                if (res.status === 200) {
                    // Sync backend cart with Redux store
                    dispatch({
                        type: cartConstant.CART_SUCCESS,
                        payload: { cartItem: res.data }
                    });
                    dispatch(getCartItems())
                } else {
                    dispatch({
                        type: cartConstant.CART_FAILURE,
                        payload: { error: res.data.error }
                    });
                }

            } catch (error) {
                dispatch({
                    type: cartConstant.CART_FAILURE,
                    payload: { error: error.response?.data?.error || 'Failed to add to cart' }
                });
                toast.error("Something went wrong");
            }

        }
    };
};

const getCartItems = () => {
    return async (dispatch) => {
        dispatch({ type: cartConstant.GET_CART_REQUEST });

        // Retrieve cart from localStorage
        // const cart = localStorage.getItem('cart')
        //     ? JSON.parse(localStorage.getItem('cart'))
        //     : {};

        // if (cart) {
        //     dispatch({
        //         type: cartConstant.GET_CART_SUCCESS,
        //         payload: { products: cart }
        //     });
        // }

        // Check if user is authenticated and fetch the cart from server
        const { auth } = store.getState();
        if (auth.authenticate) {
            try {
                const res = await AuthInstance.get('cart/get_cartItem');

                if (res.status === 200) {
                    dispatch({
                        type: cartConstant.CART_SUCCESS,
                        payload: { cartItem: res.data.cartItems }
                    });

                } else {
                    dispatch({
                        type: cartConstant.CART_FAILURE,
                        payload: { error: res.data.error }
                    });
                }
            } catch (error) {
                dispatch({
                    type: cartConstant.CART_FAILURE,
                    payload: { error: error.response?.data?.error || 'Failed to fetch cart items' }
                });
                // toast.error("Something went wrong");
            }
        }
    };
};






export { getCartItems }












// import { cartConstant } from "./constant"
// import Instance from "../Instance/axiosInstance";
// import { toast } from "react-toastify";
// import store from "../Store/store";

// export const addTOCart = (product, quantity = null) => {
//     return async (dispatch) => {



//         // Get the current state of the cart
//         const { cart: { cart }, auth } = store.getState();
//         console.log(cart, auth);

//         const updatedCart = { ...cart };
//         // console.log('product', product);
//         // const product = action.payload.product;
//         // const products = state.products;

//         // Calculate the quantity (ensure it's a valid number)
//         const qty = updatedCart[product._id] && updatedCart[product._id].qty ?
//             parseInt(updatedCart[product._id].qty) + quantity : 1;

//         // Update the product's quantity in the copied cart
//         // updatedCart[product._id] = {
//         //     ...product,
//         //     qty
//         // };



//         // Dispatch the updated cart to the Redux store
//         dispatch({
//             type: cartConstant.CART_SUCCESS,
//             payload: {
//                 cartItem: updatedCart
//             }
//         });





//         try {
//             if (auth.authenticate) {
//                 dispatch({ type: cartConstant.CART_REQUEST });
//                 const payload = {
//                     cartItems: [{
//                         product: product._id,
//                         quantity: qty
//                     }]
//                 };
//                 console.log(payload,"payload");

//                 const res = await Instance.post('cart/add_to_cart', payload);
//                 console.log(res, "post cart action");

//                 if (res.status === 200) {
//                     dispatch({
//                         type: cartConstant.CART_SUCCESS,
//                         payload: { cartItem: res.data.cartItems }
//                     })
//                 } else {
//                     dispatch({
//                         type: cartConstant.CART_FAILURE,
//                         payload: { error: res.data.error }
//                     })
//                 }
//             }
//             // else {
//             //     // Save the updated cart to localStorage
//             //     localStorage.setItem("cart", JSON.stringify(updatedCart));
//             // }
//         } catch (error) {
//             dispatch({
//                 type: cartConstant.CART_FAILURE,
//                 payload: { error: error.response.data.error }
//             })
//             toast.error("Something went wrong")
//         }
//     }
// }

// export const getCartItems = () => {
//     return async (dispatch) => {
//         dispatch({ type: cartConstant.GET_CART_REQUEST });
//         console.log(store.getState());
//         const cart = localStorage.getItem('cart') ?
//             JSON.parse(localStorage.getItem('cart')) : null;

//         if (cart) {
//             dispatch({
//                 type: cartConstant.GET_CART_SUCCESS,
//                 payload: { products: cart }
//             });
//         }
//         // try {
//         //     const res = await Instance.post('/get_cartItem');
//         //     console.log(res, "get cart action");

//         //     if (res.status === 200) {
//         //         dispatch({
//         //             type: cartConstant.CART_SUCCESS,
//         //             payload: { cartItem: res.data }
//         //         })
//         //     } else {
//         //         dispatch({
//         //             type: cartConstant.CART_FAILURE,
//         //             payload: { error: res.data.error }
//         //         })
//         //     }
//         // } catch (error) {
//         //     dispatch({
//         //         type: cartConstant.CART_FAILURE,
//         //         payload: { error: error.response.data.error }
//         //     })
//         //     toast.error("Something went wrong")
//         // }
//     }
// }