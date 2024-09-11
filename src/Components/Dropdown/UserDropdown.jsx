import React from 'react'
import Style from "./index.module.css"
import { MdFavoriteBorder, MdOutlineLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signout } from '../../Actions/auth.action';

const UserDropdown = () => {

    const menu = [
        { label: 'Cart', href: '', icon: <MdFavoriteBorder className={Style.icon} /> },
        { label: 'Wishlist', href: '', icon: <MdFavoriteBorder className={Style.icon} /> },
        { label: 'Coupons', href: '', icon: <MdFavoriteBorder className={Style.icon} /> },
        { label: 'Orders', href: '', icon: <MdFavoriteBorder className={Style.icon} /> },
        { label: 'Profile', href: '', icon: <MdFavoriteBorder className={Style.icon} /> },
    ];

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(signout())
    }

    return (
        <div className={Style.dropdown_menu}>
            <div className={Style.items}>
                {menu?.map((data, index) => (
                    <Link to={data?.href} key={index}><div className={Style.item}>
                        {data?.icon}
                        <h4>{data?.label}</h4>
                    </div>
                    </Link>
                ))}
                <div className={Style.item} onClick={() => handleLogout()}>
                    <MdOutlineLogout className={Style.icon} />
                    <h4>Logout</h4>
                </div>
            </div>
        </div>
    )
}

export default UserDropdown