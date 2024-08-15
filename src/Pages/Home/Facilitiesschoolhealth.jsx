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
import { Link } from "react-router-dom"
const Facilitiesschoolhealth = () => {
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
        heading={'SCHOOL HEALTHCARE'}
        heading2={'STAFFING'}
        description={'Elevate Student Health with our School Healthcare Staffing'}
        span={'Empowering Schools with Exceptional Healthcare Professionals'}
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
           description1={"EmpowerCare is your trusted partner for healthcare staffing solutions tailored to educational institutions, colleges, and universities. We understand the critical role that student health plays in academic success and campus well-being. Our extensive network of pre-screened, highly skilled healthcare professionals, including nurses, health screeners, CNAs, and non-clinical staff, ensures you have the right talent to create a thriving educational community. "} 

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
           heading={'educational healthcare staffing services'}
            option1= {'Temporary-to-Hire Campus Health Professionals'}
            option2= {'Permanent Placement for College Health Center Roles'}
            option5= {'Contract Staffing for University Wellness Programs'}
            option4= {'On-campus Clinic Staffing Solutions'}
            option3={'Student Health Education and Outreach Specialists'}
            />
         <FacilityOperations
            subheading={'Limited-Time Offer'}
            whiteheading1={'Get Top Talent to Enhance  '}
         
            blackheading={'Student Health'}
            maindescription = {'EmpowerCare solves healthcare staffing shortages for educational institutions. We ensure exceptional health services without the stress of finding staff.'}
            option1={'Quality Match Guarantee'}
            description1={"Access our best school nurses, therapists, and healthcare professionals. We ensure a perfect fit for your institution's needs."}
            option2={'Fast Placement'}
            description2={'We quickly fill your open positions with great people, without compromising quality.'}
            option3={'Flexible Staffing'}
            description3= {": We provide temporary, temp-to-hire, permanent, and contract staffing solutions to meet your ongoing needs."}
            option4= {'Special Discounts'}
            description4= {': Get discounted rates for high-volume needs and priority access to our most experienced professionals.'}
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
            headingclr ={'Our'}
            headingblack ={'Focus'}
            
            description ={'Imagine your educational institution with a robust, proactive student health program staffed by dedicated professionals who are committed to promoting a culture of wellness. With EmpowerCare, you can focus on driving academic excellence while we handle your healthcare staffing needs.'}
            btn1 ={'Contact Us'}
            btn2 = {'LEARN MORE'} 
            
            />
        <SolutionsDesign
        img = {image}
        meta = {'ABOUT US'}
        heading1 = {'OUR EDUCATIONAL HEALTHCARE, '}
        heading2 = {'STAFFING SOLUTIONS'}
        heading3 = {'ARE DESIGNED FOR:'}
        bullet1 = {'College and University Health Center Directors'}
        bullet2 = {'Campus Wellness Program Coordinators'}
        bullet3 = {'Student Affairs and Services Leaders'}
        bullet4 = {'Deans of Health Sciences and Nursing Programs'}
     
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
            description3 = {'Increased student satisfaction and campus well-being'}
            description4 = {'More time to focus on core academic objectives'}/>
        <AboutusSnippet 
            description ={'EmpowerCare has been a leader in educational healthcare staffing for over 18 years. Our commitment to excellence, personalized service, and innovation sets us apart as the go-to partner for institutions seeking to optimize student health and well-being.'}
            btn1 = {'CONTACT US'}
            btn2 = {'LEARN MORE'}
            />
        
        {/* <JoiningForm heading={"Ready to elevate your campus health program and drive student success? "} description = {"Contact EmpowerCare today for a complimentary consultation and let us find the perfect professionals for your team."}/> */}
        <CareerSlider/>
        <Blog/>
        <FaqAccordian 
        faq={"Frequently Asked Question"}
        faq_head1 ={'How does EmpowerCare meet the healthcare staffing needs of educational institutions?'}
            faq_desc1 ={"EmpowerCare specializes in 'Educational Institutions Healthcare Staffing', providing tailored 'College Healthcare Staffing' and 'University Healthcare Staffing' solutions. We offer 'Campus Health Staffing' services that include 'Student Health Staffing', 'College Wellness Program Staffing', and 'University Health Clinic Staffing', ensuring students have access to comprehensive healthcare services."}
            faq_head2 = {'Can EmpowerCare provide staffing for specialized school health programs?'}
            faq_desc2 ={"Our staffing solutions encompass a wide range of professionals including 'Nurse Staffing for University Health Services', 'CNA Staffing for College Health Clinics', and 'Mental Health Counselor Staffing for Student Services'. We also specialize in 'Occupational Health Staffing for Campus Employees', supporting the health and well-being of both students and staff."}
            faq_head3 ={"Can EmpowerCare support temporary and permanent healthcare staffing needs for campuses?"}
            faq_desc3 ={"Yes, EmpowerCare offers 'Temporary-to-Hire Campus Health Professionals' and 'Permanent Placement for University Health Roles'. Our 'Contract Staffing for College Wellness Programs' and 'On-campus Healthcare Clinic Staffing' services provide flexible solutions to meet the dynamic needs of educational healthcare facilities."}

            faq_head4 ={"What sets EmpowerCare apart in staffing healthcare roles for educational institutions?"}
            faq_desc4={"Our 'Educational Healthcare Staffing Solutions' are designed to address the unique challenges of 'Healthcare Staffing for Educational Institutions'. With over 18 years of expertise, we ensure a 'Quality Match Guarantee' for all roles, from 'Temporary Executive Staffing for Healthcare Transitions' in school clinics to 'Permanent Placement for School Health Roles', making us a leader in 'Educational Institutions Healthcare Staffing'."}

            />
        <Userslider
        link={"/facilities/request-staffing"}
        reviewbtn={"Request Staffing"}
        />
        <Footer/>
    </>
    )
}
export default Facilitiesschoolhealth