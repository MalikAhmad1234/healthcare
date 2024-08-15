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
     heading={'DIRECT CARE'}
     heading2={'CAREER'}
     description={'Your Gateway to Extraordinary Nursing Opportunities'}
     span={'Discover Your Perfect Nursing Job with EmpowerCare Agencies'}

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
      description1={'Attention passionate nurses! Are you ready to take your career to new heights and make a real difference in patient care?'} 
      description2={'? EmpowerCare, your trusted nursing staffing agency, is here to connect you with amazing nursing job opportunities that match your skills, preferences, and career goals.'}
      description3={"Whether you're an LPN looking for per diem jobs or an RN seeking contract nursing positions, we provide all the support, benefits, and growth opportunities you need to thrive in your nursing career."}
    />
<Toptalent
   heading1={"Why"}
   heading2={"Nurses Choose "}
   heading3={"EmpowerCare Nurse Agency"}
   heading4={"The Ripple Effect: Making Big Waves with Every Nursing Job"}

   jobcard1={"Finding the Perfect Direct Care Job Match is Easy with Our Dynamic Squads"}
      jobcard1_des={"Our Dynamic Squads are way better than your typical healthcare staffing agencies. With our high-tech matching system and one-on-one support, finding your dream direct care contract job or overnight direct support professional position has never been simpler."}
      
      jobcard2={"Gain a Winning Edge: Excel with EmpowerCare Academy!"}
      jobcard2_des={"Through EmpowerCare Academy, you'll get a leg up on the competition and land your ideal direct care job. Unlock your potential and easily navigate the path to career success with our top-notch training"}

      jobcard3={"Unsung Heroes No More: Direct Care Pros in the Spotlight!"}
      jobcard3_des={"As an EmpowerCare direct care professional, you're not just another employee – you're a Shift Champion. We believe in celebrating your amazing contributions to healthcare and putting you in the spotlight."}

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
     heading2={' NURSES,TRANSFORMING'}
      heading3={'LIVES'} 
      description1={"Are you a dedicated nurse looking to make a difference in patients' lives while growing your career?"} 
      description2={"Since 2005, EmpowerCare has been the driving force behind the success of over 8,000 professionals. We don't just fill positions; we fuel your passion with unbeatable opportunities and support."}
      description3={"Whether you're an LPN searching for per diem nursing jobs or an RN looking for contract positions, your journey to a fulfilling nursing career starts here."}
      

      
    />
  <EmpowercarePremier
  
   heading1={"Become an"}
   heading2={"EmpowerCare"}
   heading3={"PREMIER NURSES"}
   description1={"Don't miss this exclusive chance to join our prestigious network of Premier Nurses. Unlock access to top nursing jobs, unmatched support, and career-boosting benefits:"}

   card_bx1_heading={"Priority Job Access "}
      card_bx1_description1={"Priority Access to the Best LPN Agency Jobs and RN Contract Positions"}
      card_bx2_heading2={"Tailored Benefits Package "}
      card_bx2_description2={"Customized Benefits Package for EmpowerCare Per Diem and Contract Nursing"}
      card_bx3_heading3={"Personal Career Coach "}
      card_bx3_description3={"Personal Career Coach to Help You Achieve Your Goals"}
      card_bx4_heading4={"Success Stories"}
      card_bx4_description4={"Read inspiring stories of how our Premier Nurses have transformed their careers and made a meaningful impact. →"}

  
  />
  <ThreeColumns

  bx1_head1={"PASSIONATE"}
  bx2_head2={"PATIENT"}
  bx3_head3={"ADVOCATES"}
  description_1={"Our community of 8,000+ shares a passion for transforming patient care. We get the challenges you face, whether you're feeling burnt out or looking for more control over your schedule."}
  description_2={"As an Unsung Hero or Difference Maker, you've found your tribe at EmpowerCare, a top nursing agency connecting dedicated nurses with fulfilling jobs to reshape healthcare."}

  bx4_head={"EmpowerCare: Championing Nurses Since 2005"}
  dx4_desc={"What started as a mission to support a small group of dedicated nurses has grown into a thriving community of over 8,000 professionals. "}
  dx4_desc2={"As a leading nursing staffing agency, EmpowerCare has been at the forefront of connecting passionate nurses with meaningful jobs that transform lives"}

  bx5_head={"Imagine the Possibilities for Your Nursing Career"}
  dx5_desc={"Picture a world where finding your dream nursing job is as easy as a few clicks - a world where your skills, goals, and lifestyle line up perfectly with the right opportunity. "}
  dx5_desc2={"That's the world we're creating at EmpowerCare nursing agencies"}
  
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