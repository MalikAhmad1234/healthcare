import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Userslider from "../../Components/Userslider/Userslider"
import Stories from "../../Components/Stories/Stories"
import img from '../../Assets/advantages.png'
import bannerImg from '../../Assets/Group 231.png'
import Banner1 from "../../Components/Banner1/Banner1"
import Trusted from "../../Components/Trusted/Trusted"
import Initiative from "../../Components/Initiative/Initiative"
import DynamicSquads from "../../Components/DynamicSquads/DynamicSquads"
import WorkForce from "../../Components/WorkForce/WorkForce"
import HearFrom from "../../Components/HearFrom/HearFrom"
import AboutEmpowercare from "../../Components/AboutEmpowercare/AboutEmpowercare"
import Opportunities from "../../Components/Opportunities/Opportunities"
import Unparalleled from "../../Components/Unparalleled/Unparalleled"
import VisitFAQs from "../../Components/VisitFAQs/VisitFAQs"
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import storiesimg from '../../Assets/storiesPic.png';
import GeneralNursing from "../../Components/GeneralNursing/GeneralNursing"
const Advantagesdiscoverideal=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-300px',
        backgroundColor: '#EBE0D3'
    };
    return(<>
    <HeaderWhite
          logoImg={logow}
          />
    <Banner1
    heading={'Permanent Position'} 
    description={'Find Your Dream Job with EmpowerCare Permanent Position'}
    meta={'Discover Careers with Stability and Attractive Benefits'}
    bannerImg={bannerImg}
    styles={bannerStyles}
    bnrbtn={"Quick Apply"}
    />
    <Trusted/>
    <Unparalleled
    hd1={"Find Your Dream Job "}
    hd2={"with EmpowerCare "}
    hd3={"Permanent Position"}
    desc={"EmpowerCare is your trusted partner in finding the perfect permanent position that aligns with your career goals and aspirations. As a leading nursing and healthcare agency, we connect skilled professionals like you with top healthcare facilities across the country, offering the stability, growth opportunities, and attractive benefits you deserve."}
    
    />
    <Initiative

    hd1={"Why Work with "}
    hd2={"EmpowerCare for"}
    hd3={" Your Job Search?"}
    button={true}
    mainHeading={true}
     heading={'The unparalleled benefits of permanent positions include'}
     heading1={''}
     heading2={''}
     heading3={''}
     heading4={''}
     description1={'Exclusive access to a wide range of permanent positions'}
     description2={'Personalized job matching based on your skills, experience, and preferences'}
     description3={'Expert guidance and support throughout the application and interview process'}
     description4={'Comprehensive benefits packages negotiated on your behalf'}

     link={"/professionals/Faqspermanentstaffing"}
    />
    <Initiative
   button={true}
     heading={'Advantages of Permanent Positions for Job Seekers'}
     heading1={''}
     heading2={''}
     heading3={''}
     heading4={''}
     description1={'Stability and long-term career growth opportunities'}
     description2={'Competitive salaries and comprehensive benefits'}
     description3={'Ongoing support from our dedicated team of recruiters'}
     description4={'Opportunities to make a lasting impact in your chosen healthcare facility'}
     link={"/professionals/Faqspermanentstaffing"}
    />
    <Initiative
    button={true}
     heading={'EmpowerCare’s Core Promises to you'}
     heading1={'●  Transformative Placements'}
     heading2={'●  Commitment to the Community:'}
     heading3={'●  Personalized Excellence through CPR (Convenient, Personable, and Responsive)'}
     heading4={'●    Professional Development'}
     description1={'Each EmpowerCare placement helps improve healthcare, change lives, and enhance the quality of care, making a meaningful impact.'}
     description2={'We donate $1 towards community health initiatives for every shift you work, making your efforts even more significant.'}
     description3={'We go beyond finding you a job. We match you with healthcare facilities that suit your skills, preferences, pay, and career goals. This ensures that you have a satisfying and successful placement.'}
     description4={'Broaden your skillset and professional network through varied assignments.'}

     link={"/professionals/Faqspermanentstaffing"}
    />
    <DynamicSquads

    meta={"Dynamic Squads"}
    metahd1={"Dynamic Squads"}
    metahd2={"Your Personalized "}
    metahd3={"Path to Success"}

    desc1={"EmpowerCare's Dynamic Squads, you're in control of your career, enjoying the flexibility to choose your schedule and assignment on your terms. Our dedicated support system is always there to help you maximize your earnings and find the perfect opportunities to suit your skills and preferences."}
    heading={""}

    bullet_text1={"Partner with Dynamic Squads for success every step of the way"}
    bullet_text2={"Enjoy the flexibility of choosing your schedule, and assignment"}
    bullet_text3={"Leverage our dedicated support system to maximize your earnings"}
    bullet_text4={"Find perfect opportunities that suit your skills and preferences"}
    
    />
    <Opportunities
    hd1={"Explore "}
    hd2={"Temp-to-Hire Opportunities"}
    hd3={" Across Various Settings"}
    
    desc={"EmpowerCare offers temp-to-hire position opportunities for various healthcare settings, job includes:"}

    bl1={"School Health Jobs"}
    bl2={"Community Health Centers jobs"}
    bl3={"Skilled Nursing jobs"}
    bl4={"Mental & Behavioral Health jobs"}
    bl5={"Surgical Centers jobs"}
    bl6={"Corporate Health jobs"}

    />
    <WorkForce
    hd1={"Contract"}
    hd2={"Opportunities"}
    hd3={"Available"}

    desc={"EmpowerCare offers contract nursing opportunities for a wide range of healthcare professionals, including:"}
    
    bl1={"Registered Nurses (RNs)"}
    bl2={"Licensed Practical Nurses (LPNs)"}
    bl3={"Certified Nursing Assistants (CNAs)"}
    bl4={"Certified Medical Assistants (CMAs)"}
    />
    <HearFrom
    hd1={"Unlock Your "}
    hd3={"Potential "}
    hd4={"Effortlessly"}

    desc1={"Accepting a contract position through EmpowerCare was the best decision I made for my nursing career."}
    desc2={"The stability, growth opportunities, and support from my clinical manager have been invaluable.- Sarah, RN"}

    chd1={"Join EmpowerCare for Free"}
    cdesc1={"Connect with our supportive team, explore personalized job opportunities, and take your healthcare career to new heights with efficiency and excellence."}

    chd2={"Effortless Job Discovery and Matching"}
    cdesc2={"Leave the job search hassle behind. Share your career aspirations with us, and we'll match you with premier healthcare roles swiftly and stress-free"}

    chd3={"Experience Rewarding Healthcare Positions"}
    cdesc3={"Competitive compensation is just the start. We ensure your career advancement is both financially rewarding and deeply fulfilling."}

    link={"/professional/Professionalperfectmatch"}
    
    />
    <GeneralNursing
    guide={false}
    heading1={'WHY'}
    heading2={'EMPOWERCARE'}
    heading3={' STANDS OUT'}
    
    />
    <AboutEmpowercare
    desc={"EmpowerCare is a leading nursing and healthcare agency that connects talented professionals with top healthcare facilities nationwide."}
    />
    <Stories
    img={storiesimg}
    description={"Unlock Your Career Potential with Our Free Direct Hire Job Search?"}
    description2={"Ready to take control of your career and find your dream permanent position? Partner with EmpowerCare today and let us help you navigate the job search process with personalized support and exclusive access to top healthcare employers."}
    Join={"JOIN US NOW"}
    btn1={"Apply Now"}
    />
    <VisitFAQs
    hd1={"FAQ for Permanent Staffing Jobs "}
    desc={"Explore our top FAQs to see how EmpowerCare can efficiently meet your staffing needs. "}
    link={"/professionals/Faqspermanentstaffing"}
    btntxt={"Visit Permanent Staffing FAQ "}
    />
  
    <Userslider
    reviewbtn={"Quick Apply"}
    
    />
    <Footer/>
    </>)
}
export default Advantagesdiscoverideal