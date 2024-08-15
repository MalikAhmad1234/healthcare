import Banner1 from "../../Components/Banner1/Banner1"
import Footer from "../../Components/Footer/Footer"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import bannerImg from '../../Assets/heroes.png'
import img from '../../Assets/unsung1.png'
import Stories from "../../Components/Stories/Stories"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Initiative from "../../Components/Initiative/Initiative"
import ShiftChampions from "../../Components/ShiftChampions/ShiftChampions"
import Benefits from "../../Components/Benefits/Benefits"
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import storiesimg from '../../Assets/storiesPic.png';
const UnsungHeroes=()=>{ 
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
    heading={'Unsung Heroes No More'} 
    description={'HEALTHCARE UNSUNG HEROES FINALLY GET THEIR SPOTLIGHT'}
    meta={'You are a hero in healthcare staffing, and EmpowerCare wants to celebrate you. Our Shift Champions Initiative is made just for you – the hardworking healthcare professional who always goes the extra mile to give patients the best care.'}
    bannerImg={bannerImg}
    styles={bannerStyles}

    bnrbtn={"Quick Apply"}
    />
    <Trusted/>
    <ShiftChampions
       head1={"Why It Matters"}
       head2={"WHY"}
       head3={"THE SHIFT CHAMPIONS"}
       head4={"iNTIATIVE MATTERS TO YOU "}

       desc1={"When you're pumped about your work, you bring even more passion.Our Shift Champs program celebrates you, empowering you to level up your care game."}
       desc2={"Plus, our Dynamic Squads staffing model means your rockstar skills get properly matched and valued every time - whether you're a CNA, LPN, travel nurse or dynamo direct support professional!"}
       desc3={"Hospitals hire us because our staffing solutions are easy, personalized, and laser-focused on quality care.Our Shift Champs program takes that to the next level!"}
       desc4={"Nominates a Healthcare Hero Celebrate Your Shift Champions Today!"}

    />
    <Initiative
    heading={'How the Shift Champions Initiative Helps You'}
    heading1={'●   Rewards and Prizes'}
    heading2={'●   Stay Great at Your Job'}
    heading3={'●  Constant Support'}
    heading4={'●  We Highlight Your Work'}
    description1={'We notice and reward you when you do an awesome job.'}
    description2={'You get access to rewards and prizes that encourage you to keep being great at your job.'}
    description3={'We support you in doing your best work, and we celebrate your efforts.'}
    description4={'As part of EmpowerCares dynamic squads, your fantastic work will be highlighted, no matter if you are a CNA, LPN, travel nurse, or direct care professional.'}
    />
    <Benefits/>
    <FaqAccordian
    faq_head1={"How do the Shift Champions Initiative and EmpowerCare's Dynamic Squads work together? "}
    faq_desc1={"The Shift Champions program is the beating heart of our Dynamic Squads staffing solution. By celebrating outstanding healthcare professionals across a wide range of roles like CNAs, LPNs, travel nurses, and direct care workers, we cultivate a culture of excellence. This empowers our Dynamic Squads to deliver exceptional patient care and long-term health services that transform community health."}
    faq_head2={"What benefits do healthcare facilities gain by partnering with EmpowerCare Shift Champions?"}
    faq_desc2={"Healthcare organizations partnering with EmpowerCare get access to a network of highly skilled and motivated Shift Champion health care professionals dedicated to superior patient care. Our personalized staffing solutions and Shift Champions program ensure healthcare facilities receive top-tier allied health professionals focused on quality, efficiency, and positive treatment outcomes."}
    faq_head3={"How can I become an EmpowerCare Shift Champion? "}
    faq_desc3={"Becoming a Shift Champion is straightforward - simply excel at your healthcare role! Our staffing agencies are constantly on the lookout for outstanding performers making a real difference in patient satisfaction. Go above and beyond in your medical center, health system, or care setting, and your hard work will be recognized"}
    faq_head4={"Why choose EmpowerCare over other per diem nursing agencies and CNA staffing agencies? "}
    faq_desc4={"What sets EmpowerCare apart is our committed focus on empowering and celebrating exceptional allied health professionals like you. The Shift Champions Initiative, combined with our responsive, personalized approach to healthcare staffing solutions, helps you unlock your full potential while positively impacting national health outcomes."}

    faq={"Frequently Asked Question"}
    
    />
    <Stories
    img={storiesimg}
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
export default UnsungHeroes