import React from 'react';
import HeaderWhite from '../../Components/HeaderWhite/HeaderWhite';
import Footer from '../../Components/Footer/Footer';
import logo from '../../Assets/EmpowerCareWhiteLogo.svg';
import Policies from '../../Components/PrivacyPolicies/Policies';
import Banner1 from '../../Components/Banner1/Banner1';
import img from '../../Assets/advantages.png'
import bannerImg from '../../Assets/advantagesImg.png'
const bannerStyles = {
  backgroundImage: `url(${img})`,
  backgroundPosition: '50% 30%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  marginTop: '-237px',
  backgroundColor: '#EBE0D3' 
};

const PrivacyPolicy = () => {


  return (<>
 
    <HeaderWhite logoImg={logo}
    />
            <Banner1
    heading={'EmpowerCare Privacy Policy'} 
  
    bannerImg={bannerImg}
    styles={bannerStyles}
      
    bnrbtn={"Quick Apply"}

    />
    
   <Policies/>
   
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
