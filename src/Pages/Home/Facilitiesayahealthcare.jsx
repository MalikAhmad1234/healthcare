import React from 'react';
import HeaderWhite from '../../Components/HeaderWhite/HeaderWhite';
import Banner1 from '../../Components/Banner1/Banner1';
import Trusted from '../../Components/Trusted/Trusted';
import Choose from '../../Components/Choose/Choose';
import Footer from '../../Components/Footer/Footer';
import Choose1 from '../../Components/Choose1/Choose1';
import PriemerBlack from '../../Components/PremierHealthcareBlack/PriemerBlack';
import Userslider from '../../Components/Userslider/Userslider';
import OurWorkingGreen from '../../Components/OurWorkingGreen/OurWorkingGreen';
import Careerpaths from '../../Components/Empowercarefacilities/Careerpaths'
import FaqAccordian from '../../Components/FaqAccordian/FaqAccordian';
import bannerImg from '../../Assets/banner1.png';
import img from '../../Assets/Group707.png' 
import empowercareimg from '../../Assets/Resume-amico.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
const Facilitiesayahealthcare = () => {
  const bannerStyles = {
    backgroundImage: `url(${img})`,
    backgroundPosition: '50% 36%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain', 
    marginTop: '-268px',
    backgroundColor: '#EBE0D3'
};
return (
  <>
    <HeaderWhite
    logoImg={logow}
    />
    <Banner1 
    heading={'Seamless & Impactful'} 
    description={'A Seamless & Impactful Alternative to Aya Healthcare'}
    meta={'EmpowerCare is revolutionizing healthcare staffing by providing a personalized, convenient, and responsive experience that goes beyond traditional staffing solutions. We invite you to join a movement that transforms lives, elevates care, and creates a brighter future for healthcare.'}
    bannerImg={bannerImg}
    styles={bannerStyles}
    bnrbtn={"Request Staffing"}
    />
    <Trusted 
    hd1={"FACILITIES"}
    />
    <OurWorkingGreen
    m_head1={"Our "}
    m_head2={"Brand"}
    m_head3={"Promise"}
    crd_head1={"Transformative Placements"}
    crd_desc1={"Each EmpowerCare placement helps improve healthcare, change lives, and enhance the quality of care, making a meaningful impact."}
    crd_head2={"Commitment to Community"}
    crd_desc2={"We donate $1 towards community health initiatives for every shift worked by our healthcare professionals, making a positive impact beyond the walls of healthcare facilities."}
    crd_head3={"Personalized Excellence through CPR"}
    crd_desc3={"We provide a Convenient, Personable, and Responsive staffing experience, ensuring the right match between healthcare facilities and professionals while offering dedicated support and timely solutions"}
    
    
    />
    <Choose
      meta="Why Healthcare Facilities Choose EmpowerCare"
      spantext = "Squads:"
      heading = "Dynamic"
      headingafter = "Your cpr dynamic solution"
      description1 = "EmpowerCare's Dynamic Squads offer a comprehensive approach to meet all your staffing needs. Our personalized solutions help you achieve your patient care goals while optimizing your workforce. "
      description2 = "Just like CPR breathes life into critical situations, our Dynamic Squads revitalize your staffing process."
      boxHeading1="Convenient Staffing:"
      boxDescription1="We provide a full range of staffing solutions, covering all aspects of your facility's requirements, making the process convenient for you."
      boxHeading2="Personable Approach:"
      boxDescription2="Our customized staffing plans are designed to align with your unique needs, ensuring the best fit for your facility. We prioritize building strong relationships with our clients and healthcare professionals."
      boxHeading3="Responsible Talent Pool:"
      boxDescription3="Access a vast network of highly qualified and responsible healthcare professionals who are ready to make a positive impact in your facility."
      btnlnk={"/facilities/request-staffing"}
            btntxt={"Request Staffing"}
    />
    <Choose1 
      meta="Why Choose Us"
      spantext = "Pledge:"
      heading = "Seamless"
      headingafter = "Make a Meaningful Impact with Every Shift"
      description1 = "We believe that every shift is an opportunity to make a difference in people's lives. Our Seamless Pledge ensures that your facility experiences hassle-free staffing and that every placement has a lasting impact on patients and communities."

      crHead1={"Meaningful Work:"}
      crdesc1={"Every job matters, and we ensure that each placement contributes to the EmpowerCare ripple effect of transforming lives and elevating care."}

      crHead2={"Reliable Support:"}
      crdesc2={"Our dedicated team is always ready to assist you, ensuring a smooth and stress-free staffing experience, so you can focus on making a meaningful impact."}

      crHead3={"Quality Assurance:"}
      crdesc3={"We stand behind the quality of our healthcare professionals, providing you with peace of mind and confidence that you're making a difference with every shift."}
    />
    <PriemerBlack 
     heading1="Elevate Your"
     heading2="Healthcare Career"
     heading3="with empowercare"
     description="Join EmpowerCare and discover a new level of excellence in healthcare staffing. Our commitment to making a meaningful impact, coupled with our Dynamic Squads and Seamless Pledge, will transform the way you staff your facility and provide care to your patients."
    Redcolor={false}
    />
    <Careerpaths 
    heading1={'Be part of our mission for a'}
    heading2={'Brighter'}
    heading3={'healthcare future'}
    description={'By choosing EmpowerCare, you become part of a movement that goes beyond staffing. Together, we can create a world where every healthcare institution experiences seamless operations, and every healthcare professional finds fulfilling opportunities.'}
    description2={'Lets empower each other to transform lives, elevate care, and promote societal well-being, one shift at a time.'}
    img={empowercareimg}  
    btn1={'QUICK APPLY'} 
    />
    <Userslider 
    link={"/facilities/request-staffing"}
    reviewbtn={"Request Staffing"}
    />
    <Footer />
  </>
)
}

export default Facilitiesayahealthcare