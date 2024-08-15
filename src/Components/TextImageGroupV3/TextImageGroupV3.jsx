import React from 'react';
import './TextImageGroupV3.scss';
import secImage from '../../Assets/Image 60.png';
import activearrow from '../../Assets/Path 1810.png';

const TextImageGroupV3 = () => {
    return (
        <div className='text_image_group_v3'>
            <div className="healthcare-sec">
                <div className="container">
                    <div className="healthcare-wrapper">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="right-content">
                                    <div className="section-img">
                                        <img src={secImage} alt="healthcareimg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 left-content-container">
                                <div className="left-content">
                                    <h2 className="heading">
                                    EmpowerCare in Action:
                                    </h2>
                                    <h6>Real-World Impact</h6>
                                    <p>At St. Mary's Hospital, our dynamic staffing solutions helped reduce nurse turnover by 35% and improve patient satisfaction scores by 20%.</p>
                                    <p>"EmpowerCare has been a game-changer for our hospital," says Chief Nursing Officer Lisa Thompson. "Their top-notch nursing talent and innovative tools have allowed us to provide exceptional care to our patients while supporting our staff's growth and well-being."</p>
                                    <div className="btn_cta">
                                        
                                    
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

export default TextImageGroupV3