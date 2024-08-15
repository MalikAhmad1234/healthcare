import React from 'react';
import './Choose1.scss';
import { Link } from 'react-router-dom';

const Choose1 = (props) => {
    return (
        <div className="choose-sec1">
            <div className="choose-container">
                <div className="choose-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="right-content">
                                    <div className="content-row">
                                        <div className="content-box active">
                                            <h5 className="heading">{props.crHead1}</h5>
                                            <p className="description">{props.crdesc1}</p>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="heading">{props.crHead2}</h5>
                                            <p className="description">{props.crdesc2}</p>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="heading">{props.crHead3}</h5>
                                            <p className="description">{props.crdesc3}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="left-content">
                                    <span className="meta">{props.meta}</span>
                                    <h2 className="heading">
                                        {props.heading} <span> {props.spantext}</span> {props.headingafter} 
                                    </h2>
                                    <p className="description">{props.description1}</p>
                                    <p className="description">{props.description2}</p>
                                
                                    <div className="sec-btns">
                                        <Link to="/professional/Professionalhelpstheworld" className="learn-btn">
                                            <span>Learn More</span>
                                        </Link>
                                        <Link to="/signup" className="signup-btn">
                                            <span>Sign up</span>
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

export default Choose1