import React from 'react';
import './Contractjob.scss';
import job1 from '../../Assets/job1.png';
import job2 from '../../Assets/job2.png';
import job3 from '../../Assets/job3.png';
import { Link } from 'react-router-dom';

const Contractjob = (props) => {
    return (
        <div className="contractjob-sec">
            <div className="container">
                <div className="contractjob-wrapper">
                    <div className="top-content">
                        <h2 className="heading">
                            Effortless 
                            <span> Contract </span>
                            Jobs
                        </h2>
                        <p className="description">Unlock Your Potential with Contract Jobs, Effortlessly</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={job1} alt="job1" />
                                </div>
                                <h4 className="heading">Join EmpowerCare <br />For Free</h4>
                                <p className="description">Sign up at no cost. Connect with our supportive team, explore personalized opportunities, and empower your career in healthcare with efficiency and excellence.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={job2} alt="job2" />
                                </div>
                                <h4 className="heading">Discover and Match with Premier <br />Jobs, Effortlessly</h4>
                                <p className="description">Forget the hassle of job searching. Share your aspirations, and we'll swiftly match you with leading healthcare roles, proving that finding your perfect position can be simple and stress-free.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="job-box active">
                                <div className="job-logo">
                                    <img src={job3} alt="job3" />
                                </div>
                                <h4 className="heading">Experience Rewarding <br />Healthcare Roles</h4>
                                <p className="description">Competitive compensation is a given, allowing you to focus on your passion for care. We ensure that advancing in your healthcare career is not only financially rewarding but also deeply meaningful.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-btns-row">
                        <Link to="/signup" className="signup-btn">
                            <span>Sign up</span>
                        </Link>
                        <a href={props.link} className="learnmore-btn">
                            <span>Learn more</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contractjob