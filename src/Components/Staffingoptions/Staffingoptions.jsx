import React from "react";
import "./Staffingoptions.scss";
import downarrow from "../../Assets/down-link-arrow.svg";
import rightarrow from "../../Assets/right-arrow.png";
import empowercareimg from "../../Assets/staff-solutions.png";

const Staffingsoptions = () => {
  return (
    <div className="staffing-options-container">
      <div className="container">
        <div className="empowercare-wrapper">
          <div className="flex">
            <div className="left-content">
              <span className="meta">STAFFING SOLUTIONS</span>
              <div className="center-heading">
                <h2 className="heading">
                  Tailored EmpowerCare <span>Staffing</span> Options
                </h2>
              </div>
              <div className="center-content">
                <p className="description">
                  At EmpowerCare, we offer a wide range of cost-effective staffing
                  options to meet your facility's unique needs. Our extensive
                  network of pre-screened and highly trained healthcare
                  professionals includes:
                </p>
              </div>

              <div className="buttons-flex">
                <button className="jobs-btn">
                  <span>Travel Nurse Jobs</span>
                  <img src={rightarrow} alt="rightarrow" />
                </button>
                <button className="jobs-btn">
                  <span>Pier Diem Nursing Jobs</span>
                  <img src={rightarrow} alt="rightarrow" />
                </button>
                <button className="jobs-btn">
                  <span>Temporary-To-Hire</span>
                  <img src={rightarrow} alt="rightarrow" />
                </button>
                <button className="jobs-btn">
                  <span>Local Contract Jobs</span>
                  <img src={rightarrow} alt="rightarrow" />
                </button>
                {/* <button className="jobs-btn">
                  <span>Local Contact Jobs</span>
                  <img src={rightarrow} alt="rightarrow" />
                </button> */}
              </div>

              <div className="sec-btns">
                <a href="/facilities/request-staffing">
                <button className="learn-btn">
                  <span>Explore Tailored Staffing Options</span>
                  <img src={downarrow} alt="downarrow" />
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staffingsoptions;
