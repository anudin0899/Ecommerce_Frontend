import React from 'react'
import Style from "./index.module.css"
import { MdOutlineLocationOn, MdOutlineMail } from 'react-icons/md';
import { BsCalendar3, BsTelephone } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ContactForm = () => {
    return (
        <div className={Style.contact_wrapper}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.left}>
                        <div className={Style.title}>
                            <h2>Contact Information</h2>
                            <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
                                sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                        </div>
                        <div className={Style.row}>
                            <div className={Style.col}>
                                <div className={Style.cont_info}>
                                    <h3>The Office</h3>
                                    <ul className={Style.cont_list}>
                                        <li>
                                            <i><MdOutlineLocationOn /></i>
                                            <span>70 Washington Square South New York, NY 10012, United States</span>
                                        </li>
                                        <li>
                                            <i><BsTelephone /></i>
                                            <span>+92 423 567</span>
                                        </li>
                                        <li>
                                            <i><MdOutlineMail /></i>
                                            <span>dealnbuy@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={Style.col}>
                                <div className={Style.cont_info}>
                                    <h3>The Office</h3>
                                    <ul className={Style.cont_list}>
                                        <li >
                                            <i><FiClock /></i>
                                            <div>
                                                <span>Monday-Saturday</span>
                                                <span>11am-7pm ET</span>
                                            </div>
                                        </li>
                                        <li >
                                            <i><BsCalendar3 /></i>
                                            <div>
                                                <span>Sunday</span> 
                                                <span>11am-6pm ET</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Style.right}>
                        <div className={Style.title}>
                            <h2>Got Any Questions?</h2>
                            <p>Use the form below to get in touch with the sales team</p>
                        </div>
                        <div className={Style.main_row}>
                            <form action="">
                                <div className={Style.row}>
                                    <div className={Style.col}>
                                        <input type="text" placeholder="Name *" required />
                                    </div>
                                    <div className={Style.col}>
                                        <input type="text" placeholder="Email *" required />
                                    </div>
                                </div>
                                <div className={Style.row}>
                                    <textarea cols="30" rows="4" required placeholder="Message *"></textarea>
                                </div>
                                <div className={Style.row}>
                                    <button>Submit <i> <HiOutlineArrowNarrowRight /> </i></button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactForm