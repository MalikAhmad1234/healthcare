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
import SearchBanner from '../../Components/SearchJobBanner/SearchBanner.jsx';
import SearchBar from "../../Components/SearchBar/SearchBar.jsx";
import { useLocation } from "react-router-dom";

const Searchjob=()=>{
    const location = useLocation();

    // Access the query parameters from location.search
    const queryParams = new URLSearchParams(location.search);
    const job = queryParams.get('job');
    const specialty = queryParams.get('specialty');
    const cityState = queryParams.get('city_state');

    const heading='SEARCH FOR A NEW JOB NOW'
    const description="Connect with the right talent faster with the nation's largest nurs-only job board."
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
            logoImg={logow}/>
        {/* <Banner2  heading={heading} description={description} img={bannerImg} styles={bannerStyles}/> */}
        <SearchBanner heading={heading} description={description} img={bannerImg} styles={bannerStyles}/>
        <SearchBar job ={job} specialty ={specialty} cityState ={cityState}/>
        <Userslider
        
        reviewbtn={"Quick Apply"}
        />
        <Footer/>
    </>
    )
}
export default Searchjob;