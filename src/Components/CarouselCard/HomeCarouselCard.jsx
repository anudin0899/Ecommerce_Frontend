import React from 'react'
import Style from "./index.module.css"
// import { Link } from 'react-router-dom'


const HomeCarouselCard = ({ item }) => {
   
    return (
        <div className={Style.box}>
            <div className={Style.img_Container}>
                <img src={item?.cover||item?.img} alt='' style={{ maxHeight: '100%', maxWidth: '100%' }} />
            </div>
        </div>
    )
}

export default HomeCarouselCard