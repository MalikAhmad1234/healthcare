import React from 'react';
import Home from './Pages/Home/Home';
import Seamlesss from './Pages/Home/Seamlesss';
import SeamlesssFacilities from './Pages/Home/SeamlesssFacilities';
import Facilities from './Pages/Home/Facilities';
import Career from './Pages/Home/Career';
import About from './Pages/Home/About';
import PostJob from './Pages/Home/PostJob';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Community from './Pages/Home/Community';
import Shiftmakers from './Pages/Home/Shiftmakers';
import Ceo from './Pages/Home/Ceo';
import Leadership from './Pages/Home/Leadership';
import ReferralProgram from './Pages/Home/ReferralProgram';
import Network from './Pages/Home/Network';
import Benefits from './Pages/Home/Benefits';
import Signup from './Pages/Home/Signup';
import Heroes from './Pages/Home/Heroes';
import Resources from './Pages/Home/Resources';
import NonClinical from './Pages/Home/Non-Clinical';
import DirectCareCareers from './Pages/Home/DirectCareCareers';
import Faqs from './Pages/Home/Faqs';

// google analytics

import UnsungHeroes from './Pages/Home/UnsungHeroes';
import Advantages from './Pages/Home/Advantages';
import Guide from './Pages/Home/Guide';
import ProfessionalsCareer from './Pages/Home/ProfessionalsCareer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'

// new import for header
import Faqcontracts from './Pages/Home/Faqcontracts';
import Faqlocalcontracts from './Pages/Home/Faqlocalcontracts';
import Faqperdiem from './Pages/Home/Faqperdiem';
import Faqpermanentstaffing from './Pages/Home/Faqpermanentstaffing';
import Faqstravelnursing from './Pages/Home/Faqstravelnursing';

// next folder page 
import Beaconofflexibility from './Pages/Home/Beaconofflexibility';
import Trustedpartnercontract from './Pages/Home/Trustedpartnercontract';
import Trustedpartnerpermanent from './Pages/Home/Trustedpartnerpermanent';
import Trustedpartnertemp from './Pages/Home/Trustedpartnertemp';

// folder 3

import Facilitiesbridgeleadership from './Pages/Home/Facilitiesbridgeleadership';
import Facilitiespracticestaff from './Pages/Home/Facilitiespracticestaff';
import Facilitiesskillednursing from './Pages/Home/Facilitiesskillednursing';
import Facilitiesalliedhealth from './Pages/Home/Facilitiesalliedhealth';
import Facilitiesellevatedirectcare from './Pages/Home/Facilitiesellevatedirectcare';
import Facilitiesmentalhealth from './Pages/Home/Facilitiesmentalhealth';
import Facilitiesstudenthealth from './Pages/Home/Facilitiesstudenthealth';
import Facilitiesschoolhealth from './Pages/Home/Facilitiesschoolhealth';
import Facilitiessurgicalexellence from './Pages/Home/Facilitiessurgicalexellence';
import Facilitiescorporatestaffing from './Pages/Home/Facilitiescorporatestaffing';
import Facilitieshealthsystem from './Pages/Home/Facilitieshealthsystem';
import Facilitiesheallthcenter from './Pages/Home/Facilitiesheallthcenter';

// folder 4

import Facilitiesarborassociates from './Pages/Home/Facilitiesarborassociates';
import Facilitiesayahealthcare from './Pages/Home/Facilitiesayahealthcare';
import Facilitiesfavriouthealthcarestaffing from './Pages/Home/Facilitiesfavriouthealthcarestaffing';
import Facilitiesintelycarefornurses from './Pages/Home/Facilitiesintelycarefornurses';
import Facilitiesmasmedicalstaffing from './Pages/Home/Facilitiesmasmedicalstaffing';


// Professional Pages Nav Folder 1 Differentiator 

import ProfessionalEasytouse from './Pages/Home/ProfessionalEasytouse';
import Professionalhelpstheworld from './Pages/Home/Professionalhelpstheworld';
import Professionalperfectmatch from './Pages/Home/Professionalperfectmatch';
import Professionalgainawinning from './Pages/Home/Professionalgainawinning';

// Professional Pages Nav Folder 2 faq 
  
