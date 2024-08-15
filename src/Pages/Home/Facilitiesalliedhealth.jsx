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
import bannerImg from '../../Assets/alliedbnrimg.png';
import img from '../../Assets/staffing_banner.png'
import image from '../../Assets/staff.png'
import empowercareimg from '../../Assets/In the office-amico.png'
import storiesimg from '../../Assets/guaranty.png';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import job1 from '../../Assets/Group 234.png';
import job2 from '../../Assets/Group 235.png';
import job3 from '../../Assets/Group 236.png';
import { Link } from "react-router-dom";
const Facilitiesstudenthealth = () => {
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
        heading={'ALLIED HEALTH​'}
        heading2={'SOLUTIONS'}
        description={'ELEVATE CARE WITH EMPOWERCARE ALLIED HEALTH STAFFING'}
        span={'Empower Healthcare: Empowercare Allied Health Staffing Solutions'}
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
           description1={"Empower Healthcare: EmpowerCare's Allied Health Staffing Solutions\
           EmpowerCare is your trusted partner for allied health staffing services. We understand the critical role that skilled allied health professionals play in delivering comprehensive, high-quality patient care.\
           Our extensive network of pre-screened, highly trained Imaging Technologists, Surgical Techs, Medical Assistants (CMAs), and other allied health specialists ensures you have the right talent to support your facility's diverse needs\
            "} 

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
        description={'Your satisfaction is our priority. If you are not happy with a placement, we will find a new one for you at no extra charge. We make sure your healthcare staffing needs are met carefully. Learn More About Our Satisfaction Guarantee -->'}
        />
              <StaffingServices 
           greenheading ={'offers range of'}
           heading={' comprehensive allied health staffing services'}
            option1= {'Imaging Technologists (Radiology, Ultrasound, MRI)'}
            option2= {'Surgical Technologists for Operating Room Support'}
            option5= {'Certified Medical Assistants (CMAs) for Clinical Settings'}
            option4= {'Physical Therapy and Occupational Therapy Professionals'}
            option3={'Speech-Language Pathologists and Audiologists'}
            option6={"Respiratory Therapists and Pulmonary Function Technicians"}
            />
         <FacilityOperations
            subheading={'Limited-Time Offer'}
            whiteheading1={'Get Top Allied Health Talent  '}
         
            blackheading={"to Enhance Patient Care"}
            maindescription = {'EmpowerCare helps healthcare facilities solve allied health staffing shortages. We ensure your facility provides exceptional care without the stress of finding staff.\
            Our Premier Partnership Program gives you:\
            '}
            option1={'Quality Match Guarantee'}
            description1={"Access our best imaging technologists, surgical techs, and medical assistants. We ensure they fit your facility's needs perfectly."}
            option2={'Fast Placement'}
            description2={'We fill your open allied health positions with great people fast, without losing quality.'}
            option3={'Flexible Staffing'}
            description3= {"We offer temporary, temp-to-hire, permanent, and local contract allied health staffing solutions to keep things running smoothly."}
            option4= {'Special Discounts'}
            description4= {"Get special discounts on our allied health staffing services. Pay less for high-volume, ongoing needs and get priority access to our most experienced professionals."}
            bullet1= {'Easy to Start :'}
            bulletdescription1= {"Contact us now for a free consultation."} 
            bullet2={'Act Now :'}
            bulletdescription2= {'This Offer Ends Soon! To get this special offer, contact us before [specific deadline].'}
           endtext = {"Reach out today  and set a new standard for exceptional care with EmpowerCare's help."}
           btn ={<div className="bottom-btns-row">   
            <Link to="/post-job" className="signup-btn">
                <span>Post Job</span>
            </Link>
        </div>} />
        
        <Spotlights
            headingclr ={'Our'}
            headingblack ={'Focus'}
            
            description ={'Imagine your healthcare facility operating at peak efficiency, with skilled allied health professionals working seamlessly alongside your core medical staff. With EmpowerCare, you can focus on delivering exceptional patient care while we handle your allied health staffing needs.'}
            btn1 ={'Contact Us'}
            btn2 = {'LEARN MORE'} 
            
            />
        <SolutionsDesign
        img = {image}
        meta = {'ABOUT US'}
        heading1 = {'OUR , '}
        heading2 = {'ALLIED HEALTH STAFFING SOLUTIONS'}
        heading3 = {'ARE DESIGNED FOR ADVANCED PRACTICE:'}
        bullet1 = {'Hospital Administrators and Department Heads'}
        bullet2 = {'Outpatient Clinic Managers and Supervisors'}
        bullet3={'Diagnostic Imaging Center Directors'}
        bullet5={"Rehabilitation Facility Administrators"}
        bullet4={'Ambulatory Surgery Center Managers'}

     
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
            description3 = {'Improved patient outcomes and satisfaction'}
            description4 = {'More time to focus on delivering comprehensive, high-quality care'}/>
        <AboutusSnippet 
            description ={'EmpowerCare has been a leader in allied health staffing for over 18 years. Our commitment to excellence, personalized service, and innovation sets us apart as the go-to partner for healthcare facilities seeking to enhance their teams with skilled allied health professionals.'}
            btn1 = {'CONTACT US'}
            btn2 = {'LEARN MORE'}
            />
        
        {/* <JoiningForm heading={"Ready to strengthen your healthcare facility with skilled allied health professionals?  "} description = {"Contact EmpowerCare today for a complimentary consultation, and let us find the perfect allied health staff for your organization. "}/> */}
        <CareerSlider/>
        <Blog/>
        <FaqAccordian 
        faq={"Frequently Asked Question"}
        faq_head1 ={'How can I ensure my facility gets the best allied health staffing services?'}
            faq_desc1 ={"When searching for 'Allied Health Staffing' or 'Allied Health Staffing Services,' you want a reputable agency that provides 'Experienced Allied Health Professionals for Healthcare Teams.' Employers should look for services that offer comprehensive 'Allied Health Staffing Solutions for Healthcare Facilities,' including 'Medical Assistant Staffing,' 'Imaging Technologist Staffing,' and 'Surgical Tech Staffing' to ensure a diverse and skilled healthcare staff."}
            faq_head2 = {"What specialties do your allied health staffing services cover for hospitals and clinics? "}
            faq_desc2 ={"Our 'Staffing Services for Hospitals and Clinics' encompass a range of specialties such as 'Surgical Technologist Staffing for Operating Rooms' and 'Imaging Technologist Staffing for Radiology Departments.' We also offer 'Certified Medical Assistant Staffing for Outpatient Clinics' and have a 'CMA Staffing Agency' division to cater to all your allied health staffing needs."}
            faq_head3 ={"Can you provide staffing for rehabilitation and audiology needs? "}
            faq_desc3 ={"Our 'Allied Health Professionals' include experts suitable for 'Physical Therapy Staffing for Rehabilitation Centers' and 'Occupational Therapy Staffing for Healthcare Facilities.' Additionally, we provide 'Speech-Language Pathologist Staffing for Hospitals' and 'Audiologist Staffing for Hearing Clinics,' ensuring your patients receive the best care across all departments."}

            />
        <Userslider
        link={"/facilities/request-staffing"}
        reviewbtn={"Request Staffing"}
        />
        <Footer/>
    </>
    )
}
export default Facilitiesstudenthealth