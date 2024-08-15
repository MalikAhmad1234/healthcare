import React from 'react';
import './Impact.scss';
import { Link } from 'react-router-dom';

const Impact = (props) => {
    let classnames = props.position == null ? "" : props.position;
    return (
        <div className={`Impact-sec ${classnames}`}>
            <div className="container">
                <div className="Impact-wrapper">
                    <div className="top-content">
                        <span className="meta">Dynamic Squads</span>
                        <h2 className="heading">
                           Make a Meaningful 
                            <span> Impact </span>
                            with Every Shift
                        </h2>
                        <p className="description">We believe that every shift is an opportunity to <br /> make a difference in people's lives.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="job-box">
                                <h4 className="heading">Meaningful Work</h4>
                                <p className="description">Every job matters, and we ensure that each placement contributes to the EmpowerCare ripple effect of transforming lives and elevating care.</p>
                                <button className='impact-btn'>
                                  <a href={props.link1}><span>Learn More</span></a>  
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="job-box">
                                <h4 className="heading">Reliable Support</h4>
                                <p className="description">Our dedicated team is always ready to assist you, ensuring a smooth and stress-free staffing experience, so you can focus on making a meaningful impact.</p>
                                <button className='impact-btn'>
                                   <a href={props.link2}><span>Learn More</span></a> 
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="job-box active">
                                <h4 className="heading">Quality Assurance</h4>
                                <p className="description">We stand behind the quality of our placements, providing you with peace of mind and confidence that you're making a difference with every shift.</p>
                                <button className='impact-btn'>
                                   <a href={props.link3}><span>Learn More</span></a> 
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-btns-row">
                        <Link to={props.blink} className="signup-btn">
                            <span>{props.btxt}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Impact