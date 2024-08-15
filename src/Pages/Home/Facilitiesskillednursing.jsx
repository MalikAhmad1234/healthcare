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
import bannerImg from '../../Assets/nursingbnrimg.png';
import img from '../../Assets/staffing_banner.png'
import image from '../../Assets/staff.png'
import empowercareimg from '../../Assets/In the office-amico.png'
import storiesimg from '../../Assets/guaranty.png';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import job1 from '../../Assets/Group 234.png';
import job2 from '../../Assets/Group 235.png';
import job3 from '../../Assets/Group 236.png';
import { Link } from "react-router-dom";
const Facilitiesskillednursing = () => {
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
        heading={'ELEVATE ​'}
        heading2={'CARE QUALITY'}
        description={'Elevate Care Quality: EmpowerCare Skilled Nursing Staffing'}
        span={'Empowering Skilled Nursing and Assisted Living Facilities with Exceptional Talent'}
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
           description1={"EmpowerCare is your trusted local partner for skilled nursing and assisted living staffing solutions. We understand the unique challenges these facilities face in delivering high-quality, compassionate care. Our extensive network of pre-screened, highly skilled nurses, including RNs, LPNs, and CNAs, ensures you have the right talent to elevate your residents' care experience. "}

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
           heading={'  skilled nursing staffing services'}
            option1= {'Per Diem RNs, LPNs, and CNAs'}
            option2= {'Temp-to-Hire Nursing Staff'}
            option5= {'Permanent Placement for Long-Term Care Roles'}
            option4= {'Local Contract Nursing Solutions'}
            option3={'Speech-Language Pathologists and Audiologists'}
            />
         <FacilityOperations
            subheading={'Limited-Time Offer'}
            whiteheading1={'Get Top  Talent  '}
         
            blackheading={"to Elevate Facility's Care"}
            maindescription = {'EmpowerCare helps skilled nursing and assisted living directors solve staffing shortages. We make sure your facility provides exceptional care without the stress of finding staff. '}
            option1={'Quality Match Guarantee'}
            description1={"Get access to our best RNs, LPNs, and CNAs. We check each one to make sure they fit your facility's needs perfectly."}
            option2={'Fast Placement'}
            description2={'We fill your open jobs with great people fast. You get the best match quickly, without losing quality.'}
            option3={'Flexible Staffing'}
            description3= {"We have per diem, temp-to-hire, permanent, and local contract nursing staff. Our program changes with your facility's needs to keep things running smoothly."}
            option4= {'Special Discounts'}
            description4= {"For a short time, get special discounts on our staffing services. Pay less for more placements and get loyalty bonuses. Get the best value and the best service."}
            option5= {'Risk-Free Trial'}
            description5= {"Try our service with no risk. If you're not happy with the placements, we'll find more people for free until you are."}
           
            bullet1= {'Easy to Start :'}
            bulletdescription1= {"Contact us now for a free consultation."} 
            bullet2={'Act Now :'}
            bulletdescription2= {'This Offer Ends Soon! To get this special offer, contact us before [specific deadline].'}
           endtext = {"This Offer Ends Soon! To get this special offer, contact us before [specific deadline]."}
           btn ={<div className="bottom-btns-row">   
            <Link to="/post-job" className="signup-btn">
                <span>Post Job</span>
            </Link>
        </div>} />
        
        <Spotlights
            headingclr ={'Our'}
            headingblack ={'Focus'}
            
            description ={'Imagine your skilled nursing or assisted living facility fully staffed with dedicated, compassionate nurses who are committed to improving the lives of your residents. With EmpowerCare, you can focus on delivering exceptional care while we handle your staffing needs.'}
            btn1 ={'Contact Us'}
            btn2 = {'LEARN MORE'} 
            
            />
        <SolutionsDesign
        img = {image}
        meta = {'ABOUT US'}
        heading1 = {'OUR , '}
        heading2 = {'SKILLED NURSING STAFFING SOLUTIONS'}
        heading3 = {'ARE DESIGNED FOR ADVANCED PRACTICE:'}
        bullet1 = {'Skilled Nursing Facility Directors and Managers'}
        bullet2 = {'Assisted Living Community Administrators and Supervisors'}
        bullet3={'Long-Term Care Facility Leaders'}
        bullet5={"Rehabilitation Center Directors"}
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
            description1 ={'Lower turnover rates and improved staff retention'}
            description2 ={'Reduced time-to-fill for open positions'}
            description3 = {'Improved patient outcomes and satisfaction'}
            description4 = {'●	More time to focus on core operations and initiatives'}/>
        <AboutusSnippet 
            description ={'EmpowerCare has been a leader in skilled nursing and assisted living staffing for over 18 years. Our commitment to excellence, personalized service, and innovation sets us apart as the go-to local partner for long-term care facilities.'}
            btn1 = {'CONTACT US'}
            btn2 = {'LEARN MORE'}
            />
        
        {/* <JoiningForm heading={"Ready to elevate your facility's care quality and enhance residents' lives?   "} description = {"Contact EmpowerCare today for a complimentary consultation and let us find the perfect nursing professionals for your organization."}/> */}
        <CareerSlider/>
        <Blog/>
        <FaqAccordian 
        faq={"Frequently Asked Question"}
        faq_head1 ={'HHow does your agency support skilled nursing and assisted living facilities with staffing needs?'}
            faq_desc1 ={"Our 'Nursing Agencies' offer comprehensive 'Skilled Nursing Staffing Solutions' and 'Assisted Living Staffing Services', ensuring facilities have access to 'CNA Agencies', 'LPN Agencies', and 'RN Per Diem Agency' services 'Near me' and 'Local'. Whether it's for 'Long-Term Care Staffing' or 'Nursing Home Staffing', we connect you with qualified professionals."}
            faq_head2 = {"Can you provide nursing staff for specific care requirements in my facility? "}
            faq_desc2 ={"Yes, our 'Local Nursing Agencies for Long-Term Care' specialize in tailored staffing, including 'RN Per Diem Staffing for Skilled Nursing Facilities' and 'LPN Staffing for Assisted Living Near Me'. Our 'CNA Staffing Agencies for Nursing Homes' are also equipped to meet the diverse needs of patients and residents."}
            faq_head3 ={"What types of nursing staffing contracts do you offer?"}
            faq_desc3 ={"We provide flexible staffing solutions to meet every facility's needs, including 'Temp-to-Hire Nursing Staff for Rehabilitation Centers', 'Permanent Placement for Long-Term Care Roles', and 'Contract Nursing Solutions for Skilled Nursing'. Our aim is to ensure continuous, quality care across all care settings."}
faq_head4 ={"How do you ensure the quality of nursing staff provided by your agency?"}
         faq_desc4 ={"Our rigorous vetting process ensures only skilled and compassionate nursing professionals are placed in your facility. We focus on quality in every 'Skilled Nursing Staffing', 'Assisted Living Staffing', and 'Nursing Home Staffing' contract, ensuring our staff meet the high standards required for patient and resident care."}
         />
        <Userslider
        link={"/facilities/request-staffing"}
        reviewbtn={"Request Staffing"}
        />
        <Footer/>
    </>
    )
}
export default Facilitiesskillednursing