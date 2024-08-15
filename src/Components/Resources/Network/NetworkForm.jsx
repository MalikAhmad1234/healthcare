import './NetworkForm.scss'
import newsletter from '../../../Assets/h3_newsletter_shape0.png'
import { FiArrowDownRight } from "react-icons/fi";
const NetworkForm=()=>{
    return (<>
    <div className="network-form">
                  <div className='container'>
                      <div className='network-form-wrapper'>
                        <img className='form-icon' src={newsletter} alt="" />
                          <br /><h6>Your Information</h6>
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
    </>
    )
}
export default NetworkForm