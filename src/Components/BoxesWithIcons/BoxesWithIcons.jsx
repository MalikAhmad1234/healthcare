import React from 'react';
import { Link } from 'react-router-dom';
import './BoxesWithIcons.scss';
import "react-multi-carousel/lib/styles.css";
import job1 from '../../Assets/logo1.png';
import job2 from '../../Assets/logo2.png';
import job3 from '../../Assets/logo3.png';
import job4 from '../../Assets/logo4.png';
import rightarrow from '../../Assets/right-arrow.svg';
import empower1img from '../../Assets/empower1.png';
import empower2img from '../../Assets/empower2.png';
import empower3img from '../../Assets/services_icon02.png';

const BoxesWithIcons = () => {
    return (
        <div className="boxes-with-icons">
            <div className="priemer-container">
                <div className="priemer-wrapper">
                    <div className="empoer1">
                        <img src={empower1img} alt="empower1img" />
                    </div>
                    <div className="empoer2">
                        <img src={empower2img} alt="empower2img" />
                    </div>
                    <div className="empoer3">
                        <img src={empower3img} alt="empower2img" />
                    </div>
                    <div className="container">
                        <div className="top-content">
                            <span className="meta">Who We are</span>
                            <h2 className="heading">
                                EmpowerCare's 
                                <span> Unique </span>
                                Approach 
                            </h2>
                            <p className="description">Act Fast! Apply by today is date + 5 to secure your exclusive spot! Seize this rare opportunity to join our prestigious network of Premier Healthcare Professionals within the next 5 days. Gain access to top-tier healthcare jobs, unparalleled support, and career-accelerating benefits. Here is what awaits you:</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="job-box">
                                    <div className="job-logo">
                                        <img src={job1} alt="job1" />
                                    </div>
                                    <h4 className="heading">Seamless Pledge</h4>
                                    <p className="description">We guarantee a hassle-free and efficient staffing experience, ensuring your facility has the right professionals at the right time, every time.</p>
                                    <Link to="/about/career" className="learn-more">
                                        <span>Learn More</span>
                                        <img src={rightarrow} alt="rightarrow" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="job-box active">
                                    <div className="job-logo">
                                        <img src={job2} alt="job2" />
                                    </div>
                                    <h4 className="heading">Community Impact</h4>
                                    <p className="description">Our Ripple Effect initiative contributes to community healthcare projects, demonstrating our commitment to making a positive impact.</p>
                                    <Link to="/about/career" className="learn-more">
                                        <span>Learn More</span>
                                        <img src={rightarrow} alt="rightarrow" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="job-box">
                                    <div className="job-logo">
                                        <img src={job3} alt="job3" />
                                    </div>
                                    <h4 className="heading">CPR Approach</h4>
                                    <p className="description">Our Convenient, Personable, and Responsive approach ensures a staffing experience tailored to your facility's unique needs, with unparalleled service and support.</p>
                                    <Link to="/about/career" className="learn-more">
                                        <span>Learn More</span>
                                        <img src={rightarrow} alt="rightarrow" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="job-box">
                                    <div className="job-logo">
                                        <img src={job4} alt="job3" />
                                    </div>
                                    <h4 className="heading">Cutting-Edge Technology</h4>
                                    <p className="description">Our advanced matching technology connects you with ideal healthcare professionals based on your specific requirements.</p>
                                    <Link to="/about/career" className="learn-more">
                                        <span>Learn More</span>
                                        <img src={rightarrow} alt="rightarrow" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='btn_facilities_grad'>
                            <a href='/about/career'>Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxesWithIcons