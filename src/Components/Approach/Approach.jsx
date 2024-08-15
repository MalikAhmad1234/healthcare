import React from 'react';
import { Link } from 'react-router-dom';
import './Approach.scss';
import circle1 from '../../Assets/circle1.png';
import circle2 from '../../Assets/circle2.png';
import circle3 from '../../Assets/circle3.png';
import circle4 from '../../Assets/circle4.png';

const Approach = ({heading1,description1,heading2,description2,heading3,description3,heading4,description4,heading5,description5,link1,link2,link3,link4,link5}) => {
    
    return (
        <>
            <div className="approach-sec">
                <div className="container">
                    <div className="approach-wrapper">
                        <div className="top-content">
                            <h2 className="heading">
                                     OUR  
                                <span> UNIQUE </span>
                                APPROACH​
                            </h2>
                            <p className="description">EmpowerCare's Unique Approach for Healthcare Professionals</p>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="approach-box">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={circle1} alt="approach1" />
                                        </div>
                                        <div className="text-area">
                                            <h3 className="heading">{heading1}</h3>
                                            <p className="description">{description1}</p>
                                        </div>
                                    </div>
                                    <div className="right-sec">
                                        <a className='approach-btn' href={link1}> 
                                            <span>Learn More</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="approach-box active">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={circle2} alt="approach2" />
                                        </div>
                                        <div className="text-area">
                                            <h3 className="heading">{heading2}</h3>
                                            <p className="description">{description2}</p>
                                        </div>
                                    </div>
                                    <div className="right-sec">
                                        <a className='approach-btn' href={link2}> 
                                            <span>Learn More</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="approach-box">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={circle3} alt="approach1" />
                                        </div>
                                        <div className="text-area">
                                        <h3 className="heading">{heading3}</h3>
                                            <p className="description">{description3}</p>
                                        </div>
                                    </div>
                                    <div className="right-sec">
                                        <a className='approach-btn' href={link3}> 
                                            <span>Learn More</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="approach-box">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={circle4} alt="approach1" />
                                        </div>
                                        <div className="text-area">
                                        <h3 className="heading">{heading4}</h3>
                                            <p className="description">{description4}</p>
                                        </div>
                                    </div>
                                    <div className="right-sec">
                                        <a className='approach-btn' href={link4}> 
                                            <span>Learn More</span>
                                        </a>
                                    </div>
                                </div>
                                {heading5 && heading5.trim() !== '' && (
                                    <div className="approach-box">
                                        <div className="left-sec">
                                            <div className="sec-img">
                                                <img src={circle4} alt="approach1" />
                                            </div>
                                            <div className="text-area">
                                            <h3 className="heading">{heading5}</h3>
                                                <p className="description">{description5}</p>
                                            </div>
                                        </div>
                                        <div className="right-sec">
                                            <a className='approach-btn' href={link5}> 
                                                <span>Learn More</span>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="bottom-btn">
                            <Link to="/signup" className="signup">
                                <span>Sign up</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Approach