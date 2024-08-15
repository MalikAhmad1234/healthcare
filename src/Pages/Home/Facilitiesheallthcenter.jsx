import FacilitiesApproach from "../../Components/FacilitiesApproach/FacilitiesApproach"
import Banner10 from "../../Components/Banner10/Banner10"
import Guaranty from "../../Components/Facilities/TruePartner/Guaranty"
import TrustedPartner from "../../Components/Facilities/TruePartner/TrustedPartner"
import FacilitiesTrusted from "../../Components/FacilitiesTrusted/FacilitiesTrusted"
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
import bannerImg from '../../Assets/healthcenterbnrimg.png';
import img from '../../Assets/staffing_banner.png'
import image from '../../Assets/staff.png'
import empowercareimg from '../../Assets/In the office-amico.png'
import storiesimg from '../../Assets/guaranty.png';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import job1 from '../../Assets/Group 234.png';
import job2 from '../../Assets/Group 235.png';
import job3 from '../../Assets/Group 236.png';
import { Link } from "react-router-dom"
const Facilitiesheallthcenter = () => {
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
        heading={'ELEVATING​'}
        heading2={'COMMUNITY CARE'}
        description={'Empowering your Community Health Center with Top Talent'}
        span={'Elevating Care in Community Health Centers and Group Homes'}
        bnrbtn={"Request Staffing"}
        />
        <FacilitiesTrusted/>
        <TrustedPartner
         simpleButton={false}
         anchor={false}
          button={true}
          img={empowercareimg}
          meta={'Who We Are'} 
          heading1={'EMPOWERCARE:​'} 
          heading2={' YOUR TRUSTED'}
           heading3={'PARTNER'} 
           description1={'EmpowerCare is your trusted partner for non-clinical staffing services. We understand the crucial role that skilled non-clinical professionals play in ensuring the smooth operation of your healthcare facility.'} 
           description2={'Our extensive network of pre-screened, highly trained sitters, compassionate professionals, receptionists, administrative staff, and experienced nurses and CNAs for non-clinical roles ensures you have the right talent to support your facility operational efficiency and patient experience.'}

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
           heading={' direct care and support staffing services:'}
            option1= {'Per Diem Direct Care and Nursing Staff'}
            option2= {'Temp-to-Hire Direct Support Professionals'}
            option5= {'Permanent Placement for Community Care Roles'}
            option4= {'Local Contract Direct Care Staffing Solutions'}
            />
         <FacilityOperations
            subheading={'Limited-Time Offer'}
            whiteheading1={'Get To Top Direct Care Talent To '}
            whiteheading2={'Operations'}
            blackheading={'Elevate Your Facility '}
            maindescription = {'EmpowerCare helps community health center and group home directors solve staffing shortages. We make sure your facility provides exceptional care without the stress of finding staff.'}
            option1={'Quality Match Guarantee'}
            description1={"Get access to our best direct care professionals and support staff. We check each one to make sure they fit your facility's needs perfectly."}
            option2={'Fast Placement'}
            description2={'We fill your open positions with great people fast. You get the best match quickly, without losing quality.'}
            option3={'Flexible Staffing'}
            description3= {"We have per diem, temp-to-hire, and permanent staff. Our program changes with your facility's needs to keep things running smoothly."}
            option4= {'Special Discounts'}
            description4= {'For a short time, get special discounts on our staffing services. Pay less for more placements and get loyalty bonuses. Get the best value and the best service.'}
            bullet1= {'Easy to Start :'}
            bulletdescription1= {"Try our service with no risk. If you're not happy with the placements, we'll find more people for free until you are."} 
            bullet2={'Act Now :'}
            bulletdescription2= {'This Offer Ends Soon! Improve your patient care with the best healthcare workers.'}
           endtext = {"Reach out today and set a new standard for exceptional healthcare facility operations with EmpowerCare's help."}
           btn ={<div className="bottom-btns-row">   
            <Link to="/post-job" className="signup-btn">
                <span>Post Job</span>
            </Link>
        </div>} />
        
        <Spotlights
            headingclr ={'OUR'}
            headingblack ={'FOCUS​'}
            
            description ={'Imagine your community care facility fully staffed with compassionate, dedicated professionals who are committed to improving the lives of your clients. With EmpowerCare, you can focus on delivering exceptional care while we handle your staffing needs.'}
            btn1 ={'Contact Us'}
            btn2 = {'LEARN MORE'} 
            
            />
        <SolutionsDesign
        img = {image}
        meta = {'ABOUT US'}
        heading1 = {'OUR DIRECT CARE '}
        heading2 = {'STAFFING SOLUTIONS'}
        heading3 = {'ARE DESIGNED FOR:'}
        bullet1 = {'Community Health Center Directors and Managers'}
        bullet2 = {'Group Home Administrators and Supervisors'}
        bullet3 = {'Residential Care Facility Leaders'}
        bullet4 = {'Adult Day Care Program Directors'}
     
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
            description ={'EmpowerCare has been a leader in direct care and support staffing for over 18 years. Our commitment to excellence, personalized service, and innovation sets us apart as the go-to partner for community health centers and group homes nationwide. '}
            btn1 = {'CONTACT US'}
            btn2 = {'LEARN MORE'}
            />
        {/* <Trusted/> */}
        {/* <JoiningForm heading={"Ready to elevate your community care facility's staffing and enhance client lives? "} description = {"Contact EmpowerCare today for a complimentary consultation and let us find the perfect direct care professionals for your organization."}/> */}
        <CareerSlider/>
        <Blog/>
        <FaqAccordian 
        faq={"Frequently Asked Question"}
        faq_head1 ={'How does EmpowerCare meet the direct care staffing needs of Community Health Centers?'}
            faq_desc1 ={"EmpowerCare specializes in 'Direct Care Staffing' and 'Direct Care Staffing Services', providing 'Direct Care Professionals' and 'CNAs for Adult Day Care Programs'. We offer 'Staffing Solutions for Residential Direct Care Programs' that are tailored to the 'Wide Range' of needs at 'Community Health Centers'."}
            faq_head2 = {'Can EmpowerCare help Group Homes with staffing shortages?'}
            faq_desc2 ={"Absolutely. For 'Group Home Directors' facing 'Staffing Shortages', EmpowerCare delivers 'Direct Support Professional Agencies' services and 'Personal Care Assistant Staffing'. Our 'Temporary-to-Hire Direct Support Professionals' and 'Per Diem Direct Care Staff' ensure 'High Quality' care and support."}
            faq_head3 ={"What types of roles can EmpowerCare fill for mental health and residential care?"}
            faq_desc3 ={"Our 'Mental Health Staffing Solutions' include 'Licensed Clinical Social Workers' and 'Mental Health Tech Staffing'. We also staff 'Nurses for Group Homes and Residential Care' and provide 'Permanent Placement for Community Care Roles' to support 'Healthcare Professionals' in 'United States'."}

            faq_head4 ={"Does EmpowerCare offer staffing services for specialized community care roles?"}
            faq_desc4={"Yes, our \"Direct Care Staffing Agencies\" cater to specialized roles with \"Psychologist Staffing\" and \"Licensed Clinical Social Worker Staffing\". We support \"Family Members\" and \"Family Therapy\" through \"Mental Health Counselors for Community Care\" and ensure \"Patient Satisfaction\" with \"Nurse Assistants\" trained in \"Acute Care\" Direct Care "}

            />
        <Userslider
        link={"/facilities/request-staffing"}
        reviewbtn={"Request Staffing"}
        />
        <Footer/>
    </>
    )
}
export default Facilitiesheallthcenter