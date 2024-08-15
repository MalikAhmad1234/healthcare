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
const Trustedpartnerpermanent = () => {
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
        <Banner2 heading={'PERMANENT STAFFING'} 
          description={"Your Trusted Partner for Permanent Staffing Solutions"}
          description2={"Find Your Facility's Ideal Long-Term Healthcare Professionals"}
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
        heading1={'Trusted '} 
        heading2={'Permanent '}
         heading3={'Staffing Solutions'} 
         description1={'EmpowerCare is your go-to nursing and healthcare agency for reliable and efficient permanent staffing solutions.'} 
         description2={"We understand the importance of finding the right long-term fit for your healthcare facility, and we are dedicated to connecting you with top-tier professionals who align with your organization's values and goals."}
        
        
        />
        <CardsGreen 
          
          mhead1={"Why EmpowerCare is a"}
          mhead2={"Direct Hire Partner"}
          mhead3={"for you"}


        heading1={'true'}
        description1={'Unparalleled benefits of our Permanent Staffing service include'}
           description2={'● An extensive network of highly qualified, pre-screened candidates'}
           description3={'● Customized staffing solutions tailored to your facility unique needs'}
           description4={'● Rigorous screening process to ensure the best fit for your organization'}
           description5={'● Dedicated account managers to support your long-term staffing goals'}  
        />
        <CardsGreen description1={'Advantages of Choosing Permanent Staffing'}
           description2={'● Access to a diverse pool of skilled healthcare professionals'}
           description3={'● Improved employee retention and team stability'}
           description4={'● Streamlined hiring process, saving you time and resources'}
           description5={'● Ongoing support from our team to ensure a smooth transition'}  
        />
        <CardsGreen description1={'EmpowerCare’s Core Promises'}
           description2={'● Transformative Placements: Our solutions transcend gap-filling; they revolutionize healthcare delivery, enrich lives, and elevate care standards.'}
           description3={'● Community Commitment: We donate $1 to community health initiatives for each healthcare professional shift, reinforcing our dedication to societal well-being.'}
           description4={'● Personalized Excellence through CPR (Convenient, Personable, Responsive): Beyond staffing, we create bespoke matches, striving to exceed expectations.'}
           description5={'● Immediate Staffing'}  
        />
        <SolutionsDesign
         img = {image}
         meta = {'Dynamic Squads'}
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
        <FaqAccordian 
        link={"/facilities/Faqpermanentstaffing"}
        head1={"Permanent Staffing"}
        />
        <Userslider 
        link={"/facilities/request-staffing"}
        reviewbtn={"Request Staffing"}
        />
        <Footer />
    </>
  )
}

export default Trustedpartnerpermanent