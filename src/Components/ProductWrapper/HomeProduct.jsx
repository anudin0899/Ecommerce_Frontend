import React from 'react'
import Style from "./index.module.css"
import { useNavigate } from 'react-router-dom'
import Card from '../Cards/Card'



const HomeProduct = ({ title, data }) => {

    const Navigate = useNavigate()

    return (
        <div className={Style.productwrapper}>
            <div className={Style.container}>
                <div className={Style.heading}>
                    <div className={Style.left}>
                        <h2>{title}</h2>
                    </div>
                    <div className={Style.right}>
                        <span>View All</span>
                    </div>
                </div>
                <div className={Style.cardWrapper}>
                    {data?.slice(0, 5).map((product, index) => {
                        return (
                            <Card proData={product} key={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomeProduct