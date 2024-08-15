import React from 'react';
import './Network.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import downarrow from '../../Assets/down-link-arrow.svg';
import { Link } from 'react-router-dom';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 310 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
};

const Network = (props) => {
    return (
        <div className="network-sec">
            <div className="network-sec-bg">
                <div className="">
                    <div className="network-wrapper">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="left-content">
                                    <span className="meta">Who We Are</span>
                                    <h2 className="heading">
                                        Extensive
                                        <span> Network of Healthcare </span>
                                        Opportunities
                                    </h2>
                                    <p className="description">From single shifts to long-term placements, EmpowerCare delivers <br /> a wide range of healthcare staffing solutions.</p>
                                
                                    <div className="sec-btns">
                                         <a href={props.link} className="learn-btn"> 
                                            <span>Search Job Openings</span>
                                            <img src={downarrow} alt="downarrow" />
                                            </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right-content">
                                    <Carousel
                                        responsive={responsive}
                                        autoPlay={true}
                                        swipeable={true}
                                        draggable={true}
                                        autoPlaySpeed={1000}
                                        showDots={false}
                                        infinite={true}
                                        partialVisible={false}
                                        dotListClass="custom-dot-list-style"
                                    >
                                        <div className="col-md-12">
                                            <div className="network-box">
                                                <div className="network-row">
                                                    <div className="top-network">
                                                        <div className="network-btn">
                                                            <span>Registered Nurse Opportunities</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-network">
                                                        <div className="network-btn">
                                                            <span>Telemetry Roles</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Trauma Roles</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Rehabilitation Roles</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Psychiatry Roles</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="network-box">
                                                <div className="network-row">
                                                    <div className="top-network">
                                                        <div className="network-btn">
                                                            <span>CNA Opportunities</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-network">
                                                        <div className="network-btn">
                                                            <span>Home Health Roles</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Long Term Care Roles</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Patient Care Roles</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Pediatric Care Roles</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="network-box">
                                                <div className="network-row">
                                                    <div className="top-network">
                                                        <div className="network-btn">
                                                            <span>LPN Opportunities</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-network">
                                                        <div className="network-btn">
                                                            <span>Behavioral Health Roles</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Clinic Roles</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Substance Abuse Roles</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Patient Care Roles</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="network-box">
                                                <div className="network-row">
                                                    <div className="top-network">
                                                        <div className="network-btn">
                                                            <span>Medical Technologist Opportunities</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-network">
                                                        <div className="network-btn">
                                                            <span>CT Tech Roles</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Sonographer Roles</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Ultrasound Tech Roles</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Anethesiologist Roles</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="network-box">
                                                <div className="network-row">
                                                    <div className="top-network">
                                                        <div className="network-btn">
                                                            <span>Rehab Counselor Opportunities</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-network">
                                                        <div className="network-btn">
                                                            <span>Mental Health Roles</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Behavioral Health Roles</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Certified Medication Aide</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Rehabilitation</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Network