import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import Userslider from "../../Components/Userslider/Userslider"
import Footer from "../../Components/Footer/Footer"
import PostjobForm from '../../Components/PostjobForm/PostjobForm';
import OurAccess from '../../Components/OurAccess/OurAccess';
import Banner2 from "../../Components/Banner2/Banner2"
import bannerImg from '../../Assets/elipse2.png'
import img from '../../Assets/Group707.png'
// import ThreeColumns from '../../Components/ThreeColumns/ThreeColumns';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import ApplyJobForm from "../../Components/ApplyJobForm/ApplyJobForm.jsx";
const ApplyJob=()=>{
    
    const heading='Apply a job at empowercare'
    const description="Connect with the right talent faster with the nation’s largest nurse-only job board.Reach 1 million+ nursing professionals looking for full and part-time work in all types of care settings."
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50% 46%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginTop: '-255px',
        backgroundColor: '#EBE0D3'
    };
    return(
    <>
        <HeaderWhite
            logoImg={logow}
        />
        <Banner2 heading={heading} description={description} img={bannerImg} styles={bannerStyles} />
       <ApplyJobForm/>
        <OurAccess />
        {/* <ThreeColumns/> */}
        <Userslider/>
        <Footer/>
    </>
    )
}
export default ApplyJob