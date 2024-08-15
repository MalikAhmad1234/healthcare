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
const Guidestepdown=()=>{
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
          description={'Guide for Step Down Nurse Careers: Pathways & Jobs'}
          meta={'A general nurse also known as registered nurse (RN) or a staff Nurse, is a healthcare professional who provides comprehensive care to patients in various settings'}
          bannerImg={bannerImg}
          styles={bannerStyles}
          bnrbtn={"Quick Apply"}
          />
    <Trusted/>
    <Assessing
    description={"A Step Down or Progressive Care Nurse is a registered nurse who specializes in caring for patients who require a higher level of monitoring and care than those in a general medical-surgical unit, but not as intensive as those in an Intensive Care Unit (ICU). These nurses work in step-down units or intermediate care units, providing highly skilled nursing care to patients with complex medical conditions."}
    />
    
    <HowtoBecome
     mhead1={"STEP DOWN/PROGRESSIVE CARE NURSE"}
     heading1={"STEP DOWN/PROGRESSIVE CARE NURSE"}
     description1={"To become a Step Down/Progressive Care Nurse, you must first earn your registered nurse (RN) license by completing an Associate Degree in Nursing (ADN) or a Bachelor of Science in Nursing (BSN) program and passing the NCLEX-RN exam."}
     description2={"After gaining experience as an RN, you can pursue specialized training in progressive care nursing through certifications such as:PCCN (Progressive Care Certified Nurse)"
     }
     description3={"EmpowerCare offers a wide range of opportunities for Step Down/Progressive Care Nurses, including PCU nurse jobs, telemetry nursing positions, step-down unit contract jobs, per diem progressive care nurse jobs, and travel nursing assignments. "}
     description4={"Our goal is to empower you to find the perfect position that aligns with your skills, experience, and career goals while providing efficient and caring support throughout your journey."}
    />
    <ResponsibilitiesSlider
    main_head1={"WHAT DOES A"}
    main_head2={"STEP DOWN/PROGRESSIVE CARE"}
    main_head3={"NURSE DO?"}
    main_head_desc={"Step Down/Progressive Care Nurses have a wide range of responsibilities, including"}
    car_head1={"Monitoring critically "}
    car_desc={"Monitoring patients' vital signs and assessing their condition"}
    car_head2={"Administering medications"}
    car_desc2={"Administering medications and treatments as prescribed by physicians"}
    car_head3={"Managing Advanced"}
    car_desc3={"Managing advanced medical equipment, such as telemetry monitors and ventilators"}
    car_head4={"Multidisciplinary Team "}
    car_desc4={"Collaborating with a multidisciplinary team to develop and implement patient care plans"}
    car_desc5={"Educating patients and their families about their condition and treatment options"}
    car_head5={"Educating patients "}
    
    />
    <GuideCards
    head1={"Find Your Next Step Down/Progressive Care Nursing Job with EmpowerCare"}
    head_desc1={"EmpowerCare is dedicated to helping you find the perfect Step Down/Progressive Care Nursing position to fit your lifestyle and career goals. "}
    head_desc2={"Whether you're looking for a full-time PCU nurse job, a part-time telemetry nursing position, or a travel nursing assignment, our team is here to support you every step of the way."}
    head2={"Education and Training for Step Down/Progressive Care Nurses"}
    head2_desc1={"In addition to the required RN education and certifications, Step Down/Progressive Care Nurses must continuously update their knowledge and skills to stay current with the latest advancements in patient care and medical technology. EmpowerCare is committed to empowering our nurses by providing access to ongoing education and training opportunities, ensuring you have the tools and resources needed to excel in your career."}
    />
    <FaqAccordian
    faq_head1={"What types of patients do Step Down/Progressive Care Nurses typically care for? "}
    faq_desc1={"Step Down/Progressive Care Nurses care for patients with a wide range of complex medical conditions, such as cardiac disorders, respiratory diseases, neurological conditions, and post-surgical recovery."}
    faq_head2={"What is the difference between a Step Down Unit and an Intensive Care Unit (ICU)?"}
    faq_desc2={"A Step Down Unit provides a level of care that is less intensive than an ICU but more advanced than a general medical-surgical unit. Patients in a Step Down Unit require close monitoring and specialized care but do not need the same level of critical care as ICU patients."}
    faq_head3={"What skills are essential for a successful career as a Step Down/Progressive Care Nurse?"}
    faq_desc3={"Essential skills include strong critical thinking and problem-solving abilities, excellent communication and interpersonal skills, proficiency in managing advanced medical equipment, and the ability to work effectively in a fast-paced, high-pressure environment."}

    
    />
    <DynamicSquads
    meta={"DYNAMIC SQUADS"}
    metahd1={"DYNAMIC"}
    metahd2={"SQUADS:"}
    metahd3={"YOUR PERSONALIZED PATH TO SUCCESS"}
    desc1={"At EmpowerCare, we are dedicated to empowering Step Down/Progressive Care Nurses to achieve their career goals by providing efficient, caring, and personalized support. Join our network today and let us help you find your dream job in progressive care nursing."}
    
    heading={"Opportunities available includes"}
    bullet_text1={"Hospital General Nurse job opportunities"}
    bullet_text2={"Clinic Registered Nurse (RN) positions"}
    bullet_text3={"Long-term Care Facility Staff Nurse job openings"}
    bullet_text4={"School Nurse contract positions"}
    />
    <AboutEmpowercare
    
    />
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
export default Guidestepdown