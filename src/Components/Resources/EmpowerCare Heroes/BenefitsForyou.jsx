import './BenefitsForyou.scss'
import img from '../../../Assets/Gift card-pana.png'
const BenefitsForyou=()=>{
    return(  <>
         <div className="benefits-for-you">
            <div className="container">
                <div className="empowercare-wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="left-content">
                                <span className="meta">EMPOWERING HEALTHCARE RESOURCES</span>
                                <h2 className="heading">
                                    
                                    <span className='text_grad_red'>  BENEFITS </span> THAT CARE FOR YOU
                                </h2>
                                <p className="description">At EmpowerCare, we understand that as a healthcare professional, your passion
                                lies in making a difference in patients' lives.
                                </p>
                                <p>We're here to support you in that mission by providing benefits that care for you
                                  holistically, so you can focus on what you do best – delivering exceptional care.</p><br/>
                                <div class="priemer-cta">
                                    <a class="btn_red" href="/">APPLY NOW</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={img} alt="empowercareimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>)
}
export default BenefitsForyou