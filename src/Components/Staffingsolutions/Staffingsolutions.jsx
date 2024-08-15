import React from "react";
import "./Staffingsolutions.scss";
import downarrow from '../../Assets/down-link-arrow.svg';
import empowercareimg from "../../Assets/staff-solutions.png";

const Staffingsolutions = ({img,content}) => {
  return (
      <div className="staffing-sol">
        <div className="staffing-sol-container">
          <div className="empowercare-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="left-content">
                    <span className="meta">{content.meta}</span>
                    <h2 className="heading">
                    {content.heading1} <span>{content.heading2}</span> {content.heading3}
                    </h2>
                    <p className="description">
                       {content.description}
                    </p>
                    <div className="sec-btns">
                        <a href="/facilities/request-staffing" className="learn-btn">
                          {content.btn}
                        <img src={downarrow} alt="downarrow" />
                        </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="section-img">
                      <img src={img} alt="empowercareimg" />
                  </div>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Staffingsolutions;
