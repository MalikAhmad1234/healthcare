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
const Professionalgainawinning=()=>{
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
        heading={'GAIN A WINNING EDGE'} 
        description={'GAIN A WINNING EDGE WITH EMPOWERCARE ACADEMY'}
        meta={'In healthcare, standing still is never an option. The leading institutions and professionals are those committed to constant learning, growth, and mastery of their craft.'}
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
        faq_head1={"How does EmpowerCare Academy's approach differ from traditional healthcare staffing agencies? "}
        faq_desc1={"EmpowerCare Academy goes beyond just staffing by providing a comprehensive career path for healthcare professionals. Our tailored programs focus on long-term growth through continuing education, specialized training, and exclusive certifications - empowering you to achieve your career goals while maintaining a healthy work-life balance."}
        faq_head2={"How can healthcare organizations benefit from EmpowerCare Academy's career development programs? "}
        faq_desc2={"By partnering with EmpowerCare Academy, healthcare facilities gain access to a talent pool of highly skilled and rigorously trained professionals across nursing and allied health roles. Our certifications and real-world training ensure staff provide high-quality patient care utilizing the latest clinical best practices."}
        faq_head3={"What makes EmpowerCare Academy ideal for healthcare professionals seeking career advancement?"}
        faq_desc3={"EmpowerCare Academy takes a holistic approach perfectly suited for those passionate about long-term career growth. Our wide range of tailored learning pathways, exclusive credentialing, job placement assistance, and ongoing coaching empower you to elevate your expertise while achieving personal and professional fulfillment."}
        faq_head4={"Can EmpowerCare Academy support healthcare human resources needs for roles like CNA jobs, LPN jobs, travel nursing, and more? "}
        faq_desc4={"Absolutely. As a comprehensive healthcare staffing solution, EmpowerCare Academy recruits and upskills talented professionals across the full spectrum - from CNAs and LPNs to registered nurses, therapists, and allied health specialists. We work closely with leading healthcare agencies and per diem nursing agencies to identify and develop top talent."}

        faq={"Frequently Asked Question"}
        
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
export default Professionalgainawinning