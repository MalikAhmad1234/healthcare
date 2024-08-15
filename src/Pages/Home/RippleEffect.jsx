import Banner1 from "../../Components/Banner_facility/Banner_facility"
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
import HeaderWhite from "../../Components/HeaderWhite2/HeaderWhite2"
const RippleEffect=()=>{
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
        heading={'Ripple Effect Initiative'} 
        description={'Amplify Your Impact with EmpowerCare Ripple Effect Initiative'}
        meta={'As a healthcare facility decision-maker, you understand the importance of making a positive impact on your patients and community. But what if you could extend that impact far beyond your facility walls? With EmpowerCare Ripple Effect Initiative, you can.'}
        bannerImg={bannerImg}
        styles={bannerStyles}

        bnrbtn={"Request Staffing"}
        />
        <Trusted
        hd1={"Facilities"}
        
        />
        <ShiftChampions
           head1={"Transforming Healthcare"}
           head2={"Transforming Healthcare"}
           head3={" Staffing into a Force"}
           head4={" for Global Good"}
    
           desc1={"EmpowerCare believes that every healthcare staffing job has the power to create a ripple effect of positive change. When you partner with us, you're not just filling open positions – you're contributing to a global movement that improves lives and communities around the world. "}
           desc2={"For every shift worked by an EmpowerCare healthcare professional, we donate $1 to support initiatives that enhance healthcare improvement and societal well-being."}
           desc3={"This means that by choosing EmpowerCare for your staffing needs, you're amplifying your impact and making a difference on a global scale."}
           desc4={"Our Ripple Effect Initiative focuses on two critical areas: empowering orphaned children and providing clean water to communities in need. By aligning your staffing needs with these initiatives, you can make a tangible difference in the lives of vulnerable populations worldwide."}
    
        />
        <Initiative
        heading={'Join Forces with Shift Champions and High-Volume Customers'}
        heading1={''}
        heading2={''}
        heading3={''}
        heading4={''}
        description1={'At EmpowerCare, we believe in the power of collaboration. That why we empower our Shift Champions and high-volume customers to propose and champion initiatives that align with our project guidelines.'}
        description2={'By joining forces with these engaged stakeholders, you can contribute to projects that reflect your values and priorities.'}
        description3={'We believe in transparency and engagement every step of the way. Through our dedicated online portal, you can submit project proposals, track the progress of initiatives, and see the tangible impact of your contributions.'}
        description4={'We also actively share compelling stories and outcomes from our initiatives through social media, newsletters, and our official website, so you can witness the transformative power of your partnership with EmpowerCare.'}
        
        lrnbtn={<a  className='learn_more' href='/facilities/shift-champions'>Learn More</a>}/>
        <Benefits/> 
        <FaqAccordian
        faq={"Frequently asked questions"}
        faq_head1={"How does EmpowerCare's Ripple Effect Initiative benefit my healthcare facility?"}
        faq_desc1={"By partnering with EmpowerCare, your healthcare facility can extend its impact beyond patient care and contribute to global initiatives that improve lives and communities. Every shift worked by an EmpowerCare healthcare professional supports projects that empower orphaned children and provide clean water to underserved areas."}

        faq_head2={"How can my facility contribute to the Ripple Effect Initiative?"}
        faq_desc2={"How can my facility contribute to the Ripple Effect Initiative? Simply by choosing EmpowerCare for your healthcare staffing needs, your facility automatically contributes to the Ripple Effect Initiative. For every shift worked by an EmpowerCare professional, we donate $1 to support our global initiatives."}

        faq_head3={"Can my facility propose specific projects for the Ripple Effect Initiative? "}
        faq_desc3={"Yes! We encourage our partners, especially Shift Champions and high-volume customers, to propose initiatives that align with our project guidelines. This allows your facility to champion causes that reflect your values and priorities."}

        faq_head4={"How can I track the impact of my facility's contributions to the Ripple Effect Initiative?"}
        faq_desc4={"We offer a dedicated online portal where you can track the progress of initiatives and see the tangible impact of your contributions. We also share compelling stories and outcomes through our social media channels, newsletters, and official website, keeping you engaged with the transformative power of your partnership."}

        faq_head5={"How does EmpowerCare ensure the effectiveness of the Ripple Effect Initiative?"}
        faq_desc5={"We continuously seek feedback from our partners and the communities we serve through surveys, focus groups, and public forums. This valuable input allows us to refine and optimize our initiatives, ensuring they remain effective, relevant, and aligned with the needs of those we aim to support."}
        
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
        link={"/facilities/request-staffing"}
        reviewbtn={"Request Staffing"}
        />
        <Footer/>
    
        </>)
}
export default RippleEffect