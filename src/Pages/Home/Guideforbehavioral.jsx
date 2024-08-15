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
const Guideforbehavioral=()=>{
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
          description={'Guide for Behavioral and Mental Health Nurse: Pathways & Jobs'}
          meta={'A Behavioral and Mental Health Nurse, also known as a Psychiatric Nurse, is a registered nurse who specializes in providing care to patients with mental health disorders, such as depression, anxiety, bipolar disorder, schizophrenia, and substance abuse.'}
          bannerImg={bannerImg}
          styles={bannerStyles}
          bnrbtn={"Quick Apply"}
          />
    <Trusted/>
    <Assessing
     description={"A Behavioral and Mental Health Nurse, also known as a Psychiatric Nurse, is a registered nurse who specializes in providing care to patients with mental health disorders, such as depression, anxiety, bipolar disorder, schizophrenia, and substance abuse. These compassionate and empathetic professionals work in various settings, collaborating with a multidisciplinary team to develop and implement treatment plans that promote patient recovery and well-being."}
    />
    
    <HowtoBecome
     mhead1={"BEHAVIORAL AND MENTAL HEALTH NURSE "}
     heading1={"BEHAVIORAL AND MENTAL HEALTH NURSE"}
     description1={"To become a Behavioral and Mental Health Nurse, you must first earn your registered nurse (RN) license by completing an Associate Degree in Nursing (ADN) or a Bachelor of Science in Nursing (BSN) program and passing the NCLEX-RN exam.  "}
     description2={"After gaining experience as an RN, you can pursue specialized training in psychiatric nursing through certifications such as: ●	RN-BC (Registered Nurse-Board Certified) in Psychiatric-Mental Health Nursing●	PMHN-BC (Psychiatric-Mental Health Nurse-Board Certified)"}
     description3={"EmpowerCare offers a wide range of opportunities for Behavioral and Mental Health Nurses, including psychiatric nurse jobs, mental health nursing positions, substance abuse nurse contract jobs, per diem psychiatric nurse jobs, and travel nursing assignments. "}
     description4={" Our goal is to empower you to find the perfect position that aligns with your skills, experience, and career goals, while providing efficient and caring support throughout your journey."}
    />
    <ResponsibilitiesSlider
    
    main_head1={"What Does a "}
    main_head2={"Behavioral and Mental Health Nurse "}
    main_head3={"Do"}
    main_head_desc={"Behavioral and Mental Health Nurses have a wide range of responsibilities, including:"}

    car_head1={"Assessing patients'"}
    car_desc={"Assessing patients' mental health status and developing individualized treatment plans"}

    car_head2={"Administering medications"}
    car_desc2={"Administering medications and monitoring patients' responses to treatment"}

    car_head3={"Providing therapeutic"}
    car_desc3={"Providing therapeutic interventions, such as individual and group therapy sessions"}

    car_head4={"Educating patients"}
    car_desc4={"Educating patients and their families about mental health disorders and treatment options"}

    car_head5={"Advocating"}
    car_desc5={"Advocating for patients' rights and ensuring they receive appropriate care"}
    
    />
    <GuideCards
    head1={"Find Your Next Behavioral and Mental Health Nursing Job with EmpowerCare"}
    head_desc1={"EmpowerCare is dedicated to helping you find the perfect Behavioral and Mental Health Nursing position to fit your lifestyle and career goals.  "}
    head_desc2={"Whether you're looking for a full-time psychiatric nurse job, a part-time mental health nursing position, or a travel nursing assignment, our team is here to support you every step of the way."}
    head2={"Education and Training for Behavioral and Mental Health Nurses"}
    head2_desc1={"In addition to the required RN education and certifications, Behavioral and Mental Health Nurses must continuously update their knowledge and skills to stay current with the latest advancements in psychiatric nursing and evidence-based practices. EmpowerCare is committed to empowering our nurses by providing access to ongoing education and training opportunities, ensuring you have the tools and resources needed to excel in your career."}
    
    />
    <FaqAccordian
       faq_head1={"What is the difference between a Psychiatric Nurse and a Psychiatric Nurse Practitioner?"}
       faq_desc1={"A Psychiatric Nurse is a registered nurse who specializes in mental health, while a Psychiatric Nurse Practitioner is an advanced practice registered nurse who can diagnose mental health disorders, prescribe medications, and provide advanced therapeutic interventions."}
       faq_head2={"What are the most common mental health disorders that Behavioral and Mental Health Nurses encounter? "}
       faq_desc2={"Behavioral and Mental Health Nurses often work with patients experiencing depression, anxiety, bipolar disorder, schizophrenia, post-traumatic stress disorder (PTSD), substance abuse disorders, and eating disorders."}
       faq_head3={"What skills are essential for a successful career as a Behavioral and Mental Health Nurse? "}
       faq_desc3={"Essential skills include strong communication and interpersonal skills, empathy, patience, critical thinking, problem-solving, and the ability to work effectively in a multidisciplinary team."}
    
    />
    <DynamicSquads

        meta={"DYNAMIC SQUADS"}
        metahd1={"DYNAMIC"}
        metahd2={"SQUADS:"}
        metahd3={"YOUR PERSONALIZED PATH TO SUCCESS"}
        desc1={"At EmpowerCare, we are dedicated to empowering Behavioral and Mental Health Nurses to achieve their career goals by providing efficient, caring, and personalized support. Join our network today and let us help you find your dream job in psychiatric nursing."}
        
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
export default Guideforbehavioral