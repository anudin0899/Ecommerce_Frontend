import React, { useEffect } from 'react'
import style from './Style.module.css'
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import ProductDetailsCarousel from '../../Components/ProductDetailCarousel/DetailCarousel/ProductDetailsCarousel';
import Wrapper from '../../Components/ProductDetailCarousel/Wrapper/Wrapper';
import { useLocation, useParams } from 'react-router-dom';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../Actions/product.action"
import CustomImageSlider from '../../Components/Slider/Slider';
import { addTOCart } from '../../Actions/cart.action';
import Header from '../../Components/Header/Header';


const ProductDetail = () => {

  const { pid } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathSegment = location.pathname.split('/').filter((segment) => segment);

  const details = useSelector(state => state.product?.productDetail);

  useEffect(() => {
    dispatch(getProductDetails(pid))
  }, [])

  return (
    <div className={style.page_wrapper}>
      <Header />
      <div className={style.main}>
        <Breadcrumb pathSegments={pathSegment} />
        <div className={style.product_details_container}>
          <Wrapper>

            <div className={style.product_details_content}>
              <div className={style.product_image_container}>
                {/* <ProductDetailsCarousel img={details?.productImage} /> */}
                <CustomImageSlider images={details?.productImage} />
              </div>

              <div className={style.product_info_container}>
                <div className={style.product_title}>{details?.name}</div>
                <div className={style.product_subtitle}>{details?.description}</div>
                <div className={style.product_price}>MRF : INR {details?.price}</div>
                <div className={style.product_tax_info}>
                  incl. of taxes
                  <br />
                  (Also includes all applicable duties)
                </div>
                <div className={style.product_size_range}>
                  <div className={style.size_select_guide}>
                    <span className={style.size_select_guide}>Size Select</span>
                    <span className={style.select_guide}>Select Guide</span>
                  </div>
                  {/* <div className="size_selection">
                    <div className="size_option active">UK 5</div>
                    <div className="size_option disabled">UK 6</div>
                    <div className="size_option active">UK 7</div>
                    <div className="size_option active">UK 8</div>
                    <div className="size_option active">UK 9</div>
                    <div className="size_option disabled">UK 10</div>
                  </div> */}
                  <div className={style.size_warning}>Size selection is required</div>
                </div>

                <button
                  className={style.add_to_cart_btn}
                  onClick={() => {
                    const { _id, name, price } = details;
                    const img = details?.productImage[0]?.img;
                    dispatch(addTOCart({ _id, name, price, img }))
                  }}
                >
                  Add to Cart
                  <BsCart3 size={18} />
                </button>
                <button className={style.wishlist_btn}>
                  Whishlist
                  <IoMdHeartEmpty />
                </button>
              </div>
            </div>

          </Wrapper>
        </div>
      </div >
    </div >
  );
}

export default ProductDetail