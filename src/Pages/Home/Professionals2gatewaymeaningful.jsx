import Banner10 from "../../Components/Banner10/Banner10"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import bannerImg from '../../Assets/careerImg.png'
import img from '../../Assets/careerPath.png'
import TrustedPartner from "../../Components/Facilities/TruePartner/TrustedPartner"
import empowercareimg from '../../Assets/Job hunt-amico.png'
import empowercareimg2 from '../../Assets/Doctor-amico.png'
import empowercareimg3 from '../../Assets/Artificial intelligence-amico.png'
import Toptalent from "../../Components/Toptalent/Toptalent"
import Stories from "../../Components/Stories/Stories"
import OurHistory from "../../Components/OurHistory/OurHistory"
import EmpowercarePremier from "../../Components/EmpowercarePremier/EmpowercarePremier"
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import storiesimg from '../../Assets/storiesPic.png';
import ThreeColumns from '../../Components/ThreeColumns/ThreeColumns';
import job1 from '../../Assets/Group 234.png'; 
import job2 from '../../Assets/Group 235.png';
import job3 from '../../Assets/Group 236.png';
const ProfessionalsCareer=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-245px',
        backgroundColor: '#EBE0D3'
    };
    return(<>
    <HeaderWhite
          logoImg={logow}
          />
    <Banner10
     bannerStyles={bannerStyles}
     bannerImg={bannerImg}
     heading={'DIRECT CARE'}
     heading2={'CAREER'}
     description={'Your Gateway to Meaningful Non-Clinical Healthcare Careers'}
     span={'Discover Impactful Non-Clinical Healthcare Jobs with EmpowerCare Agencies'}
     bnrbtn={"Quick Apply"}
    />
    <Trusted/>
    <TrustedPartner
      simpleButton={false}
      anchor={false}
      button={true}
      img={empowercareimg}
      meta={'Who We Are'} 
      heading1={'LIFE-'} 
      heading2={'CHANGING'}
      heading3={'DIRECT CARE JOBS'} 
      description1={'Attention dedicated Non-Clinical Healthcare professionals! Are you ready to make a real difference in the healthcare industry while utilizing your unique skills?'} 
      description2={'EmpowerCare, your trusted non-clinical healthcare staffing agency, is here to connect you with meaningful non-clinical healthcare jobs that align with your expertise and career goals. '}
      description3={"Whether you're looking for non-clinical nursing jobs, non-clinical physician jobs, non-clinical physical therapy jobs, or other non-clinical jobs for physicians and healthcare professionals, we provide all the support, benefits, and growth opportunities you need to thrive in your non-clinical healthcare career."}
    />
<Toptalent
   heading1={"Why"}
   heading2={"Healthcare Professionals"}
   heading3={"Trust EmpowerCare"}

   heading={"The Ripple Effect: Making Big Waves with Every Non-Clinical Healthcare Job"}

   jobcard1={"Finding the Perfect Non-Clinical Healthcare Job Match is Easy with Our Dynamic Squads"}
      jobcard1_des={"Our Dynamic Squads are way better than your typical healthcare staffing agencies. They give you personalized service and make sure you find the perfect fit for your skills and goals. With our high-tech matching system and one-on-one support."}
      
      jobcard2={"Gain a Winning Edge: Excel with EmpowerCare Academy!"}
      jobcard2_des={"Through EmpowerCare Academy, you'll get a leg up on the competition and land your ideal non-clinical healthcare job. Unlock your potential and easily navigate the path to career success with our top-notch training."}

      jobcard3={"Unsung Heroes No More: Non-Clinical Healthcare Pros in the Spotlight!"}
      jobcard3_des={"As an EmpowerCare non-clinical healthcare professional, you're not just another employee – you're a Shift Champion. We believe in celebrating your amazing contributions to healthcare and putting you in the spotlight."}

      btn2={"Learn More"}
      job1={job1}
      job2={job2}
      job3={job3}
     
      blink="/signup"
       btx="Sign Up"
/>

<TrustedPartner
simpleButton={false}
    anchor={true}
     button={false}
     img={empowercareimg2}
     
     heading1={'EMPOWERING'} 
     heading2={'NON-CLINICAL HEALTHCARE PROFESSIONALS,'}
      heading3={'DRIVING HEALTHCARE EXCELLENCE'} 
      description1={'Are you a driven Non-Clinical Healthcare professional passionate about making a difference behind the scenes?'} 
      description2={"Since 2005, EmpowerCare has been the driving force behind the success of over 5,000 non-clinical healthcare professionals. We don't just fill positions; we fuel your purpose with impactful opportunities and unwavering support."}
      description3={"Whether you're a nurse, physician, physical therapist, or healthcare administrator seeking non-clinical roles, your journey to a meaningful non-clinical healthcare career starts here."}
      

      
    />
  <EmpowercarePremier
  
   heading1={"Become an"}
   heading2={"EmpowerCare Premier"}
   heading3={"Non-Clinical Healthcare Professional"}
   description1={"Don't miss this exclusive chance to join our prestigious network of Premier Non-Clinical Healthcare Professionals. Unlock access to top-tier non-clinical healthcare jobs, unmatched support, and career-boosting benefits"}

   card_bx1_heading={"Priority Job Access "}
      card_bx1_description1={"Priority Access to Exclusive Non-Clinical Nursing Jobs, Physician Roles, and Physical Therapy Positions"}
      card_bx2_heading2={"Tailored Benefits Package "}
      card_bx2_description2={"Tailored Benefits Package for EmpowerCare Non-Clinical Healthcare Professionals"}
      card_bx3_heading3={"Personal Career Coach "}
      card_bx3_description3={"Personal Career Coach to Help You Achieve Your Goals"}
      card_bx4_heading4={"Success Stories"}
      card_bx4_description4={"Read inspiring stories of how our Premier Non-Clinical Healthcare Professionals have made a lasting impact and achieved career success. →"}

  
  />
  <ThreeColumns

bx1_head1={"PURPOSE-DRIVEN"}
bx2_head2={"NON-CLINICAL"}
bx3_head3={"HEALTHCARE LEADERS"}
  description_1={"Our community of 5,000+ shares a passion for driving healthcare excellence behind the scenes. We get the challenges you face, whether you're feeling burnt out from clinical work or looking for more growth opportunities"}
  description_2={"As an Unsung Hero or Difference Maker, you've found your tribe at EmpowerCare, a top agency connecting dedicated non-clinical healthcare professionals with impactful jobs to reshape the industry"}

  bx4_head={"EMPOWERCARE: ADVOCATING FOR NON-CLINICAL HEALTHCARE EXCELLENCE SINCE 2005"}
  dx4_desc={"What started as a mission to support a small group of dedicated non-clinical healthcare professionals has grown into a thriving community of over 5,000 purpose-driven individuals. "}
  dx4_desc2={"As a leading non-clinical healthcare staffing agency, EmpowerCare has been at the forefront of connecting skilled professionals with meaningful jobs that drive healthcare excellence."}

  bx5_head={"Imagine the Possibilities for Your Non-Clinical Healthcare Career"}
  dx5_desc={"Picture a world where finding your dream non-clinical healthcare job is as easy as a few clicks - a world where your expertise, passion, and career aspirations line up perfectly with the right opportunity."}
  dx5_desc2={"That's the world we're creating at EmpowerCare non-clinical healthcare agencies."}
  
  />    
  <OurHistory/>
    <TrustedPartner
    anchor={false}
     button={false}
     img={empowercareimg3}
     meta={'Who is this for'}
     heading1={'ENVISION'} 
     heading2={' THE FUTURE'}
      
      description1={'Attention compassionate direct care professionals! Are you ready to make a profound difference in the lives of others while building a fulfilling career?'} 
      description2={'EmpowerCare, your trusted direct care staffing agency, is here to connect      you with meaningful direct care job opportunities that align with your      passion, skills, and career goals.      '}
      description3={'This will help you succeed in your career. Positions available include direct      care contracts and overnight support roles.'}
    />
    <Stories
    img={storiesimg}
    description={"A Movement That Goes Beyond Staffing"}
    description2={"Join our movement today and be part of the transformation in Direct Care!"}
    Join={"JOIN US NOW"}
    btn1={"Quick Apply"}
    video_link={"https://youtube.com/shorts/X5DhrVv-hk4?feature=share"}
    />
    <Userslider
    reviewbtn={"Quick Apply"}
    />
    <Footer/>
    </>)
}
export default ProfessionalsCareer