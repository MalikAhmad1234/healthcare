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
const Advantagestravelnursing=()=>{
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
    heading={'Nursing Adventure'} 
    description={'Your Next Nursing Adventure Starts with EmpowerCare'}
    meta={'Discover the Adventure of a Lifetime with EmpowerCare Travel Nursing Opportunities'}
    bannerImg={bannerImg}
    styles={bannerStyles}
    bnrbtn={"Quick Apply"}
    />
    <Trusted/>
    <Unparalleled
    hd1={"YOUR NEXT  "}
    hd2={"NURSING ADVENTURE START "}
    hd3={"WITH EMPOWERCARE"}
    desc={"Are you a passionate nurse looking for an exciting new chapter in your career? Look no further than EmpowerCare – your trusted partner in finding the perfect travel nursing job that combines your love for healthcare with your thirst for adventure."}
    
    />
    <Initiative

    hd1={"Why Choose "}
    hd2={"EmpowerCare for Your"}
    hd3={" Travel Nursing Journey?"}
    button={true}
    mainHeading={true}
     heading={'The unparalleled benefits of contract jobs include'}
     heading1={'Unparalleled Support'}
     heading2={'Competitive Pay and Benefits'}
     heading3={'Diverse Locations and Experiences'}
     heading4={'Flexibility and Freedom'}
     description1={'Our dedicated team is with you every step of the way, from finding the ideal assignment to settling into your new location. We more than just an agency – we ARE your family away from home.'}
     description2={'Enjoy top-tier compensation, comprehensive health insurance, 401(k) plans, and generous housing stipends that allow you to focus on what matters most – providing exceptional patient care.'}
     description3={'Explore new cities, experience different healthcare settings, and broaden your clinical skills with our wide range of travel nursing assignments across the country.'}
     description4={"Take control of your career with the ability to choose assignments that fit your lifestyle and preferences. Want to take a break between contracts? No problem – we'll be here when you're ready for your next adventure."}

     link={"/professionals/Faqstravelnurse"}
    />
    <Initiative
   button={true}
     heading={'Benefits of Contract Nursing'}
     heading1={''}
     heading2={''}
     heading3={''}
     heading4={''}
     description1={'Professional growth and exposure to diverse clinical settings'}
     description2={'Ability to "test drive" a facility before committing to a permanent role'}
     description3={'Potential for higher earnings compared to traditional staff positions'}
     description4={'Flexibility to take breaks between assignments or line up consecutive contracts'}
     link={"/professionals/Faqstravelnurse"}
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

     link={"/professionals/Faqstravelnurse"}
    />
    <DynamicSquads

    meta={"Dynamic Squads"}
    metahd1={"Dynamic Squads"}
    metahd2={"Your Personalized "}
    metahd3={"Path to Success"}

    desc1={"With EmpowerCare's Dynamic Squads, you're in control of your career, enjoying the flexibility to choose your schedule and assignment on your terms. Our dedicated support system is always there to help you maximize your earnings and find the perfect opportunities to suit your skills and preferences."}
    heading={""}

    bullet_text1={"Partner with Dynamic Squads for success every step of the way"}
    bullet_text2={"Enjoy the flexibility of choosing your schedule, and assignment"}
    bullet_text3={"Leverage our dedicated support system to maximize your earnings"}
    bullet_text4={"Find perfect opportunities that suit your skills and preferences"}
    
    />
    <Opportunities
    hd1={"Travel Nursing  "}
    hd2={"Opportunities Across"}
    hd3={" Specialties "}
    
    desc={"EmpowerCare's roster of travel nursing roles caters to a broad spectrum of healthcare professionals, including:"}

    bl1={"Registered Nurses (RNs)"}
    bl2={"Licensed Practical Nurses (LPNs)"}
    bl3={"Specialty Nurses (ICU, ER, OR, L&D, and more)"}
    bl4={"Behavioral Health Nurses"}
    bl5={"Case Management Nurses"}
    bl6={""}

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
    hd1={"Hear From Our"}
    hd3={"Adventurous "}
    hd4={"Nurses"}

    desc1={"Accepting a contract position through EmpowerCare was the best decision I made for my nursing career."}
    desc2={"The stability, growth opportunities, and support from my clinical manager have been invaluable.- Sarah, RN"}

    chd1={"No-Cost Registration"}
    cdesc1={"Join our network at no cost. Tap into a world of supportive professionals, personalized opportunities, and a path to elevate your healthcare career with efficiency."}

    chd2={"Streamlined Discovery and Match"}
    cdesc2={" Leave the hassle of job searching behind. Share your career goals, and we'll match you with premium healthcare positions quickly and effortlessly."}

    chd3={"Embark on Rewarding Roles"}
    cdesc3={"Competitive pay is just the start. With EmpowerCare, you step into roles that are not only lucrative but deeply enriching."}
    
    />
    <GeneralNursing
    guide={false}
    heading1={'WHY'}
    heading2={'EMPOWERCARE'}
    heading3={' STANDS OUT'}
    
    />
    <AboutEmpowercare
    desc={"At EmpowerCare, we believe that travel nursing is more than just a job – it's a calling. As a leading travel nursing agency, we've helped thousands of nurses like you find their perfect match and embark on unforgettable adventures. With our unwavering support, competitive benefits, and commitment to your success, you can trust us to be your partner every step of the way."}
    />
    <Stories
    img={storiesimg}
    description={"Are You Ready for Rewarding Contract Job Opportunities?"}
    description2={"Don't wait another moment to start your exciting new chapter with EmpowerCare. Join our family of adventurous nurses today and discover the freedom, flexibility, and fulfillment you deserve."}
    Join={"JOIN US NOW"}
    btn1={"Apply Now"}
    />
    <VisitFAQs
    hd1={"Travel Nursing FAQs "}
    desc={"Have questions? Get insights into how EmpowerCare can meet your travel nursing needs through our FAQ section. "}
    link={"/professionals/Faqstravelnurse"}
    btntxt={"Visit Travel Nursing FAQs "}
    />
  
    <Userslider
    reviewbtn={"Quick Apply"}
    
    />
    <Footer/>
    </>)
}
export default Advantagestravelnursing