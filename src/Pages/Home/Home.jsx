import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Trusted from '../../Components/Trusted/Trusted';
import Approach from '../../Components/Approach/Approach';
import Choose from '../../Components/Choose/Choose';
import Opportunity from '../../Components/Opportunity/Opportunity';
import Nextstep from '../../Components/Nextstep/Nextstep';
import Stories from '../../Components/Stories/Stories';
import Healthcare from '../../Components/Healthcare/Healthcare';
import Empowercare from '../../Components/Empowercare/Empowercare';
import Contractjob from '../../Components/Contractjobs/Contractjob';
import Impact from '../../Components/Impact/Impact';
import HCareer from '../../Components/HCareer/HCareer';
import Priemer from '../../Components/PremierHealthcare/Priemer';
import Caregivers from '../../Components/Caregivers/Caregivers';
import CareerSlider from '../../Components/CareerSlider/CareerSlider';
import Blog from '../../Components/Blog/Blog';
import Userslider from '../../Components/Userslider/Userslider';
import Network from '../../Components/ExtensiveNetwork/Network';
import './Home.scss';
import HeaderWhite from '../../Components/HeaderWhite/HeaderWhite';
import logo from '../../Assets/EmpowerCareLogo.svg';
import storiesimg from '../../Assets/storiesimg.png';
import playbtn from '../../Assets/play.svg';
import { Backdrop, CircularProgress } from '@mui/material';
// import { BubbleChat } from 'flowise-embed-react';




