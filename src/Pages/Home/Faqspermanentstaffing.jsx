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
import Pr_PG3_Faq3 from "../../Components/FAQ/Pr_PG3_Faq3" 
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
const Faqspermanentstaffing=()=>{
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
    heading={'Advantages of Per Diem Work'} 
    description={'Unlock the Advantages of Per Diem Work'}
    meta={'Enjoy Unparalleled Flexibility with EmpowerCares Per Diem Jobs'}
    bannerImg={bannerImg}
    styles={bannerStyles}
      
    bnrbtn={"Quick Apply"}

    />
    <Trusted/>
    <Pr_PG3_Faq3/>
    <AboutEmpowercare/>
    <Stories/>
    <Userslider
    reviewbtn={"Quick Apply"}
    />
    <Footer/>

    </>)
}
export default Faqspermanentstaffing