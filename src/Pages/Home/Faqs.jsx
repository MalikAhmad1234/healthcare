import AboutEmpowercare from "../../Components/AboutEmpowercare/AboutEmpowercare"
import Banner1 from "../../Components/Banner1/Banner1"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import Stories from "../../Components/Stories/Stories"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import img from '../../Assets/advantages.png'
import bannerImg from '../../Assets/faqs.png'
import FAQ from "../../Components/FAQ/FAQ" 
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import storiesimg from '../../Assets/storiesPic.png';
const Faqs=()=>{
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
    heading={'Local Contract FAQs'} 
    description={'Your Quick Guide'}
    meta={'Enjoy Unparalleled Flexibility with EmpowerCares Per Diem Jobs'}
    bannerImg={bannerImg}
    styles={bannerStyles}

    bnrbtn={"Quick Apply"}
    />
    <Trusted/>
    <FAQ/>
    <AboutEmpowercare/>
    <Stories
    img={storiesimg}
    description={"Are You Ready for Flexible and Rewarding Per Diem Work?"}
    description2={"Step into the world of per diem opportunities with EmpowerCare and tailor your job to fit your life. Start your journey today with a team that values your flexibility and career aspirations. "}
    Join={"JOIN US NOW"}
    btn1={"Apply Now"}
    />
    {/* <FaqAccordian/> */}
    <Userslider
    reviewbtn={"Quick Apply"}
    />
    <Footer/>

    </>)
}
export default Faqs