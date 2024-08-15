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
     heading={'ELEVATE'}
     heading2={'PRACTICE NURSING'}
     description={'ELEVATE YOUR ADVANCED PRACTICE NURSING CAREER'}
     span={'DISCOVER GROUND-BREAKING NP JOBS WITH EMPOWERCARE, A LEADING NURSING AGENCY'}

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
      description1={'Attention ambitious Nurse Practitioners (NPs)! At EmpowerCare, one of the top nursing agencies, we believe every NP job is an opportunity to help change the world.'} 
      description2={"That's why our staffing agency is dedicated to connecting you with groundbreaking NP contract jobs and specialized nursing positions that match your expertise and aspirations."}
      description3={"As a premier Nurse Practitioner agency, we provide unparalleled support and limitless growth potential to help you excel in advanced practice and management."}
    />
<Toptalent
   heading1={"Why"}
   heading2={"Nurse Practitioners"}
   heading3={"Choose EmpowerCare, a Top NP Agency"}

   heading={"The Ripple Effect: Making Big Waves with Every NP Job"}

   jobcard1={"Finding the Perfect NP Agencies Jobs Made Easy! Dynamic Squads"}
      jobcard1_des={"Our Dynamic Squads go beyond typical healthcare staffing agencies to provide skills and goals. With state-of-the-art finding your dream NP job or specialized nursing position has never been easier."}
      
      jobcard2={"Gain a Winning Edge in Advanced Practice and Management:Excel with EmpowerCare Academy!"}
      jobcard2_des={"Through EmpowerCare Academy, you'll gain a competitive edge to land your ideal NP agencies job in advanced practice and management. Unlock your potential and effortlessly navigate the path to career success with our Nurse Practitioner agency."}

      jobcard3={"Unsung Heroes No More: NPs in the Spotlight! Shift Champions"}
      jobcard3_des={"As an EmpowerCare NP, you're not just a healthcare professional – you're a Shift Champion. We believe in celebrating your exceptional contributions to specialized nursing positions and putting you in the spotlight."}
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
     
     heading1={'EMPOWERING NPS,'} 
     heading2={'THROUGH NP CONTRACT JOBS'}
      heading3={' NURSING POSITIONS'} 
      description1={'Are you a driven Nurse Practitioner ready to make your mark in advanced practice nursing?'} 
      description2={"Since 2005, EmpowerCare has been the catalyst behind the success stories of over 8,000 Professionals."}
      description3={"As a top staffing agency, we don't just fill NP jobs; we fuel your ambition with groundbreaking opportunities and unwavering support."}
      

      
    />
  <EmpowercarePremier
  
   heading1={"Become an"}
   heading2={"EmpowerCare Elite NP – Exclusive Opportunity"}
   heading3={"with Our Nurse Practitioner Agency!"}
   description1={"Seize this chance to join our distinguished network of Elite NPs. Unlock access to top-tier NP agencies jobs, unmatched support, and career-accelerating benefits"}

   card_bx1_heading={"Priority Job Access "}
      card_bx1_description1={"Priority Access to Exclusive NP Contract Jobs and Specialized Nursing Positions"}
      card_bx2_heading2={"Tailored Benefits Package "}
      card_bx2_description2={"Tailored Compensation Packages for Advanced Practice and Management Roles"}
      card_bx3_heading3={"Personal Career Coach "}
      card_bx3_description3={"Personalized Career Navigator from Our Premier Nursing Agency"}
      card_bx4_heading4={"Success Stories"}
      card_bx4_description4={"Read inspiring stories of how our Healthcare professionals have revolutionized patient care and achieved remarkable milestones in advanced practice and management."}

  
  />
  <ThreeColumns

bx1_head1={"VISIONARY NP LEADERS,"}
bx2_head2={"UNSUNG HEROES,"}
bx3_head3={"AND DIFFERENCE MAKERS"}
  description_1={"Our community of 8,000+ shares a passion for transformative patient care. We understand your challenges, whether you're a facility director facing burnout or a nurse seeking autonomy."}
  description_2={"As an Unsung Hero or Difference Maker, you've found your tribe at EmpowerCare, a top NP agency connecting visionary leaders with NP contract jobs and specialized nursing positions to revolutionize healthcare."}

  bx4_head={"Our History as a Premier Nursing Agency"}
  dx4_desc={"What began as a mission to support a core group of visionary NPs has grown into a vibrant community of over 8,000 professionals."}
  dx4_desc2={"As a premier NP staffing agency, EmpowerCare has been at the forefront of connecting exceptional NPs with groundbreaking NP jobs that transform patient care and drive healthcare innovation."}

  bx5_head={"Imagine the Possibilities with EmpowerCare's NP Agencies Jobs"}
  dx5_desc={"Picture a world where your expertise, passion, and aspirations seamlessly align with the perfect NP job opportunity."}
  dx5_desc2={"That's the world we're creating at EmpowerCare, a top nursing agency."}
  
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