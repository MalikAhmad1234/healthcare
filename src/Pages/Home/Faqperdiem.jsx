import AboutEmpowercare from "../../Components/AboutEmpowercare/AboutEmpowercare"
import Banner1 from "../../Components/Banner_facility/Banner_facility"
import Banner from "../../Components/Banner10/Banner10"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import Stories from "../../Components/Stories/Stories"
import FacilitiesTrusted from "../../Components/FacilitiesTrusted/FacilitiesTrusted"
import Userslider from "../../Components/Userslider/Userslider"
import img from '../../Assets/advantages.png'
import bannerImg from '../../Assets/advantagesImg.png'
import FAQ9 from "../../Components/FAQ/Fc_PG4_Faq4" 
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
const Faqperdiem=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`, 
        backgroundPosition: '50% 30%',
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'contain',
        marginTop: '-237px',
        backgroundColor: '#EBE0D3'
    };
    return(<>
    <HeaderWhite
          logoImg={logow}
          />
    <Banner1
    heading={'Per Diem Staffing Solutions'} 
    description={'FAQ Guide for per diem staffing solutions'}
    meta={''}
    bannerImg={bannerImg}
    styles={bannerStyles}

    bnrbtn={"Request Staffing"}
    />
    <FacilitiesTrusted/>
    <FAQ9/>
    <AboutEmpowercare/>
    <Stories/>
    <Userslider
    link={"/facilities/request-staffing"}
    reviewbtn={"Request Staffing"}
    />
    <Footer/>

    </>)
}
export default Faqperdiem