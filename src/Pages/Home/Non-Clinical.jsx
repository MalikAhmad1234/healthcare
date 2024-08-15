import React, { useState } from 'react';
import FacilitiesApproach from "../../Components/FacilitiesApproach/FacilitiesApproach"
import Banner10 from "../../Components/Banner10/Banner10"
import Guaranty from "../../Components/Facilities/TruePartner/Guaranty"
import TrustedPartner from "../../Components/Facilities/TruePartner/TrustedPartner"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
// import Healthcare from '../../Components/Healthcare/Healthcare';
import Footer from "../../Components/Footer/Footer"
import HeaderWhite from "../../Components/HeaderWhite2/HeaderWhite2"
import Toptalent from "../../Components/Toptalent/Toptalent"
import Trusted from "../../Components/FacilitiesTrusted/FacilitiesTrusted"
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
import bannerImg from '../../Assets/staffingSolution.png';
import img from '../../Assets/staffing_banner.png'
import image from '../../Assets/staff.png'
import empowercareimg from '../../Assets/In the office-amico.png'
import storiesimg from '../../Assets/guarantyImg.jpg';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import job1 from '../../Assets/Group 234.png';
import job2 from '../../Assets/Group 235.png';
import job3 from '../../Assets/Group 236.png';
import { Link } from 'react-router-dom';

