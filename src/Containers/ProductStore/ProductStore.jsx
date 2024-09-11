import React from 'react'
import HomeProduct from '../../Components/ProductWrapper/HomeProduct';

const ProductStore = ({ productState = [] }) => {
    return (
        <>
            {Object.entries(productState.productsByPrice).map(([key, value]) => {
                if (Array.isArray(value) && value.length > 0) {
                    return <HomeProduct title={key} data={value} key={key} />;
                } else {
                    // Return null if the value array is empty or null
                    return null;
                }
            })}
        </>
    )
}

export default ProductStore