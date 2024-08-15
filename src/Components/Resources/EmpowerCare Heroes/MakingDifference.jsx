import React from "react";
import "./MakingDifference.scss";
import img from "../../../Assets/Image 47.png";

const MakingDifference= (props) => {
  return (
    <div className="making_difference_wrapper">
      <div className="container">
        <div className="empowercare-wrapper">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="right-content">
                <div className="section-img">
                  <img src={img} alt="empowercareimg" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="left-content">
                <span className="meta ">EMPOWERING HEALTHCARE HEROES</span>
                <h2 className="heading">
                  <span className="text-black">MAKING A </span><span className="text_grad_red">DIFFERENCE</span> <span className="text-black">TOGETHER</span>
                </h2>
                <p className="description">
                As a healthcare professional, you're driven by a desire to make a positive impact
                on patients' lives. At EmpowerCare, we share that commitment.
                </p><br />
                <p>Through our Ripple Effect initiative, a portion of the revenue generated from
                  every shift you work goes towards community health projects, amplifying your
                  impact beyond the clinical setting.</p>
                {/* <div class="btns-flex">
                    <div>
                        <a class="btn_grad" href="/">
                            READ MORE
                        </a>
                    </div>
                </div> */}
                {props.readmorebtn2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakingDifference;
