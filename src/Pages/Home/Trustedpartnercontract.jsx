import React from 'react';
import HeaderWhite from '../../Components/HeaderWhite2/HeaderWhite2';
import Footer from '../../Components/Footer/Footer';
import Banner2 from '../../Components/Banner2md/Banner2md';
import TrustedPartner from "../../Components/Facilities/TruePartner/TrustedPartner"
import Trusted from '../../Components/Trusted/Trusted';
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
const Trustedpartnercontract = () => {
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
      
      "heading2": "Diverse Healthcare, ",
      "heading3": "Roles Broad Impact",
     
      "description": "EmpowerCare supports a wide spectrum of healthcare roles, guaranteeing the right talent at the right time for:",
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
        <Banner2 heading={'Trusted Partner Contract'} 
          description={"Maintain Continuity of Care with EmpowerCare's Contract Staff"}
          img={bannerImg}
          styles={bannerStyles}
         />
        <Trusted 
         hd1={"Facilities"}
        />
        <TrustedPartner 
        simpleButton={true}
        button={false}
        anchor={false}
        img={empowercareimg}
        meta={'ABOUT US'} 
        heading1={'Trusted Partner'} 
        heading2={' for Contract'}
         heading3={' Staffing Solutions'} 
         description1={'EmpowerCare is your go-to nursing agency for reliable and efficient contract staffing solutions. We understand the challenges healthcare facilities face when it comes to managing long-term staffing needs and maintaining continuity of care.'} 
         description2={"That's why we offer a wide range of highly skilled nursing professionals, including RNs, LPNs, CNAs, and healthcare professionals, ready to commit to your facility for the duration of the contract."}
        
        
        />
        <CardsGreen 
        heading1={'true'}
        description1={'Unparalleled benefits of our contract staffing services include:'}
           description2={'● Extensive network of pre-screened, highly qualified contract professionals'}
           description3={'● Streamlined placement process for faster staffing'}
           description4={'● Dedicated account managers to support your long-term staffing needs'}
           description5={'● Competitive rates and cost-effective contract solutions'}  
        />
        <CardsGreen description1={'Advantages of Choosing Our Contract Staffing Agency'}
           description2={'● Stability and continuity of care for your patients'}
           description3={'● Predictable staffing levels for improved operational efficiency'}
           description4={'● Flexibility to address long-term staffing needs without permanent commitment'}
           description5={'● Access to a diverse pool of skilled healthcare professionals'}  
        />
        <CardsGreen description1={'EmpowerCare’s Core Promises:'}
           description2={'● Transformative Placements: Our solutions transcend gap-filling; they revolutionize healthcare delivery, enrich lives, and elevate care standards.'}
           description3={'● Community Commitment: We donate $1 to community health initiatives for each healthcare professional shift, reinforcing our dedication to societal well-being.'}
           description4={'● Personalized Excellence through CPR (Convenient, Personable, Responsive): Beyond staffing, we create bespoke matches, striving to exceed expectations.'}
           description5={'● Immediate Staffing'}  
        />
        <SolutionsDesign
         img = {image}
         meta = {'Dynamic Squads'}
         heading1 = {'Your CPR Staffing '}
         heading2 = {'SOLUTION'}
         
         
         description1 = {'EmpowerCare Dynamic Squads encapsulate our commitment to meeting your staffing needs comprehensively. '}
         description2 = {'Our personalized solutions, designed for convenience, personal connection, and responsibility, breathe new life into your staffing strategy, ensuring you achieve your patient care objectives efficiently.'}
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
        link={"/facilities/Faqlocalcontracts"}
        head1={"Trusted Partner"}
        />
        <Userslider 
        link={"/facilities/request-staffing"}
        reviewbtn={"Request Staffing"}
        />
        <Footer />
    </>
  )
}

export default Trustedpartnercontract