import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home'
import WishlistPage from '../Pages/WishlistPage/WishlistPage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../Actions/category.action';
import CategoryPage from '../Pages/CategoryPage/CategoryPage';
import ProductDetail from '../Pages/ProductSinglePage/ProductDetail';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import { isUserLoggedIn } from '../Actions/auth.action';
import ProtectedRoutes from '../utilities/ProtectedRoutes';
import CartPage from '../Pages/CartPage/CartPage';
import CheckoutPage from '../Pages/CheckoutPage/CheckoutPage';



const Routing = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory())
    }, []);

    const auth = useSelector(state => state.auth)

    useEffect(() => {
        if (!auth.authenticate) {
            dispatch(isUserLoggedIn());
        }
    }, [auth.authenticate]);

    return (
        <>
            <Router>
                <Routes>
                    <Route exact index element={<Home />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/product-details/:pid' element={<ProductDetail />} />
                    <Route path='/product' element={<CategoryPage />} />
                    {/* <Route path='/store' element={<ProductStorePage />} /> */}

                    <Route element={<ProtectedRoutes />}>
                        <Route path='/wishlist' element={<WishlistPage />} />
                        <Route path='/cart' element={<CartPage />} />
                        <Route path='/checkout' element={<CheckoutPage />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default Routing