import React from 'react';
// import { Link } from 'react-router-dom';
import './OurTeam.scss';
import linkarrow from '../../Assets/linkarrow.svg';
import team1 from '../../Assets/jamal.png';
import team2 from '../../Assets/ethan.png';
import team3 from '../../Assets/kursa.png';
import team4 from '../../Assets/stephen.png';

const OurTeam = () => {
    return (
        <div className="our-team choose-sec">
            <div className="caregivers-sec-bg choose-container">
                <div className="container">
                    <div className="caregivers-wrapper">
                        <div className="top-content">
                            <h2 className="heading">
                                Join the
                                <span className='text_grad_red'> Movement </span> 
                            </h2>
                            <p className="description">Ready to be part of a team that's transforming healthcare staffing? Join EmpowerCare today and discover a career that empowers you to make a lasting difference. Meet our leadership team, a group of passionate individuals committed to empowering healthcare professionals like you:</p>
                        </div>
                        <div className='row team-cards'>
                            <div className='team-card col-lg-3 col-md-6 col-sm-12'>
                                <img className='member_img' src={team1} />
                                <h3>Jamal Mahijibhai</h3>
                                <span>President and CEO</span>
                            </div>
                            <div className='team-card col-lg-3 col-md-6 col-sm-12'>
                                <img className='member_img' src={team2} />
                                <h3>Ethan Roden</h3>
                                <span>Director of Operations and HR</span>
                            </div>
                            <div className='team-card col-lg-3 col-md-6 col-sm-12'>
                                <img className='member_img' src={team3} />
                                <h3>Kursa Mahijibhai</h3>
                                <span>Director of Accounting</span>
                            </div>
                            <div className='team-card col-lg-3 col-md-6 col-sm-12'>
                                <img className='member_img' src={team4} />
                                <h3>Stephen Scavone</h3>
                                <span>Director of Sales and Recruiting</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam