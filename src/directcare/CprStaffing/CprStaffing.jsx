import React from 'react';
import './CprStaffing.scss';
// import opportunityimg from '../../Assets/opportunity-img.png';
import opportunityimg from '../../Assets/cpr-staffing-img.png';
import downarrow from '../../Assets/down-link-arrow.svg';

const Opportunity = () => {
    return (
        <div className="cpr-staffing-container">
            <div className="opportunity-container">
                <div className="opportunity-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="left-content">
                                    <span className="meta">ABOUT US</span>
                                    <h2 className="heading">
                                        Your CPR Staffic <span>Solution</span>
                                    </h2>
                                    <p className="description">With 18+ years of experience, EmpowerCare's mission is empowering healthcare institutions and professionals.</p>
                                    <p className="description">Celebrating over 1,000,000 shifts served, our vision is doubling the impact to 2 million by 2031.</p>
                                
                                    <div className="sec-btns">
                                        <button className="learn-btn">
                                            <span>Dynamic Squads</span>
                                        </button>
                                        <button className="about-us-btn">
                                            <span>About Us</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right-content">
                                    <div className="section-img">
                                        <img src={opportunityimg} alt="opportunityimg" />
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

export default Opportunity