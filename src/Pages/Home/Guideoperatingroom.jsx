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
const Guideoperatingroom=()=>{
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
          description={'Guide for Operating Room Nurse Careers: Pathways & Jobs'}
          meta={'A general nurse also known as registered nurse (RN) or a staff Nurse, is a healthcare professional who provides comprehensive care to patients in various settings'}
          bannerImg={bannerImg}
          styles={bannerStyles}
          bnrbtn={"Quick Apply"}
          />
    <Trusted/>
    <Assessing
    description={"An Operating Room (OR) or Surgery nurse, also known as a perioperative nurse, is a highly skilled registered nurse who specializes in providing care to patients before, during, and after surgical procedures. These nurses work in a fast-paced, high-pressure environment, collaborating with surgeons, anesthesiologists, and other healthcare professionals to ensure the best possible outcomes for their patients."}
    />
    
    <HowtoBecome
     mhead1={"OPERATING ROOM/SURGERY NURSE"}
     heading1={"OPERATING ROOM/SURGERY NURSE"}
     description1={"To become an Operating Room/Surgery nurse, you must first become a registered nurse (RN) by completing an Associate Degree in Nursing (ADN) or a Bachelor of Science in Nursing (BSN) program and passing the NCLEX-RN exam. "}
     description2={"After gaining experience as an RN, you can pursue specialized training in perioperative nursing through certifications such as:CNOR (Certified Nurse Operating Room)"}
     description3={"EmpowerCare offers a wide range of opportunities for Operating Room/Surgery nurses, including OR nurse jobs, perioperative nursing jobs, surgical nurse contract positions, per diem OR nurse jobs, and travel nursing assignments."}
     description4={"Our goal is to empower you to find the perfect position that aligns with your skills, experience, and career goals, while providing efficient and caring support throughout your journey."}
    />
    <ResponsibilitiesSlider
    main_head1={"WHAT DOES AN"}
    main_head2={"OPERATING ROOM/SURGERY"}
    main_head3={"NURSE DO?"}
    main_head_desc={"Operating Room/Surgery nurses have a wide range of responsibilities, including"}
    car_head1={"Administering medications"}
    car_desc={"Preparing patients for surgery by reviewing medical histories, conducting assessments, and providing preoperative education"}
    car_head2={"Monitoring critically "}
    car_desc2={"Collaborating with the surgical team to develop and implement patient care plans"}
    car_head3={"Managing Advanced"}
    car_desc3={"Assisting surgeons during procedures by passing instruments, sponging, suctioning, and other tasks"}
    car_head4={"Multidisciplinary Team "}
    car_desc4={"Monitoring patients' vital signs and administering medications during surgery"}
    car_head5={"Educating patients "}
    car_desc5={"Educating patients and their families about post-surgical care and follow-up instructions"}
    
    
    />
    <GuideCards
    head1={"Find Your Next Operating Room/Surgery Nursing Job with EmpowerCare"}
    head_desc1={"EmpowerCare is dedicated to helping you find the perfect Operating Room nursing jobs to fit your lifestyle and career goals. "}
    head_desc2={"Whether you're looking for a full-time perioperative nurse job, a part-time surgical nurse position, or a travel nursing assignment, our team is here to support you every step of the way."}
    head2={"Education and Training for Step Down/Progressive Care Nurses"}
    head2_desc1={"In addition to the required RN education and certifications, Operating Room/Surgery nurses must continuously update their knowledge and skills to stay current with the latest advancements in surgical techniques and technology. EmpowerCare is committed to empowering our nurses by providing access to ongoing education and training opportunities, ensuring you have the tools and resources needed to excel in your career."}
    />
    <FaqAccordian
    faq_head1={"What is the difference between a scrub nurse and a circulating nurse? "}
    faq_desc1={"A scrub nurse works directly with the surgeon, passing instruments and assisting with the procedure, while a circulating nurse manages the overall operating room environment and monitors the patient's condition."}
    faq_head2={"What are the most common surgical specialties for Operating Room/Surgery nurses?"}
    faq_desc2={"Operating Room/Surgery nurses can specialize in various areas, such as general surgery, orthopedics, neurosurgery, cardiovascular surgery, pediatric surgery, and more."}
    faq_head3={"How can I advance my career as an Operating Room/Surgery nurse? "}
    faq_desc3={"You can advance your career by obtaining specialty certifications, pursuing advanced degrees (such as a Master of Science in Nursing), and taking on leadership roles within your organization."}

    
    />
    <DynamicSquads
    meta={"DYNAMIC SQUADS"}
    metahd1={"DYNAMIC"}
    metahd2={"SQUADS:"}
    metahd3={"YOUR PERSONALIZED PATH TO SUCCESS"}
    desc1={"At EmpowerCare, we are dedicated to empowering Operating Room/Surgery nurses to achieve their career goals by providing efficient, caring, and personalized support. Join our network today and let us help you find your dream job in perioperative nursing."}
    
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
export default Guideoperatingroom