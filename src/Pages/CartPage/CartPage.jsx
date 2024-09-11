import React, { useEffect, useState } from 'react'
import Style from "./index.module.css"
import Header from '../../Components/Header/Header'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import Footer from '../../Components/Footer/Footer'
import { Link, useLocation } from 'react-router-dom'
import { FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux'
import { addTOCart, getCartItems } from '../../Actions/cart.action'
import { generatedPublicUrl } from '../../utilities/urlConfig'

const CartPage = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const pathSegment = location.pathname.split('/').filter((segment) => segment);

    const [qty, setQty] = useState(null);

    const cart = useSelector(state => state.cart.cart);

    useEffect(() => {
        dispatch(getCartItems())
    }, [])

    const handleQtyInc = (id, quantity) => {

        setQty(quantity + 1);
        const { _id, name, price, img } = cart[id];
        dispatch(addTOCart({ _id, name, price, img }, 1))
    }

    const handleQtyDec = (id, quantity) => {
        if (quantity <= 1) return;
        setQty(quantity - 1)
        const { _id, name, price, img } = cart[id];
        dispatch(addTOCart({ _id, name, price, img }, -1))
    }

    return (
        <div className={Style.page_wrapper}>
            <Header />
            <div className={Style.main}>
                <Breadcrumb pathSegments={pathSegment} />

                <div className={Style.cart_wrapper}>

                    <div className={Style.left}>
                        <div className={Style.master_container}>
                            <div className={`${Style.card} ${Style.cart}`}>
                                <label className={Style.title}>Your cart</label>
                                {Object.keys(cart).map((key, index) => {
                                    const cartItem = cart[key];
                                    return (
                                        <div key={index} className={Style.products}>
                                            <div className={Style.product}>
                                                <img src={generatedPublicUrl(cartItem?.img)} alt="product-image" />
                                                <div>
                                                    <span>{cartItem?.name}</span>
                                                    {/* <p>Extra Spicy</p>
                                                    <p>No mayo</p> */}
                                                </div>
                                                <div className={Style.quantity}>
                                                    <button onClick={() => handleQtyDec( cartItem?._id, cartItem?.qty)}>
                                                        <FiMinus />
                                                    </button>
                                                    <label>{cartItem?.qty}</label>
                                                    <button onClick={() => handleQtyInc( cartItem?._id, cartItem?.qty)}>
                                                        <FiPlus />
                                                    </button>
                                                </div>
                                                <label className={`${Style.price}`}>INR {cartItem?.price}</label>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={Style.right}>
                        <div className={`${Style.card} ${Style.coupons}`}>
                            <label className={Style.title}>Apply coupons</label>
                            <form className={Style.form}>
                                <input type="text" placeholder="Apply your coupons here" className={Style.input_field} />
                                <button>Apply</button>
                            </form>
                        </div>

                        <div className={`${Style.card} ${Style.checkout}`}>
                            <label className={Style.title}>Checkout</label>
                            <div className={Style.details}>
                                <span>Your cart subtotal:</span>
                                <span>47.99$</span>
                                <span>Discount through applied coupons:</span>
                                <span>3.99$</span>
                                <span>Shipping fees:</span>
                                <span>4.99$</span>
                            </div>
                            <div className={Style.checkout_footer}>
                                <label className={Style.price}>57.99 INR</label>
                                <Link to='/checkout'> <button className={Style.checkout_btn}>Place Order</button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CartPage