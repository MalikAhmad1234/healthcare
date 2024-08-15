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
const Guidemedicalsurgical=()=>{
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
          description={'Guide for Medical Surgical Nurse Careers: Pathways, Roles, & Jobs'}
          meta={'A Medical Surgical Nurse, also known as a Med/Surg Nurse, is a registered nurse who specializes in caring for adult patients with a wide range of medical conditions and surgical procedures.'}
          bannerImg={bannerImg}
          styles={bannerStyles}
          bnrbtn={"Quick Apply"}
          />
    <Trusted/>
    <Assessing
    description={"These nurses work in fast-paced, dynamic environments, providing comprehensive care to patients before, during, and after treatment. Medical/Surgical Nurses are essential members of the healthcare team, collaborating with physicians, specialists, and other professionals to ensure the best possible outcomes for their patients."}
    />
    
    <HowtoBecome
     mhead1={"MEDICAL/SURGICAL NURSE"}
     heading1={"MEDICAL/SURGICAL NURSE"}
     description1={"To become a Medical/Surgical Nurse, you must first earn your registered nurse (RN) license by completing an Associate Degree in Nursing (ADN) or a Bachelor of Science in Nursing (BSN) program and passing the NCLEX-RN exam."}
     description2={"After gaining experience as an RN, you can pursue specialized training in medical/surgical nursing through certifications such as:CMSRN (Certified Medical-Surgical Registered Nurse)"}
     description3={"EmpowerCare offers a wide range of opportunities for Medical/Surgical Nurses, including Med/Surg nurse jobs, medical nurse positions, surgical nurse contract jobs, per diem hospital nurse jobs, and travel nursing assignments."}
     description4={"Our goal is to empower you to find the perfect position that aligns with your skills, experience, and career goals while providing efficient and caring support throughout your journey."}
    />
    <ResponsibilitiesSlider
    main_head1={"WHAT DOES A"}
    main_head2={"MEDICAL/SURGICAL"}
    main_head3={"NURSE DO?"}
    main_head_desc={"Medical/Surgical Nurses have a wide range of responsibilities, including"}
    car_head1={"Assessing patients"}
    car_desc={"Assessing patients' conditions and developing individualized care plans"}
    car_head2={"Administering medications  "}
    car_desc2={"Administering medications and treatments as prescribed by physicians"}
    car_head3={"Monitoring patients"}
    car_desc3={"Monitoring patients' vital signs and observing their response to treatment"}
    car_head4={"Educating patients"}
    car_desc4={"Educating patients and their families about their condition, treatment options, and post-discharge care"}
    car_head5={"Collaborating "}
    car_desc5={"Collaborating with a multidisciplinary team to ensure comprehensive patient care"}
    
    
    />
    <GuideCards
    head1={"Find Your Next Medical Surgical Nursing Job with EmpowerCare Healthcare"}
    head_desc1={"EmpowerCare is dedicated to helping you find the perfect Medical/Surgical Nursing position to fit your lifestyle and career goals. "}
    head_desc2={"Whether you're looking for a full-time Med/Surg nurse job, a part-time medical nurse position, or a travel nursing assignment, our team is here to support you every step of the way."}
    head2={"Education and Training for Medical/Surgical Nurses"}
    head2_desc1={"In addition to the required RN education and certifications, Medical/Surgical Nurses must continuously update their knowledge and skills to stay current with the latest advancements in patient care and medical technology. EmpowerCare is committed to empowering our nurses by providing access to ongoing education and training opportunities, ensuring you have the tools and resources needed to excel in your career."}
    />
    <FaqAccordian
    faq_head1={"What types of medical conditions do Medical/Surgical Nurses typically encounter? "}
    faq_desc1={"Medical/Surgical Nurses care for patients with a wide range of medical conditions, such as diabetes, respiratory disorders, cardiovascular diseases, gastrointestinal issues, and infectious diseases."}
    faq_head2={"What types of surgical procedures do Medical/Surgical Nurses assist with?"}
    faq_desc2={"Medical/Surgical Nurses may assist with a variety of surgical procedures, including general surgery, orthopedic surgery, neurosurgery, and urologic surgery."}
    faq_head3={"What skills are essential for a successful career as a Medical/Surgical Nurse? "}
    faq_desc3={"Essential skills include strong clinical knowledge, excellent communication and interpersonal skills, proficiency in managing medical equipment, critical thinking and problem-solving abilities, and the ability to work effectively in a fast-paced, high-pressure environment."}

    
    />
    <DynamicSquads
    meta={"DYNAMIC SQUADS"}
    metahd1={"DYNAMIC"}
    metahd2={"SQUADS:"}
    metahd3={"YOUR PERSONALIZED PATH TO SUCCESS"}
    desc1={"At EmpowerCare, we are dedicated to empowering Medical/Surgical Nurses to achieve their career goals by providing efficient, caring, and personalized support. Join our network today and let us help you find your dream job in medical/surgical nursing."}
    
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
export default Guidemedicalsurgical