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
import GeneralNursing from "../../Components/GeneralNursing/GeneralNursing"
const Guide=()=>{
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
          description={'General Nursing: Pathways, Roles and Jobs​'}
          meta={'A General Nurse, also known as a Registered Nurse or a Staff Nurse, is a Healthcare Professional who provides comprehensive care to patients.​'}
          bannerImg={bannerImg}
          styles={bannerStyles}

          bnrbtn={"Quick Apply"}
          />
    <Trusted/>
    <Assessing
     description={"These nurses are skilled in assessing, planning, implementing, and evaluating patient care, collaborating with a multidisciplinary team to ensure the best possible outcomes. General Nurses are versatile and adaptable, capable of working in a wide range of specialties and settings."}
    />
    <GeneralNursing
    guide={true}
    heading1={'GENERAL'}
    heading2={'NURSING '}
    heading3={'ALSO KNOWN AS'}
    text1={'Registered Nurse (RN)'}
    text2={'Staff Nurse'}
    text3={' Floor Nurse'}
    text4={'Bedside Nurse'}
    />
    
    <HowtoBecome
     mhead1={"GENERAL NURSE:"}
     heading1={"Register Nurse (RN) License"}
     description1={"To become a General Nurse, you must earn your registered nurse (RN) license by completing an Associate Degree in Nursing (ADN) or a Bachelor of Science in Nursing (BSN) program and passing the NCLEX-RN exam. "}
     description2={"Some nurses choose to specialize in a particular area of nursing, such as pediatrics, geriatrics, or oncology, through additional education and certifications."}
     description3={"EmpowerCare offers a wide range of opportunities for General Nurses, including RN jobs, staff nurse positions, floor nurse contract jobs, per diem bedside nurse jobs, and travel nursing assignments."}
     description4={"Our goal is to empower you to find the perfect position that aligns with your skills, experience, and career goals while providing efficient and caring support throughout your journey."}
    />
    <ResponsibilitiesSlider
    
    main_head1={"What Does a "}
    main_head2={"General Nurse"}
    main_head3={"Do"}
    main_head_desc={"General Nurses have a wide range of responsibilities, including"}

    car_head1={"Dveloping Individualized"}
    car_desc={"Assessing patients' health status and developing individualized care plans"}

    car_head2={"Medications & Treatment"}
    car_desc2={"Administering medications and treatments as prescribed by physicians"}

    car_head3={"Monitoring Patients"}
    car_desc3={"Monitoring patients' vital signs and observing their response to treatment"}

    car_head4={"Wound Care"}
    car_desc4={"Providing wound care and other bedside procedures"}

    car_head5={"Educating Patients"}
    car_desc5={"Educating patients and their families about health conditions, medications"}
    
    />
    <GuideCards
    head1={"Find Your Next General Nursing Job with EmpowerCare"}
    head_desc1={"EmpowerCare is dedicated to helping you find the perfect General Nursing position to fit your lifestyle and career goals. "}
    head_desc2={"Whether you're looking for a full-time RN job, a part-time staff nurse position, or a travel nursing assignment, our team is here to support you every step of the way."}
    head2={"Education and Training for General Nurses"}
    head2_desc1={"In addition to the required RN education, General Nurses must continuously update their knowledge and skills to stay current with the latest advancements in patient care and medical technology. EmpowerCare is committed to empowering our nurses by providing access to ongoing education and training opportunities, ensuring you have the tools and resources needed to excel in your career."}
    
    />
    <FaqAccordian
       faq_head1={"What is the difference between a General Nurse and a Specialist Nurse"}
       faq_desc1={"General Nurses provide comprehensive care to patients with a wide range of health conditions, while Specialist Nurses focus on a specific area of nursing, such as pediatrics, oncology, or critical care."}
       faq_head2={"What skills are essential for a successful career as a General Nurse?"}
       faq_desc2={"Essential skills include strong clinical knowledge, excellent communication and interpersonal skills, critical thinking and problem-solving abilities, attention to detail, and the ability to work well in a team environment"}
       faq_head3={"What is the job outlook for General Nurses? "}
       faq_desc3={"The demand for skilled General Nurses is expected to remain high as the healthcare industry continues to grow and the population ages. This creates numerous opportunities for nurses seeking careers in this diverse and rewarding field."}
    
    />
    <DynamicSquads

        meta={"DYNAMIC SQUADS"}
        metahd1={"DYNAMIC"}
        metahd2={"SQUADS:"}
        metahd3={"YOUR PERSONALIZED PATH TO SUCCESS"}
        desc1={"At EmpowerCare, we are dedicated to empowering General Nurses to achieve their career goals by providing efficient, caring, and personalized support. Join our network today and let us help you find your dream job in nursing."}
        
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
    <Userslider 
    reviewbtn={"Quick Apply"}
    />
    <Footer/>
    </>)
}
export default Guide