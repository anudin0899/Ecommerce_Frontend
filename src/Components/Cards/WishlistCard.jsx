import React from 'react'
import Style from "./index.module.css"
import { Link } from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai'

const WishlistCard = () => {
  return (
    <div className={Style.container}>
      <table className={Style.wishlist_table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={Style.prod_col}>
              <div className={Style.product} >
                <div className={Style.product_media} >
                  <Link>
                    <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="product-image" className={Style.productImage} />
                  </Link>
                </div>
                <div className={Style.product_title} >
                  <h3>Neato Robotics</h3>
                </div>
              </div>
            </td>
            <td className={Style.price_col} >$84.00</td>
            <td className={Style.remove_col} ><button> <AiOutlineDelete /> </button></td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default WishlistCard