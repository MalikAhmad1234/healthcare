import React from 'react';
import './AboutEmpower.scss';
import empower from '../../Assets/empower1.png';
import empower2 from '../../Assets/empower2.png';
import { Link } from 'react-router-dom';

const AboutEmpower = () => {
    return (
        <div className="about-empower-sec">
            <div className="opportunity-container">
                <div className="opportunity-wrapper">
                    <div className='img_wrapper'>
                        <img className='img1' src={empower} />
                        <img className='img2' src={empower2} />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="left-content">
                                    <span className="meta">About Us</span>
                                    <h2 className="heading">
                                        About <span>EmpowerCare</span>
                                    </h2>
                                    <p className="description">EmpowerCare is a leading nursing and healthcare agency specializing in temp-to-hire staffing solutions for healthcare facilities nationwide. With years of experience and a deep understanding of the healthcare industry, we are committed to helping facilities find the perfect long-term fit while maintaining staffing flexibility.</p>
                                    <div className="sec-btns">
                                        <Link className="learn-btn bg-white">
                                            <span>Contact Us</span>
                                        </Link>
                                        <Link className="btn-transparent">
                                            <span>Learn More</span>
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

export default AboutEmpower