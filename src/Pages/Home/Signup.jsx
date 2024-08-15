import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import Userslider from "../../Components/Userslider/Userslider"
import Footer from "../../Components/Footer/Footer"
import SignupForm from '../../Components/SignupForm/SignupForm';
import OurAccess from '../../Components/OurAccess/OurAccess';
import Banner2 from "../../Components/Banner2/Banner2"
import Content1 from "../../Components/Community/Content1"
import bannerImg from '../../Assets/elipse2.png'
import img from '../../Assets/banner3.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import { useEffect } from "react";
const Signup=()=>{

    const heading='SIGN UP FOR FREE NOW!'
    const description='Join empowercare now to be the part of the biggest staffing agency!'
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50% 46%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginTop: '-255px',
        backgroundColor: '#EBE0D3'
    };
    
    return(
    <>
        <HeaderWhite
          logoImg={logow}
          />
        <Banner2 heading={heading} description={description} img={bannerImg} styles={bannerStyles} 
      
        />
        <SignupForm />
        <OurAccess />
        <Content1/>
        <Userslider
        reviewbtn={"Quick Apply"}
        />
        <Footer/>
    </>
    )
}
export default Signup