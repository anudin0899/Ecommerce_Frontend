import React from 'react'
import Style from "./index.module.css"
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import { useLocation } from 'react-router-dom'
import HomeProduct from '../../Components/ProductWrapper/HomeProduct'
import WishlistCard from '../../Components/Cards/WishlistCard'

const WishlistPage = () => {

  const location = useLocation();
  const pathSegment = location.pathname.split('/').filter((segment) => segment);
  //console.log(pathSegment, "path");

  return (
    <div className={Style.page_wrapper}>
      <Header />
      <div className={Style.main}>
        <Breadcrumb pathSegments={pathSegment} />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        {/* <HomeProduct title='Electronics' /> */}
      </div>
      <Footer />
    </div>
  )
}

export default WishlistPage