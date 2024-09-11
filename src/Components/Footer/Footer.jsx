import React from 'react'
import Style from "./index.module.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={Style.Container}>
            <div className={Style.grid} >
                <div className={Style.box}>
                    <Link to='/' className={Style.navigation} > <h1>Ecom</h1> </Link>
                    <p></p>

                </div>

                <div className={Style.box}>
                    <h2>About Us</h2>
                    <ul>
                        <li>Our Stores</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className={Style.box}>
                    <h2>Locations</h2>
                    <ul>
                        <li> Kerala </li>
                    </ul>
                </div>
                <div className={Style.box}>
                    <h2>Contact Us</h2>
                    <ul>
                        <li>kerala </li>
                        <li>Email: ecom@gmail.com</li>
                        <li>Phone: +91 123 456 789</li>
                    </ul>
                </div>
            </div>
            <div className={Style.bottom}>
                <div className={Style.bottomleft}>
                    <p>Copyright © 2024 store.
                        <span className={Style.left}><i>Terms Of Use</i></span>
                        <span><i>Privacy Policy</i></span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Footer
