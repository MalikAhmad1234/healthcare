import React from 'react';
import { Link } from 'react-router-dom';
import './Caregivers.scss';
import linkarrow from '../../Assets/linkarrow.svg';

const Caregivers = () => {
    return (
        <div className="caregivers-sec">
            <div className="caregivers-sec-bg">
                <div className="container">
                    <div className="caregivers-wrapper">
                        <div className="top-content">
                            <h2 className="heading">
                                For
                                <span> PASSIONATELY </span>
                                CURIOUS CAREGIVERS​  
                            </h2>
                            <p className="description">Over 500K purpose-driven shifts performed by compassionate professionals from nurses to
                                recreation therapists, all united in uplifting possibilities within healthcare.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="link-items">
                                    <Link className="link-item" to="/">
                                        <span>For Compassionate Healers - those who see it as more than 'just a job'​</span>
                                        {/* <img src={linkarrow} alt="linkarrow" /> */}
                                    </Link>
                                    <Link className="link-item" to="/">
                                        <span>For those experiencing burnout - relentless work can leave you emotionally and physically exhausted.​</span>
                                        {/* <img src={linkarrow} alt="linkarrow" /> */}
                                    </Link>
                                    <Link className="link-item" to="/">
                                    <span>For the Unsung Heroes: Your tireless commitments will no longer go unnoticed.​</span>
                                        {/* <img src={linkarrow} alt="linkarrow" /> */}
                                    </Link>
                                    <Link className="link-item" to="/">
                                        <span>For the difference makers: those who strive to create a lasting impact​</span>
                                        {/* <img src={linkarrow} alt="linkarrow" /> */}
                                    </Link>
                                    <Link className="link-item" to="/">
                                        <span>For those seeking autonomy: dedicated to care but in need of work-life balance​</span>
                                        {/* <img src={linkarrow} alt="linkarrow" /> */}
                                    </Link>
                                </div>
                                <div className="bottom-text">
                                    <p className="meta">With a goal of 2M transformative shifts, join our diverse community driven by care and inspired by healthcare's boundless potential.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Caregivers