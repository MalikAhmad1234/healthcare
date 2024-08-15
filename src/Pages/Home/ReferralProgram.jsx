import Banner2 from "../../Components/Banner2/Banner2"
import Footer from "../../Components/Footer/Footer"
import ReferralForm from "../../Components/Resources/ReferralProgram/ReferralForm"
import Userslider2 from "../../Components/UserSlider2/UserSlider2"
import bannerImg from '../../Assets/resinner.png'
import img from '../../Assets/Group125.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
const ReferralProgram=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50% 46%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginTop: '-223px',
        backgroundColor: '#EBE0D3'
    };
    return(<>
    <HeaderWhite
          logoImg={logow}
          />
    <Banner2 heading={'REFERRAL PROGRAM SNIPPET'} description={'REFERRAL PROGRAM.'}
    img={bannerImg}
    styles={bannerStyles}
    />
    <ReferralForm/>
    <Userslider2/>
    <Footer/>
    </>)
}
export default ReferralProgram