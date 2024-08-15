import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import Form from "../../Components/Community/Form"
import Banner2 from "../../Components/Banner2/Banner2"
import LeftContentRightImage from '../../resources/LeftContentRightImage/LeftContentRightImage';
import Footer from "../../Components/Footer/Footer"
import OurWorking from '../../resources/OurWorking/OurWorking';
import LeftImageRightContent from '../../resources/LeftImageRightContent/LeftImageRightContent';
import RefferalProgram from '../../resources/RefferalProgram/RefferalProgram';
import Userslider2 from "../../Components/UserSlider2/UserSlider2"
import bannerImg from '../../Assets/Mask Group 2216.png';
import img from '../../Assets/elevatebanners.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';

const Shiftmakers=()=>{
    const heading='ELEVATE YOUR FACILITY WITH US'
    const description="We've got something exciting to share with you - our brand new Shift Makers nurses refferal program."
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50% 39%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginTop: '-235px',
        backgroundColor: '#EBE0D3'
    };
    return(
        
        <>
            <HeaderWhite
          logoImg={logow}
          />
            <Banner2 heading={heading} description={description} 
             img={bannerImg}
             styles={bannerStyles}
            />
            <RefferalProgram />
            <OurWorking />
            <LeftContentRightImage />
            <LeftImageRightContent />
            <Form />
            <Userslider2/>
            <Footer/>
        </>
    )
}
export default Shiftmakers