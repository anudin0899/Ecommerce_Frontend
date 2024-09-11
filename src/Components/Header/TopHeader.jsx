import React, { useState } from 'react'
import Style from "./index.module.css"
import { BsBell, BsChat, BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const TopHeader = () => {

    const [LangToggler, SetLangToggler] = useState(false);

    return (
        <div className={Style.header_top} >
            <div className={Style.top_container}>
                <div className={Style.top_left}>
                    <span><i><BsTelephone /></i>Call: +91987654321 </span>
                </div>
                <div className={Style.top_right}>
                    <div className={Style.top_menu} >
                        <span className={Style.top_link}>Links</span>
                        <ul>

                            <li>
                                <div className={Style.top_dropdown}>
                                    <span onClick={() => SetLangToggler(!LangToggler)} >LANGUAGE <i> <IoIosArrowDown /> </i></span>
                                    {LangToggler ?
                                        <div className={Style.menu}>
                                            <ul>
                                                <li><span >English</span></li>
                                                <li><span>French</span></li>
                                            </ul>
                                        </div>
                                        : null
                                    }

                                </div>
                            </li>

                            {/* <li className={Style.options}>
                                <Link to='/' className={Style.link_nav}>
                                    <span><i><BsChat /></i> Chat </span>
                                </Link>
                            </li> */}
                            
                            <li className={Style.options}>
                                <Link to='/' className={Style.link_nav}>
                                    <span><i><BsBell /></i> Alert </span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader