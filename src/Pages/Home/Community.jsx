import HeaderWhite from '../../Components/HeaderWhite/HeaderWhite';
import bannerImg from '../../Assets/communityImg.png';
import Cards from "../../Components/Community/Cards"
import BottomButton from "../../Components/Community/BottomButton"
import RevolutionCard from "../../Components/Community/RevolutionCard"
import Form from "../../Components/Community/Form"
import Banner2 from "../../Components/Banner2/Banner2"
import Content1 from "../../Components/Community/Content1"
import Footer from "../../Components/Footer/Footer"
import Userslider2 from "../../Components/UserSlider2/UserSlider2"
import img from '../../Assets/Group125.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';

const Community=()=>{
    const heading='OUR COMMUNITY'
    const description='At EmpowerCare, we believe every job has the power to create a positive impact that ripples beyond the workplace.'
    const bannerStyles = {
       backgroundImage: `url(${img})`,
       backgroundPosition: '50% 36%',
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'contain',
       marginTop: '-225px',
       backgroundColor: '#EBE0D3'
   };
   return(<>
    <HeaderWhite
          logoImg={logow}
          />
    <Banner2 heading={heading} description={description} img={bannerImg} styles={bannerStyles}
    
    />
    <Content1/>
    <Cards description1={'CLEAN WATER INITIATIVE:MAKING WAVES OF CHANGE'}
           description2={'Access to clean and safe drinking water is a basic human right, yet millions of people around the world face the daily struggle of water scarcity. At EmpowerCare, we are committed to taking action to address this issue in any way we can.​​'}
           description3={'For every healthcare professional we place, we contribute a portion of the proceeds to fund the construction and maintenance of water wells in underserved communities, particularly in Tanzania.'}
           description4={'Our CEO, Jamal Mahijibhai, has a deep personal connection to this cause. Having witnessed firsthand the impact of clean water scarcity on the lives of Tanzanians, he actively participates in the restoration and renovation of water wells, ensuring that the ripple effect of change flows freely'}    
    />
     <Cards description1={'Empowering Orphaned Children: Nurturing the Next Generation'}
           description2={'Every child deserves a chance to dream big and reach for the stars. At EmpowerCare, we believe in empowering orphaned and vulnerable children to build a brighter future.'}
           description3={'Through partnerships with local organizations, we fund educational programs, healthcare services, and nutritional support, ensuring that these children have the tools they need to thrive.'}
           description4={'Our team members volunteer their time and skills to organize recreational activities, tutoring sessions, and mentorship programs, creating a nurturing environment that fosters growth, learning, and endless possibilities.'}    
    />
     {/* <Cards description1={'Emergency Relief Efforts: Answering the Call in Times of Crisis'}
           description2={'When disaster strikes, EmpowerCare is ready to answer the call. We believe that every job we fill can help make a difference in the lives of those affected by crises.'}
           description3={'In collaboration with trusted organizations, we mobilize our resources to provide immediate support and relief to communities in need, distributing essential supplies such as food, water, and medical aid.'}
           description4={'Our healthcare professionals volunteer their expertise to provide medical assistance and support to individuals affected by emergencies, offering a helping hand and a glimmer of hope in the darkest of times.'}    
    /> */}
     {/* <Cards description1={'Supporting Our Own: A Family That Lifts Each Other Up'}
             description2={'At EmpowerCare, we believe that every job is an opportunity to make a difference, and that starts with taking care of our own.'}
             description3={'Through our Employee Assistance Program, we provide financial support, counseling services, and resources to help our team members navigate lifes challenges, ensuring that no one faces hardship alone.'}
             description4={'We foster a culture of compassion, empathy, and mutual support, because we know that when we lift each other up, we create a ripple effect of positivity that extends far beyond our organization.'}    
          
    /> */}
    <BottomButton/>
    <RevolutionCard/>
    <Form/>
    <Userslider2/>
    <Footer/>
    </>)
}
export default Community