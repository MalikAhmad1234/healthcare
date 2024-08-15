import AboutEmpowercare from "../../Components/AboutEmpowercare/AboutEmpowercare"
import Banner1 from "../../Components/Banner_facility/Banner_facility"
import Banner from "../../Components/Banner10/Banner10"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import Stories from "../../Components/Stories/Stories"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import img from '../../Assets/advantages.png'
import bannerImg from '../../Assets/advantagesImg.png'
import FAQ from "../../Components/FAQ/Fc_PG5_Faq5" 
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
const Faqstravelnursing=()=>{ 
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
    heading={'Travel Nursing FAQ Guide '} 
    description={'FAQ Guide for Travel Nurse Staffing Solutions'}
    meta={''}
    bannerImg={bannerImg}
    styles={bannerStyles}

    bnrbtn={"Request Staffing"}
    />
    <Trusted/>
    <FAQ/>
    <AboutEmpowercare/>
    <Stories/>
    <Userslider
    link={"/facilities/request-staffing"}
    reviewbtn={"Request Staffing"}
    />
    <Footer/>

    </>)
}
export default Faqstravelnursing