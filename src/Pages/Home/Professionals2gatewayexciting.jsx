import Banner10 from "../../Components/Banner10/Banner10"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import bannerImg from '../../Assets/gatewaybnrimg.png'
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
     heading={'ALLIED HEALTH'}
     heading2={'CAREERS​'}
     description={'Your Gateway to Exciting Allied Health Careers'}
     span={'Discover Cutting-Edge CMA Jobs with EmpowerCare Agencies'}

     bnrbtn={"Quick Apply "}
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
      description1={'Attention skilled Allied Health professionals! Are you ready to take your career to new heights and make a real difference in healthcare?'} 
      description2={'EmpowerCare, your trusted allied health staffing agency, is here to connect you with amazing job opportunities that match your expertise and career goals.'}
      description3={"Whether you're looking for CMA contract jobs, medical assistant positions, or specialized technician roles like phlebotomist, surgical tech, MRI tech, ultrasound tech, EKG tech, CT tech, X-ray tech, or radiologic technologist/technician, we provide all the support, benefits, and growth opportunities you need to excel in your allied health career."}
    />
<Toptalent
   heading1={"Why"}
   heading2={"Allied Health"}
   heading3={"Professionals Trust EmpowerCare"}
   heading4={"The Ripple Effect: Making Big Waves with Every Allied Health Job"}

   jobcard1={"Finding the Perfect Allied Health Job Match is Easy with Our Dynamic Squads"}
      jobcard1_des={"Our Dynamic Squads are way better than your typical healthcare staffing agencies. They give you personalized service and make sure you find the perfect fit for your skills and goals. With our high-tech matching system and one-on-one support or specialized technician position has never been simpler."}
      
      jobcard2={"Gain a Winning Edge: Excel with EmpowerCare Academy!"}
      jobcard2_des={"Through EmpowerCare Academy, you'll get a leg up on the competition and land your ideal allied health job. Unlock your potential and easily navigate the path to career success with our top-notch training."}

      jobcard3={"Unsung Heroes No More: Allied Health Pros in the Spotlight!"}
      jobcard3_des={"As an EmpowerCare allied health professional, you're not just another employee – you're a Shift Champion. We believe in celebrating your amazing contributions to healthcare and putting you in the spotlight."}
   
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
     
     heading1={'Empowering'} 
     heading2={'Allied Health Professionals'}
      heading3={'Advancing Healthcare'} 
      description1={"Are you a driven Allied Health professional ready to make your mark in the healthcare industry?"} 
      description2={"Since 2005, EmpowerCare has been the driving force behind the success of over 8,000 professionals. We don't just fill positions; we fuel your ambition with cutting-edge opportunities and unwavering support."}
      description3={"Whether you're pursuing CMA contract jobs, medical assistant positions, or specialized technician roles, your journey to an extraordinary allied health career begins here. "}
      

      
    />
  <EmpowercarePremier
  
   heading1={"BECOME AN"}
   heading2={"ELITE EMPOWERCARE"}
   heading3={"CMA​"}
   description1={"Don't miss this exclusive chance to join our distinguished network of Elite CMAs. Unlock access to top-tier CMA jobs, unmatched support, and career-accelerating benefits"}
   srtdesc={"Act Fast! Secure Your Spot​​"}

   card_bx1_heading={"Priority Job Access "}
      card_bx1_description1={"Priority Access to Exclusive CMA Contract Jobs and Medical Assistant Positions"}
      card_bx2_heading2={"Tailored Benefits Package "}
      card_bx2_description2={"Tailored Compensation Packages for EmpowerCare Allied Health Professionals"}
      card_bx3_heading3={"Personal Career Coach "}
      card_bx3_description3={"Personalized Career Navigator to Help You Reach Your Full Potential"}
      card_bx4_heading4={"Success Stories"}
      card_bx4_description4={"Read inspiring stories of how our Premier Nurses have transformed their careers and made a meaningful impact. →"}

  
  />
  <ThreeColumns

  bx1_head1={"LEADERS"}
  bx2_head2={" IN"}
  bx3_head3={"ALLIED HEALTH​ "}
  description_1={"Our community of 8,000+ shares a passion for excellence and transformative patient care. We get the challenges you face, whether you're feeling burnt out or looking for more growth opportunities."}
  description_2={"As an Unsung Hero or Difference Maker, you've found your tribe at EmpowerCare, a top agency connecting dedicated allied health professionals with cutting-edge jobs to reshape healthcare."}

  bx4_head={"EmpowerCare:Championing Allied Health Excellence Since 2005"}
  dx4_desc={"What started as a mission to support a small group of visionary CMAs has grown into a thriving community of over 8,000 professionals. As a premier CMA staffing agency"}
  dx4_desc2={"EmpowerCare has been at the forefront of connecting exceptional CMAs and allied health professionals with groundbreaking jobs that transform patient care."}

  bx5_head={"Imagine the Possibilities for Your Allied Health Career"}
  dx5_desc={"Picture a world where finding your dream CMA job or specialized technician role is as easy as a few clicks - a world where your expertise, passion, and career aspirations line up perfectly with the right opportunity. "}
  dx5_desc2={"That's the world we're creating at EmpowerCare CMA agencies."}
  
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
    reviewbtn={"Quick Apply "}
    />
    <Footer/>
    </>)
}
export default ProfessionalsCareer