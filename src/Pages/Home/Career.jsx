import React from 'react';
import HeaderWhite from '../../Components/HeaderWhite/HeaderWhite';
import ApproachRed from '../../Components/ApproachRed/ApproachRed';
import LeftContentRightImage from '../../Components/LeftContentRightImage/LeftContentRightImage';
import Footer from '../../Components/Footer/Footer';
import Healthcare from '../../Components/Healthcare/Healthcare';
import OurWorking from '../../Components/OurWorking/OurWorking';
import TrustedRed from '../../Components/TrustedRed/TrustedRed';
import CenterContent from '../../Components/CenterContent/CenterContent';
import Form from "../../Components/Community/Form"
import OurTeam from "../../Components/OurTeam/OurTeam"
import Userslider2 from '../../Components/UserSlider2/UserSlider2';
import Banner2 from '../../Components/Banner2/Banner2';
import bannerImg from '../../Assets/careerImage.png';
import img from '../../Assets/career.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';

const Career = () => {
  const bannerStyles = {
    backgroundImage: `url(${img})`,
    backgroundPosition: '50% 44%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    marginTop: '-250px',
    backgroundColor: '#EBE0D3'
};
    return (
        <>
          <HeaderWhite
          logoImg={logow}
          />
          <Banner2 heading={'HEALTHCARE CAREER'} 
          description={'AT EMPOWERCARE, WE ARE NOT JUST A STAFFING AGENCY, WE ARE A CATALYST FOR CHANGE IN THE HEALTHCARE INDUSTRY.'}
          img={bannerImg}
          styles={bannerStyles}
          />
          <LeftContentRightImage />
          <OurWorking />
          <CenterContent />
          <TrustedRed />
          <ApproachRed />
          <OurTeam />
          <Healthcare />
          <Form/>
          <Userslider2/>
          <Footer />
        </>
    )
}

export default Career