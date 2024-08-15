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
const Advantagesdreamjob=()=>{
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
    heading={'Advantages of Per Diem'} 
    description={'Unlock the Advantages of Per Diem Work'}
    meta={'Enjoy Unparalleled Flexibility with EmpowerCare Per Diem Jobs'}
    bannerImg={bannerImg}
    styles={bannerStyles}
    bnrbtn={"Quick Apply"}
    />
    <Trusted/>
    <Unparalleled
    hd1={"UNLOCK THE"}
    hd2={"Advantages of "}
    hd3={"PER DIEM WORK"}
    desc={"Discover the unparalleled flexibility and rewards that come with per diem job opportunities through EmpowerCare. As your ally in navigating the healthcare job market, we specialize in pairing professionals like you with premier facilities nationwide, offering the work variety and schedule flexibility your career demands."}
    
    />
    <Initiative

    hd1={"WHY CHOOSE "}
    hd2={"EmpowerCare for"}
    hd3={" PER DIEM POSITION?"}
    button={true}
    mainHeading={true}
     heading={'The unparalleled benefits of per diem jobs include'}
     heading1={'Flexible Scheduling'}
     heading2={'Diverse Experiences'}
     heading3={'Competitive Compensation'}
     heading4={'Professional Development'}
     description1={'Tailor your work life to fit personal commitments by choosing shifts that suit you.'}
     description2={'Work across various settings and with different patient demographics to enrich your professional life.'}
     description3={'Receive top hourly wages reflecting your valuable skills and expertise.'}
     description4={'Broaden your skillset and professional network through varied assignments.'}

     link={"/professionals/Faqsperdiem"}
    />
    <Initiative
   button={true}
     heading={'The Benefits of Embracing Per Diem Work'}
     heading1={'Enhanced Work-Life Balance'}
     heading2={'Diverse Clinical Exposure'}
     heading3={'Travel and Discovery'}
     heading4={'Supplement Your Income'}
     description1={'Enjoy the freedom to design your schedule for optimal personal time.'}
     description2={'Expand your competencies and adaptability in different healthcare environments.'}
     description3={'Work in new locales, experiencing different communities and healthcare settings.'}
     description4={'Elevate your earnings by picking up extra shifts as you wish.'}
     link={"/professionals/Faqsperdiem"}
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

     link={"/professionals/Faqsperdiem"}
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
    hd1={"Per Diem "}
    hd2={"Opportunities Across"}
    hd3={" Specialties"}
    
    desc={"EmpowerCare's roster of per diem roles caters to a broad spectrum of healthcare professionals, including:"}

    bl1={"Registered Nurses (RNs)"}
    bl2={"Licensed Practical Nurses (LPNs)"}
    bl3={"Certified Nursing Assistants (CNAs)"}
    bl4={"Direct Care Staff"}
    bl5={"Certified Medical Assistants (CMAs)"}
    bl6={"Residential Counselors"}

    />
    <WorkForce
    hd1={"Contract"}
    hd2={"Opportunities"}
    hd3={"Available"}

    desc={"Joining our per diem workforce means enjoying"}
    
    bl1={"Tailored job matches that align with your qualifications and preferences."}
    bl2={"Continuous support from our attentive recruitment team."}
    bl3={"Attractive compensation, with weekly direct deposit for your convenience."}
    bl4={"Access to sought-after healthcare facilities in your vicinity."}
    />
    <HearFrom
    hd1={"Hear From Our"}
    hd3={"Our Satisfied"}
    hd4={"Healthcare Professionals"}

    desc1={"Accepting a contract position through EmpowerCare was the best decision I made for my nursing career.The stability, growth opportunities, and support from my clinical manager have been invaluable.- Sarah, RN"}
    desc2={" Per diem work with EmpowerCare has brought the perfect balance to my life. The compensation is excellent, and fitting work around my family has never been easier.- Mark, CNA"}

    chd1={"Join EmpowerCare at No Cost"}
    cdesc1={"Sign up effortlessly and tap into a network designed to enhance your career in healthcare with tailored opportunities."}

    chd2={"Effortless Job Matching"}
    cdesc2={"Let the days of tiresome job hunting be behind you. Share your goals with us, and we'll swiftly connect you with prime healthcare positions, making your dream job a hassle-free reality."}

    chd3={"Enjoy a Fulfilling Career"}
    cdesc3={"With EmpowerCare, competitive pay is just the beginning. We're committed to ensuring your progress in healthcare is both financially and professionally rewarding."}
    
    />
    <GeneralNursing
    guide={false}
    heading1={'WHY'}
    heading2={'EMPOWERCARE'}
    heading3={' STANDS OUT'}
    
    />
    <AboutEmpowercare
    desc={"As a front-runner in the healthcare staffing industry, EmpowerCare connects skilled professionals with leading healthcare facilities nationwide. We're passionate about offering flexible and enriching per diem job opportunities to our valued team members."}
    />
    <Stories
    img={storiesimg}
    description={"Are You Ready for Flexible and Rewarding Per Diem Work?"}
    description2={"Step into the world of per diem opportunities with EmpowerCare and tailor your job to fit your life. Start your journey today with a team that values your flexibility and career aspirations."}
    Join={"JOIN US NOW"}
    btn1={"Apply Now"}
    />
    <VisitFAQs
    hd1={"Per Diem Staffing "}
    desc={"Explore our top FAQs to see how EmpowerCare can efficiently meet your staffing needs. "}
    link={"/professionals/Faqsperdiem"}
    btntxt={"Visit Per Diem Staffing FAQ "}
    />
  
    <Userslider
    reviewbtn={"Quick Apply"}
    
    />
    <Footer/>
    </>)
}
export default Advantagesdreamjob