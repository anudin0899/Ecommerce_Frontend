import React from 'react'
import Style from "./index.module.css"

const HomeCategory = () => {
    return (
        <div className={Style.container}>
            <div className={Style.title}>
                <h2>Explore Popular Categories</h2>
            </div>
            <div className={Style.cat_container}>
                <div className={Style.row}>
                    <div className={Style.col}>
                        <div className={Style.cat_block}>
                            <span>
                                <img src="/assets/images/demos/demo-13/cats/1.jpg" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className={Style.col}>
                        <div className={Style.cat_block}>
                            <span>
                                <img src="/assets/images/demos/demo-13/cats/5.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className={Style.col}>
                        <div className={Style.cat_block}>
                            <span>
                                <img src="/assets/images/demos/demo-13/cats/3.jpg" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className={Style.col}>
                        <div className={Style.cat_block}>
                            <span>
                                <img src="/assets/images/demos/demo-13/cats/4.jpg" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className={Style.col}>
                        <div className={Style.cat_block}>
                            <span>
                                <img src="/assets/images/demos/demo-13/cats/2.jpg" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className={Style.col}>
                        <div className={Style.cat_block}>
                            <span>
                                <img src="/assets/images/demos/demo-13/cats/10.jpg" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeCategory