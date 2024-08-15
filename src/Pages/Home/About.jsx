import React from 'react';
import HeaderWhite from '../../Components/HeaderWhite/HeaderWhite';
import Banner2 from '../../Components/Banner2/Banner2';
import LeftRightContent from '../../Components/LeftRightContent/LeftRightContent';
import TextImageGroup from '../../Components/TextImageGroup/TextImageGroup';
import TextImageGroupV2 from '../../Components/TextImageGroupV2/TextImageGroupV2';
import TextImageGroupV3 from '../../Components/TextImageGroupV3/TextImageGroupV3';
import PriemerBlack from '../../Components/PremierHealthcareBlack/PriemerBlack';
import Form from "../../Components/Community/Form"
import Footer from '../../Components/Footer/Footer';
import bannerImg from '../../Assets/aboutBanner.png';
import Userslider2 from "../../Components/UserSlider2/UserSlider2"
import img from '../../Assets/banner3.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import secImage from '../../Assets/Image 58.png';
import secImage2 from '../../Assets/Image 62.png'
import secImage3 from '../../Assets/mission.png';
import secImage4 from '../../Assets/Image 61.png'
import secImage5 from '../../Assets/Image 63.png'

const About = () => {

  const bannerStyles = {
    backgroundImage: `url(${img})`,
    backgroundPosition: '50% 39%',
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
          <Banner2 heading={'ABOUT EMPOWERCARE'} 
          description={'Where Care Meets Excellence​'}
          img={bannerImg}
          styles={bannerStyles}
          />
          
          <LeftRightContent />
          <TextImageGroup
          img={secImage}
          heading={'Our Vision:'}
          heading2={'Seamless Healthcare, Empowered Professionals'}
          descr1={'Imagine a world where healthcare institutions operate flawlessly, supported by top-tier staffing solutions. In this world, every healthcare professional finds fulfilling opportunities, leading to happiness and growth in their careers. '}
          descr2={'This vision guides us at EmpowerCare, motivating us to empower healthcare professionals and institutions alike, ensuring seamless operations and fulfilled careers.'}
          />
         <TextImageGroupV2 
           img={secImage3}
           heading={'Mission:'}
           heading2={'Transformative Healthcare Staffing'}
           descr1={"Our mission is to empower healthcare institutions and professionals with hassle-free staffing solutions. Through EmpowerCare Academy and innovative tools like Dynamic Squad CPR, Dynamic Schedules, and Sign Hero, we make staffing effortless and efficient. We're dedicated to transforming lives and elevating care with every shift, contributing to societal wellbeing through improved healthcare outcomes and enhanced patient care. Our unique Ripple Effect ensures that every dollar earned from each shift has a lasting impact on the community."}
           
          />
          <TextImageGroupV3 />
          <TextImageGroupV2 
           img={secImage4}
           heading={'Core Values:'}
           heading2={'The Heart of EmpowerCare'}
           descr1={"Our core values are the foundation upon which we build our mission         to provide top-tier staffing solutions."}
           descr2={"These values guide us in revolutionizing healthcare staffing and enhancing patient care and healthcare outcomes, embodying the essence of EmpowerCare in every action and decision."}
           
          />
          <TextImageGroup 
          img={secImage2}
          heading={'EmpowerCare Company Culture:'}
          heading2={'A Community of Care'}
          descr1={'Our company culture is pivotal in delivering top-tier staffing solutions. It fosters an environment that empowers healthcare institutions and professionals, aligning with our mission and contributing to our purpose.'}
          descr2={'At EmpowerCare, we create a workspace where everyone feels valued and supported, enabling hospitals to run smoothly, healthcare professionals to thrive in their careers, and communities to enjoy better health.'}
          />
          <TextImageGroupV2
           img={secImage5}
           heading={'Join Us:'}
           heading2={'Join the EmpowerCare Movement'}
           descr1={"'As a nurse, I've experienced firsthand the impact of EmpowerCare's staffing solutions,' says Sarah Johnson, RN. 'They've empowered me to provide the best possible care to my patients while supporting my professional growth. I'm proud to be part of the EmpowerCare movement.'"}
          />
          <PriemerBlack 
          heading1="Join Us in"
          heading2="Making a"
          heading3="difference in Healthcare "
          description="We invite you to join us in making a difference in healthcare. Whether you're a healthcare institution looking for top-tier staffing solutions or a healthcare professional seeking fulfilling opportunities, EmpowerCare is here to support you. Visit our website or contact us today to learn more about how we can help you achieve your goals and make a lasting impact on patient care.​
          ​
          At EmpowerCare, we're more than just a company; we're a movement towards better healthcare for everyone. Together, let's revolutionize healthcare staffing and enhance patient care, one shift at a time.​
          "
          Redcolor={true}
          />
          <Form/>
          <Userslider2 />
          <Footer />
        </>
    )
}

export default About