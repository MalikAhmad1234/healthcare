import React from 'react';
import HeaderWhite from '../../Components/HeaderWhite2/HeaderWhite2';
import Footer from '../../Components/Footer/Footer';
import Banner2 from '../../Components/Banner2md/Banner2md';
import TrustedPartner from "../../Components/Facilities/TruePartner/TrustedPartner"
import FacilitiesTrusted from '../../Components/FacilitiesTrusted/FacilitiesTrusted';
import CareerSlider from '../../Components/CareerSlider/CareerSlider';
import Userslider from '../../Components/Userslider/Userslider';
import CardsGreen from '../../Components/CardsGreen/CardsGreen';
import Empowercare from '../../directcare/Empowercare/Empowercare';
import SolutionsDesign from "../../Components/SolutionsDesign/SolutionsDesign"
import Staffingsolutions from '../../Components/Staffingsolutions/Staffingsolutions';
import Guaranty from "../../Components/Facilities/TruePartner/Guaranty"
import AboutEmpower from '../../directcare/AboutEmpower/AboutEmpower';
import JoiningForm from '../../directcare/JoiningForm/JoiningForm';
import StaffingProcess from '../../Components/StaffingProcess/StaffingProcess';
import FaqAccordian from '../../directcare/FaqAccordian/FaqAccordian';
import empowercareimg from '../../Assets/directcare.png';
import image from '../../Assets/CPR.png'
import empowercareimg2 from '../../Assets/healthcare-roles.png';
import './Home.scss';
import Facilitynetwork from '../../Components/Facilitynetwork/Facilitynetwork';
import empowercareimg3 from '../../Assets/pledge.png'
import testimonials from '../../Assets/testimonials.png'
import bannerImg from '../../Assets/newGroup230.png';
import img from '../../Assets/Group707.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
const Trustedpartnertemp = () => {
   const bannerStyles = {
      backgroundImage: `url(${img})`,
      backgroundPosition: '50% 44%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      marginTop: '-250px',
      backgroundColor: '#EBE0D3'
  };
   const content={
      "meta": "Why Choose Us",
      
      "heading2": "TEMP-TO-HIRE",
      "heading3": "STAFFING FOR HEALTHCARE ROLES",
     
      "description": "EmpowerCare offers temp-to-hire staffing solutions for a wide range ofpositions, including:",
      "bullet1": "● Registered Nurses (RNs)",
      "bullet2": "● Allied Health Professionals",
      "bullet3": "● Certified Nursing Assistants (CNAs)",
      "bullet4": "● Licensed Practical Nurses (LPNs)",
      "bullet5": "● Non-Clinical Healthcare Roles",
      
    }
    const content2={
      "meta": "SEAMLESS PLEDGE ",
      "heading1": "SEAMLESS PLEDGE: MAKE A ",
      "heading2": "MEANINGFULL ",
      "heading3": "IMPACT WITH EVERY SHIFT",
      "description":"We view every shift as a chance to make a positive difference. Our Seamless Pledgeguarantees hassle-free staffing and meaningful placements, reflecting our belief inthe power of each job to contribute to the EmpowerCare ripple effect of transforminglives and elevating care",
       "btn":"SEAMLESS SQUADS"
    }
  return (
    <>
        <HeaderWhite
          logoImg={logow}
          />
        <Banner2 heading={'TEMP-TO-HIRE STAFFING SOLUTIONS'} 
          description={"Your Trusted Partner for Temp-to-Hire Staffing Solutions Evaluate Talent Before Hiring with EmpowerCare's Temp-to-Hire"}
          img={bannerImg}
          styles={bannerStyles}
         />
        <FacilitiesTrusted />
        <TrustedPartner 
        simpleButton={true}
        button={false}
        anchor={false}
        img={empowercareimg}
        meta={'ABOUT US'} 
        heading1={'PREMIER'} 
        heading2={' NURSING'}
         heading3={'AND HEALTHCARE AGENCY'} 
         description1={'EmpowerCare is your premier nursing and healthcare agency for effective and flexible temp-to-hire staffing solutions. We understand the value of finding the right long-term fit for your healthcare facility while maintaining the flexibility to ensure a smooth transition.'} 
         description2={'Our temp-to-hire staffing options allow you to evaluate potential permanenthires on the job before making a commitment.'}
        
        
        />
        <CardsGreen 
        heading1={'true'}
        description1={'Unparalleled benefits of our per diem services include'}
           description2={'● Highly Skilled Healthcare Professionals'}
           description3={'● Skills Within Your Organization'}
           description4={'● Reduced Risk of Turnover'}
           description5={'● Immediate Staffing'}  
        />
        <CardsGreen description1={'Unparalleled benefits of our per diem services include'}
           description2={'● Highly Skilled Healthcare Professionals'}
           description3={'● Skills Within Your Organization'}
           description4={'● Reduced Risk of Turnover'}
           description5={'● Immediate Staffing'}  
        />
        <CardsGreen description1={'Unparalleled benefits of our per diem services include'}
           description2={'● Highly Skilled Healthcare Professionals'}
           description3={'● Skills Within Your Organization'}
           description4={'● Reduced Risk of Turnover'}
           description5={'● Immediate Staffing'}  
        />
        <SolutionsDesign
         img = {image}
         meta = {'ABOUT US'}
         heading1 = {'YOUR CPR STAFFING '}
         heading2 = {'SOLUTION'}
         
         
         description1 = {'EmpowerCares Dynamic Squads encapsulate our commitment to meeting your staffing needs comprehensively.'}
         description2 = {'Our personalized solutions, designed for convenience, personalconnection, and responsibility, breathe new life into your staffingstrategy, ensuring you achieve your patient care objectivesefficiently.'}
         btn1 = {'DYNAMIC SQUADS'}
         btn2 = {'ABOUT US'}
        />
        {/* <Empowercare /> */}
        <Facilitynetwork 
      content={content}
      button = {false}
      img={empowercareimg2}/>
        <Staffingsolutions 
        img={empowercareimg3}
        content={content2}
        />
        <StaffingProcess />
        <Guaranty
        img={testimonials}
        heading1={'SPOTLIGHTS &'}
        heading2={'TESTIMONIALS'}
        btn1 = {'QUICK APPLY'}
        btn2 = {'CONTACT US'}
        description={'"EmpowerCare temp-to-hire staffing solution has been a game-changer for our healthcare facility.'}
        description2={'The ability to evaluate potential permanent hires on the job has led to better long-term retention and improved patient care."'}
        description3={'- Robert, Facility Director'}
        />
        <AboutEmpower />
        <JoiningForm />
        <CareerSlider />
        <FaqAccordian />
        <Userslider
        link={"/facilities/request-staffing"}
        reviewbtn={"Request Staffing"}
        />
        <Footer />
    </>
  )
}

export default Trustedpartnertemp