const NonClinical = () => {
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-190px',
        backgroundColor: '#EBE0D3'
    };
    return (
        <>
            <HeaderWhite
                logoImg={logow}
            />
            <Banner10
                bannerStyles={bannerStyles}
                bannerImg={bannerImg}
                heading={'NON-CLINICAL​'}
                heading2={' HEALTHCARE STAFFING'}
                description={'Enhancing Your Facilities Efficiency with Skilled Non-Clincal Professionals​'}
                span={'EmpowerCare is You Reliable Partner for Non-Clincal Staffing Solutions​'}

                bnrbtn={"Request Staffing"}
            />
            <FacilitiesTrusted/>
            <TrustedPartner
                simpleButton={false}
                anchor={false}
                button={true}
                img={empowercareimg}
                meta={'Who We Are'}
                heading1={'EMPOWERCARE:'}
                heading2={'YOUR TRUSTED'}
                heading3={'PARTNER​'}
                description1={'EmpowerCare is your trusted partner for non-clinical staffing services. We understand the crucial role that skilled non-clinical professionals play in ensuring the smooth operation of your healthcare facility.'}
                description2={'Our extensive network of pre-screened, highly trained sitters, compassionate professionals, receptionists, administrative staff, and experienced nurses and CNAs for non-clinical roles ensures you have the right talent to support your facility operational efficiency and patient experience.'}

                btn={<div className="sec-btns">
                    <Link to='/about/contactus' className="learn-btn">
                        <span>Contact Us</span>
                       
                    </Link>
                    
                </div>}
            />
            <FacilitiesApproach 
           
            heading1={'Ever Jobs Helps The World'}
            description1={''}
            heading2={'Finding the Perfect Match Made Easy! Dynamic Squads '}
            description2 = {''}
            heading3={'Seamless Pledge: Hassle-free staffing! Guaranteed  '}
            description3 = {''}
            heading4={'Healthcare Expertise'}
            description4 = {'18+ years of industry experience'}
            heading5={'Rapid, ideal candidate matches, reduced time-to-hire'}
            description5 = {'Empower Your Facility with Top Talent, Effortlessly'}

            // link1= {'/professional/Professionalhelpstheworld'}
            // link2= {'/resources'}
            // link3= {'/facilities'}
            // link4= {'#'}
            // link5= {'#'}
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
                btn1={'CONTACT US'}
                btn2={'LEARN MORE'}
                description={'Your satisfaction is our priority. If you are not happy with a placement, we will find a new one for you at no extra charge. We make sure your healthcare staffing needs are met carefully.'}
            />
            <StaffingServices 
           greenheading ={'offers comprehensive'}
           heading={'non-clinical staffing services'}
            option1= {'Sitters and Compassionate Professionals for Patient Support'}
            option2= {'Receptionists and Administrative Staff for Front Office Operations'}
            option3= {'Experienced Nurses and CNAs for Non-Clinical Roles'}
            option4= {'Medical Billing and Coding Specialists for Revenue Cycle Management'}
            option5= {'Medical Scribes for Electronic Health Record Documentation'}
            option6= {'Patient Navigators and Care Coordinators for Care Continuity'}/>
           
            <FacilityOperations
            subheading={'Limited-Time Offer'}
            whiteheading1={'Get Top Talent to '}
            whiteheading2={'Operations'}
            maindescription = {'EmpowerCare helps healthcare facilities solve non-clinical staffing shortages. We ensure your facility runs smoothly without the stress of finding staff.'}
            blackheading={'Enhance Facility '}
            option1={'Quality Match Guarantee'}
            description1={"Access our best sitters, receptionists, and non-clinical healthcare professionals. We ensure they fit your facility'Access our best sitters, receptionists, and non-clinical healthcare professionals. We ensure they fit your facility's needs perfectly."}
            option2={'Fast Placement'}
            description2={'We fill your open non-clinical positions with great people fast, without losing quality.'}
            option3={'Flexible Staffing'}
            description3= {'We offer temporary, temp-to-hire, permanent, and contract non-clinical staffing solutions to keep things running efficiently.'}
            option4= {'Special Discounts'}
            description4= {'Get special discounts on our non-clinical staffing services. Pay less for high-volume, ongoing needs and get priority access to our most experienced professionals.'}
            bullet1= {'Easy to Start:'}
            bulletdescription1= {'Contact us now for a free consultation.'} 
            bullet2={'Act Now :'}
            bulletdescription2= {'This Offer Ends Soon! To get this special offer, contact us before [specific deadline].'}
           endtext = {"Reach out today and set a new standard for exceptional healthcare facility operations with EmpowerCare's help."}
           btn ={<div className="bottom-btns-row">   
            <Link to="/post-job" className="signup-btn">
                <span>Post Job</span>
            </Link>
        </div>} />
           
            <Spotlights
            headingclr ={'Spotlights'}
            headingblack ={'Imagination'}
            
            description ={'Imagine your healthcare facility running seamlessly, with skilled non-clinical professionals ensuring efficient operations and exceptional patient experiences. With EmpowerCare, you can focus on delivering high-quality care while we handle your non-clinical staffing needs.'}
            btn1 ={'Contact Us'}
            btn2 = {'LEARN MORE'} 
            
            />
            <SolutionsDesign
                img={image}
                meta={'ABOUT US'}
                heading1={'OUR NON-CLINICAL '}
                heading2={'STAFFING SOLUTIONS'}
                heading3={'ARE DESIGNED FOR:'}
                bullet1={'HOSPITAL ADMINISTRATORS AND DEPARTMENT HEADS'}
                bullet2={'OUTPATIENT CLICNIC MANAGERS AND SUPERVISORS'}
                bullet3={'LONG TERM CARE FACILITY DIRECTORS'}
                bullet4={'BEHAVIORAL HEALTH CENTER ADMINISTRATORS'}            
                bullet5 ={'REHABILITATION FACILITY MANAGERS'}


              
                description1={''}
                description2={''}
                btn1={'SIGN UP'}
                btn2={'ABOUT US'}
            />
            <PartneringBenefits 
             heading1={"Skilled and Reliable"}
             heading2={"Time to Fill"}
             heading3={"Patient Satisfaction"}
             heading4={"High Quality Care"}
            description1 ={'Access to a wide pool of skilled, reliable non-clinical professionals'}
            description2 ={'Reduced time-to-fill for open positions'}
            description3 = {'Improved operational efficiency and patient satisfaction'}
            description4 = {'More time to focus on delivering high-quality care'}/>
            <AboutusSnippet 
            description ={'EmpowerCare has been a leader in non-clinical healthcare staffing for over 18 years. Our commitment to excellence, personalized service, and innovation sets us apart as the go-to partner for healthcare facilities seeking to streamline operations with skilled non-clinical professionals'}
            btn1 = {'CONTACT US'}
            btn2 = {'LEARN MORE'}
            />
            {/* <Trusted /> */}
            {/* <JoiningForm heading={"Ready to enhance your facility's efficiency with skilled non-clinical professionals? "} description = {" Contact EmpowerCare today for a complimentary consultation and let us find the perfect non-clinical staff for your organization."}
            
            /> */}
            <CareerSlider />
            <Blog />
            <FaqAccordian
            faq={"Frequently Asked Question"}
            faq_head1 ={'How does EmpowerCare assist healthcare facilities with non-clinical staffing needs?'}
            faq_desc1 ={"EmpowerCare specializes in 'Non-Clinical Staffing' and 'Non-Clinical Healthcare Staffing', offering a wide range of services including 'Sitter Staffing', 'Administrative Staff Staffing', and 'Medical Billing and Coding Specialist Staffing'. Our 'Non-Clinical Staffing Solutions for Healthcare Facilities' are designed to enhance operational efficiency and support patient care indirectly."}
            faq_head2 = {'Can EmpowerCare provide staffing for front office operations in healthcare facilities?'}
            faq_desc2 ={"Yes, we provide 'Receptionist Staffing' and 'Administrative Professional Staffing for Medical Offices', ensuring smooth front office operations. Our 'Non-Clinical Staffing Services' extend to 'Receptionist and Front Office Staffing for Healthcare', helping to create a welcoming and efficient environment for patients and visitors."}
            faq_head3 ={"What types of non-clinical roles can EmpowerCare staff in a healthcare setting?"}
            faq_desc3 ={"Our comprehensive staffing services cover a variety of non-clinical roles, including 'Experienced Nurses and CNAs for Non-Clinical Roles', 'Medical Scribe Staffing for EHR Documentation', and 'Patient Navigator Staffing for Care Coordination'. We also specialize in 'Behavioral Health Non-Clinical Staffing Services', supporting the broader healthcare team's efforts to provide quality patient care."}

            faq_head4 ={"How does EmpowerCare ensure the quality of its non-clinical healthcare professionals?"}
            faq_desc4 ={"We ensure the quality of our 'Non-Clinical Healthcare Professionals' through a rigorous screening process, focusing on 'Years of Experience', 'Continuing Education', and a thorough review of each candidate's 'Job Description' and capabilities. This approach allows us to match 'Healthcare Facilities' with 'Staff Members' who are not only skilled but also passionate about 'Supporting Patient' care indirectly."}
            />
            <Userslider 
            link={"/facilities/request-staffing"}
            reviewbtn="Request Staffing"
            />
            <Footer />
        </>
    )
}
export default NonClinical