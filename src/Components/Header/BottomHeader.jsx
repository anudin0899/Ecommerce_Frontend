import React, { useState } from 'react'
import Style from "./index.module.css"
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const BottomHeader = ({ category }) => {

    const renderCategory = (category) => {
        let subCategories = [];
        for (let cat of category) {
            subCategories.push(
                <li key={cat.Name}>
                    {
                        // cat?.type ? <Link to={`/store?cid=${cat.id}&type=${cat.type}`}><span>{cat.Name}</span></Link>:
                             cat?.parentId ? <Link to={`/product?cid=${cat.id}&type=${cat.type}`}><span>{cat.Name}</span></Link> :
                                <span>{cat.Name}</span>
                    }
                    {cat.children.length > 0 ?
                        (<ul>{renderCategory(cat.children)}</ul>) : null
                    }
                </li>
            )
        }
        return subCategories;
    }




    const [Toggle, SetToggle] = useState(false)

    return (
        <div className={Style.header_bottom}>
            <div className={Style.container}>
                <div className={Style.bottom_left}>
                    <div className={Style.category_dropdown}>
                        <div className={Style.category_toggle}>
                            <span>Browse Categories</span>
                            <i onClick={() => SetToggle(!Toggle)}><FaBars /></i>
                        </div>

                        {Toggle &&
                            <div className={Style.menu}>
                                <div className={Style.side_nav}>
                                    <ul className={Style.menu_vertical}>
                                        {category.map((cat, index) => {
                                            return (
                                                <li className={Style.megamenu_container}>
                                                    <div className={Style.sf_with_ul}>
                                                        <span>{cat.Name}</span>
                                                        <i><MdOutlineArrowForwardIos /></i>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <div className={Style.bottom_center}>
                    <div className={Style.main_nav}>
                        <ul className={Style.menu}>
                            {category?.length > 0 ? renderCategory(category) : []}
                        </ul>
                    </div>
                </div >

            </div>
        </div >

    )
}

export default BottomHeader