import Banner2 from "../../Components/Banner2/Banner2"
import Ally from "../../Components/Ceo/Ally"
import Challenges from "../../Components/Ceo/Challenges"
import LastButtons from "../../Components/Ceo/LastButtons"
import RealChange from "../../Components/Ceo/RealChange"
import Section1 from "../../Components/Ceo/Section1"
import Footer from "../../Components/Footer/Footer"
import HeaderWhite from '../../Components/HeaderWhite/HeaderWhite';
import Userslider2 from "../../Components/UserSlider2/UserSlider2"
import bannerImg from '../../Assets/Group231.png';
import img from '../../Assets/Group579.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';

const Ceo = () => {
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50% 43%',
        backgroundRepeat: 'no-repeat',
        marginTop: '-265px',
        backgroundSize: 'contain',
        backgroundColor: '#EBE0D3'
    };
    return (
    <>
        <HeaderWhite
          logoImg={logow}
          />
        <Banner2 heading={'CEO LETTER'} description={'FOR NEARLY TWO DECADES MSG STAFFING HAS HAD A PROFOUND IMPACT ON MY LIFE.'}
        img={bannerImg}
        styles={bannerStyles}
        />
        <Section1/>
        <Challenges/>
        <Ally/>
        <RealChange/>
        <LastButtons/>
        <Userslider2/>
        <Footer/>
    </>
    )
}
export default Ceo