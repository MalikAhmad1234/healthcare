import HeaderWhite2 from "../../Components/HeaderWhite/HeaderWhite"
import Userslider from "../../Components/Userslider/Userslider"
import Footer from "../../Components/Footer/Footer"
import RequestFrom from '../../Components/RequestStaffingForm/RequestStaffingForm';
import OurAccess from '../../Components/OurAccess/OurAccess';
import Banner2 from "../../Components/Banner2/Banner2"
import Content1 from "../../Components/Community/Content1"
import bannerImg from '../../Assets/elipse2.png'
import img from '../../Assets/banner3.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
const Signup=()=>{
    
    const heading='Your Trusted Healthcare Staffing Partner'
    const description='Sign up now to transform your healthcare facility with EmpowerCare tailored staffing solutions. Access a vast pool of highly qualified healthcare professionals, including nurses, allied health workers, and direct care staff, to meet your organization unique needs.'
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
        <HeaderWhite2
          logoImg={logow}
          />
        <Banner2 heading={heading} description={description} img={bannerImg} styles={bannerStyles} 
      
        />
        <RequestFrom />
        {/* <OurAccess /> */}
        <Content1/>
        <Userslider
        link={"/facilities/request-staffing"}
        reviewbtn={"Request Staffing"}
        />
        <Footer/>
    </>
    )
}
export default Signup