import Faqsperdiem from './Pages/Home/Faqsperdiem';
import Faqstemptohire from './Pages/Home/Faqstemptohire';
import Faqstravelnurse from './Pages/Home/Faqstravelnurse';
import Faqspermanentstaffing from './Pages/Home/Faqspermanentstaffing';


// Professional Pages Nav Folder 3 Guide 
  
import Guideforbehavioral from './Pages/Home/Guideforbehavioral';
import Guidecrictalcare from './Pages/Home/Guidecrictalcare';
import Guideemergencyroom from './Pages/Home/Guideemergencyroom';
import Guidehomehealth from './Pages/Home/Guidehomehealth';
import Guidemedicalsurgical from './Pages/Home/Guidemedicalsurgical';
import Guideoperatingroom from './Pages/Home/Guideoperatingroom';
import Guidestepdown from './Pages/Home/Guidestepdown';
import Guidetelemetrynursing from './Pages/Home/Guidetelemetrynursing';

// Professional Pages Nav Folder 4 Jobs Options PRN
  
import Advantagesdiscoverjobs from './Pages/Home/Advantagesdiscoverjobs';
import Advantagesdiscoverideal from './Pages/Home/Advantagesdiscoverideal';
import Advantagesdreamjob from './Pages/Home/Advantagesdreamjob';
import Advantagestravelnursing from './Pages/Home/Advantagestravelnursing'

// Professional Pages Nav Folder 5 professional landing pages 
  
import Professionals2elevateadvance from './Pages/Home/Professionals2elevateadvance';
import Professionals2staffingoppertunities from './Pages/Home/Professionals2staffingoppertunities';
import Professionals2ignitepassion from './Pages/Home/Professionals2ignitepassion';
import Professionals2cnacarrers from './Pages/Home/Professionals2cnacarrers'
import Professionals2gatewayexciting from './Pages/Home/Professionals2gatewayexciting';
import Professionals2gatewaynursing from './Pages/Home/Professionals2gatewaynursing';
import Professionals2gatewaymeaningful from './Pages/Home/Professionals2gatewaymeaningful';
import Professionals2passport from './Pages/Home/Professionals2passport'

// Professional Pages footer seamless
  
import Prseamlesssarborassociates from './Pages/Home/Prseamlesssarborassociates';
import Prseamlesssayahealthcare from './Pages/Home/Prseamlesssayahealthcare';
import Prseamlesssimpactfull from './Pages/Home/Prseamlesssimpactfull';
import Prseamlesssintelycare  from './Pages/Home/Prseamlesssintelycare';
import Prseamlesssmasmedical from './Pages/Home/Prseamlesssmasmedical'
import Searchjob from './Pages/Home/SearchJob';
import ApplyJob from './Pages/Home/ApplyJob';
 



// Facilities Pillars of empowercare
import Shiftchampions from './Pages/Home/Shiftchampions';
import EmpowercareAcadmey from './Pages/Home/EmpowercareAcadmey';
import DynamicSquads from './Pages/Home/DynamicSquads';
import RippleEffect from './Pages/Home/RippleEffect';
import SeamlessSolution from './Pages/Home/SeamlessSolution';


// Request Staffing 

import RequestStaffing from './Pages/Home/RequestStaffing';
import ContactUs from './Pages/Home/ContactUs';
import PrivacyPolicy from './Pages/Home/PrivacyPolicy';
import TermofServices from './Pages/Home/TermsofServices';
import ScrollToTop from './Pages/Home/ScrollToTop';


