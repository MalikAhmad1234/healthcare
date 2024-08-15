import Banner2 from "../../Components/Banner2/Banner2"
import ResourceBoxes from "../../Components/ResourceBoxes/ResourceBoxes"
import Footer from "../../Components/Footer/Footer"
import TitleContentButton from "../../Components/TitleContentButton/TitleContentButton"
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import Userslider from "../../Components/Userslider/Userslider"
import LeftContentRightImage from '../../resources/LeftContentRightImage/LeftContentRightImage';
import bannerImg from '../../Assets/resources.png';
import img from '../../Assets/empowercareresources.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';

const Resources=()=>{

    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50% 45%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginTop: '-270px',
        backgroundColor: '#EBE0D3'
    };
    return (
    <>
        <HeaderWhite
          logoImg={logow}
          />
        <Banner2 heading={'EmpowerCare Resources'} 
        description={"We've got something exciting to share with you – our brand-new Shift Makers Nurses Referral Program!"}
        img={bannerImg}
        styles={bannerStyles}
        />
        <TitleContentButton />
        <ResourceBoxes />
        <LeftContentRightImage />
        <Userslider
        reviewbtn={"Quick Apply"}
        />
        <Footer />
    </>
    )
}
export default Resources