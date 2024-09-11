import React from 'react'
import Style from "./index.module.css"
import { RxCross1 } from "react-icons/rx";

const CompareDropdown = () => {
    return (
        <div className={Style.dropdown_menu}>
            <ul className={Style.productslist}>
                <li className={Style.product}>
                    <h4 className={Style.title} >Blue Night Dress</h4>
                    <span className={Style.btn_remove}><i> <RxCross1 /> </i></span>
                </li>
                <li className={Style.product}>
                    <h4 className={Style.title} >Blue Night Dress</h4>
                    <span className={Style.btn_remove}><i> <RxCross1 /> </i></span>
                </li>
            </ul>
            <div className={Style.actions} >
                <span className={Style.link} ></span>
                <span className={Style.primarybtn_outline} >Compare</span>
            </div>
        </div>
    )
}

export default CompareDropdown