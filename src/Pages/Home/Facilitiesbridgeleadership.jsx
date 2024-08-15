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
import bannerImg from '../../Assets/schoolbnrimg.png';
import img from '../../Assets/staffing_banner.png'
import image from '../../Assets/staff.png' 
import empowercareimg from '../../Assets/In the office-amico.png'
import storiesimg from '../../Assets/guaranty.png';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import job1 from '../../Assets/Group 234.png';
import job2 from '../../Assets/Group 235.png';
import job3 from '../../Assets/Group 236.png';
import { Link } from "react-router-dom";
const Facilitiesbridgeleadership = () => {
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
        heading={'INTERIM ​'}
        heading2={'LEADERSHIP OPTIONS'}
        description={'Bridge Leadership Gaps with EmpowerCare Interim Solutions'}
        span={'Navigating Change with Experienced Interim Healthcare Leaders'}
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
           description1={"EmpowerCare is your trusted partner for interim leadership staffing in healthcare facilities. We understand the critical importance of maintaining strong, effective leadership during times of transition, growth, or change. Our extensive network of highly experienced interim clinical directors and nurse managers ensures you have the skilled guidance to navigate challenges and drive success. "}

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
           heading={'  targeted interim leadership staffing services'}
            option1= {'Interim Clinical Directors for Healthcare Facilities'}
            option2= {'Interim Nurse Managers for Hospital Units'}
            option5= {'Interim Leadership for Organizational Change Initiatives'}
            option4= {'Temporary Executive Staffing for Healthcare Organizations'}
            />
         <FacilityOperations
            subheading={'Limited-Time Offer'}
            whiteheading1={'Get Top Interim Leaders  '}
         
            blackheading={" to Navigate Change"}
            maindescription = {'EmpowerCare helps healthcare facility decision-makers solve leadership gaps during transitions. We make sure your facility maintains strong leadership without the stress of finding interim executives.'}
            option1={'Quality Match Guarantee'}
            description1={"Get access to our best interim clinical directors, nurse managers, and healthcare leaders. We check each one to make sure they fit your facility's needs perfectly."}
            option2={'Fast Placement'}
            description2={'We fill your interim leadership positions with great people fast. You get the best match quickly, without losing quality.'}
            option3={'Flexible Staffing'}
            description3= {"We have short-term, long-term, and project-based interim leadership solutions. Our program changes with your facility's needs to keep things running smoothly during transitions."}
            option4= {'Special Discounts'}
            description4= {"For a short time, get special discounts on our interim leadership staffing services. Pay less for more placements and get loyalty bonuses. Get the best value and the best service."}
            option5= {'Risk-Free Trial'}
            description5= {"Try our service with no risk. If you're not happy with the interim leaders, we'll find more people for free until you are."}
           
            bullet1= {'Easy to Start :'}
            bulletdescription1= {"It's easy to start working with us"} 
            bullet2={'Act Now :'}
            bulletdescription2= {'This Offer Ends Soon! To get this special offer, contact us before [specific deadline].'}
           endtext = {"Reach out today  and set a new standard for strong leadership during transitions with EmpowerCare's help."}
           btn ={<div className="bottom-btns-row">   
            <Link to="/post-job" className="signup-btn">
                <span>Post Job</span>
            </Link>
        </div>} />
        
        <Spotlights
            headingclr ={'Spotlights'}
            headingblack ={'Imagination'}
            
            description ={'Imagine your healthcare facility navigating change with confidence, guided by seasoned interim leaders who provide stability, direction, and momentum. With EmpowerCare, you can focus on your long-term objectives while we ensure a smooth leadership transition.'}
            btn1 ={'Contact Us'}
            btn2 = {'LEARN MORE'} 
            
            />
        <SolutionsDesign
        img = {image}
        meta = {'ABOUT US'}
        heading1 = {'OUR , '}
        heading2 = {'INTERIM LEADERSHIP STAFFING SOLUTIONS'}
        heading3 = {'ARE DESIGNED FOR :'}
        bullet1 = {'Healthcare Facility Administrators and Executives'}
        bullet2 = {'Hospital Department Heads and Directors'}
        bullet3={'Nursing Leadership and Management Teams'}
        bullet5={"Healthcare Organizations Undergoing Change or Growth"}
      

     
        description1 = {''}
        description2 = {''}
        btn1 = {'SIGN UP'}
        btn2 = {'ABOUT US'}
        />
     <PartneringBenefits 
    //  heading1={"Turnover Rates"}
    //  heading2={"Time To Fill"}
    //  heading3={"Client Satisfaction"}
    //  heading4={"MOre Time to Focus"}
            description1 ={'Reduced disruption and maintained continuity during transitions'}
            description2 ={'●Access to a wide pool of experienced healthcare leaders'}
            description3 = {'	Flexibility to bridge gaps while conducting a thorough executive search'}
            description4 = {'More time to focus on long-term strategic objectives'}/>
        <AboutusSnippet 
            description ={'EmpowerCare has been a leader in interim healthcare leadership staffing for over 18 years. Our commitment to excellence, personalized service, and innovation sets us apart as the go-to partner for facilities seeking to maintain strong leadership during times of change. '}
            btn1 = {'CONTACT US'}
            btn2 = {'LEARN MORE'}
            />
       
        {/* <JoiningForm heading={"Ready to navigate change with confidence and maintain leadership stability?   "} description = {"Contact EmpowerCare today for a complimentary consultation and let us find the perfect interim leaders for your organization"}/> */}
        <CareerSlider/>
        <Blog/>
        <FaqAccordian 
        faq={"Frequently Asked Question"}
        faq_head1 ={'How can EmpowerCare help fill leadership gaps in healthcare facilities?'}
            faq_desc1 ={"EmpowerCare specializes in 'Interim Leadership Staffing' and 'Interim Healthcare Leadership' solutions, providing 'Temporary Healthcare Leadership' and 'Interim Healthcare Executives' to facilities undergoing transitions. Our services include 'Interim Clinical Director Staffing' and 'Interim Nurse Manager Staffing', ensuring your facility maintains strong leadership during critical times."}
            faq_head2 = {"What types of interim leadership roles does EmpowerCare staff?"}
            faq_desc2 ={"We offer a wide range of interim leadership roles, including 'Interim Leadership for Organizational Change in Healthcare', 'Temporary Executive Staffing for Healthcare Transitions', and 'Transitional Leadership Staffing for Healthcare Organizations'. Our 'Interim Healthcare Management Solutions' are designed to support hospitals and healthcare organizations in need of skilled leadership."}
            faq_head3 ={"Can EmpowerCare provide staffing solutions for specialized interim healthcare leadership needs?"}
            faq_desc3 ={"Yes, EmpowerCare's 'Interim Leadership Staffing Services for Hospitals' and 'Interim Leadership Solutions for Healthcare Facilities' cover a broad spectrum of specialized needs. From 'Interim Clinical Directors for Hospitals' to 'Interim Leadership Placement for Healthcare Facilities', we ensure that each interim leader is a perfect match for the specific requirements of your facility."}
faq_head4 ={"How does EmpowerCare ensure the quality of interim leaders placed in healthcare facilities?"}
         faq_desc4 ={"Our 'Temporary Healthcare Leadership Staffing Agency' is committed to providing 'Experienced Interim Leaders for Healthcare Facilities'. We utilize a rigorous screening process to ensure that each 'Interim Leader' not only fits your facility's needs perfectly but also has the expertise to drive success during times of change or growth."}
         />
        <Userslider
        link={"/facilities/request-staffing"}
        reviewbtn="Request Staffing"
        />
        <Footer/>
    </>
    )
}
export default Facilitiesbridgeleadership