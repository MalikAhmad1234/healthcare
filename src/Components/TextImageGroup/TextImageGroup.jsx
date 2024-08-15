import React from 'react';
import './TextImageGroup.scss';
import secImage from '../../Assets/Image 58.png';
import activearrow from '../../Assets/Path 1810.png';
import { Link } from 'react-router-dom';

const TextImageGroup = ({heading,heading2,descr1,descr2,img}) => {
    return (
        <div className='text_image_group'>
            <div className="healthcare-sec">
                <div className="container">
                    <div className="healthcare-wrapper">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="right-content">
                                    <div className="section-img">
                                        <img src={img} alt="healthcareimg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 left-content-container">
                                <div className="left-content">
                                    <h2 className="heading">
                                      {heading}
                                    </h2>
                                    <h6>{heading2}</h6>
                                    <p>{descr1}</p>
                                    <p>{descr2}</p>

                                    {/* <div className="btn_cta">
                                        <a href='/signup'>READ MORE</a>
                                        <div className="active-img">
                                            <img src={activearrow} alt="activearrow" />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextImageGroup