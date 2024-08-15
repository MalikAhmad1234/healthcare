import React from 'react';
import downarrow from '../../Assets/down-link-arrow.svg';
import newsletterarrow from '../../Assets/h3_newsletter_shape0.png';
import './JoiningForm.scss';

const JoiningForm = ({description, heading}) => {
  return ( 
    <>
    <div className="joining-form-sec">
      <div className="container">
          <div className="empowercare-wrapper">
              <div className="row">
                  <div className="col-lg-6 col-md-12">
                      <div className="left-content">
                          <span className="meta">JOIN US NOW</span>
                          <h2 className="heading">
                              Enhance Your <span>Efficiency</span>
                          </h2>
                          <h2 style={{fontSize:'22px', fontWeight:'bold'}}>
                            {heading}
                          </h2>
                          <p className="description">{description}</p>
                      
                          <div class="join-now-btn-container">
                           <a href="/facilities/request-staffing">
                              <button className='contact-submit-btn' type="submit">
                                <span>REQUEST STAFFING</span>
                                <img src={downarrow} alt="activearrow" />
                              </button>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                      <div className="right-content">
                        <img className='form-icon' src={newsletterarrow} alt="" />
                        <div className='form-wrapper'>
                          <h4>JOIN EMPOWERCARE</h4>
                          <form className='contact_form'>
                            <div className='row-input'>
                            <input type="text" placeholder="Full Name" className="rounded-input" />
                              <input type="text" placeholder="Phone No" className="rounded-input" />
                            </div>
                            <input type="text" placeholder="Email Address" className="rounded-input" />
                            <select>
                              <option value="option1">Area of speciality</option>
                              
                            </select>
                            <select>
                              <option value="option1">Years of experience</option>
                              
                            </select>
                            <select>
                              <option value="option1">Preffered Location(s)</option>
                              
                            </select>
                            <div className='join-now-btn-container'>
                              <button className='contact-submit-btn' type="submit">
                                <span>JOIN NOW</span>
                                <img src={downarrow} alt="activearrow" />
                              </button>
                            </div>
                          </form>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default JoiningForm