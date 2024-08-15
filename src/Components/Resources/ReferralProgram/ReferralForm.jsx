import './ReferralForm.scss'
import newsletterarrow from '../../../Assets/h3_newsletter_shape0.png'
import { FiArrowDownRight } from "react-icons/fi";
const ReferralForm=()=>{
    return(<>
    <div className="content_with_referral_form">
      <div className="container">
      
                <h1 className='first_text'><b><span className='text_grad_red'>REFERRAL</span> PROGRAM</b></h1>
            
          <div className="empowercare-wrapper">
            
              <div className="row">
                  <div className="col-lg-6 col-md-12">
                      <div className="left-content">
                          <span  className="meta"><b>TRAVEL NURSES</b></span>
                          <h5 className="heading">
                              REFER A TRAVEL NURSE
                              <span className='text_grad_red'><br /><b> EARN $750</b> </span> 
                          </h5>
                          
                            <p className='p1'>YOUR NETWORK,YOUR REWARDS</p>
                            <p className='description1'>Do you know a passionate travel nurse looking for their next adventure? Refer them to EmpowerCare and earn $750*! </p><br />
                          
                          <p className="description">We're seeking skilled travel nurses to join our team and make a difference in patient lives across the country. Help us connect with your network and be rewarded for your efforts.</p>
                          
                          <br />
                          <div className='btns'>
                              <a class="btn_red" href="/signup">Sign Up</a>
                              <a class="learn_more" href="/">Learn More</a>
                              </div><br />
                           
                              <div className='last-txt'>
                            <p>*TERMS AND CONDITION APPLY</p>
                          </div>
                         
                      </div>
                     
                  </div>
                  <div className="col-lg-6 col-md-12">
                      <div className="right-content">
                        <img className='form-icon' src={newsletterarrow} alt="" />
                        <div className='form-wrapper'>
                          <h6>Your Information</h6>
                          <form className='contact_form'>
                          <div className='row-input'>
                              <input type="text" placeholder="First Name" className="rounded-input" />
                              <input type="text" placeholder="Last Name" className="rounded-input" />
                            </div>
                            <div className='row-input'>
                              <input type="text" placeholder="Email Address" className="rounded-input" />
                              <input type="text" placeholder="Phone Number" className="rounded-input" />
                            </div><br />
                            <h6>Referral Information</h6>
                            <div className='row-input'>
                              <input type="text" placeholder="First Name" className="rounded-input" />
                              <input type="text" placeholder="Last Name" className="rounded-input" />
                            </div>
                            <div className='row-input'>
                              <input type="text" placeholder="Email Address" className="rounded-input" />
                              <input type="text" placeholder="Phone Number" className="rounded-input" />
                            </div>
                            <div className='row-input'>
                              <input type="text" placeholder="City/State" className="rounded-input" />
                              <input type="text" placeholder="Certification" className="rounded-input" />
                            </div>
                            <input type="text" placeholder="Speciality" className="rounded-input" />
                           <div className='ref-btn'>
                            <button className='contact-submit-btn' type="submit">SUBMIT REFERRAL <FiArrowDownRight /></button></div>
                          </form>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>)
}
export default ReferralForm