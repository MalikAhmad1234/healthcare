import Banner2 from "../../Components/Banner2/Banner2"
import Footer from "../../Components/Footer/Footer"
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import BenefitForm from "../../Components/Resources/Benefits/BenefitForm"
import bannerImg from '../../Assets/Group-2.png'
import AboutUs from "../../Components/Resources/EmpowerCare Heroes/AboutUs"
import BenefitsForyou from "../../Components/Resources/EmpowerCare Heroes/BenefitsForyou"
import Culture from "../../Components/Resources/EmpowerCare Heroes/Culture"
import HeroesForm from "../../Components/Resources/EmpowerCare Heroes/HeroesForm"
import MakingDifference from "../../Components/Resources/EmpowerCare Heroes/MakingDifference"
import OurBenefits from "../../Components/Resources/EmpowerCare Heroes/OurBenefits"
import Userslider2 from "../../Components/UserSlider2/UserSlider2"
import img from '../../Assets/heros.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
const Heroes=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50% 49%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginTop: '-250px',
        backgroundColor: '#EBE0D3'
    };
    
    return (<>
    <HeaderWhite
          logoImg={logow}
          />
    <Banner2 heading={'EMPOWERING HEALTHCARE HEROES'} 
    img={bannerImg}
    styles={bannerStyles}
    />
    <BenefitsForyou/>
    <AboutUs/>
    <OurBenefits/>
    <Culture
    readmorebtn={
    <div class="priemer-cta">
    <a class="btn_red" href="/facilities/shift-champions">READ MORE</a>
    </div>
    }/>
    <MakingDifference
    readmorebtn2={
        <div class="btns-flex">
                    <div>
                        <a class="btn_grad" href="/facilities/ripple-effect">
                            READ MORE
                        </a>
                    </div>
                </div> 
    }
    />
    <HeroesForm/>
    <Userslider2/>
    <Footer/>

</>)}
export default Heroes