import React from 'react';
import './Facilitynetwork.scss';
import empowercareimg from '../../Assets/man_6 copy.png';
import activearrow from '../../Assets/active-arrow.png';
import downarrow from '../../Assets/down-link-arrow.svg';
import { FiArrowDownRight } from 'react-icons/fi';

const Facilitynetwork = ({ img, content,button }) => {
    return (
        <div className="empowercare-sec">
            <div className="container">
                <div className="empowercare-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta">{content.meta}</span>
                                <h2 className="heading">
                                    {content.heading1}
                                    <span> {content.heading2} </span> <br />
                                    {content.heading3}
                                </h2>

                                <h5><b>{content.heading4}</b></h5><br />
                                <p className="description">{content.description}</p><br />
                                <ul>
                                    <li>
                                        <span>{content.bullet1} <span className='sp1'>➔</span></span>
                                    </li><br />
                                    <li>
                                        <span>{content.bullet2}<span className='sp2'> ➔</span> </span>
                                    </li><br />
                                    <li>
                                        <span> {content.bullet3} <span className='sp3'>➔</span></span>
                                    </li><br />
                                    <li>
                                        <span>{content.bullet4} <span className='sp4'> ➔</span></span>
                                    </li><br />
                                    <li>
                                        <span> {content.bullet5}<span className='sp5'> ➔</span></span>
                                    </li><br />
                                    {content.bullet6 && content.bullet7 ?(<>
                                        <li>
                                        <span>{content.bullet6}<span className='sp6'> ➔</span></span>
                                    </li><br />
                                    <li>
                                        <span>{content.bullet7} <span className='sp7'>➔</span></span>
                                    </li><br />
                                    </>):(<></>)}
                                   
                                </ul>
                                {button && ( <div className="sec-btns">
                                    <a className="btn_green">
                                        BROWSE OUR HEALTHCARE PROFESSIONALS
                                        <FiArrowDownRight />
                                    </a>
                                    <div className="active-img">
                                        <img src={activearrow} alt="activearrow" />
                                    </div>
                                </div>)}

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

export default Facilitynetwork