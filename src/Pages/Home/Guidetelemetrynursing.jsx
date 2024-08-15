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
const Guidetelemetrynursing=()=>{
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
          description={'Guide for Telemetry Nursing Careers: Pathways & Jobs'}
          meta={'A general nurse also known as registered nurse (RN) or a staff Nurse, is a healthcare professional who provides comprehensive care to patients in various settings'}
          bannerImg={bannerImg}
          styles={bannerStyles}

          bnrbtn={"Quick Apply"}
          />
    <Trusted/>
    <Assessing
    description={"A Telemetry Nurse, also known as a Progressive Care Unit (PCU) Nurse or Cardiac Monitoring Nurse, is a registered nurse who specializes in monitoring and caring for patients with heart conditions or other critical illnesses that require continuous electronic monitoring."}
    />
    
    <HowtoBecome
     mhead1={"TELEMETRY NURSE:"}
     heading1={"Register Telemetry Nurse "}
     description1={"To become a Telemetry Nurse, you must first earn your registered nurse (RN) license by completing an Associate Degree in Nursing (ADN) or a Bachelor of Science in Nursing (BSN) program and passing the NCLEX-RN exam."}
     description2={"●PCCN (Progressive Care Certified Nurse)"}
     description3={"EmpowerCare offers a wide range of opportunities for Telemetry Nurses, including telemetry nurse jobs, PCU nursing positions, cardiac monitoring contract jobs, per diem stepdown nurse jobs, and travel nursing assignments. "}
     description4={"Our goal is to empower you to find the perfect position that aligns with your skills, experience, and career goals while providing efficient and caring support throughout your journey."}
    />
    <ResponsibilitiesSlider
    main_head1={"What Does a "}
    main_head2={"Telemetry Nurse"}
    main_head3={"Do?"}
    main_head_desc={"Telemetry Nurses have a wide range of responsibilities, including:"}
    car_head1={"Monitoring critically "}
    car_desc={"Monitoring critically ill patients' heart rhythm, blood pressure, oxygen levels, and other vital signs using electronic equipment"}
    car_head2={"Interpreting telemetry "}
    car_desc2={"Interpreting telemetry data and detecting abnormalities or changes in patient condition"}
    car_head3={"Administering medications"}
    car_desc3={"Administering medications and treatments as prescribed by physicians"}
    car_head4={"Multidisciplinary Team "}
    car_desc4={"Collaborating with a multidisciplinary team to develop and implement patient care plans"}
    car_desc5={"Educating patients and their families about heart health, medications, and lifestyle changes"}
    car_head5={"Educating patients "}
    
    />
    <GuideCards
    head1={"Find Your Next Telemetry Nursing Job with EmpowerCare"}
    head_desc1={"EmpowerCare is dedicated to helping you find the perfect Telemetry Nursing position to fit your lifestyle and career goals. "}
    head_desc2={"Whether you're looking for a full-time telemetry nurse job, a part-time PCU nursing position, or a travel nursing assignment, our team is here to support you every step of the way."}
    head2={"Education and Training for Telemetry Nurses"}
    head2_desc1={"In addition to the required RN education and certifications, Telemetry Nurses must continuously update their knowledge and skills to stay current with the latest advancements in cardiac monitoring technology and patient care. EmpowerCare is committed to empowering our nurses by providing access to ongoing education and training opportunities, ensuring you have the tools and resources needed to excel in your career."}
    />
    <FaqAccordian
    faq_head1={"What types of patients do Telemetry Nurses typically care for?"}
    faq_desc1={"Telemetry Nurses care for patients with heart conditions, such as arrhythmias, heart failure, and post-cardiac surgery, as well as patients with other critical illnesses that require continuous electronic monitoring."}
    faq_head2={"What is the difference between a Telemetry Nurse and a Critical Care Nurse? "}
    faq_desc2={"While both Telemetry Nurses and Critical Care Nurses care for patients with complex medical conditions, Telemetry Nurses focus on monitoring and managing patients with heart conditions or other illnesses that require continuous electronic surveillance, while Critical Care Nurses provide intensive care for patients with life-threatening conditions in specialized units."}
    faq_head3={"What skills are essential for a successful career as a Telemetry Nurse? "}
    faq_desc3={"Essential skills include strong clinical knowledge, proficiency in interpreting telemetry data, excellent critical thinking and decision-making abilities, effective communication and interpersonal skills, and the ability to work well under pressure in fast-paced environments."}

    
    />
    <DynamicSquads
    meta={"DYNAMIC SQUADS"}
    metahd1={"DYNAMIC"}
    metahd2={"SQUADS:"}
    metahd3={"YOUR PERSONALIZED PATH TO SUCCESS"}
    desc1={"At EmpowerCare, we are dedicated to empowering Telemetry Nurses to achieve their career goals by providing efficient, caring, and personalized support. Join our network today and let us help you find your dream job in telemetry nursing."}
    
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

    <Userslider
    
    reviewbtn={"Quick Apply"}
    />
    <Footer/>
    </>)
}
export default Guidetelemetrynursing