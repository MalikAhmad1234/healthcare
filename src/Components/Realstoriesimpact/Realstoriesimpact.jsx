import React from 'react';
import './Realstoriesimpact.scss';
import storiesimg from '../../Assets/storiesimg.png';
import imageone from '../../Assets/banner5-rounded.png';
import imagetwo from '../../Assets/section-image-realimpact-2.png';
import downarrow from '../../Assets/down-link-arrow.svg';

import Stories from '../Stories/Stories';

const Realstoriesimpact = () => {
    return (
    <div className="real-impact-stories">
        <div className="real-impact-stories-container">
            <div className="stories-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="left-content">
                                <span className="meta">Who We Are</span>
                                <h2 className="heading">
                                    Real 
                                    <span> Stories, </span> <br />
                                    Real Impact
                                </h2>
                                <p className="description">"EmpowerCare has been instrumental in helping me achieve my career goals. Their dedicated team and comprehensive solutions have opened up opportunities for growth and professional fulfillment."</p>
                                <p className="main-description">- Sarah, Registered Nurse</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={imageone} alt="storiesimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row emp_row">
                        <div className="col-lg-6 col-md-12">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={imagetwo} alt="storiesimg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="left-content">
                                <span className="meta">Who We Are</span>
                                <h2 className="heading">
                                    Take the 
                                    <span> Next </span> Step
                                </h2>
                                <p className="description">Join forces with EmpowerCare Healthcare to transform healthcare delivery across
all settings. With our brand promise to help you "Unleash Your Facility's Potential,
Make a Meaningful Impact," we are committed to your success. </p>
                                <p className="description">Contact us today for a free consultation and experience the difference a trusted
medical staffing agency can make.</p>
                            </div>
                            <div className="sec-btns">
                                <a href='/about/contactus' className="learn-btn">Request a Free Consultation
                                {/* <img src={downarrow} alt="downarrow" /> */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Realstoriesimpact