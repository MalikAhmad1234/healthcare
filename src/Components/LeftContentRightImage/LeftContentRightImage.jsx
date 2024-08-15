import React from 'react';
import './LeftContentRightImage.scss';
import empowercareimg from '../../Assets/transform.png';
import activearrow from '../../Assets/active-arrow.png';

const LeftContentRightImage = () => {
    return (
        <div className="left_image_right_content">
            <div className="container">
                <div className="empowercare-wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="left-content">
                                <span className="meta">Who We Are</span>
                                <h2 className="heading">
                                    Transform
                                    <span className='text_grad_red'> Healthcare </span> Staffing, Empower Lives
                                </h2>
                                <p className="description">At EmpowerCare, we offer a wide range of staffing options to meet your unique needs. Our extensive network of pre-screened healthcare opportunities includes:</p>
                            
                                <div class="priemer-cta">
                                    <a class="btn_red" href="/signup">Sign Up</a>
                                    <div className="active-img">
                                        <img src={activearrow} alt="activearrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={empowercareimg} alt="empowercareimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftContentRightImage