import React from 'react';
import './Toptalent.scss';
import arrow from '../../Assets/anchor-arrow.png';


const Toptalent = (props) => {
    const{facilities,heading1 , heading2 , heading3 , heading4,jobcard1 ,jobcard1_des ,jobcard2 ,jobcard2_des ,jobcard3 ,jobcard3_des,job1,job2,job3,btn2}=props
    return (
    <div className="toptalent-sec">
        <div className="toptalent-container">    
            <div className="contractjob-wrapper">
                <div className="container">
                    <div className="top-content">
                   { facilities && <p className="description">Join EmpowerCare for Free</p>}
                        <h2 className="heading">
                            {heading1} 
                            <span> {heading2}  </span>
                            {heading3} 
                        </h2> 
                          <div className='second_sec'>
                        <h5>{heading4}</h5>
                        {/* <p>At EmpowerCare, we know that every direct care job is a chance to create positive change in people's lives. By connecting you with opportunities to make a difference, our staffing agency helps you have a lasting impact on the individuals you serve.</p> */}
                        </div>
                    </div>
                    
                    <div className="row">
                        
                        <div className="col-md-4">
                        <a href={props.crd_link1}>
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={job1} alt="job1" />
                                </div>
                                
                                <h4 className="heading">{jobcard1}</h4>
                                <p className="description">{jobcard1_des}</p>
                                
                            </div>
                            </a>
                        </div>
                        
                        <div className="col-md-4">
                        <a href={props.crd_link2}>
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={job2} alt="job2" />
                                </div>
                                <h4 className="heading">{jobcard2}</h4>
                                <p className="description">{jobcard2_des}</p>
                            </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                        <a href={props.crd_link3}>
                            <div className="job-box active">
                                <div className="job-logo">
                                    <img src={job3} alt="job3" />
                                </div>
                                <h4 className="heading">{jobcard3}</h4>
                                <p className="description">{jobcard3_des}</p>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="bottom-btns-row">
                        <a href={props.blink} className="signup-btn">
                            {props.btx}
                        </a>
                        <a href="/about" className="learnmore-btn">
                            {btn2}
                            <img src={arrow} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Toptalent