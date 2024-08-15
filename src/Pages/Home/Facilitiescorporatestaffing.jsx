import FacilitiesApproach from "../../Components/FacilitiesApproach/FacilitiesApproach"
import Banner10 from "../../Components/Banner10/Banner10"
import Guaranty from "../../Components/Facilities/TruePartner/Guaranty"
import TrustedPartner from "../../Components/Facilities/TruePartner/TrustedPartner"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import HeaderWhite from "../../Components/HeaderWhite2/HeaderWhite2" 
import Toptalent from "../../Components/Toptalent/Toptalent"
import FacilitiesTrusted from "../../Components/FacilitiesTrusted/FacilitiesTrusted"
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
import bannerImg from '../../Assets/corporatebnrimg.png';
import img from '../../Assets/staffing_banner.png'
import image from '../../Assets/staff.png'
import empowercareimg from '../../Assets/In the office-amico.png'
import storiesimg from '../../Assets/guaranty.png';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import job1 from '../../Assets/Group 234.png';
import job2 from '../../Assets/Group 235.png';
import job3 from '../../Assets/Group 236.png';
import { Link } from "react-router-dom"
const Facilitiescorporatestaffing = () => {
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
        heading={'EMPOWER ​'}
        heading2={'EMPLOYEE HEALTH'}
        description={' Corporate Staffing with EmpowerCare - Empower Employee Health​'}
        span={'Elevating Employee Health and Productivity with Top Talent'}
        bnrbtn={"Request Staffing"}
        />
        <FacilitiesTrusted/>
        <TrustedPartner
         simpleButton={false}
         anchor={false}
          button={true}
          img={empowercareimg}
          meta={'Who We Are'} 
          heading1={'EMPOWERCARE IS YOUR'} 
          heading2={' TRUSTED'}
           heading3={'PARTNER'} 
           description1={'EmpowerCare is your trusted partner for corporate health staffing solutions. We understand the critical role that employee health and well-being play in driving business success. Our extensive network of pre-screened, highly skilled healthcare professionals, including occupational nurses, health screeners, CNAs, and non-clinical staff, ensures you have the right talent to create a thriving workforce. '} 

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
           greenheading ={'OFFERS A '}
           heading={'WIDE RANGE OF CORPORATE HEALTH SOLUTIONS​'}
            option1= {'Temporary-to-Hire Corporate Health Professionals'}
            option2= {'Permanent Placement for Corporate Wellness Roles'}
            option5= {'Contract Staffing for Occupational Health Programs'}
            option4= {'On-site Clinic Staffing Solutions'}
            option3={'Employee Health and Wellness Program Specialists'}
            />
         <FacilityOperations
            subheading={'Limited-Time Offer'}
            whiteheading1={'Get Top Talent to Enhance  '}
         
            blackheading={'Employee Health'}
            maindescription = {'EmpowerCare helps corporations solve corporate health staffing shortages. We ensure your company provides exceptional health services without the stress of finding staff.'}
            option1={'Quality Match Guarantee'}
            description1={"Access our best occupational nurses, health screeners, and corporate health professionals. We ensure they fit your company's needs perfectly."}
            option2={'Fast Placement'}
            description2={'We fill your open corporate health positions with great people fast, without losing quality.'}
            option3={'Flexible Staffing'}
            description3= {"We offer temporary, temp-to-hire, permanent, and contract corporate health staffing solutions to keep things running smoothly."}
            option4= {'Special Discounts'}
            description4= {'Get special discounts on our corporate health staffing services. Pay less for high-volume needs and get priority access to our most experienced professionals. '}
            bullet1= {'Easy to Start :'}
            bulletdescription1= {"Contact us now for a free consultation"} 
            bullet2={'Act Now :'}
            bulletdescription2= {'This Offer Ends Soon! To get this special offer, contact us in next 24hrs'}
           endtext = {"Reach out today and set a new standard for exceptional employee health with EmpowerCare's help"}
           btn ={<div className="bottom-btns-row">   
            <Link to="/post-job" className="signup-btn">
                <span>Post Job</span>
            </Link>
        </div>} />
        
        <Spotlights
            headingclr ={'OUR '}
            headingblack ={'FOCUS​'}
            
            description ={'Imagine your corporation with a robust, proactive employee health program staffed by dedicated professionals who are committed to promoting a culture of wellness. With EmpowerCare, you can focus on driving business growth while we handle your corporate health staffing needs.'}
            btn1 ={'Contact Us'}
            btn2 = {'LEARN MORE'} 
            
            />
        <SolutionsDesign
        img = {image}
        meta = {'ABOUT US'}
        heading1 = {'OUR CORPORATE HEALTH '}
        heading2 = {'STAFFING SOLUTIONS'}
        heading3 = {'ARE DESIGNED FOR:'}
        bullet1 = {'Human Resources Directors and Managers'}
        bullet2 = {'Corporate Wellness Program Coordinators'}
        bullet3 = {'Occupational Health and Safety Leaders'}
        bullet4 = {'Employee Benefits and Compensation Managers'}
     
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
            description1 ={'Lower turnover rates and improved staff retention'}
            description2 ={'Reduced time-to-fill for open positions'}
            description3 = {'Increased client satisfaction and outcomes'}
            description4 = {'More time to focus on core operations and initiatives'}/>
        <AboutusSnippet 
            description ={'EmpowerCare has been a leader in corporate health staffing for over 18 years. Our commitment to excellence, personalized service, and innovation sets us apart as the go-to partner for corporations seeking to optimize employee health and well-being. '}
            btn1 = {'CONTACT US'}
            btn2 = {'LEARN MORE'}
            />
        
        {/* <JoiningForm heading={"Ready to elevate your corporate health program and drive business success? "} description = {"Contact EmpowerCare today for a complimentary consultation and let us find the perfect professionals for your team. "}/> */}
        <CareerSlider/>
        <Blog/>
        <FaqAccordian 
        
        faq={"Frequently Asked Question"}
        faq_head1 ={'How does EmpowerCare enhance corporate health programs?'}
            faq_desc1 ={"EmpowerCare delivers 'Corporate Health Healthcare Staffing' solutions tailored to the needs of modern workplaces. By providing 'Occupational Health Staffing' and 'Corporate Wellness Staffing', including specialized roles such as 'Health Screener Staffing for Corporate Wellness Events' and 'Occupational Health Nurse Staffing for Corporations', we ensure your workforce remains healthy and productive."}
            faq_head2 = {'What types of staffing services does EmpowerCare offer to corporations?'}
            faq_desc2 ={"We offer a comprehensive suite of services, including 'Temporary-to-Hire Corporate Health Professionals', 'Permanent Placement for Corporate Wellness Roles', and 'Contract Staffing for Occupational Health Programs'. Our 'On-site Employee Health Clinic Staffing' and 'Employee Health and Wellness Program Specialists' are dedicated to elevating employee well-being."}
            faq_head3 ={"Can EmpowerCare provide staffing for on-site corporate health clinics?"}
            faq_desc3 ={"Yes, our 'On-site Clinic Staffing' solutions are designed to support 'Corporate Health Staffing Solutions' directly within your company premises. We staff 'CNA Staffing for Corporate Health Clinics' and provide 'Non-Clinical Healthcare Staffing for Corporate Settings', ensuring comprehensive care for your employees."}

            faq_head4 ={"How does EmpowerCare's staffing process ensure the right fit for my corporate health needs?"}
            faq_desc4={"Our 'Corporate Health Staffing' approach includes a 'Quality Match Guarantee' to ensure each professional, from 'Employee Health Program Staffing' to 'Executive Health Program Staffing Solutions', fits your company's unique culture and health requirements. We leverage over 18 years of 'Healthcare Expertise' to match 'Healthcare Professionals', 'Registered Nurses', and 'Healthcare Facility' staff with your corporate wellness goals. "}

            />
        <Userslider
        link={"/facilities/request-staffing"}
        reviewbtn={"Request Staffing"}
        />
        <Footer/>
    </>
    )
}
export default Facilitiescorporatestaffing