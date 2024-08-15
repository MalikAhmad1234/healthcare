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
const ProfessionalEasytouse=()=>{
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
    heading={'HEALTHCARE STAFFING TOOLS'} 
    description={'EASY-TO-USE HEALTHCARE STAFFING TOOLS'}
    meta={'EmpowerCare is transforming healthcare staffing through our 3Es Tech-Enhanced Processes: Effective, Efficient, and Effortless. We are harnessing the power of AI to match the perfect candidate to the right opportunity, every single time'}
    bannerImg={bannerImg}
    styles={bannerStyles}

    bnrbtn={"Quick Apply"}
    />
    <Trusted/>
        <ShiftChampions
           head1={"Super Easy to Understand"}
           head2={" STAFFING HEALTHCARE IS EFFICIENT"}
           head3={" EmpowerCare 3Es"}
           head4={""}
    
           desc1={"Effective, and Effortless with EmpowerCare's 3Es Tech-Enhanced Processes."}
           desc2={"Our technology is helping us find the right mate quickly."}
           desc3={"EmpowerCare's 3Es aren't just about making staffing easier; they're about making it better."}
           desc4={"Our AI-powered platform ensures optimal alignment between institutions and candidates, resulting in happier healthcare professionals and better patient outcomes."}
    
        />
        <Initiative
        heading={'Empower Your Facility with Top Talent, Effortlessly'}
        heading1={'●   Join EmpowerCare for Free'}
        heading2={'●   Post Jobs and Find the Perfect Fit, Seamlessly'}
        heading3={'●  Access Premier Healthcare Professionals, Cost-Effectively'}
        heading4={'●  We Highlight Your Work'}
        description1={'●	Sign up at no cost ●	Partner with our dedicated team ●	Gain access to a vast pool of skilled healthcare professionals ●	Elevate your facility performance with efficiency and excellence'}
        description2={'●	Say goodbye to the challenges of staffing your facility ●	Share your requirements ● We promptly connect you with the most qualified candidates ●	Finding the right talent can be simple and stress-free'}
        description3={'● Optimizing your budget is a top priority ●	Focus on delivering exceptional patient care ●	Enhancing your facility capabilities is financially sustainable and transformative for your community'}
        description4={'Our dedicated team provides guidance, resources, and opportunities to help you excel in your healthcare career.'}
        />
        <Benefits/> 
        <FaqAccordian
        faq={"Frequently Asked Question"}
        faq_head1={"How does EmpowerCare make nursing staffing easier? "}
        faq_desc1={"EmpowerCare has revolutionized nursing staffing through our 3Es Tech-Enhanced Processes - Effective, Efficient, and Effortless. Our AI-powered platform takes the hassle out of finding and matching exceptional nursing talent to open roles."}

        faq_head2={"What staffing solutions does EmpowerCare provide? "}
        faq_desc2={"In addition to nursing staffing, EmpowerCare's innovative tools streamline CNA staffing, LPN staffing, travel nursing staffing, direct care staffing, and allied health staffing across hospitals, clinics, long-term care facilities, and more."}

        faq_head3={"How is EmpowerCare different from other healthcare staffing agencies?"}
        faq_desc3={" Unlike traditional healthcare staffing agencies and per diem nursing agencies, EmpowerCare harnesses cutting-edge AI technology to make the staffing process seamless from start to finish for both healthcare professionals and facilities."}

        faq_head4={"What benefits does AI provide for medical staffing? "}
        faq_desc4={"Our AI algorithms analyze huge datasets to identify ideal candidate-job matches beyond just skills and experience. This ensures facilities receive staffing recommendations perfectly aligned with their needs, culture fit, and priorities."}


        faq_head5={"How quick is EmpowerCare's staffing process? "}
        faq_desc5={"EmpowerCare's 3Es Tech-Enhanced Processes make staffing incredibly fast and efficient. Many clients are able to find, vet, and hire qualified candidates in as little as 72 hours using our platform."}

        faq_head6={"Is EmpowerCare a CNA staffing agency? "}
        faq_desc6={"While we partner with specialized CNA staffing agencies, EmpowerCare is a comprehensive healthcare staffing solution for all clinical roles - nurses, CNAs, therapists, technicians, and more."}

        faq_head7={"What type of healthcare facilities use EmpowerCare? "}
        faq_desc7={"Our AI staffing technology benefits hospitals, clinics, nursing homes, rehabilitation centers, home health providers, and any other healthcare facility looking to optimize their workforce."}

        faq_head8={"How can I get started using EmpowerCare for staffing? "}
        faq_desc8={"Just visit our website at EmpowerCare.us and sign up! One of our staffing experts will walk you through how we can transform your staffing process."}

        
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
export default ProfessionalEasytouse