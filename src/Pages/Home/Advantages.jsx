import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
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
const Advantages=()=>{
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
    heading={'Contract Nursing'} 
    description={'Discover the Rewards of Contract Nursing'}
    meta={'EmpowerCare: Your Partner for Rewarding Contract Nursing Jobs'}
    bannerImg={bannerImg}
    styles={bannerStyles}
    bnrbtn={"Quick Apply"}
    />
    <Trusted/>
    <Unparalleled
    hd1={"YOUR PARTNER FOR "}
    hd2={"REWARDING CONTRACT NURSING "}
    hd3={"JOBS"}
    desc={"EmpowerCare is your trusted partner in finding the perfect contract nursing opportunities that align with your career goals and lifestyle. As a leading nursing agency, we connect skilled healthcare professionals like you with top facilities across the country, offering the stability, growth opportunities, and competitive compensation you deserve."}
    
    />
    <Initiative

    hd1={"Why Choose "}
    hd2={"Contract Nursing"}
    hd3={" with us"}
    button={true}
    mainHeading={true}
     heading={'The unparalleled benefits of contract jobs include'}
     heading1={''}
     heading2={''}
     heading3={''}
     heading4={''}
     description1={'Stability and guaranteed hours for the duration of the contract'}
     description2={'Opportunities to experience different facilities and expand your skillset'}
     description3={'Competitive pay rates and comprehensive benefits package'}
     description4={'Dedicated support from our experienced clinical managers'}

     link={"/professionals/faqs"}
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
     link={"/professionals/faqs"}
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
    hd1={"Hear From Our"}
    hd3={"Empowered"}
    hd4={"Nurses"}

    desc1={"Accepting a contract position through EmpowerCare was the best decision I made for my nursing career."}
    desc2={"The stability, growth opportunities, and support from my clinical manager have been invaluable.- Sarah, RN"}

    chd1={"No-Cost Registration"}
    cdesc1={"Join our network at no cost. Tap into a world of supportive professionals, personalized opportunities, and a path to elevate your healthcare career with efficiency."}

    chd2={"Streamlined Discovery and Match"}
    cdesc2={" Leave the hassle of job searching behind. Share your career goals, and we'll match you with premium healthcare positions quickly and effortlessly."}

    chd3={"Embark on Rewarding Roles"}
    cdesc3={"Competitive pay is just the start. With EmpowerCare, you step into roles that are not only lucrative but deeply enriching."}
    link={"/professional/Professionalperfectmatch"}
    />
    <GeneralNursing
    guide={false}
    heading1={'WHY'}
    heading2={'EMPOWERCARE'}
    heading3={' STANDS OUT'}
    
    />
    <AboutEmpowercare
    desc={"As a distinguished nursing agency, EmpowerCare connects healthcare virtuosos with premier facilities across the nation. Our mission is to enhance your career through stable, fulfilling contracts, backed by comprehensive support to help you thrive."}
    />
    <Stories
    img={storiesimg}
    description={"Are You Ready for Rewarding Contract Job Opportunities?"}
    description2={"Ready to take your nursing career to the next level with contract opportunities? Join EmpowerCare's team of skilled healthcare professionals today and start exploring contract positions that align with your goals and lifestyle."}
    Join={"JOIN US NOW"}
    btn1={"Apply Now"}
    />
    <VisitFAQs
    hd1={"Healthcare Contract Jobs "}
    desc={"Explore our top FAQs to see how EmpowerCare can efficiently meet your staffing needs. "}
    link={"/professionals/faqs"}
    btntxt={"Visit Contract Jobs FAQ "}
    />
  
    <Userslider
    reviewbtn={"Quick Apply"}
    
    />
    <Footer/>
    </>)
}
export default Advantages