import React from 'react';
import './Healthcare.scss';
import { Link } from 'react-router-dom';
import healthcareimg from '../../Assets/difference.png';
import activearrow from '../../Assets/active-arrow.png';

const Healthcare = () => {
    return (
        <div className="healthcare-sec">
            <div className="container">
                <div className="healthcare-wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={healthcareimg} alt="healthcareimg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="left-content">
                                <span className="meta">Who We Are</span>
                                <h2 className="heading">
                                    Join 
                                    <span> EmpowerCare </span>
                                     & Make a Difference
                                    in Healthcare
                                </h2>
                                <ul>
                                    <li>
                                       <span>➔ Opportunities for nurses, therapists, counselors, and healthcare professionals</span>
                                    </li>
                                    <li>
                                       <span>➔ Contract, travel, and per diem positions available </span>
                                    </li>
                                    <li>
                                       <span>➔ Your contributions directly impact healthcare outcomes</span>
                                    </li>
                                    <li>
                                       <span>➔ Work in preferred settings like hospitals, urgent care, schools, and more</span>
                                    </li>
                                    <li>
                                       <span>➔ Supportive network for your professional journey</span>
                                    </li>
                                </ul>
                            
                                <div className="sec-btns">
                                    <Link to="/signup" className="learn-btn">
                                        <span>Sign up</span>
                                    </Link>
                                    <div className="active-img">
                                        <img src={activearrow} alt="activearrow" />
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

export default Healthcare