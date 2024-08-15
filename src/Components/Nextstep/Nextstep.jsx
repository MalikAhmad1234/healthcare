import React from 'react';
import './Nextstep.scss';
import nextstepimg from '../../Assets/nextStep.png';
import downarrow from '../../Assets/down-link-arrow.svg';
import { Link } from 'react-router-dom';

const Nextstep = () => {
    return (
        <div className="nextstep-sec">
            <div className="nextstep-container">
                <div className="nextstep-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="right-content">
                                    <div className="section-img">
                                        <img src={nextstepimg} alt="nextstepimg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="left-content">
                                    <span className="meta">Who We Are</span>
                                    <h2 className="heading">
                                        Take the
                                        <span> Next </span> 
                                        Step
                                    </h2>
                                    <p className="description">Join us at EmpowerCare to embark on the next step of your transformative healthcare journey. We promise to help you 'Unleash your professional potential and make a meaningful impact' - We are dedicated to your success.​</p>
                                    <p className="main-description">Explore Career Opportunities</p>
                                    <p className="description">EmpowerCare Can Assist You in Finding Your Dream Healthcare Career, Whether Short-Term or Long-Term.</p>
                                
                                    <div className="sec-btns">
                                        <Link  to="/searchjob?job=Registered%20Nurse%20(RN)%20%20%20%20&specialty=Operating%20Room&city_state=US%20(REMOTE)" className="learn-btn">
                                            <span>Search Job Openings</span>
                                            <img src={downarrow} alt="downarrow" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nextstep