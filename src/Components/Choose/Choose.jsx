import React from 'react';
import './Choose.scss';
import { Link } from 'react-router-dom';

const Choose = (props) => {
    let classnames = props.classes == null ? "" : props.classes;
    return (
        <div className={`choose-sec ${classnames}`}>
            <div className="choose-container">
                <div className={`choose-wrapper ${classnames}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="left-content">
                                    <span className="meta">{props.meta}</span>
                                    <h2 className="heading">
                                        {props.heading} <span> {props.spantext}</span> {props.headingafter} 
                                    </h2>
                                    {props.firstDescription && <p className='description'>{props.firstDescription}</p> }
                                    <p className="description">{props.description1}</p>
                                    <p className="description">{props.description2}</p>
                                
                                    <div className="sec-btns">
                                        <Link to="/professional/Professionalperfectmatch" className="learn-btn">
                                            <span>Learn More</span>
                                        </Link>
                                        <Link to={props.btnlnk} className="signup-btn">
                                            <span 
                                            style={{color: props.facilities ? "white" :"black",
                                            
                                        }}>{props.btntxt}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="right-content">
                                    <div className="content-row">
                                        <div className="content-box active">
                                            <h5 className="heading">{props.boxHeading1}</h5>
                                            <p className="description">{props.boxDescription1}</p>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="heading">{props.boxHeading2}</h5>
                                            <p className="description">{props.boxDescription2}</p>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="heading">{props.boxHeading3}</h5>
                                            <p className="description">{props.boxDescription3}</p>
                                        </div>
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

export default Choose