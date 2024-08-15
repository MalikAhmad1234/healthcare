import Banner2 from "../../Components/Banner2/Banner2"
import Footer from "../../Components/Footer/Footer"
import bannerImg from '../../Assets/network.png'
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import NetworkForm from "../../Components/Resources/Network/NetworkForm"
import NetworkSection1 from "../../Components/Resources/Network/NetworkSection1"
import TermsandConditions from "../../Components/Resources/Network/TermsandConditions"
import Userslider2 from "../../Components/UserSlider2/UserSlider2"
import img from '../../Assets/Group675.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';

const Network=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginTop: '-235px',
        backgroundColor: '#EBE0D3'
    };
    return (<>
    <HeaderWhite
          logoImg={logow}
          />
    <Banner2 heading={'EMPOWER YOUR NETWORK'} description={'TRANSFORM HEALTHCARE.'}
    img={bannerImg}
    styles={bannerStyles}
    />
   <NetworkSection1/>
   <NetworkForm/>
   <TermsandConditions/>
   <Userslider2/>
   <Footer/>
    </>)
}
export default Network