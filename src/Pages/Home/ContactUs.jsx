import React, { useEffect, useState } from 'react';
import newsletterarrow from '../../Assets/h3_newsletter_shape0.png';
import hc1 from '../../Assets/hc1.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../Assets/EmpowerCareWhiteLogo.svg'; 
import bannerImg from '../../Assets/advantagesImg.png'

import HeaderWhite from '../../Components/HeaderWhite/HeaderWhite';
import Banner from '../../Components/Banner/Banner';
import ContactusForm from '../../Components/ContactusForm/ContactusForm';
import Userslider from '../../Components/Userslider/Userslider';
import Footer from '../../Components/Footer/Footer';
import Banner1 from '../../Components/Banner1/Banner1';
import img from '../../Assets/advantages.png'

const ContactUs = () => {
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50% 30%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginTop: '-237px',
        backgroundColor: '#EBE0D3' 
    };
    return (
        <>
            <HeaderWhite logoImg={logo}
            />
         
              <Banner1
    heading={'Contact'} 
    description={"We are committed to supporting our healthcare professionals and ensuring they have the resources and opportunities they need to succeed. Whether you have questions about our services, need assistance, or want to learn more about joining our team, we are here to help."}
  
    bannerImg={bannerImg}
    styles={bannerStyles}
      
    bnrbtn={"Quick Apply"}

    />
            <ContactusForm/>
            <Userslider 
            reviewbtn={"Quick Apply"}
            />
        <Footer/>
        </>
    )
}
export default ContactUs