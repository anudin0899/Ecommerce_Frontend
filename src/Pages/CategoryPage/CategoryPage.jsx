import React from 'react'
import Style from "./index.module.css"
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import { useSelector, useDispatch } from "react-redux";
import { getProductBySlug } from '../../Actions/product.action';
import { useEffect } from 'react';
import ProductStore from '../../Containers/ProductStore/ProductStore';
import ProductPage from '../../Containers/ProductPage/ProductPage';
import parseQuery from '../../utilities/getParams';
import { getPageProduct } from '../../Actions/page.action';

const CategoryPage = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const { cid, type } = parseQuery(location.search);

    const pathSegment = location.pathname.split('/').filter((segment) => segment);

    useEffect(() => {
        fetchData();
    }, [cid, type]);

    const fetchData = () => {
        const payload = {
            'cid': cid,
            'type': type
        }
        if (type !== "null") {
            dispatch(getPageProduct(payload));
        } else {
            dispatch(getProductBySlug(cid));
        }
    }

    const productState = useSelector(state => state.product);
    const pageState = useSelector(state => state.page);


    const renderPage = () => {
        let content = null;
        switch (type) {
            case 'store' || 'null':
                content = <ProductStore productState={productState} />
                break;
            case 'page':
                content = <ProductPage ban={pageState?.page?.banners} page={pageState?.page} />;
                break;
            default:
                content = <ProductStore productState={productState} />
            // content = null;
        }
        return content
    }

    return (
        <div className={Style.page_wrapper}>
            <Header />
            <div className={Style.main}>
                <Breadcrumb pathSegments={pathSegment} />
                {renderPage()}
            </div>
            <Footer />
        </div>
    )
}

export default CategoryPage