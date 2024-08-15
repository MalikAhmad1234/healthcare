import React from "react";
import "./Staffingsolutions.scss";
import job1 from "../../Assets/job1.png";
import job2 from "../../Assets/job2.png";
import job3 from "../../Assets/job3.png";
import downarrow from "../../Assets/down-link-arrow.svg";
import empowercareimg from "../../Assets/direct-care-shift.png";

const Staffingsolutions = () => {
  return (
    <div className="staffing-sol-directcare">
      <div className="container">
        <div className="empowercare-wrapper">
          <div className="flex">
            <div className="left-content">
              <span className="meta">SEAMLESS PLEDGE</span>
              <h2 className="heading">
                Seamless Pledge: Make a <span>Meaningful Impact</span> with
                Every Shift
              </h2>
              <p className="description">
                We view every shift as a chance to make a positive difference.
                Our Seamless Pledge guarantees hassle-free staffing and
                meaningful placements, reflecting our belief in the power of
                each job to contribute to the EmpowerCare ripple effect of
                transforming lives and elevating care.
              </p>

              <div className="sec-btns">
                <button className="learn-btn">
                  <span>Seamless Squads</span>
                  <img src={downarrow} alt="downarrow" />
                </button>
              </div>
            </div>
            <div className="right-content">
              <div className="section-img">
                <img src={empowercareimg} alt="empowercareimg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staffingsolutions;
