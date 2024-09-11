import React from 'react'
import style from './Style.module.css'
import HomeCarousel from '../../Components/Carousel/HomeCarousel';

const ProductPage = ({ ban, page }) => {
  console.log(page, "a");

  return (
    <div className={style.product_details_container}>
      <HomeCarousel items={ban} />
      <div>
        <h1>Upcomming</h1>
        <div className={style.grid}>
          {page?.products && page?.products.map((product, index) => {
            console.log(product, "aaaa");
            return (
              <div className={style.card}>
                <img src={product?.img} alt="product-image" className={style.card_image} />
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default ProductPage