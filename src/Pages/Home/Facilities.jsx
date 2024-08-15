import React from 'react';
import HeaderWhite from '../../Components/HeaderWhite2/HeaderWhite2';
import Footer from '../../Components/Footer/Footer';
import Banner1 from '../../Components/Banner_facility/Banner_facility';
import FacilitiesTrusted from '../../Components/FacilitiesTrusted/FacilitiesTrusted';
import Toptalent from '../../Components/Toptalent/Toptalent';
import Choose from '../../Components/Choose/Choose';
import Impact from '../../Components/Impact/Impact';
import BoxesWithIcons from '../../Components/BoxesWithIcons/BoxesWithIcons';
import Careerpaths from '../../Components/Empowercarefacilities/Careerpaths'
import Facilitynetwork from '../../Components/Facilitynetwork/Facilitynetwork'
import Staffingsolutions from '../../Components/Staffingsolutions/Staffingsolutions'
import Staffingsoptions from '../../Components/Staffingoptions/Staffingoptions'
import Empowercareacademy from '../../Components/Empowercareacademy/Empowercareacademy'
import CareerSlider from '../../Components/CareerSlider/CareerSlider';
import Blog from '../../Components/Blog/Blog';
import Userslider from '../../Components/Userslider/Userslider';
import Realstoriesimpact from '../../Components/Realstoriesimpact/Realstoriesimpact'
import bannerImg from '../../Assets/facility.png';
import img from '../../Assets/banner5.png'
import empowercareimg from '../../Assets/Hiring-amico.png';
import empowercareimg2 from '../../Assets/man_6 copy.png';
import empowercareimg3 from "../../Assets/staff-solutions.png";
import './Home.scss';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import job1 from '../../Assets/Group 128.png';
import job2 from '../../Assets/Group 129.png';
import job3 from '../../Assets/Group 130.png';
     
const Home = () => {
  const bannerStyles = {
    backgroundImage: `url(${img})`,
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: '-270px',
    backgroundColor: '#EBE0D3'
};
const content={
  "meta": "Who We Are",
  "heading1": "An",
  "heading2": "Extensive Network",
  "heading3": "Of PreScreened and",
  "heading4": "HIGHLY TRAINED HEALTHCARE PROFESSIONALS",
  "description": "At EmpowerCare, we offer a wide range of staffing options to meet your unique needs. Our extensive network of pre-screened healthcare opportunities includes:",
  "bullet1": "● Nursing Professionals",
  "bullet2": "● Allied Professionals",
  "bullet3": "● Advanced Practice",
  "bullet4": "● Mental Health Professionals",
  "bullet5": "● Direct Care Professionals",
  "bullet6": "● Non-Clinical Professionals",
  "bullet7": "● Executive Interim Leaders"
}
const content2={
  "meta": "STAFFING SOLUTIONS  ",
  "heading1": "EMPOWERCARE DELIVERS A ",
  "heading2": "WIDE RANGE OF",
  "heading3": "HEALTHCARE STAFFING SOLUTIONS",
  "description":"From single shifts to crisis staffing, EmpowerCare delivers a wide range of healthcare staffing solutions. We listen, work together, give advice, and assist your team in finding the best solutions for your staffing needs. With our Seamless Pledge and CPR Approach, we guarantee a hassle-free and Convenient, Personable, and Responsive staffing experience.",
   "btn":"Request Staffing Solutions"
}
  return (
    <>
      <HeaderWhite
          logoImg={logow}
          />
      <Banner1 heading={'Elevate Your Facility With Us'} 
          description={'Elevate Your Facility with EmpowerCares Staffing Solutions'}
          meta={'Empowering Healthcare Excellence for Over 18 Years'}
          bannerImg={bannerImg}
          styles={bannerStyles}
          bnrbtn={"Request Staffing"}
          />
      
      <FacilitiesTrusted />
      <BoxesWithIcons />
      <Choose 
          facilities={true}
          firstDescription="Finding the Perfect Match Made Easy! Dynamic Squads"
          meta="Dynamic Squads"
          spantext = "healthcare"
          heading = "Why"
          headingafter = "facilities choose empowercare"
          description1 = "EmpowerCare's Dynamic Squads offer a comprehensive approach to meet all your staffing needs. Our personalized solutions help you achieve your patient care goals while optimizing your workforce."
          description2 = "Just like CPR breathes life into critical situations, our Dynamic Squads revitalize your staffing process." 
          boxHeading1="Convenient Staffing:"
            boxDescription1="We provide a full range of staffing solutions, covering all aspects of your professional requirements, making the process convenient for you."
            boxHeading2="Personable Approach:"
            boxDescription2="Our customized staffing plans are designed to align with your unique needs, ensuring the best fit for your career aspirations. We prioritize building strong relationships with our healthcare professionals."
            boxHeading3="Supportive Community:"
            boxDescription3="Access a vast network of highly qualified and responsible healthcare professionals who are ready to make a positive impact together."
          classes      = "black-bg"
          
          btnlnk={"/facilities/request-staffing"}
          btntxt={"Request Staffing"}
      />
      <Impact position="box-center-aligned" 
      link1={"/facilities/ripple-effect"}
      link2={"/facilities/dynamic-squads"}
      link3={"/facilities/seamless-solutions"}
       
      blink="/facilities/request-staffing"
      btxt="Request Staffing"
      
      />
      <Careerpaths
      heading1={'Finding the right Staff'}
      heading2={'For your'}
      heading3={'Facility,Confidently'}
      description={'With 18+ years of experience, EmpowerCares mission is empowering healthcare institutions and professionals through top-tier staffing solutions that transform lives, elevate care, and promote societal well-being.'}
      description2={'Celebrating over 1,000,000 shifts served, our vision is doubling theimpact to 2 million by 2031 - ensuring seamless operations forinstitutions and fulfilling opportunities for every healthcare professional'}
      img={empowercareimg}  
      btn1={'ELEVATE CARE WITH US'}    
            />
      <Toptalent
      facilities={true}
       heading1={"Empower "}
       heading2={"Your Facility "}
       heading3={"With top talent, effortlessly"}
      job1={job1}
      job2={job2}
      job3={job3}
       jobcard1={"Join EmpowerCare For Free"}
          jobcard1_des={"Sign up at no cost. Connect with our supportive team, explore personalized opportunities, and empower your career in healthcare with efficiency and excellence."}
          
          jobcard2={"Discover and Match with Premier Jobs, Effortlessly"}
          jobcard2_des={"Forget the hassle of job searching. Share your aspirations, and we'll swiftly match you with leading healthcare roles, proving that finding your perfect position can be simple and stress-free."}
    
          jobcard3={"Experience Rewarding Healthcare Roles"}
          jobcard3_des={"Competitive compensation is a given, allowing you to focus on your passion for care. We ensure that advancing in your healthcare career is not only financially rewarding but also deeply meaningful."}
          btn2={"Lean more how to find Talent"}

          blink={"/facilities/request-staffing"}
          btx={"Request Staffing"}
      />
      <Facilitynetwork 
      content={content}
      button = {true}
      img={empowercareimg2}
      
      
      
      />
      <Staffingsolutions 
      img={empowercareimg3}
      content={content2}
      />
      <Staffingsoptions 
      
      />
      <Empowercareacademy />
      <Realstoriesimpact />
      <CareerSlider />
      <Blog />
      <Userslider 
      link={"/facilities/request-staffing"}
      reviewbtn="Request Staffing"
      
      />
      <Footer />
    </>
  )
}

export default Home