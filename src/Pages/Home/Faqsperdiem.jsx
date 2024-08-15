import AboutEmpowercare from "../../Components/AboutEmpowercare/AboutEmpowercare"
import Banner1 from "../../Components/Banner1/Banner1"
import Banner from "../../Components/Banner10/Banner10"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import Stories from "../../Components/Stories/Stories"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import img from '../../Assets/advantages.png'
import bannerImg from '../../Assets/advantagesImg.png'
import FAQ4 from "../../Components/FAQ/Pr_PG4_Faq4" 
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
const Faqsperdiem=()=>{
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
    heading={'Faq Guide'} 
    description={'FAQ Guide for Per Diem Opportunities'}
    meta={'Enjoy Unparalleled Flexibility with EmpowerCares Per Diem Jobs'}
    bannerImg={bannerImg}
    styles={bannerStyles}

    bnrbtn={"Quick Apply"}
    />
    <Trusted/>
    <FAQ4/>
    <AboutEmpowercare/>
    <Stories/>
    <Userslider
    reviewbtn={"Quick Apply"}
    />
    <Footer/>

    </>)
}
export default Faqsperdiem