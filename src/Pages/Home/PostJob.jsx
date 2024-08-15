import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import Userslider from "../../Components/Userslider/Userslider"
import Footer from "../../Components/Footer/Footer"
import PostjobForm from '../../Components/PostjobForm/PostjobForm';
import OurAccess from '../../Components/OurAccess/OurAccess';
import Banner2 from "../../Components/Banner2/Banner2"
import bannerImg from '../../Assets/schoolbnrimg.png'
import img from '../../Assets/Group707.png'
// import ThreeColumns from '../../Components/ThreeColumns/ThreeColumns';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';const PostJob=()=>{
    
    const heading='Post a Job on Empowercare'
    const description='Join EmpowerCare to get access to our extensive network of qualified professionals​'
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
        <PostjobForm />
        <OurAccess />
        {/* <ThreeColumns/> */}
        <Userslider/>
        <Footer/>
    </>
    )
}
export default PostJob