import Banner1 from "../../Components/Banner_facility/Banner_facility"
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
import HeaderWhite2 from "../../Components/HeaderWhite2/HeaderWhite2"
import storiesimg from '../../Assets/storiesPic.png';
const Shiftchampions=()=>{ 
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-295px',
        backgroundColor: '#EBE0D3'
    };
    return(<>
    <HeaderWhite2
          logoImg={logow}
          />
    <Banner1
    heading={'Shift Champions'} 
    description={'Elevate Your Facility Performance with EmpowerCare Shift Champions'}
    meta={'As a healthcare facility decision-maker, you know that your staff is the backbone of your organization. They are the unsung heroes who go above and beyond every day to ensure that your patients receive the highest quality of care.'}
    bannerImg={bannerImg}
    styles={bannerStyles}

    bnrbtn={"Request Staffing"}
    />
    <Trusted
    hd1={"Facilities"}
    />
    <ShiftChampions
       head1={"Recognize and   "}
       head2={"Reward Your"}
       head3={" Top"}
       head4={" Performers"}

       desc1={"The Shift Champions Initiative is all about spotlighting your healthcare heroes and giving them the props they deserve. We work with you to identify your standout staff members – those who consistently demonstrate excellence, compassion, and dedication in their roles. "}
       desc2={"From CNAs and LPNs to travel nurses and direct support professionals, we celebrate the all-stars who make your facility shine."}
       desc3={"By nominating your top performers as EmpowerCare Shift Champions, you not only boost their morale and job satisfaction but also inspire them to continue delivering exceptional care."}
       desc4={" Our program offers rewards, career growth opportunities, and a supportive network that empowers your staff to reach new heights of success."}

    />
    <Initiative
    heading={'Enhance Your Facility Reputation and Patient Outcomes'}
    heading1={''}
    heading2={''}
    heading3={''}
    heading4={''}
    description1={'When your healthcare professionals feel valued and supported, it shows in the quality of care they provide.'}
    description2={'By partnering with EmpowerCare and our Shift Champions Initiative, you can enhance your facility reputation as a destination for top talent and excellent patient care.'}
    description3={'Our Dynamic Squads staffing model ensures that your Shift Champions are matched with the right opportunities to showcase their skills and make a lasting impact.'}
    description4={'This personalized approach not only benefits your staff but also leads to improved patient satisfaction, better health outcomes, and a stronger bottom line for your facility.'}
    />
    <Benefits/>
    <FaqAccordian
    faq_head1={"How does the Shift Champions Initiative benefit my healthcare facility?"}
    faq_desc1={"The Shift Champions Initiative helps you recognize and reward your top-performing healthcare professionals, boosting their morale, job satisfaction, and engagement. By celebrating your standout staff, you inspire them to continue delivering exceptional care, leading to better patient outcomes and an enhanced reputation for your facility."}
    faq_head2={"How does EmpowerCare identify Shift Champions?"}
    faq_desc2={"EmpowerCare works closely with your facility to identify your top performers based on criteria such as patient satisfaction, clinical excellence, teamwork, and dedication. We rely on input from managers, colleagues, and patients to ensure that we recognize the true all-stars who go above and beyond in their roles."}
    faq_head3={"What kind of rewards and recognition do Shift Champions receive?"}
    faq_desc3={"Shift Champions receive a range of rewards and recognition, including bonuses, gift cards, professional development opportunities, and public acknowledgment of their achievements. We work with you to tailor the rewards to your facility's unique needs and budget, ensuring that your Shift Champions feel truly valued and appreciated."}
    faq_head4={"How does the Shift Champions Initiative integrate with EmpowerCare's staffing solutions? "}
    faq_desc4={"The Shift Champions Initiative is an integral part of EmpowerCare's Dynamic Squads staffing model. By identifying and celebrating your top performers, we can better match them with opportunities that showcase their skills and drive better outcomes for your facility. Our personalized approach ensures that your Shift Champions are supported and empowered to succeed in their roles."}

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
    link={"/facilities/request-staffing"}
    reviewbtn={"Request Staffing"}
    />
    <Footer/>

    </>)
}
export default Shiftchampions