function App() {

  return (
    <> 
      <BrowserRouter>
    <ScrollToTop/>
        <Routes>
          <Route exact path='' element={<Home/>}/>
          <Route path='/searchjob' element={<Searchjob/>} />
          <Route path='/applyjob' element={<ApplyJob/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/about/contactus' element={<ContactUs/>} />
          <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
          <Route path='/termsofservice' element={<TermofServices/>}/>


          <Route path='/facilities' element={<Facilities />} />
          <Route path='/facilities/staffing-solutions' element={<NonClinical/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/about/career' element={<Career />} />
          <Route path='/about/community' element={<Community/>} />
          <Route path='/about/ceo' element={<Ceo/>}/>
          <Route path='/resources/shift-makers' element={<Shiftmakers/>}/>
          <Route path='/about/leadership' element={<Leadership/>}/>
          <Route path='/resources/referral-program' element={<ReferralProgram/>}/>
          <Route path='/resources/network' element={<Network/>}/>
          <Route path='/resources/benefits' element={<Benefits/>}/>
          <Route path='/resources/empowercare-heroes' element={<Heroes/>}/>
          <Route path='/resources' element={<Resources/>}/>
          
          <Route path='/facilities/seamless' element={<SeamlesssFacilities/>}/>
          <Route exact path='/professionals' element={<Home/>}/>
          <Route path='professionals/seamless' element={<Seamlesss/>} />
          <Route path='/professionals/unsung-heroes' element={<UnsungHeroes/>}/>
          <Route path='/professionals/advantages' element={<Advantages/>}/>
          <Route path='/professionals/guide' element={<Guide/>}/>
          <Route path='/professionals/directcare-careers' element={<ProfessionalsCareer/>}/>
          
          <Route path='/post-job' element={<PostJob/>}/>

          <Route path='/facilities/request-staffing' element={<RequestStaffing/>} />

          

          {/* Facilities Pillars of empowercare*/}

          <Route path='/facilities/shift-champions' element={<Shiftchampions/>}/>
          <Route path='/facilities/empowercare-acadmey' element={<EmpowercareAcadmey/>}/>
          <Route path='/facilities/dynamic-squads' element={<DynamicSquads/>}/>
          <Route path='/facilities/ripple-effect' element={<RippleEffect/>}/>
          <Route path='/facilities/seamless-solutions' element={<SeamlessSolution/>}/>










          {/* folder 3 */}
          <Route path='/facilitiesbridgeleadership' element={<Facilitiesbridgeleadership/>}/>
          <Route path='/facilities/Facilitiespracticestaff' element={<Facilitiespracticestaff/>}/>
          <Route path='/facilities/Facilitiesskillednursing' element={<Facilitiesskillednursing/>}/>
          <Route path='/facilities/Facilitiesalliedhealth' element={<Facilitiesalliedhealth/>}/>
          <Route path='/facilities/Facilitiesellevatedirectcare' element={<Facilitiesellevatedirectcare/>}/>
          <Route path='/facilities/Facilitiesmentalhealth' element={<Facilitiesmentalhealth/>}/>
          <Route path='/facilities/Facilitiesstudenthealth' element={<Facilitiesstudenthealth/>}/>
          <Route path='/facilities/Facilitiesschoolhealth' element={<Facilitiesschoolhealth/>}/>
          <Route path='/facilities/Facilitiessurgicalexellence' element={<Facilitiessurgicalexellence/>}/>
          <Route path='/facilities/Facilitiescorporatestaffing' element={<Facilitiescorporatestaffing/>}/>
          <Route path='/facilities/Facilitieshealthsystem' element={<Facilitieshealthsystem/>}/>
          <Route path='/facilities/Facilitiesheallthcenter' element={<Facilitiesheallthcenter/>}/>

          


          {/* Professional Pages Nav Folder 1 defrentiator  */}

          <Route path='/professional/ProfessionalEasytouse' element={<ProfessionalEasytouse/>}/>
          <Route path='/professional/Professionalhelpstheworld' element={<Professionalhelpstheworld/>}/>
          <Route path='/professional/Professionalperfectmatch' element={<Professionalperfectmatch/>}/>
          <Route path='/professional/Professionalgainawinning' element={<Professionalgainawinning/>}/>


              {/* {"======================================================================================="} */}

          {/* facilities nav faq link */}
          <Route path='/facilities/Faqcontracts' element={<Faqcontracts/>}/>
          <Route path='/facilities/Faqlocalcontracts' element={<Faqlocalcontracts/>}/>
          <Route path='/facilities/Faqperdiem' element={<Faqperdiem/>}/>
          <Route path='/facilities/Faqpermanentstaffing' element={<Faqpermanentstaffing/>}/>
          <Route path='/facilities/Faqstravelnursing' element={<Faqstravelnursing/>}/>

          <Route path='/facilities/directcare-careers' element={<DirectCareCareers/>}/>5
          <Route path='/facilities/Beaconofflexibility' element={<Beaconofflexibility/>}/>3
          <Route path='/facilities/Trustedpartnercontract' element={<Trustedpartnercontract/>}/>2
          <Route path='/facilities/Trustedpartnerpermanent' element={<Trustedpartnerpermanent/>}/>1
          <Route path='/facilities/Trustedpartnertemp' element={<Trustedpartnertemp/>}/>4

           {/* {"======================================================================================="} */}
          


          {/* folder 4 */}

          <Route path='/facilities/Facilitiesarborassociates' element={<Facilitiesarborassociates/>}/>
          <Route path='/facilities/Facilitiesayahealthcare' element={<Facilitiesayahealthcare/>}/>
          <Route path='/facilities/Facilitiesfavriouthealthcarestaffing' element={<Facilitiesfavriouthealthcarestaffing/>}/>
          <Route path='/facilities/Facilitiesintelycarefornurses' element={<Facilitiesintelycarefornurses/>}/>
          <Route path='/facilities/Facilitiesmasmedicalstaffing' element={<Facilitiesmasmedicalstaffing/>}/>

          

          {/* Professional Pages Nav Folder 2 Faq  */}
          <Route path='/professionals/faqs' element={<Faqs/>}/>
          <Route path='/professionals/Faqsperdiem' element={<Faqsperdiem/>}/> 
          <Route path='/professionals/Faqstemptohire' element={<Faqstemptohire/>}/>
          <Route path='/professionals/Faqstravelnurse' element={<Faqstravelnurse/>}/>
          <Route path='/professionals/Faqspermanentstaffing' element={<Faqspermanentstaffing/>}/>


          {/* Professional Pages Nav Folder 3 guide  */}

          <Route path='/guide/Guideforbehavioral' element={<Guideforbehavioral/>}/>
          <Route path='/guide/Guidecrictalcare' element={<Guidecrictalcare/>}/>
          <Route path='/guide/Guideemergencyroom' element={<Guideemergencyroom/>}/>
          <Route path='/guide/Guidehomehealth' element={<Guidehomehealth/>}/>
          <Route path='/guide/Guidemedicalsurgical' element={<Guidemedicalsurgical/>}/>
          <Route path='/guide/Guideoperatingroom' element={<Guideoperatingroom/>}/>
          <Route path='/guide/Guidestepdown' element={<Guidestepdown/>}/>
          <Route path='/guide/Guidetelemetrynursing' element={<Guidetelemetrynursing/>}/>


          {/* Professional Pages Nav Folder 4 jobs options PRN  */}

          <Route path='/professional/Advantagesdiscoverjobs' element={<Advantagesdiscoverjobs/>}/>
          <Route path='/professional/Advantagesdiscoverideal' element={<Advantagesdiscoverideal/>}/>
          <Route path='/professional/Advantagesdreamjob' element={<Advantagesdreamjob/>}/>
          <Route path='/professional/Advantagestravelnursing' element={<Advantagestravelnursing/>}/>


          {/* Professional Pages Nav Folder 5 professional landing pages  */}

          <Route path='/professional/Professionals2elevateadvance' element={<Professionals2elevateadvance/>}/>
          <Route path='/professional/Professionals2staffingoppertunities' element={<Professionals2staffingoppertunities/>}/>
          <Route path='/professional/Professionals2ignitepassion' element={<Professionals2ignitepassion/>}/>
          <Route path='/professional/Professionals2cnacarrers' element={<Professionals2cnacarrers/>}/>
          <Route path='/professional/Professionals2gatewayexciting' element={<Professionals2gatewayexciting/>}/>
          <Route path='/professional/Professionals2gatewaynursing' element={<Professionals2gatewaynursing/>}/>
          <Route path='/professional/Professionals2gatewaymeaningful' element={<Professionals2gatewaymeaningful/>}/>
          <Route path='/professional/Professionals2passport' element={<Professionals2passport/>}/>


          {/* Professional Pages Nav Folder 6 seamless */}

          <Route path='/professional/Prseamlesssarborassociates' element={<Prseamlesssarborassociates/>}/>
          <Route path='/professional/Prseamlesssayahealthcare' element={<Prseamlesssayahealthcare/>}/>
          <Route path='/professional/Prseamlesssimpactfull' element={<Prseamlesssimpactfull/>}/>
          <Route path='/professional/Prseamlesssintelycare' element={<Prseamlesssintelycare/>}/>
          <Route path='/professional/Prseamlesssmasmedical' element={<Prseamlesssmasmedical/>}/>

        </Routes >
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;