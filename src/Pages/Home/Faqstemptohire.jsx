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
import FAQ2 from "../../Components/FAQ/Pr_PG2_Faq2" 
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import storiesimg from '../../Assets/storiesimg.png';
const Faqstemptohire=()=>{ 
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
    heading={'FAQ Guide '} 
    description={'FAQ GUIDE FOR TEMP-TO-HIRE/CONTRACT-TO-HIRE OPPORTUNITIES'}
    meta={'Enjoy Unparalleled Flexibility with EmpowerCares Per Diem Jobs'}
    bannerImg={bannerImg}
    styles={bannerStyles}

    bnrbtn={"Quick Apply"}

    />
    <Trusted/>
    <FAQ2/>
    <AboutEmpowercare/>
    <Stories
  
    video_link="https://www.youtube.com/shorts/X5DhrVv-hk4?feature=share"
    />
    <Userslider
    reviewbtn={"Quick Apply"}
    />
    <Footer/>

    </>)
}
export default Faqstemptohire