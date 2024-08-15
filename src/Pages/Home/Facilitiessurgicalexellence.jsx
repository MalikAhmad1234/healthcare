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
import bannerImg from '../../Assets/surgicalbnrimg.png';
import img from '../../Assets/staffing_banner.png'
import image from '../../Assets/staff.png'
import empowercareimg from '../../Assets/In the office-amico.png'
import storiesimg from '../../Assets/guaranty.png';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import job1 from '../../Assets/Group 234.png';
import job2 from '../../Assets/Group 235.png';
import job3 from '../../Assets/Group 236.png';
import { Link } from "react-router-dom"
const Facilitiessurgicalexellence = () => {
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
        heading={'SURGICAL EXCELLENCE​'}
        heading2={'WITH EMPOWERCARE'}
        description={'Empowering Surgical Centres with Top-Tier Talent​'}
        span={'EmpowerCare: Your Partner for Surgical Success​'}
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
           description1={"EmpowerCare is your trusted partner for surgical staffing solutions. We understand the unique challenges surgical centers face in maintaining a skilled, reliable workforce to deliver high-quality patient care. Our extensive network of pre-screened, highly experienced surgical professionals, including RNs, surgical techs, anesthesiologists, and CRNAs, ensures you have the right talent to drive your center's success. "} 

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
           greenheading ={'OFFERS A WIDE RANGE ​'}
           heading={'OF CORPORATE HEALTH SOLUTIONS'}
            option1= {'	Travel Surgical Nurses and Techs'}
            option2= {'Per Diem Surgical Staff'}
            option5= {'Local Contract Surgical Staffing Solutions'}
            option4= {'Permanent Placement for Surgical Roles'}
            option3={'Temp-to-Hire Surgical Professionals'}
            />
         <FacilityOperations
            subheading={'Limited-Time Offer'}
            whiteheading1={'Get Top Surgical Talent to Enhance  '}
         
            blackheading={'Patient Care'}
            maindescription = {'EmpowerCare helps surgical centers solve staffing shortages. We ensure your center provides exceptional care without the stress of finding staff.'}
            option1={'Quality Match Guarantee'}
            description1={"Access our best surgical nurses, techs, and professionals. We ensure they fit your center's needs perfectly."}
            option2={'Fast Placement'}
            description2={'We fill your open surgical positions with great people fast, without losing quality.'}
            option3={'Flexible Staffing'}
            description3= {"We offer temporary, per diem, travel, and permanent surgical staffing solutions to keep things running smoothly."}
            option4= {'Special Discounts'}
            description4= {'Get special discounts on our surgical staffing services. Pay less for high-volume needs and get priority access to our most experienced professionals.'}
            option5={"Risk-Free Trial"}
            description5={"Try our service with no risk. If you're not happy with the placements, we'll find more people for free until you are."}
            bullet1= {'Easy to Start :'}
            bulletdescription1= {"It's easy to start working with us. Contact us now for a free consultation. "} 
            bullet2={'Act Now :'}
            bulletdescription2= {'This Offer Ends Soon! Improve your patient care with the best healthcare workers.'}
           endtext = {"Reach out today and set a new standard for great patient care with EmpowerCare's help."}
           btn ={<div className="bottom-btns-row">   
            <Link to="/post-job" className="signup-btn">
                <span>Post Job</span>
            </Link>
        </div>} />
        
        <Spotlights
            headingclr ={'OUR '}
            headingblack ={'FOCUS​'}
            
            description ={'Imagine your surgical center fully staffed with skilled, dedicated professionals who are committed to delivering exceptional patient care. With EmpowerCare, you can focus on advancing surgical excellence while we handle your staffing needs.'}
            btn1 ={'Contact Us'}
            btn2 = {'LEARN MORE'} 
            
            />
        <SolutionsDesign
        img = {image}
        meta = {'ABOUT US'}
        heading1 = {'OUR SURGICAL '}
        heading2 = {'STAFFING SOLUTIONS'}
        heading3 = {'ARE DESIGNED FOR:'}
        bullet1 = {'Surgical Center Administrators and Managers'}
        bullet2 = {'Operating Room Directors and Supervisors'}
        bullet3 = {'Perioperative Services Directors'}
        bullet4 = {'Ambulatory Surgery Center Leaders'}
     
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
            description4 = {'More time to focus on core surgical operations'}/>
        <AboutusSnippet 
            description ={'EmpowerCare has been a leader in surgical staffing for over 18 years. Our commitment to excellence, personalized service, and innovation sets us apart as the go-to partner for surgical centers nationwide.'}
            btn1 = {'CONTACT US'}
            btn2 = {'LEARN MORE'}
            />
        
        {/* <JoiningForm heading={"Ready to elevate your surgical center's performance and patient care?"} description = {" Contact EmpowerCare today for a complimentary consultation and let us find the perfect surgical professionals for your team. "}/> */}
        <CareerSlider/>
        <Blog/>
        <FaqAccordian 
        faq={"Frequently Asked Question"}
        faq_head1 ={' How does EmpowerCare address the staffing needs of surgical centers?'}
            faq_desc1 ={"EmpowerCare specializes in 'Surgical Staffing Solutions' and 'Surgical Staffing Agencies', offering a comprehensive range of services from 'Surgical Tech Staffing' to 'Surgical Nurse Staffing'. Our 'Operating Room Staffing' and 'Perioperative Staffing' solutions are designed to meet the high demands of 'Ambulatory Surgery Center Staffing', ensuring your center has access to top-tier surgical professionals."}
            faq_head2 = {'Can EmpowerCare provide staffing for specialized surgical roles?'}
            faq_desc2 ={"Yes, we provide 'Staffing Services for Surgical Centers', including 'Travel Surgical Nurses and Techs', 'Per Diem Staffing for Surgery Centers', and 'CRNA Staffing for Ambulatory Surgery Centers'. Our 'Surgical RN Staffing Solutions' and 'Experienced Surgical Techs for Operating Rooms' ensure your surgical team is equipped with skilled professionals ready to deliver exceptional patient care."}
            faq_head3 ={"What types of staffing contracts does EmpowerCare offer for surgical centers?"}
            faq_desc3 ={"We offer flexible staffing arrangements to suit your center's needs, including 'Temporary-to-Hire Corporate Health Professionals', 'Permanent Placement for Surgical Roles', and 'Local Contract Surgical Staffing'. Whether it's 'Anesthesiologist Staffing for Surgical Centers' or 'Surgical First Assist Staffing Services', we're here to provide the right staffing solutions."}

            faq_head4 ={"How does EmpowerCare ensure quality in its surgical staffing services?"}
            faq_desc4={"Our 'Surgical Staffing Agencies' and 'Surgical Tech Staffing Agencies' are dedicated to providing 'Surgical Center Staffing Solutions' with a 'Quality Match Guarantee'. We meticulously screen all surgical professionals to ensure they are 'Certified Surgical Technologists (CST)' and meet the 'Board of Surgical Technology and Surgical Assisting' standards, bringing years of experience and expertise to your surgical team."}

            />
        <Userslider
        link={"/facilities/request-staffing"}
        reviewbtn={"Request Staffing"}
        />
        <Footer/>
    </>
    )
}
export default Facilitiessurgicalexellence