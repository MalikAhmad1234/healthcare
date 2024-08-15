import Banner10 from "../../Components/Banner10/Banner10"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import bannerImg from '../../Assets/ignitebnrimg.png'
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
     heading={'PURPOSE-DRIVEN '}
     heading2={'MENTAL HEALTH CAREERS'}
     description={'Ignite your Passion for Mental Health Services with EmpowerCare Staffing Agency​'}
     span={'EmpowerCare is here to help you find meaningful job opportunities at the best mental health agencies.​'}

     bnrbtn={"Quick Apply"}
    />
    <Trusted/>
    <TrustedPartner
      simpleButton={false}
      anchor={false}
      button={true}
      img={empowercareimg}
      meta={'Who We Are'} 
      heading1={'TRANSFORMATIVE '} 
      heading2={'MENTAL HEALTH '}
      heading3={'OPPORTUNITIES​'} 
      description1={'Are you a dedicated mental health professional looking to make a real difference?'} 
      description2={'EmpowerCare is here to help you find meaningful job opportunities at the best mental health agencies around. '}
      description3={"Whether you're a behavioral technician, mental health technician, or mental health counselor, we go above and beyond other staffing agencies. We give you the support, training, and chances to grow that you need to succeed in your career."}
    />
<Toptalent
   heading1={"WHY DO ​"}
   heading2={"MENTAL HEALTH PROFESSIONALS "}
   heading3={"CHOOSE EMPOWERCARE?"}

   heading={"The Ripple Effect: Making Big Waves with Every Mental Health Job"}

   jobcard1={"Finding the Perfect Mental Health Job is Easy with Our Dynamic Squads"}
      jobcard1_des={"Our Dynamic Squads are better than your average healthcare staffing agency. They give you personalized service and make sure you find the perfect fit for your skills and goals. With our high-tech matching system and one-on-one support, finding your dream behavioral technician job or mental health position has never been simpler."}
      
      jobcard2={"Gain a Winning Edge: Excel with EmpowerCare Academy!"}
      jobcard2_des={"Through EmpowerCare Academy, you'll get a leg up on the competition and land your ideal job in mental health. Unlock your potential and easily navigate the path to career success with our top-notch training."}

      jobcard3={"Unsung Heroes No More: Mental Health Pros in the Spotlight!"}
      jobcard3_des={"As an EmpowerCare mental health professional, you're not just another employee – you're a Shift Champion. We believe in celebrating your amazing contributions to the field and putting you in the spotlight."}

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
     
     heading1={'EMPOWERING ​'} 
     heading2={'MENTAL HEALTH PROFESSIONALS - '}
      heading3={'CHANGING LIVES'} 
      description1={'Are you ready to make a difference for people facing mental health challenges?'} 
      description2={"Since 2005, EmpowerCare has been the driving force behind the success stories of over 8,000 professionals. We don't just fill positions; we fuel your passion with unbeatable opportunities and support."}
      description3={"Whether you're looking for behavioral technician jobs, mental health technician positions, or roles in a mental counseling agency, your journey to a fulfilling career starts here."}
      

      
    />
  <EmpowercarePremier
  
   heading1={"BECOME A ​"}
   heading2={"MENTAL HEALTH PROFESSIONAL"}
   heading3={" WITH EMPOWERCARE"}
   description1={"Don't miss this exclusive chance to join our prestigious network of Elite Mental Health Professionals. Unlock access to top job opportunities, unmatched support, and career-boosting benefits"}
   srtdesc={"Act Fast! Secure Your Spot​"}

      card_bx1_heading={"Priority Job Access "}
      card_bx1_description1={"Preferred Placement in the Best Mental Health Jobs"}
      card_bx2_heading2={"Tailored Benefits Package "}
      card_bx2_description2={"Flexible Work Options to Fit Your Life"}
      card_bx3_heading3={"Personal Career Coach "}
      card_bx3_description3={"One-on-One Career Coaching to Help You Thrive"}
      card_bx4_heading4={"Success Stories"}
      card_bx4_description4={": Read inspiring stories of how our Elite Mental Health Professionals have transformed lives and made a lasting impact. →"}

  
  />
  <ThreeColumns

bx1_head1={"PASSIONATE ​"}
bx2_head2={"MENTAL HEALTH"}
bx3_head3={" ADVOCATES"}
  description_1={"Our community of 8,000+ shares a passion for transforming lives through mental health care. We get the challenges you face, whether you're feeling burnt out or looking for more autonomy."}
  description_2={"As an Unsung Hero or Difference Maker, you've found your tribe at EmpowerCare, a top agency connecting dedicated professionals with behavioral technician jobs, mental health technician positions, and counseling roles to reshape the mental health landscape."}

  bx4_head={"Advocating for Mental Health Since 2005"}
  dx4_desc={"What started as a mission to support a small group of passionate mental health professionals has grown into a strong community of over 8,000 dedicated individuals."}
  dx4_desc2={"As a leading mental health staffing agency, EmpowerCare has been at the forefront of connecting skilled professionals with meaningful jobs that transform lives."}

  bx5_head={"Envision the Future of Mental Health Care"}
  dx5_desc={"Imagine a world where finding your dream mental health job is as easy as a few clicks - a world where your skills, passion, and goals line up perfectly with the right opportunity."}
  dx5_desc2={"That's the world we're creating at EmpowerCare."}
  
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