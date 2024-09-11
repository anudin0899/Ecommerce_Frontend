import React, { useState } from 'react'
import Style from "./index.module.css"
import { FaBars, FaSearch } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
// import { MdOutlineLogout } from "react-icons/md";
// import CompareDropdown from '../Dropdown/CompareDropdown';
import UserDropdown from '../Dropdown/UserDropdown';

const MiddleHeader = ({ user }) => {

    const Navigate = useNavigate();
    

    return (
        <div className={Style.header_middle} >
            <div className={Style.container}>
                <div className={Style.middle_left}>
                    <button className={Style.mobile_menu_toggler}>
                        <i className={Style.icon}><FaBars /></i>
                    </button>
                    <span className={Style.logo}>
                        <h1>Ecom</h1>
                    </span>
                </div>
                <div className={Style.middle_center}>
                    <div className={Style.search}>
                        <form action="">
                            <div className={Style.search_wrapper}>
                                {/* <div className={Style.select_custom}>
                                    <select id="cat" name="cat">
                                        <option value="">All Departments</option>
                                        <option value="1">Fashion</option>
                                        <option value="2">- Women</option>
                                        <option value="3">- Men</option>
                                        <option value="4">- Jewellery</option>
                                        <option value="5">- Kids Fashion</option>
                                        <option value="6">Electronics</option>
                                        <option value="7">- Smart TVs</option>
                                        <option value="8">- Cameras</option>
                                        <option value="9">- Games</option>
                                    </select>
                                </div> */}
                                <input type="search" className={Style.form_control} placeholder='Search products ...' />
                                <button className={Style.searchbtn}>  <i><FaSearch /></i> </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={Style.middle_right}>
                    <div className={Style.dropdown_link}>


                        <div className={Style.wishlist} onClick={() => Navigate("/wishlist")}>
                            <i><MdFavoriteBorder /></i>
                            <span className={Style.count} >3</span>
                            {/* <span className={Style.txt} >Wishlist</span> */}
                        </div>

                        <div className={Style.wishlist} onClick={() => Navigate("/cart")}>
                            <i><GrCart /></i>
                            <span className={Style.count} >3</span>
                        </div>

                        <div className={Style.user_dropdown}>
                            <span className={Style.toggle}>
                                {user?.authenticate ?
                                    <div className={Style.avatar}>
                                        <i><AiOutlineUser /></i>
                                        <UserDropdown />
                                    </div>
                                    :
                                    <Link to='/sign-in'><span className={Style.txt} >Login</span></Link>
                                }
                            </span>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleHeader