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
import bannerImg from '../../Assets/mentalbnrimg.png';
import img from '../../Assets/staffing_banner.png'
import image from '../../Assets/staff.png'
import empowercareimg from '../../Assets/In the office-amico.png'
import storiesimg from '../../Assets/guaranty.png';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import job1 from '../../Assets/Group 234.png';
import job2 from '../../Assets/Group 235.png';
import job3 from '../../Assets/Group 236.png';
import { Link } from "react-router-dom"
const Facilitiesmentalhealth = () => {
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
        heading={'MENTAL​'}
        heading2={' HEALTH STAFFING'}
        description={'Elevate Mental Health Care with EmpowerCare Staffing'}
        span={'Transforming Mental Health Facilities with Top Talent'}
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
           description1={"EmpowerCare is your trusted partner for mental health staffing solutions. We understand the unique challenges mental health facilities face in providing exceptional patient care.\
           Our extensive network of pre-screened and highly trained Mental Health Techs, Psychologists, mental health counselor, and Licensed Clinical Social Workers ensures you have the right professionals to elevate your facility's performance. "} 

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
           heading={' behavioral health staffing services'}
            option1= {'Travel Mental Health Professionals'}
            option2= {'	Per Diem Mental Health Staffing'}
            option5= {'Temp-to-Hire Mental Health Positions'}
            option4= {'	Permanent Placement for Mental Health Roles'}
            option3={'	Local Contract Mental Health Jobs'}
            />
         <FacilityOperations
            subheading={'Limited-Time Offer'}
            whiteheading1={'Get Top Behavioral Health Talent To Elevate Your '}
         
            blackheading={"Facility's Care"}
            maindescription = {'EmpowerCare helps mental health centers and group home directors solve staffing shortages. We make sure your facility provides exceptional care without the stress of finding staff.'}
            option1={'Quality Match Guarantee'}
            description1={"Get access to our best mental health, direct care professionals and support staff. We check each one to make sure they fit your facility's needs perfectly."}
            option2={'Fast Placement'}
            description2={'We fill your open positions with mental health professionals  fast. You get the best match quickly, without losing quality.'}
            option3={'Flexible Staffing'}
            description3= {"We have per diem, temp-to-hire, and permanent staff. Our program changes with your facility's needs to keep things running smoothly."}
            option4= {'Special Discounts'}
            description4= {'For a short time, get special discounts on our staffing services. Pay less for more placements and get loyalty bonuses. Get the best value and the best service.'}
            option5={"Risk-Free Trial"}
            description5={"Try our service with no risk. If you're not happy with the placements, we'll find more people for free until you are."}
            bullet1= {'Easy to Start :'}
            bulletdescription1= {"It's easy to start working with us. Contact us now for a free consultation. "} 
            bullet2={'Act Now :'}
            bulletdescription2= {'This Offer Ends Soon! Improve your patient care with the best healthcare workers.'}
           endtext = {"Reach out today and set a new standard for exceptional student health with EmpowerCare's help."}
           btn ={<div className="bottom-btns-row">   
            <Link to="/post-job" className="signup-btn">
                <span>Post Job</span>
            </Link>
        </div>} />
        
        <Spotlights
            headingclr ={'Spotlights'}
            headingblack ={'Imagination'}
            
            description ={'Imagine your mental health facility fully staffed with compassionate, skilled professionals dedicated to providing the highest level of patient care. With EmpowerCare, you can focus on improving lives and making a difference in your community.'}
            btn1 ={'Contact Us'}
            btn2 = {'LEARN MORE'} 
            
            />
        <SolutionsDesign
        img = {image}
        meta = {'ABOUT US'}
        heading1 = {'OUR MENTAL HEALTH, '}
        heading2 = {'STAFFING SOLUTIONS'}
        heading3 = {'ARE DESIGNED FOR:'}
        bullet1 = {'Mental Health Facility Directors and Managers'}
        bullet2 = {'Behavioral Health Clinics and Psychiatric Hospitals'}
        bullet3={'Residential Treatment Centers and Outpatient Programs'}

     
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
            description3 = {'Increased patient satisfaction and outcomes'}
            description4 = {'●	More time to focus on core operations and initiatives'}/>
        <AboutusSnippet 
            description ={'EmpowerCare has been a leader in mental health staffing for over 18 years. Our commitment to excellence, personalized service, and innovation sets us apart as the go-to partner for mental health facilities nationwide.'}
            btn1 = {'CONTACT US'}
            btn2 = {'LEARN MORE'}
            />
        
        {/* <JoiningForm heading={"Ready to elevate your mental health facility's performance? "} description = {"Contact EmpowerCare today for a complimentary consultation and let us find the perfect mental health professionals for your team."}/> */}
        <CareerSlider/>
        <Blog/>
        <FaqAccordian 
        faq={"Frequently Asked Question"}
        faq_head1 ={'How does EmpowerCare support staffing for mental health facilities?'}
            faq_desc1 ={"EmpowerCare specializes in 'Mental Health Facility Staffing', 'Psychiatric Hospital Staffing', 'Residential Treatment Center Staffing', and 'Outpatient Mental Health Program' staffing solutions. We provide highly trained 'Mental Health Counselors', 'Registered Nurses', and 'Licensed Clinical Social Workers', ensuring your facility is equipped with professionals skilled in 'Treatment Planning' for 'Mental Health Issues'."}
            faq_head2 = {'What types of mental health professionals can EmpowerCare provide?'}
            faq_desc2 ={"Our network includes a wide range of mental health professionals, from 'Mental Health Techs' and 'Psychologists' to individuals with a 'Degree in Social Work' and 'Independent Clinical Social Workers'. Our staffing solutions are designed to meet the diverse needs of 'Mental Health Clinics' and other healthcare organizations focusing on 'Mental Illness'."}
            faq_head3 ={"How does EmpowerCare ensure the quality of its mental health staffing services?"}
            faq_desc3 ={"With over 18 years of 'Mental Health Expertise', EmpowerCare follows a rigorous screening process to ensure all staff, including those for 'Health and Human Services', meet high standards. Our 'CPR Approach' – Convenient, Personable, Responsive – guarantees a seamless and effective staffing experience for 'Mental Health Facility Directors and Managers'."}

            faq_head4 ={"Can EmpowerCare provide staffing solutions for specialized mental health roles?"}
            faq_desc4={"Yes, EmpowerCare offers 'Travel Mental Health Professionals', 'Per Diem Mental Health Staffing', 'Temp-to-Hire Mental Health Positions', and 'Permanent Placement for Mental Health Roles'. We also specialize in 'Local Contract Mental Health Jobs', providing staffing for specialized areas such as 'Anesthesiologist Staffing for Surgical Centers' and ensuring a comprehensive approach to mental health care."}

            />
        <Userslider
        link={"/facilities/request-staffing"}
        
        reviewbtn={"Request Staffing"}
        />
        <Footer/>
    </>
    )
}
export default Facilitiesmentalhealth