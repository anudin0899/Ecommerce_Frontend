import React, { useState } from 'react'
import Style from "./index.module.css"
import Header from '../../Components/Header/Header'
import HomeCategory from '../../Components/Category/HomeCategory'
import { banners } from '../../dummyData'
import HomeCarousel from '../../Components/Carousel/HomeCarousel'
import HomeProduct from '../../Components/ProductWrapper/HomeProduct'
import Footer from '../../Components/Footer/Footer'
import Newsletter from '../../Components/Newsletter/Newsletter'

const Home = () => {

    const [Banners, SetBanners] = useState(banners);

    return (
        <div className={Style.page_wrapper}>
            <Header />
            <div className={Style.main}>
                <HomeCarousel items={Banners} />
                <HomeCategory />
                <HomeProduct title='Electronics' />
                <HomeProduct title='Furnitures' />
                <HomeCarousel items={Banners} />
                <Newsletter />
                <Footer />
            </div>
        </div>
    )
}

export default Home