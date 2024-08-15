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
import bannerImg from '../../Assets/healtsysbnrimg.png';
import img from '../../Assets/staffing_banner.png'
import image from '../../Assets/staff.png'
import empowercareimg from '../../Assets/In the office-amico.png'
import storiesimg from '../../Assets/guaranty.png';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg'; 
import job1 from '../../Assets/Group 234.png';
import job2 from '../../Assets/Group 235.png';
import job3 from '../../Assets/Group 236.png';
import { Link } from "react-router-dom"
const Facilitieshealthsystem = () => {
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
        heading={'HEALTHCARE'}
        heading2={'STAFFING BY US'}
        description={'EmpowerCare is You Reliable Partner for Non-Clinical Staffing Solutions​'}
        span={'Empowering Hospitals and Health Systems with Top Talent'}

        bnrbtn={"Request Staffing"}
        />
        <FacilitiesTrusted/>
        <TrustedPartner
         simpleButton={false}
         anchor={false}
          button={true}
          img={empowercareimg}
          meta={'Who We Are'} 
          heading1={'EMPOWERCARE IS YOUR '} 
          heading2={'TRUSTED'}
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
           greenheading ={'offers '}
           heading={' a wide range of healthcare staffing services designed to meet the diverse needs of hospital & health system CEOs, directors, nursing managers, and allied health department supervisors. Our solutions include'}
            option1= {'Travel Nurses and Allied Health Professionals'}
            option2= {'Per Diem Staffing for immediate needs'}
            option5= {'Temp-to-Hire Positions, blending flexibility with permanence'}
            option4= {'Permanent Placement for long-term staffing'}
            option3= {'Local Contract Healthcare Staffing Solutions'}

            />
         <FacilityOperations
            subheading={'Limited-Time Offer'}
            whiteheading1={"Get Top Talent to  "}
            whiteheading2={" Hospital's Care"}
            blackheading={"Boost Your "}
            maindescription = {'EmpowerCare helps hospital directors solve staffing shortages. We make sure your hospital gives great patient care without the stress of finding staff.'}
            option1={'Quality Match Guarantee'}
            description1={"Get access to our best direct care professionals and support staff. We check each one to make sure they fit your facility's needs perfectly."}
            option2={'Fast Placement'}
            description2={'We fill your open positions with great people fast. You get the best match quickly, without losing quality.'}
            option3={'Flexible Staffing'}
            description3= {"We have per diem, temp-to-hire, and permanent staff. Our program changes with your facility's needs to keep things running smoothly."}
            option4= {'Special Discounts'}
            description4= {'For a short time, get special discounts on our staffing services. Pay less for more placements and get loyalty bonuses. Get the best value and the best service.'}
            option5={'Risk-Free Trial'}
            description5={"Try our service with no risk. If you're not happy with the placements, we'll find more people for free until you are."}
            bullet2={'Act Now :'}
            bulletdescription2= {'This Offer Ends Soon! Improve your patient care with the best healthcare workers.'}
           endtext = {"Reach out today and set a new standard for great patient care with EmpowerCare's help."}
           btn ={<div className="bottom-btns-row">   
            <Link to="/post-job" className="signup-btn">
                <span>Post Job</span>
            </Link>
        </div>} />
        
        <Spotlights
            headingclr ={'Spotlights'}
            headingblack ={'Imagination'}
            
            description ={"Imagine your hospital fully staffed with skilled, compassionate professionals dedicated to providing the highest level of patient care. With EmpowerCare, you can focus on driving your facility's growth and success while we handle your staffing needs."}
            btn1 ={'Contact Us'}
            btn2 = {'LEARN MORE'} 
            
            />
        <SolutionsDesign
        img = {image}
        meta = {'ABOUT US'}
        heading1 = {'PARTNING US FOR YOUR  '}
        heading2 = {'HEALTH CARE STAFFING'}
        heading3 = {'NEEDS MEANS ENJOYING'}
        bullet1 = {'Reduced time-to-fill for open positions, enhancing operational efficiency'}
        bullet2 = {'Lower turnover rates and improved staff retention, fostering a stable work environment'}
        bullet3 = {	"Increased patient satisfaction and outcomes, reinforcing your hospital's reputation"}
        bullet4 = {'More time to focus on core operations and initiatives, driving growth and success'}
     
        description1 = {''}
        description2 = {''}
        // btn1 = {'SIGN UP'}
        btn2 = {'ABOUT US'}
        />
     <PartneringBenefits 
     heading1={"Turnover Rates"}
     heading2={"Time To Fill"}
     heading3={"Client Satisfaction"}
     heading4={"More Time to Focus"}
            description1 ={'Lower turnover rates and improved staff retention'}
            description2 ={'Reduced time-to-fill for open positions'}
            description3 = {'Increased client satisfaction and outcomes'}
            description4 = {'More time to focus on core operations and initiatives'}/>
        <AboutusSnippet 
            description ={'EmpowerCare has been a leader in healthcare staffing for over 18 years. Our commitment to excellence, personalized service, and innovation sets us apart as the go-to partner for hospitals and health systems. '}
            btn1 = {'CONTACT US'}
            btn2 = {'LEARN MORE'}
            />
{/*         
        <JoiningForm heading ={"Ready to optimize your hospital's staffing and elevate patient care? "} description = {"Contact EmpowerCare today for a complimentary consultation and let us find the perfect healthcare professionals for your facility."}/> */}
        <CareerSlider/>
        <Blog/>
        <FaqAccordian 
        faq={"FREQUENTLY Asked Question"}
        faq_head1 ={'How does EmpowerCare ensure high-quality healthcare staffing for hospitals and health systems?'}
            faq_desc1 ={"EmpowerCare stands apart as a leading nursing agency and healthcare staffing agency by leveraging over 18 years of industry experience to connect hospitals and health systems with top-tier nursing staff and allied health professionals.\
            Our comprehensive screening process involves pre-screening every healthcare professional, from CNAs to nurse practitioners, ensuring they not only meet but exceed the specific needs of each healthcare organization.\
            With a commitment to excellence and a personalized service approach, we guarantee to fill positions with skilled medical professionals who are ready to contribute to your healthcare team's success, enhancing patient care quality.\
            "}
            faq_head2 = {' What types of healthcare staffing solutions does EmpowerCare offer to address the staffing needs of hospitals?'}
            faq_desc2={"EmpowerCare offers a wide spectrum of healthcare staffing solutions to meet the diverse needs of hospital staffing and health system staffing. Our services include providing temporary nursing staff for hospitals, per diem nurses for health systems, and travel nurses for hospitals facing short-term staffing gaps.\
            For facilities looking to test the waters before making a long-term commitment, we offer temp-to-hire healthcare professionals. Additionally, our local contract healthcare staffing and permanent placement services are perfect for healthcare roles requiring consistent, long-term engagement.\
            Whether you're a nursing director looking for allied health staffing or a hospital CEO in need of comprehensive hospital staffing solutions, EmpowerCare tailors our services to keep your operations running smoothly and efficiently."}
            
            faq_head3 ={" Can EmpowerCare assist with specialized healthcare staffing needs, such as surgical tech staffing for surgery centers or medical assistant staffing for clinics?"}
            faq_desc3 ={"EmpowerCare is adept at fulfilling specialized healthcare staffing needs across various settings, including surgical tech staffing for surgery centers and medical assistant staffing for clinics.\
            Our robust database of pre-screened healthcare candidates allows us to swiftly match skilled professionals, including part-time medical professionals and full-time healthcare team members, with specific roles in educational institutions healthcare jobs, community health centers, and skilled nursing jobs, among others.\
            Our flexible staffing solutions ensure that whether you're looking for direct care agencies, CNA agencies, or NP agencies, EmpowerCare has the resources and expertise to meet your unique staffing requirements, ensuring optimal patient outcomes and enhanced care delivery.\
            "}

           

            />
        <Userslider
        link={"/facilities/request-staffing"}
        reviewbtn={"Request Staffing"}
        />
        <Footer/>
    </>
    )
}
export default Facilitieshealthsystem