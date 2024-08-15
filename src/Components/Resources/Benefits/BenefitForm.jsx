import newsletterarrow from '../../../Assets/h3_newsletter_shape0.png'
import './BenefitForm.scss'
const BenefitForm=()=>{
    return(<>
    <div className="benefit_form">
      <div className="container">
          <div className="benefit-form-wrapper">
              <div className="row">
                  <div className="col-lg-6 col-md-12">
                      <div className="left-content">
                          <span className="meta">JOIN US NOW</span>
                          <h2 className="heading">
                              LETS MAKE A
                              <span className='text_grad_red'> DIFFERENCE </span> TOGETHER
                          </h2>
                          <p className="description">Content EmpowerCare is a staffing agency that really cares about you and your growth. We're here to help you have a career that makes you happy and fulfilled.</p>
                          <p>Come join our team and experience the EmpowerCare difference!</p><br />
                          
                            <div className='row'>
                                <div className='btns'>
                              <a class="btn_red" href="/">QUICK APPLY</a>
                              <a href="/" className='learn_more'>CONTACT US</a>
                              </div>
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
                              <input type="text" placeholder="Phone Number" className="rounded-input" />
                            </div>
                            <input type="text" placeholder="Email Address" className="rounded-input" />
                            <select>
                              <option value="option1">Area of Speciality</option>
                              <option value="option2">Area of Speciality</option>
                              <option value="option3">Area of Speciality</option>
                            </select>
                            <select>
                              <option value="option1">Years of Experience</option>
                              <option value="option2">Years of Experience</option>
                              <option value="option3">Years of Experience</option>
                            </select>
                            <select>
                              <option value="option1">Preffered Location</option>
                              <option value="option2">Preffered Location</option>
                              <option value="option3">Preffered Location</option>
                            </select>
                            <button className='contact-submit-btn' type="submit">JOIN NOW</button>
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
export default BenefitForm