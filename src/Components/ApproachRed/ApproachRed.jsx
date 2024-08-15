import React from 'react';
import { Link } from 'react-router-dom';
import './ApproachRed.scss';
import approach1 from '../../Assets/approach_red_1.jpeg';
import approach2 from '../../Assets/approach_red_2.jpeg';
import approach3 from '../../Assets/approach_red_3.jpeg';

const ApproachRed = () => {
    return (
        <>
            <div className="approach-red">
                <div className="container">
                    <div className="approach-wrapper">
                        <div className="top-content">
                            <h2 className="heading">
                                The EmpowerCare   
                                <span className='text_grad_red'> Difference </span>
                            </h2>
                            <p className="description">EmpowerCare's Unique Approach for Healthcare Professionals</p>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="approach-box">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={approach1} alt="approach1" />
                                        </div>
                                        <div className="text-area">
                                            <h3 className="heading">Every Job Helps the World</h3>
                                            <p className="description">The Ripple Effect: Making Big Waves with Every Job</p>
                                        </div>
                                    </div>
                                    <div className="right-sec">
                                        <Link to={"/facilities/ripple-effect"}>
                                        <button className='approach-btn'>
                                            <span>Learn More</span>
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="approach-box active">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={approach2} alt="approach1" />
                                        </div>
                                        <div className="text-area">
                                            <h3 className="heading">Finding the Perfect Match Made Easy! Dynamic Squads</h3>
                                            <p className="description">EmpowerCare’s Dynamic Squads aren’t just teams; they’re the future of personalized,<br/> responsive healthcare staffing, redefining convenience in every match.</p>
                                        </div>
                                    </div>
                                    <div className="right-sec">
                                        <Link to={"/facilities/dynamic-squads"}>
                                        <button className='approach-btn'>
                                            <span>Learn More</span>
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="approach-box">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={approach3} alt="approach1" />
                                        </div>
                                        <div className="text-area">
                                            <h3 className="heading">Gain a Winning Edge: Excel with EmpowerCare Academy!</h3>
                                            <p className="description">Unlock Your Potential and Land Your Dream Healthcare Role Effortlessly</p>
                                        </div>
                                    </div>
                                    <div className="right-sec">
                                        <Link to={"/facilities/empowercare-acadmey"}>
                                        <button className='approach-btn'>
                                            <span>Learn More</span>
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="bottom-btn">
                            <button className="signup">
                                <span>Sign up</span>
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApproachRed