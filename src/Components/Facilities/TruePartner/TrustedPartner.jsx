import React from 'react';
import './TrustedPartner.scss';
import { Link } from 'react-router-dom';
import activearrow from '../../../Assets/active-arrow.png';
import downarrow from '../../../Assets/down-link-arrow.svg';
import { FiArrowDownRight, FiArrowRight } from 'react-icons/fi';

const TrustedPartner = (props) => {
    const{button,anchor,img,meta,heading1,heading2,heading3,description1,description2,description3,simpleButton}=props
    return (
        <div className="trustedpartner-sec">
        <div className="container">
            <div className="empowercare-wrapper">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="left-content">
                            <span className="meta">{meta}</span>
                            <h2 className="heading">
                                {heading1}
                                <span>{heading2}  </span> 
                                {heading3}
                            </h2>
                            <p className="description">
                                {description1}
</p>
                             <p>{description2}</p>
                            {description3 &&  <p>{description3}</p> }
                        
                          {button ? (<>
                            {props.btn}
                          </>): anchor ?(
                            <>
                            <a className='anchor' href="/signup">TAKE THE FIRST STEP TODAY! <FiArrowRight/></a>
                            </>
                          ):simpleButton?(<>
                          <br />
                          <a className='btn_green' href="/facilities/request-staffing">REQUEST STAFFING <FiArrowDownRight/> </a>
                          </>):(<></>)}  
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
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

export default TrustedPartner