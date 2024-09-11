import React from 'react'
import Style from "./index.module.css"
import { Link } from 'react-router-dom'
import { MdFavoriteBorder } from "react-icons/md";
import { generatedPublicUrl } from '../../utilities/urlConfig';
// import Star from '../ReviewStars/Star';

const Card = ({ proData }) => {

    return (
        <div className={Style.products}>
            <div className={Style.productmedia}>
                {proData?.featured && <span className={Style.productlabel}>Featured</span>}
                <span className={Style.favBtn}> <i><MdFavoriteBorder /></i> </span>
                <Link to={`/product-details/${proData?._id}`}>
                    <img src={generatedPublicUrl(proData.productImage[0].img)} alt="product_image" className={Style.productImage} />
                </Link>
                <div className={Style.productAction}>
                    <span> Add To Cart </span>
                </div>
            </div>
            <div className={Style.productbody}>
                <div className={Style.product_cat}>
                    {/* <span>{proData?.category}</span> */}
                </div>
                <div className={Style.product_title}>
                    <h3>{proData?.name}</h3>
                </div>
                <div className={Style.product_price}>
                    ${proData?.price}
                </div>
                {/* <div className={Style.rating_container}>
                    <div className={Style.rating}>
                        <Star stars='3.5' />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Card