import Banner1 from "../../Components/Banner1/Banner1"
import Footer from "../../Components/Footer/Footer"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import bannerImg from '../../Assets/unsung2.png'
import img from '../../Assets/unsung1.png'
import Stories from "../../Components/Stories/Stories"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Initiative from "../../Components/Initiative/Initiative"
import ShiftChampions from "../../Components/ShiftChampions/ShiftChampions"
import Benefits from "../../Components/Benefits/Benefits"
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
const Professionalperfectmatch=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-295px',
        backgroundColor: '#EBE0D3'
    };
    return(<>
        <HeaderWhite
              logoImg={logow}
              />
        <Banner1
        heading={'FINDING THE PERFECT MATCH '} 
        description={'FINDING THE PERFECT MATCH MADE EASY! DYNAMIC SQUADS'}
        meta={'EmpowerCare’s Dynamic Squads aren’t just teams; they’re the future of personalized, responsive healthcare staffing, redefining convenience in every match.'}
        bannerImg={bannerImg}
        styles={bannerStyles}

        bnrbtn={"Quick Apply"}
        />
        <Trusted/>
        <ShiftChampions
           head1={"Super Easy to Understand"}
           head2={" The Possibilities Await"}
           head3={" Convenience"}
           head4={" and Support "}
    
           desc1={"We offer development programs focused on skill enhancement, keeping you at the forefront of the healthcare industry."}
           desc2={"Tailored learning experiences, real-world applications, and hands-on training prepare you for the challenges of modern healthcare."}
           desc3={"We empower you to propel yourself to the top of your profession"}
           desc4={"Opening doors to new opportunities and higher levels of success."}
    
        />
        <Initiative
        heading={'UP YOUR SKILLS GAME, IT’S EASY'}
        heading1={'●   Rewards and Prizes'}
        heading2={'●   Stay Great at Your Job'}
        heading3={'●  Constant Support'}
        heading4={'●  We Highlight Your Work'}
        description1={'Flexible learning options allow you to advance your career at a pace that suits your lifestyle, ensuring a convenient and personalized experience'}
        description2={'Access to a wide range of healthcare staffing solutions, from per diem nursing agencies to allied health jobs'}
        description3={'Empowers you to find the perfect fit for your career goals.'}
        description4={'Our dedicated team provides guidance, resources, and opportunities to help you excel in your healthcare career.'}
        />
        <Benefits/> 
        <FaqAccordian
        faq={"EMPOWERCARE'S DYNAMIC SQUADS"}
        faq_head1={"How do EmpowerCare’s Dynamic Squads offer a personalized experience to healthcare staffing?"}
        faq_desc1={"EmpowerCare’s Dynamic Squads revolutionize healthcare staffing by ensuring every healthcare professional, from registered nurses to allied health professionals, experiences personalization at its core.Whether you're seeking nursing jobs, CNA jobs, LPN jobs, travel nursing jobs, direct care jobs, or allied health positions across the United States, our approach is tailored to meet your unique needs in real time. Our commitment to delivering personalized customer service is unmatched, making us more than a staffing company—we're your partner in shaping positive experiences and ensuring patient care teams are at their best."}

        faq_head2={"What sets EmpowerCare apart for employers and healthcare facilities seeking top-quality healthcare workers?"}
        faq_desc2={"For directors and employers navigating the complexities of healthcare staffing, including short-term needs or specific skilled roles, EmpowerCare stands out.Our unique teams of healthcare workers build strong relationships and provide high-quality care. Unlike other agencies, our dynamic squads are ready to join care teams seamlessly.Our real-time response to staffing needs, united with our dedication to customer satisfaction and deep understanding of healthcare systems, positions us as a leader in healthcare staffing solutions in the United States. We ensure that patients receive the best medical care by connecting healthcare facilities with the best health professionals in the field."}

        faq_head3={"Why should healthcare professionals and organizations choose EmpowerCare for their staffing needs?"}
        faq_desc3={"Choosing EmpowerCare means opting for a staffing solution that truly understands the nuanced demands of the healthcare industry.Our Dynamic Squads not only provide a responsive and convenient staffing service but also emphasize personalizing experiences for both healthcare professionals and facilities.This approach focuses on people, like Dr. Bon Ku, in healthcare. It helps us go beyond what healthcare facilities and workers expect, making sure we meet their needs.We focus on patients and healthcare workers to provide personalized staffing solutions that improve customer satisfaction. Join us in changing healthcare staffing for a more responsive and efficient system."}

        faq_head4={"How does EmpowerCare healthcare staffing agency ensure personal and efficient staffing solutions for healthcare professionals and facilities across Massachusetts and beyond?"}
        faq_desc4={"Every interaction with our healthcare staffing agency is designed for personalization, catering to those seeking nursing, CNA, LPN, travel nursing, direct care, or allied health jobs.Directors and employers demand high-quality healthcare workers, finding real-time solutions with us not like any other per diem nursing, healthcare, staffing, and CNA agencies. Our services ensure patient care excellence in healthcare facilities, emphasizing customer satisfaction, positive experiences, and personalized care teams by leveraging our expertise in human resources and medical care."}
        
        />
        <Stories
        // img={storiesimg}
        description={"Join EmpowerCare's Dynamic Squads and become a Shift Champion today. "}
        description2={"Let us empower you to reach new heights in your healthcare career and make a lasting impact on patient care and satisfaction. Together, we can efficiently redefine healthcare staffing and create a brighter future for healthcare professionals and patients alike."}
        Join={"JOIN US NOW"}
        btn1={"Quick Apply"}
        video_link={"https://www.youtube.com/shorts/X5DhrVv-hk4"}
        />
        <Userslider
        reviewbtn={"Quick Apply"}
        />
        <Footer/>
    
        </>)
}
export default Professionalperfectmatch