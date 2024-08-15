import AboutEmpowercare from "../../Components/AboutEmpowercare/AboutEmpowercare"
import Assessing from "../../Components/Assessing/Assessing"
import DynamicSquads from "../../Components/DynamicSquads/DynamicSquads"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Stories from "../../Components/Stories/Stories"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import bannerImg from '../../Assets/guide.png'
import img from '../../Assets/guideImg.png'
import Banner1 from "../../Components/Banner1/Banner1" 
import CareerSlider from "../../Components/CareerSlider/CareerSlider"
import GuideCards from "../../Components/GuideCards/GuideCards"
import ResponsibilitiesSlider from "../../Components/ResponsibilitiesSlider/ResponsibilitiesSlider"
import HowtoBecome from "../../Components/HowtoBecome/HowtoBecome"
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import storiesimg from '../../Assets/storiesPic.png';
const Guidecrictalcare=()=>{
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
    <Banner1 heading={'Guide to General Nursing Careers'} 
          description={'Guide for Critical Care Nurse Careers: Pathways & Jobs'}
          meta={'A Critical Care or Intensive Care Nurse, also known as an ICU Nurse, is a registered nurse who specializes in providing care to patients with life-threatening conditions in intensive care units (ICUs). '}
          bannerImg={bannerImg}
          styles={bannerStyles}
          bnrbtn={"Quick Apply"}
          />
    <Trusted/>
    <Assessing
     description={"These highly skilled professionals work in a fast-paced, high-pressure environment, collaborating with a multidisciplinary team to deliver comprehensive, round-the-clock care to critically ill patients. Critical Care/Intensive Care Nurses are essential in monitoring, assessing, and treating patients with complex medical needs, ensuring the best possible outcomes."}
    />
    
    <HowtoBecome
     mhead1={"CRITICAL CARE/INTENSIVE CARE NURSE "}
     heading1={"CRITICAL CARE/INTENSIVE CARE NURSE"}
     description1={"To become a Critical Care/Intensive Care Nurse, you must first earn your registered nurse (RN) license by completing an Associate Degree in Nursing (ADN) or a Bachelor of Science in Nursing (BSN) program and passing the NCLEX-RN exam. "}
     description2={"After gaining experience as an RN, you can pursue specialized training in critical care nursing through certifications such as:CCRN (Adult) – Critical Care Registered Nurse"}
     description3={"EmpowerCare offers a wide range of opportunities for Critical Care/Intensive Care Nurses, including ICU nurse jobs, critical care nursing positions, intensive care contract jobs, per diem CCRN jobs, and travel nursing assignments. "}
     description4={"Our goal is to empower you to find the perfect position that aligns with your skills, experience, and career goals while providing efficient and caring support throughout your journey."}
    />
    <ResponsibilitiesSlider
    
    main_head1={"What Does an "}
    main_head2={"Critical Care/Intensive Care"}
    main_head3={"Do"}
    main_head_desc={"ER Nurses have a wide range of responsibilities, including:"}

    car_head1={"Advocating for patients"}
    car_desc={"Advocating for patients' needs and ensuring they receive the highest quality of care"}

    car_head2={"Managing Advanced"}
    car_desc2={"Managing advanced medical equipment, such as ventilators, hemodynamic monitoring systems, and IV pumps"}

    car_head3={"Providing Emotional"}
    car_desc3={"Providing emotional support and education to patients and their families"}

    car_head4={"Emergency Situations "}
    car_desc4={"Responding to emergency situations and initiating life-saving interventions"}

    car_head5={"Maintaining"}
    car_desc5={"Maintaining accurate and up-to-date patient records"}
    
    />
    <GuideCards
    head1={"Find Your Next Critical Care/Intensive Care Nursing Job with EmpowerCare"}
    head_desc1={"EmpowerCare is dedicated to helping you find the perfect Critical Care/Intensive Care Nursing position to fit your lifestyle and career goals."}
    head_desc2={"Whether you're looking for a full-time ICU nurse job, a part-time critical care nursing position, or a travel nursing assignment, our team is here to support you every step of the way."}
    head2={"Education and Training for Critical Care/Intensive Care Nurses"}
    head2_desc1={"In addition to the required RN education and certifications, Critical Care/Intensive Care Nurses must continuously update their knowledge and skills to stay current with the latest advancements in patient care and medical technology. EmpowerCare is committed to empowering our nurses by providing access to ongoing education and training opportunities, ensuring you have the tools and resources needed to excel in your career."}
    
    />
    <FaqAccordian
       faq_head1={"What types of patients do Critical Care/Intensive Care Nurses typically care for? "}
       faq_desc1={"Critical Care/Intensive Care Nurses care for patients with life-threatening conditions, such as severe respiratory distress, sepsis, cardiac arrest, multi-organ failure, and traumatic injuries."}
       faq_head2={"What is the difference between a Critical Care Nurse and a Medical/Surgical Nurse?"}
       faq_desc2={"Critical Care Nurses specialize in caring for patients with life-threatening conditions that require constant monitoring and advanced interventions, while Medical/Surgical Nurses care for a broader range of patients with less severe conditions."}
       faq_head3={"What skills are essential for a successful career as a Critical Care/Intensive Care Nurse?"}
       faq_desc3={"Essential skills include strong clinical knowledge, excellent critical thinking and problem-solving abilities, proficiency in managing advanced medical equipment, effective communication and interpersonal skills, and the ability to work well under pressure in high-stress situations."}
    
    />
    <DynamicSquads

        meta={"DYNAMIC SQUADS"}
        metahd1={"DYNAMIC"}
        metahd2={"SQUADS:"}
        metahd3={"YOUR PERSONALIZED PATH TO SUCCESS"}
        desc1={"At EmpowerCare, we are dedicated to empowering Critical Care/Intensive Care Nurses to achieve their career goals by providing efficient, caring, and personalized support. Join our network today and let us help you find your dream job in critical care nursing."}
        
        heading={"Opportunities available includes"}
        bullet_text1={"Hospital General Nurse job opportunities"}
        bullet_text2={"Clinic Registered Nurse (RN) positions"}
        bullet_text3={"Long-term Care Facility Staff Nurse job openings"}
        bullet_text4={"School Nurse contract positions"}

    
    
    />
    <AboutEmpowercare/>
    <Stories
    img={storiesimg}
    description={"Are You Ready for Flexible and Rewarding Per Diem Work?"}
    description2={"Step into the world of per diem opportunities with EmpowerCare and tailor your job to fit your life. Start your journey today with a team that values your flexibility and career aspirations. "}
    Join={"JOIN US NOW"}
    btn1={"Apply Now"}
    video_link={"https://www.youtube.com/shorts/X5DhrVv-hk4"}
    />
    <Userslider reviewbtn={"Quick Apply"}/>
    <Footer/>
    </>)
}
export default Guidecrictalcare