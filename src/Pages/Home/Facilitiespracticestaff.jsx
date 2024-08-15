import FacilitiesApproach from "../../Components/FacilitiesApproach/FacilitiesApproach"
import Banner10 from "../../Components/Banner10/Banner10"
import Guaranty from "../../Components/Facilities/TruePartner/Guaranty"
import TrustedPartner from "../../Components/Facilities/TruePartner/TrustedPartner"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import HeaderWhite from "../../Components/HeaderWhite2/HeaderWhite2"
import Toptalent from "../../Components/Toptalent/Toptalent"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import CareerSlider from '../../Components/CareerSlider/CareerSlider';
import SolutionsDesign from "../../Components/SolutionsDesign/SolutionsDesign"
import StaffingServices from "../../Components/StaffingServices/StaffingServices"
import PartneringBenefits from "../../Components/PartneringBenefits/PartneringBenefits"
import Spotlights from "../../Components/Spotlights/Spotlights"
import AboutusSnippet from "../../Components/AboutUsSnippet/AboutusSnippet"
import FacilityOperations from "../../Components/FacilityOperations/FacilityOperations"
import JoiningForm from "../../directcare/JoiningForm/JoiningForm"
import Blog from "../../Components/Blog/Blog"
import bannerImg from '../../Assets/Group 581.png';
import img from '../../Assets/staffing_banner.png'
import image from '../../Assets/staff.png' 
import empowercareimg from '../../Assets/In the office-amico.png'
import storiesimg from '../../Assets/guaranty.png';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import job1 from '../../Assets/Group 234.png';
import job2 from '../../Assets/Group 235.png';
import job3 from '../../Assets/Group 236.png';
import { Link } from "react-router-dom";
const Facilitiespracticestaff = () => {
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-190px',
        backgroundColor: '#EBE0D3'
    };
    return(
        <>
        <HeaderWhite
          logoImg={logow}
          />
        <Banner10
        bannerStyles={bannerStyles}
        bannerImg={bannerImg}
        heading={'EPOWERCARE'}
        heading2={'PRACTICE STAFF'}
        description={"EmpowerCare Advanced Practice Staff"}
        span={'Empowering Your Facility with Experienced Professionals'}
        bnrbtn={"Request Staffing"}
        />
        <Trusted/>
        <TrustedPartner
         simpleButton={false}
         anchor={false}
          button={true}
          img={empowercareimg}
          meta={'Who We Are'} 
          heading1={'EMPOWERCARE IS YOUR'} 
          heading2={' TRUSTED'}
           heading3={'PARTNER'} 
           description1={"EmpowerCare is your trusted partner for advanced practice staffing solutions. We understand the vital role that experienced and knowledgeable advanced practice professionals play in delivering high-quality, efficient patient care.\
           Our extensive network of pre-screened, highly skilled Directors of Nursing, Nurse Practitioners, Physician Assistants, and other advanced practice clinicians ensures you have the right talent to elevate your facility's performance and patient outcomes.  "} 
           btn={<div className="sec-btns">
            <Link to='/about/contactus' className="learn-btn">
                <span>Contact Us</span>
               
            </Link>
            
        </div>}
        />
         <FacilitiesApproach      
           heading1={'Every Job Helps the World '}
           description1={''}
           heading2={'Finding the Perfect Match Made Easy! Dynamic Squads  '}
           description2 = {''}
           heading3={' Seamless Pledge: Hassle-free staffing!  '}
           description3 = {''}
           heading4={'Healthcare Expertise'}
           description4 = {''}
           heading5={'Rapid, ideal candidate matches, reduced time-to-hire'}
           description5 = {''}

           button={<div className="bottom-btn">
            <Link to="/post-job" className="signup">
                <span>Post Job</span>
            </Link>
        </div>}
           />
        <Toptalent
           heading1={"EmpowerCare's"}
           heading2={"Core"}
           heading3={"Promises"}
           job1={job1}
           job2={job2}
           job3={job3}
           jobcard1={"Transformative Placements"}
           jobcard1_des={"Each EmpowerCare placement helps improve healthcare, change lives, and enhance the quality of care, making a meaningful impact"}

           jobcard2={"Commitment to Community"}
           jobcard2_des={"We donate $1 towards community health initiatives for every shift worked by our healthcare professionals, making a positive impact beyond the walls of healthcare facilities."}

           jobcard3={"Personalized Excellence through CPR:"}
           jobcard3_des={"We provide a Convenient, Personable, and Responsive staffing experience, ensuring the right match for healthcare facilities while offering dedicated support and timely solutions."}
           btn2={"LEARN MORE"}
            blink="/facilities/request-staffing"
            btx="Request Staffing"
           />

           
        <Guaranty
        img={storiesimg}
        heading1={'OUR'}
        heading2={'GUARANTEES'}
        btn1 = {'CONTACT US'}
        btn2 = {'LEARN MORE'}
        description={'Your satisfaction is our priority. If you are not happy with a placement, we will find a new one for you at no extra charge. We make sure your healthcare staffing needs are met carefully.'}
        />
              <StaffingServices 
           greenheading ={'offers range of'}
           heading={' comprehensive advanced practice staffing services'}
            option1= {'	Directors of Nursing for Leadership and Oversight'}
            option2= {'Nurse Practitioners for Primary and Specialty Care'}
            option5= {'Physician Assistants for Medical and Surgical Services'}
            option4= {'	Clinical Nurse Specialists for Expert Guidance and Support'}
            option3={'Certified Registered Nurse Anesthetists (CRNAs) for Anesthesia Care'}
            option6={"Certified Nurse Midwives (CNMs) for Women's Health Services"}
            />
         <FacilityOperations
            subheading={'Limited-Time Offer'}
            whiteheading1={'Premier Advance '}
         
            blackheading={"Practice Stuffing"}
            maindescription = {'EmpowerCare addresses your advanced practice staffing needs, ensuring top-quality patient care. Our network includes experienced Nurse Practitioners, Physician Assistants, and Directors of Nursing, ready to enhance your team.'}
            option1={'Quality Match Guarantee'}
            description1={": Access our best sitters, receptionists, and non-clinical healthcare professionals. We ensure they fit your facility's needs perfectly."}
            option2={'Fast Placement'}
            description2={'We fill your open non-clinical positions with great people fast, without losing quality.'}
            option3={'Flexible Staffing'}
            description3= {"We offer temporary, temp-to-hire, permanent, and contract non-clinical staffing solutions to keep things running efficiently."}
            option4= {'Special Discounts'}
            description4= {"Get special discounts on our non-clinical staffing services. Pay less for high-volume, ongoing needs and get priority access to our most experienced professionals."}
            bullet1= {'Easy to Start :'}
            bulletdescription1= {"Contact us now for a free consultation."} 
            bullet2={'Act Now :'}
            bulletdescription2= {'This Offer Ends Soon! To get this special offer, contact us before [specific deadline].'}
           endtext = {"Enhance your patient care with EmpowerCare's specialized staffing."}
           btn ={<div className="bottom-btns-row">   
            <Link to="/post-job" className="signup-btn">
                <span>Post Job</span>
            </Link>
        </div>} />
        
        <Spotlights
            headingclr ={'Our'}
            headingblack ={'Focus'}
            
            description ={'Imagine your healthcare facility providing top-tier patient care, with skilled advanced practice professionals driving clinical excellence and efficiency. With EmpowerCare, you can focus on delivering exceptional care while we handle your advanced practice staffing needs.'}
            btn1 ={'Contact Us'}
            btn2 = {'LEARN MORE'} 
            
            />
        <SolutionsDesign
        img = {image}
        meta = {'ABOUT US'}
        heading1 = {'OUR , '}
        heading2 = {'STAFFING SOLUTIONS'}
        heading3 = {'ARE DESIGNED FOR ADVANCED PRACTICE:'}
        bullet1 = {'Hospital Administrators and Executives'}
        bullet2 = {'Outpatient Clinic Directors and Managers'}
        bullet3={'Specialty Care Center Leaders'}
        bullet5={"Long-Term Care Facility Directors"}
        bullet4={'Community Health Center Administrators'}

     
        description1 = {''}
        description2 = {''}
        btn1 = {'SIGN UP'}
        btn2 = {'ABOUT US'}
        />
     <PartneringBenefits 
     heading1={"Turnover Rates"}
     heading2={"Time To Fill"}
     heading3={"Client Satisfaction"}
     heading4={"MOre Time to Focus"}
            description1 ={'Access to a wide pool of skilled, compassionate direct care professionals'}
            description2 ={'Reduced time-to-fill for open positions'}
            description3 = {'Improved care recipient outcomes and satisfaction'}
            description4 = {'	More time to focus on delivering exceptional care and support'}/>
        <AboutusSnippet 
            description ={'EmpowerCare has been a leader in advanced practice staffing for over 18 years. Our commitment to excellence, personalized service, and innovation sets us apart as the go-to partner for healthcare facilities seeking to elevate patient care with skilled advanced practice professionals.'}
            btn1 = {'CONTACT US'}
            btn2 = {'LEARN MORE'}
            />
        
        
        <CareerSlider/>
        <Blog/>
        <FaqAccordian 
        faq={"Frequently Asked Question"}
        faq_head1 ={'What types of advanced practice staffing solutions does EmpowerCare offer? '}
            faq_desc1 ={"EmpowerCare offers a wide range of advanced practice staffing services, including Directors of Nursing, Nurse Practitioners, Physician Assistants, and Clinical Nurse Specialists and Certified Nurse Midwives (CNMs) to meet the diverse needs of healthcare facilities."}
            faq_head2 = {"How does EmpowerCare ensure the quality of its advanced practice professionals? "}
            faq_desc2 ={"EmpowerCare maintains rigorous standards for its advanced practice professionals. We conduct thorough background checks, verify credentials, and assess skills to ensure that our professionals meet the highest standards of quality and professionalism."}
            faq_head3 ={"What sets EmpowerCare apart from other advanced practice staffing agencies? "}
            faq_desc3 ={"EmpowerCare distinguishes itself by offering a personalized, technology-driven approach to advanced practice staffing. Our platform streamlines the hiring process, provides transparency, and offers unparalleled support to both professionals and healthcare facilities. We are committed to fostering long-term success for all parties involved."}

            faq_head4 ={"How can healthcare facilities benefit from partnering with EmpowerCare for advanced practice staffing? "}
            faq_desc4={"Healthcare facilities that partner with EmpowerCare for advanced practice staffing gain access to a pool of highly qualified professionals who have been thoroughly vetted. Our solutions help facilities achieve improved patient satisfaction, increased efficiency, and better health outcomes."}
faq_head5 = {"What is the process for getting started with EmpowerCare's advanced practice staffing services? "}
faq_desc5 = {"Getting started with EmpowerCare is easy. Simply contact us for a free consultation, and our team will work closely with you to understand your unique needs and create a customized staffing plan that aligns with your goals. We'll handle the rest, ensuring a smooth and efficient process from start to finish"}
            />
        <Userslider
         link={"/facilities/request-staffing"}
        reviewbtn={"Request Staffing"}
        />
        <Footer/>
    </>
    )
}
export default Facilitiespracticestaff