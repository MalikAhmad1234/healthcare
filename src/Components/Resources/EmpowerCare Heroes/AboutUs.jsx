import './AboutUs.scss'

import activearrow from '../../../Assets/active-arrow.png'
const AboutUs=()=>{
    return(<>
    <div class="Aboutus-container">
  <div class="container">
  
  <div className="last-container">
  <h6><b>ABOUT US</b></h6>
  <h1><b>WHO WE  <span className='text_grad_red'>ARE</span><br />
   </b> </h1><br />
   <div className='p-txt'>
   <p>EmpowerCare is more than just a staffing agency. We're a partner in your journey as a healthcare professional. Founded by Jamal Mahijibhai, a registered nurse, EmpowerCare is driven by a deep understanding of the challenges and triumphs that healthcare professionals experience. 
  </p> <br />
  <p>Our mission is to empower you with the support, flexibility, and opportunities you need to thrive in your career and personal life</p>
  </div>
  <div className='su-btn'>
    <div className='btn-wrapper'>
    <a className='btn_red'>SIGNUP</a>
    </div>
    <div className='arrow_img'>
      <img className='arr-img' src={activearrow} alt="arrow" />
    </div>
  </div><br />
  </div>
  </div>
  </div>
  
    </>)
}
export default AboutUs