import React from 'react'
import Style from "./index.module.css"
import ContactForm from '../../Components/ContactForm/ContactForm'
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Newsletter from '../../Components/Newsletter/Newsletter';


const ContactPage = () => {

    const location = useLocation();
    const pathSegment = location.pathname.split('/').filter((segment) => segment);

    return (
        <div className={Style.page_wrapper}>
            <Header />
            <div className={Style.main}>
                <Breadcrumb pathSegments={pathSegment} />
                <ContactForm />
                <Newsletter />
                <Footer />
            </div>
        </div>
    )
}

export default ContactPage