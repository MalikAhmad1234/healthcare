import React from 'react';
import './Careerpaths.scss';
import { Link } from 'react-router-dom';
import activearrow from '../../Assets/active-arrow.png';
import downarrow from '../../Assets/down-link-arrow.svg';

const Careerpaths = ({ meta,heading1, heading2, heading3, description, description2, img,btn1,NoArrow }) => {
    return (
        <div className="empowercare-sec">
            <div className="container">
                <div className="empowercare-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta">{meta}</span>
                                <h2 className="heading">
                                    {heading1}
                                    <span> {heading2}</span> <br />
                                    {heading3}
                                </h2>
                                <p className="description">{description}</p><br />
                                <p className='description'>{description2}</p>
                                {/* <ul>
                                    <li>
                                        <span>Travel Nursing Jobs ➔</span>
                                    </li>
                                    <li>
                                        <span>Per Diem Nursing Jobs ➔</span>
                                    </li>
                                    <li>
                                        <span>Temporary-to-Permanent Positions ➔</span>
                                    </li>
                                    <li>
                                        <span>Permanent Placement ➔</span>
                                    </li>
                                    <li>
                                        <span>Local Contract Jobs ➔</span>
                                    </li>
                                </ul> */}

                                <div className="sec-btns">
                                    <Link to="/post-job" className="learn-btn">
                                        <span>{btn1}</span>
                                        {!NoArrow && <img src={downarrow} alt="downarrow" />}
                                    </Link>
                                    <Link to={"/about/contactus"} className="btn contact-btn">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={img} alt="empowercareimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careerpaths