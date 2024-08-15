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
import bannerImg from '../../Assets/directbnrimg.png';
import img from '../../Assets/staffing_banner.png'
import image from '../../Assets/staff.png'
import empowercareimg from '../../Assets/In the office-amico.png'
import storiesimg from '../../Assets/guaranty.png';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import job1 from '../../Assets/Group 234.png';
import job2 from '../../Assets/Group 235.png';
import job3 from '../../Assets/Group 236.png';
import { Link } from "react-router-dom"
const Facilitiesellevatedirectcare = () => {
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
        heading={'DIRECT CARE ​'}
        heading2={'SOLUTIONS'}
        description={'Elevate Direct Care with EmpowerCare Professionals'}
        span={'Delivering Exceptional Care with Skilled Direct Care Staff'}
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
           description1={"EmpowerCare is your dedicated partner for direct care staffing services. We understand the vital role that compassionate, skilled direct care professionals play in delivering high-quality, person-centered care. Our extensive network of pre-screened, highly trained Certified Nursing Assistants (CNAs), Direct Care Support Professionals, and Personal Care Assistants ensures you have the right talent to provide exceptional care and support to those you serve.  "}
           
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
              {/* <StaffingServices 
           greenheading ={'offers range of'}
           heading={' behavioral health staffing services'}
            option1= {'Travel Mental Health Professionals'}
            option2= {'	Per Diem Mental Health Staffing'}
            option5= {'Temp-to-Hire Mental Health Positions'}
            option4= {'	Permanent Placement for Mental Health Roles'}
            option3={'	Local Contract Mental Health Jobs'}
            /> */}
         <FacilityOperations
            subheading={'Limited-Time Offer'}
            whiteheading1={'Get Top Talent To Enhance '}
         
            blackheading={"Patient Care"}
            maindescription = {'EmpowerCare solves staffing shortages for mental health facilities. We ensure exceptional care without the stress of finding staff.'}
            option1={'Quality Match Guarantee'}
            description1={"Access our best mental health techs, psychologists, and licensed clinical social workers. We ensure a perfect fit for your facility's needs."}
            option2={'Fast Placement'}
            description2={'We quickly fill your open positions with great people, without compromising quality.'}
            option3={'Flexible Staffing'}
            description3= {"We provide temporary, temp-to-hire, permanent, and contract staffing solutions to meet your ongoing needs"}
            option4= {'Special Discounts'}
            description4= {'Get discounted rates for high-volume, ongoing staffing needs and priority access to our most experienced professionals.'}
            bullet1= {'Easy to Start :'}
            bulletdescription1= {"Contact us now for a free consultation. Our team will create a custom direct care staffing plan for your facility."} 
            bullet2={'Act Now :'}
            bulletdescription2= {'To get this special offer, contact us in {next 5 hours}'}
           endtext = {"Reach out today and set a new standard for exceptional mental health care with EmpowerCare's help."}
           btn ={<div className="bottom-btns-row">   
            <Link to="/post-job" className="signup-btn">
                <span>Post Job</span>
            </Link>
        </div>} />
        
        <Spotlights
            headingclr ={'Our'}
            headingblack ={'Focus'}
            
            description ={'Imagine your direct care staff delivering compassionate, person-centered support that enhances the lives of those you serve. With EmpowerCare, you can focus on providing exceptional care while we handle your staffing needs.'}
            btn1 ={'Contact Us'}
            btn2 = {'LEARN MORE'} 
            
            />
        <SolutionsDesign
        img = {image}
        meta = {'ABOUT US'}
        heading1 = {'OUR DIRECT CARE, '}
        heading2 = {'STAFFING SOLUTIONS'}
        heading3 = {'ARE DESIGNED FOR:'}
        bullet1 = {'Healthcare Facility Administrators and Directors'}
        bullet2 = {'Residential Program Managers and Supervisors'}
        bullet3={'Home Care Agency Owners and Coordinators'}
        bullet4={'Assisted Living Community Directors and Managers'}

     
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
            description ={'EmpowerCare has been a leader in direct care staffing for over 18 years. Our commitment to excellence, personalized service, and innovation sets us apart as the go-to partner for organizations seeking to elevate the quality of their direct care and support services'}
            btn1 = {'CONTACT US'}
            btn2 = {'LEARN MORE'}
            />
        
        {/* <JoiningForm heading={"Ready to enhance your direct care services with skilled, compassionate professionals? "} description = {"Contact EmpowerCare today for a complimentary consultation and let us find the perfect direct care staff for your organization"}/> */}
        <CareerSlider/>
        <Blog/>
        <FaqAccordian 
        faq={"Frequently Asked Question"}
        faq_head1 ={'What direct care staffing services does EmpowerCare provide?'}
            faq_desc1 ={"EmpowerCare offers comprehensive 'Direct Care Staffing Services' for healthcare facilities, including 'CNA Staffing' and 'Personal Care Assistant Staffing'. Our 'Direct Care Professionals' are equipped to meet the diverse needs of 'Residential Direct Care Programs' and 'Long-Term Care Facilities' across the United States."}
            faq_head2 = {"How can EmpowerCare's direct care staff enhance our patient care?"}
            faq_desc2 ={"Our 'Skilled Direct Care Professionals' are trained to provide 'Compassionate Care Staffing' solutions, ensuring high-quality support for 'Activities of Daily Living'. They serve as an integral part of care teams in 'Nursing Homes', 'Home Health Agencies', and 'Assisted Living Facilities', contributing to improved patient outcomes and satisfaction."}
            faq_head3 ={"What makes EmpowerCare's direct care staffing solutions stand out?"}
            faq_desc3 ={"EmpowerCare's 'Direct Care Staffing Solutions for Healthcare Facilities' stand out due to our person-centered approach and 'High-Quality Care Worker' selection. We provide 'Experienced CNAs for Rehabilitation Centers' and 'Reliable Direct Care Staffing for Group Homes', ensuring each 'Staff Member' possesses the necessary 'Interpersonal Skills' and training."}

            faq_head4 ={"How does EmpowerCare ensure a good fit between direct care staff and healthcare organizations?"}
            faq_desc4={"We pride ourselves on 'Person-Centered Direct Care Staffing Solutions', matching 'Experienced Leaders' and 'Healthcare Workers' with the right 'Leadership Role'. Our 'Job Description' alignment process and 'Training Programs' ensure each 'Healthcare Professional' integrates smoothly with your 'Human Service' team."}

            />
        <Userslider
        link={"/facilities/request-staffing"}
        reviewbtn="Request Staffing"
        />
        <Footer/>
    </>
    )
}
export default Facilitiesellevatedirectcare