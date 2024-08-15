import React from 'react';
import './OurAccess.scss';
import icon1 from '../../Assets/Group530.png';
import icon2 from '../../Assets/Group531.png';
import icon3 from '../../Assets/Group532.png';

const OurAccess = () => {
    return (
        <div className="our-access">
            <div className='container'>
                <div className="working-wrapper">
                    <div class="top-content">
                        <h3 class="heading">By joining EmpowerCare, you'll gain access to</h3>
                    </div>

                    <div className='row'>
                        <div className='working-col col-12'>
                            <div className='row'>
                                <div className='working_content col-lg-12 col-md-12 col-sm-12'>
                                    <h4>Convenient Staffing​</h4>
                                    <p>We provide a full range of staffing solutions, covering all aspects of your professional requirements, making the process convenient for you.​</p>
                                </div>
                            </div>
                        </div>
                        <div className='working-col col-12'>
                            <div className='row'>
                                <div className='working_content col-lg-12 col-md-12 col-sm-12'>
                                    <h4>Personable Approach​​</h4>
                                    <p>Our customized staffing plans are designed to align with your unique needs, ensuring the best fit for your career aspirations. We prioritize building strong relationships with our healthcare professionals.​</p>
                                </div>
                            </div>
                        </div>
                        <div className='working-col col-12'>
                            <div className='row'>
                                <div className='working_content col-lg-12 col-md-12 col-sm-12'>
                                    <h4>Supportive Community​</h4>
                                    <p>Access a vast network of highly qualified and responsible healthcare professionals who are ready to make a positive impact together.​</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurAccess