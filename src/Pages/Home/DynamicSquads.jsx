import Banner1 from "../../Components/Banner_facility/Banner_facility"
import Footer from "../../Components/Footer/Footer"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import bannerImg from '../../Assets/unsung2.png'
import img from '../../Assets/unsung1.png'
import Stories from "../../Components/Stories/Stories"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Initiative from "../../Components/Initiative/Initiative"
import ShiftChampions from "../../Components/ShiftChampions/ShiftChampions"
import Benefits from "../../Components/Benefits/Benefits"
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import HeaderWhite2 from "../../Components/HeaderWhite2/HeaderWhite2"
const DynamicSquads=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-295px',
        backgroundColor: '#EBE0D3'
    };
    return(<>
        <HeaderWhite2
              logoImg={logow}
              />
        <Banner1
        heading={'Dynamic Squads'} 
        description={'Revolutionize Your Staffing with EmpowerCare Dynamic Squads'}
        meta={'As a healthcare facility decision-maker, you know that finding the right staffing solution is crucial to delivering high-quality patient care and maintaining a smooth operation.'}
        bannerImg={bannerImg}
        styles={bannerStyles}

        bnrbtn={"Request Staffing"}
        />
        <Trusted
        hd1={"Facilities"}
        />
        <ShiftChampions
           head1={"Personalized "}
           head2={" Staffing Solutions"}
           head3={" Tailored to Your"}
           head4={" Facility's Needs "}
    
           desc1={"EmpowerCare understands that every healthcare facility is unique, with its own set of challenges and requirements."}
           desc2={"That's why our Dynamic Squads offer a fully customized approach to staffing, ensuring that we meet your specific needs with precision and care."}
           desc3={"Our team works closely with you to understand your facility's culture, patient population, and staffing requirements."}
           desc4={"We then leverage our advanced matching technology and extensive network of qualified healthcare professionals to find the perfect candidates for your open positions."}
    
        />
        <Initiative
        heading={'Responsive Staffing That Adapts to Your Changing Needs'}
        heading1={''}
        heading2={''}
        heading3={''}
        heading4={''}
        description1={'In the fast-paced world of healthcare, your staffing needs can change at a moments notice.'}
        description2={'EmpowerCare Dynamic Squads are designed to be highly responsive, quickly adapting to your evolving requirements and ensuring that you have the right staff in place when you need them most.'}
        description3={'Our team is available 24/7 to address your staffing concerns and provide solutions in real-time.'}
        description4={'Whether you need to fill a last-minute shift or require a long-term staffing strategy, we are here to help.'}
        />
        <Benefits/> 
        <FaqAccordian
        faq={"EMPOWERCARE'S DYNAMIC SQUADS"}
        faq_head1={"How can EmpowerCare's Dynamic Squads benefit my healthcare facility?"}
        faq_desc1={"EmpowerCare's Dynamic Squads offer a personalized, responsive, and convenient staffing solution that is tailored to your facility's unique needs. By leveraging our advanced matching technology and extensive network of qualified healthcare professionals, we can help you find the perfect candidates for your open positions quickly and efficiently."}

        faq_head2={"What sets EmpowerCare apart from other healthcare staffing agencies?"}
        faq_desc2={"EmpowerCare's Dynamic Squads prioritize building strong relationships with both our healthcare professionals and our facility partners. We focus on creating a positive, supportive environment that empowers healthcare professionals to provide the best possible care. Our commitment to putting people first sets us apart from other staffing agencies."}

        faq_head3={"How does EmpowerCare ensure the quality of its healthcare professionals? "}
        faq_desc3={"EmpowerCare maintains rigorous standards for our healthcare professionals. We conduct thorough background checks, verify credentials, and assess skills to ensure that our professionals meet the highest standards of quality and professionalism. Additionally, we provide ongoing support and training to our professionals to help them excel in their roles."}

        faq_head4={"How responsive is EmpowerCare to my facility's changing staffing needs?"}
        faq_desc4={"EmpowerCare's Dynamic Squads are designed to be highly responsive to your facility's evolving staffing requirements. Our team is available 24/7 to address your concerns and provide solutions in real-time. Whether you need to fill a last-minute shift or require a long-term staffing strategy, we're here to help."}

        faq_head5={"How does EmpowerCare make the staffing process convenient for my facility?"}
        faq_desc5={"EmpowerCare's user-friendly platform streamlines the staffing process for your facility. You can easily post open positions, review candidate profiles, and communicate with our team. We handle all the administrative tasks, from recruiting and screening to onboarding and compliance, allowing you to focus on providing exceptional patient care."}
        
        />
        <Stories
        // img={storiesimg}
        description={"Join EmpowerCare's Dynamic Squads and become a Shift Champion today. "}
        description2={"Let us empower you to reach new heights in your healthcare career and make a lasting impact on patient care and satisfaction. Together, we can efficiently redefine healthcare staffing and create a brighter future for healthcare professionals and patients alike."}
        Join={"JOIN US NOW"}
        btn1={"Quick Apply"}
        video_link={"https://www.youtube.com/shorts/X5DhrVv-hk4"}
        />
        <Userslider
        link={"/facilities/request-staffing"}
        reviewbtn={"REquest Staffing "}
        />
        <Footer/>
    
        </>)
}
export default DynamicSquads