const Home = () => {
const [accesstoken, setscesstoken]=useState('')
const [alljobsdata , setalljobsdata] = useState();
const [isloading,setisloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setisloading(true)

      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + accesstoken);
myHeaders.append("Cookie", "BrowserId=tGOpqAwoEe-k8NUd-Hv8Ng; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1");
      const requestOptions = {
        method: "GET",
        redirect: "follow",
        headers:myHeaders,
      };
        try {
            const response = await fetch("https://empowercare.my.salesforce.com/services/apexrest/getJobRecords?requestType=getJob ", requestOptions);
            console.log('API Response:', response)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
          
            const data = (result.Result)
            console.log(data)
            
         sessionStorage.setItem('jobsData',JSON.stringify(data)); 
         setisloading(false)
            
        } catch (error) {
            console.error('Error fetching data:', error);
            sessionStorage.setItem('jobsData','');
            setisloading(false)
        };
    };
    if (accesstoken){

      fetchData()
    }
  }, [accesstoken]); 
  // useEffect(() => {
  //   const fetchData2 = async () => {
  //     const requestOptions = {
  //       method: "GET",
  //       redirect: "follow"
  //     };
  //       try {
  //           const response = await fetch("https://empowercare.me/wpjobboard/api/jobs/", requestOptions)
  //           if (!response.ok) {
  //               throw new Error('Network response was not ok');
  //           }
  //           const result = await response.json();
  //           const data = JSON.stringify(result.data)
           
  //           setalljobsdata(data)
  //        sessionStorage.setItem('jobsData',data);
  //       } catch (error) {
  //           console.error('Error fetching data:', error);
  //           sessionStorage.setItem('jobsData','');
  //       };
  //   };
  //     fetchData2()
  // }, []);
  useEffect(() => {
    const AccessToken = async () => {
      setisloading(true)
      try {
        const myHeaders = new Headers();
        myHeaders.append("Cookie", "BrowserId=tGOpqAwoEe-k8NUd-Hv8Ng; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1");
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow"
        };
    
        const response = await fetch("https://empowercare.my.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG9VTfpJmxg1yjSu9_Bb4Hl5VlsmgkOG3hUxmSwFaZMfBmLTbnQQMOndkKg0GvRAxL69uQazXAngk6xdMlk&client_secret=4181E859F4EC5A25F5BBB4170F6B92563C0654AC693BC3BF9BC86D7AFF921D70&username=ops@msgstaffing.com&password=Empowerlaunch29", requestOptions);
    
        if (!response.ok) {
          throw new Error('Failed to get access token');
        }
    
        const result = await response.json();
       
        setscesstoken(result.access_token);
        sessionStorage.setItem('token', JSON.stringify(result.access_token));
        setisloading(false)
      } catch (error) {
        console.error(error);
        setisloading(false)

      }
    };
    AccessToken();
  }, []);
  
  return (
    <>
    
     <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={isloading}
  
>
  <CircularProgress color="inherit" />
</Backdrop> 
   
      <HeaderWhite
        logoImg={logo}
      />
      <Banner 
       head1={"EMPOWERING "}
       head2={"HEALTHCARE"}
       desc1={"Your Gateway to Rewarding Healthcare Careers​"}
       desc2={"Empowering You to Find Fulfilling Contract and Per Diem Opportunities​"
        
       }
      />
      <Trusted 
      hd1={"Professionals"}
      />
      <Healthcare />
      <Approach
        heading1={"Every Job Helps the World"}
        description1={"The Ripple Effect: Making Big Waves with Every Job"}
        heading2={"Dynamic Squads: Finding the perfect job match made easy​"}
        description2={"EmpowerCare’s Dynamic Squads aren’t just teams; they’re the future of personalized, responsive healthcare staffing, redefining convenience in every match."}
        heading3={"Gain a Winning Edge: Excel with EmpowerCare Academy!"}
        description3={"Unlock Your Potential and Land Your Dream Healthcare Role Effortlessly"}
        heading4={"Shift Champions: Recognize your exceptional contributions to healthcare​"}
        description4={"Celebrating those who bring passion, joy and exceptional care.​"}    

        link1={"/professional/Professionalhelpstheworld"}
        link2={"/professional/Professionalperfectmatch"}
        link3={"/professional/Professionalgainawinning"}
        link4={"/professionals/unsung-heroes"}    
      />
      <Choose
        meta="Dynamic Squads"
        spantext="CHOOSE "
        heading="WHY"
        headingafter="EMPOWERCARE"
        description1="EmpowerCare's Dynamic Squads offer a comprehensive approach to meet all your career needs. Our personalized solutions help you achieve your professional goals while balancing your lifestyle."
        description2="Just like CPR breathes life into critical situations, our Dynamic Squads revitalize your career journey."
        boxHeading1="Convenient Staffing:"
        boxDescription1="We provide a full range of staffing solutions, covering all aspects of your professional requirements, making the process convenient for you."
        boxHeading2="Personable Approach:"
        boxDescription2="Our customized staffing plans are designed to align with your unique needs, ensuring the best fit for your career aspirations. We prioritize building strong relationships with our healthcare professionals."
        boxHeading3="Supportive Community:"
        boxDescription3="Access a vast network of highly qualified and responsible healthcare professionals who are ready to make a positive impact together."

        btnlnk="/signup"
        btntxt="Sign up"
      />
      <Impact 
      link1={"/professional/Professionalhelpstheworld"}
      link2={"/professional/Professionalhelpstheworld"}
      link3={"/professional/Professionalhelpstheworld"}
      
      blink="/signup"
      btxt="Sign up"
      />
      <Opportunity
      link_btn={"/signup"}
      />
      <Contractjob 
      link={"/professionals/Faqstemptohire"}
      />
      <Empowercare 
      link={"/signup"}
      />
      <Network 
      link={"/signup"}
      />
      <Caregivers />
      <HCareer
      link={"/signup"}
      />
      <Priemer />
      <Stories 
      img={storiesimg}
      img2={playbtn}
      video_link={"https://www.youtube.com/shorts/X5DhrVv-hk4"}
      />
      <Nextstep />
      <CareerSlider />
      <Blog />
      <Userslider 
      reviewbtn={"Quick Apply"}
      />
      <Footer />

    </>
  )
}

export default Home