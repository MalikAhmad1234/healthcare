import React from 'react';
import HeaderWhite from '../../Components/HeaderWhite/HeaderWhite';
import Banner1 from '../../Components/Banner1/Banner1';
import Trusted from '../../Components/Trusted/Trusted';
import Content_With_Button from '../../Components/Content_With_Button/Content_With_Button';
import Choose from '../../Components/Choose/Choose';
import Footer from '../../Components/Footer/Footer';
import Choose1 from '../../Components/Choose1/Choose1';
import Empowercare from '../../Components/Empowercare/Empowercare';
import PriemerBlack from '../../Components/PremierHealthcareBlack/PriemerBlack';
import Userslider from '../../Components/Userslider/Userslider';
import FaqAccordian from '../../Components/FaqAccordian/FaqAccordian';
import bannerImg from '../../Assets/seamless_banner_img.png';
import img from '../../Assets/bannerbg1.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import Careerpaths from '../../Components/Empowercarefacilities/Careerpaths';
import empowercareimg from '../../Assets/Resume-amico.png'
import OurWorkingGreen from '../../Components/OurWorkingGreen/OurWorkingGreen';
const Prseamlesssmasmedical = () => {
  const bannerStyles = {
    backgroundImage: `url(${img})`,
    backgroundPosition: '50% 30%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    marginTop: '-225px',
    backgroundColor: '#EBE0D3'
  };
  return (
    <>
      <HeaderWhite
        logoImg={logow}
      />
      <Banner1 heading={'Seamless & Impactful'}
        description={'A Seamless and Impactful Alternative to MAS Medical Staffing'}
        meta={'EmpowerCare is revolutionizing the way healthcare professionals find fulfilling job opportunities. We go beyond traditional staffing agencies by offering a seamless and impactful experience that puts your needs and aspirations first.'}
        bannerImg={bannerImg}
        styles={bannerStyles}
        bnrbtn={"Quick Apply"}
      />
      <Trusted />
      <Content_With_Button 
      desc={"With over 500,000 shifts filled, EmpowerCare has empowered healthcare professionals and facilities to transform lives and elevate care through our personalized, impactful approach."}
      
      />
      <OurWorkingGreen
      m_head1={"Our "}
      m_head2={"Promise "}
      m_head3={"to You"}
      crd_head1={"Transformative Placements"}
      crd_desc1={"Each EmpowerCare placement empowers you to grow professionally, change lives, and enhance the quality of care you provide, making a meaningful impact on your career and the lives of others."}
      crd_head2={"Commitment to Community"}
      crd_desc2={"We donate $1 towards community health initiatives for every shift you work, amplifying the positive impact of your efforts beyond the walls of healthcare facilities."}
      crd_head3={"Personalized Excellence through CPR"}
      crd_desc3={"We go beyond finding you a job. We match you with healthcare facilities that align with your skills, preferences, pay expectations, and career goals, ensuring a satisfying and successful placement"}
    
      />
      
      <Choose
        meta="Why Choose Us"
        spantext="Squads:"
        heading="Dynamic"
        headingafter="Your CPR Staffing Solution"
        description1="EmpowerCare's Dynamic Squads offer a comprehensive approach to meet all your career needs. Our personalized solutions help you achieve your professional goals while making a meaningful impact in the lives of patients."
        description2=""
        boxHeading1="Convenient Placements:"
        boxDescription1="We provide a wide range of job opportunities that match your skills and preferences, making it convenient for you to find the perfect fit.."
        boxHeading2="Personable Support:"
        boxDescription2="Our dedicated team is committed to building strong relationships with you, providing guidance and support throughout your healthcare journey."
        boxHeading3="Responsive Advocacy:"
        boxDescription3="We are always ready to listen to your needs, address your concerns, and provide timely solutions to help you thrive in your career."

        
        btnlnk="/signup"
         btntxt="Sign Up"
      />
      <Choose1
        meta="Why Choose Us"
        spantext="Pledge:"
        heading="Seamless"
        headingafter="Meaningful Impact with Every Shift"
        description1="We believe that every shift is an opportunity to make a difference in people's lives. Our Seamless Pledge ensures that you can focus on what matters most - providing exceptional care and making a lasting impact."

        crHead1={"Meaningful Work:"}
        crdesc1={"Every placement is an opportunity to contribute to the greater good, knowing that your efforts are part of a larger movement to transform lives and elevate care."}

        crHead2={"Reliable Support:"}
        crdesc2={"Our dedicated team is always by your side, ensuring a smooth and stress-free experience, so you can focus on making a difference with every shift."}

        crHead3={"Empowering Environment:"}
        crdesc3={"We foster a supportive and empowering environment that recognizes your contributions and helps you grow personally and professionally."}
      />
      <PriemerBlack 
          heading1="Elevate Your"
          heading2="Healthcare Career"
          heading3="with empowercare"
          description="Join EmpowerCare and embark on a transformative journey in your healthcare career. Our commitment to personalized excellence, combined with our Dynamic Squads and Seamless Pledge, sets us apart from traditional staffing companies. We empower you to find fulfillment, make a meaningful impact, and achieve your career aspirations."
          Redcolor={false}
          />
      <Careerpaths
        NoArrow={true}
        heading1={'A Movement That Goes'}
        heading2={'Beyond'}
        heading3={'Staffing'}
        description={'By choosing EmpowerCare, you become part of a movement that goes beyond staffing. Together, we can create a world where every healthcare professional finds joy and purpose in their work, knowing that they are making a difference in the lives of patients and communities.'}
        description2={'Lets support each other in transforming lives, elevating care, and promoting societal well-being, one shift at a time'}
        img={empowercareimg}
        btn1={'QUICK APPLY'}
      />
      <Userslider  reviewbtn={"Quick Apply"}/>
      <Footer />
    </>
  )
}

export default Prseamlesssmasmedical