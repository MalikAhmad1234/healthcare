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
import HeaderWhite from "../../Components/HeaderWhite2/HeaderWhite2"
const EmpowercareAcadmey=()=>{
    const bannerStyles = { 
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-295px',
        backgroundColor: '#EBE0D3'
    };
    return(<>
        <HeaderWhite
              logoImg={logow}
              />
        <Banner1
        heading={'Empowercare ACADEMY'} 
        description={'Elevate Your Facility Performance with EmpowerCare Academy'}
        meta={'As a healthcare facility decision-maker, you understand the critical importance of having a highly skilled, well-trained workforce to deliver exceptional patient care and drive your organizations success.'}
        bannerImg={bannerImg}
        styles={bannerStyles}

        bnrbtn={"Request Staffing"}
        />
        <Trusted
        hd1={"Facilities"}
        
        />
        <ShiftChampions
           head1={"Invest in Your "}
           head2={" Most Valuable"}
           head3={" Asset:"}
           head4={" Your People"}
    
           desc1={"Your healthcare professionals are the heart and soul of your organization. By investing in their growth and development through EmpowerCare Academy, you're not only enhancing their skills and expertise but also fostering a culture of continuous learning, support, and mutual respect."}
           desc2={"Our Academy offers a wide range of tailored learning pathways, designed to meet the unique needs of your staff and your facility."}
           desc3={" From specialized training programs for nurses and allied health professionals to exclusive certifications in high-demand areas"}
           desc4={"we ensure that your team is equipped with the knowledge and skills they need to excel in their roles and provide the highest quality of patient care."}
    
        />
        <Initiative
        heading={'Empower Your Staff, Elevate Your Facility'}
        heading1={''}
        heading2={''}
        heading3={''}
        heading4={''}
        description1={'When your healthcare professionals feel supported, empowered, and valued, they are more likely to be engaged, motivated, and committed to their work.'}
        description2={'EmpowerCare Academy programs are designed to do just that – empower your staff to reach their full potential and make a meaningful impact in their careers and the lives of their patients.'}
        description3={'Our immersive, hands-on training experiences are led by world-class instructors who are experts in their fields.'}
        description4={'They guide your staff through real-world scenarios, refining their clinical skills and developing vital capabilities that directly translate to improved patient outcomes and enhanced organizational performance.'}
        />
        <Benefits/> 
        <FaqAccordian
        faq_head1={"How can EmpowerCare Academy benefit my healthcare facility? "}
        faq_desc1={"EmpowerCare Academy provides your staff with cutting-edge training, exclusive certifications, and professional development opportunities that enhance their skills, expertise, and performance. By investing in your healthcare professionals' growth and development, you elevate your facility's overall performance, patient care quality, and competitive advantage in the market."}
        faq_head2={"What types of training programs does EmpowerCare Academy offer? "}
        faq_desc2={"mpowerCare Academy offers a wide range of tailored learning pathways, including specialized training programs for nurses, allied health professionals, and other healthcare roles. Our programs cover high-demand areas such as clinical skills, patient care, leadership, and more, ensuring that your staff is equipped with the knowledge and skills they need to excel in their roles."}
        faq_head3={"How does EmpowerCare Academy's approach differ from other training providers? "}
        faq_desc3={"EmpowerCare Academy takes a personalized, immersive approach to professional development. Our programs are led by world-class instructors who guide your staff through real-world scenarios, refining their clinical skills and developing vital capabilities. We work closely with you to identify your facility's unique needs and tailor our programs accordingly, ensuring maximum relevance and impact."}
        faq_head4={"Can EmpowerCare Academy support my facility's specific training needs? "}
        faq_desc4={"Absolutely. EmpowerCare Academy understands that every healthcare facility is unique, with its own set of challenges, goals, and priorities. Our dedicated team of experts will work closely with you to assess your specific training needs and design customized programs that align with your objectives and drive measurable results"}

        faq_head5={"How can I get started with EmpowerCare Academy for my facility? "}
        faq_desc5={"Getting started with EmpowerCare Academy is easy. Simply reach out to our team to schedule a consultation, where we'll discuss your facility's specific needs, goals, and challenges. From there, we'll work with you to develop a tailored plan that leverages our cutting-edge training, exclusive certifications, and professional development programs to elevate your staff's performance and your facility's success."}

        faq={"Frequently Asked Question"}
        
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
        reviewbtn={"Request Staffing "}
        />
        <Footer/>
    
        </>)
}
export default EmpowercareAcadmey