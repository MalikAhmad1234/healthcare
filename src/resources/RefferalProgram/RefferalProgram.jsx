import React from "react";
import "./RefferalProgram.scss";
import empowercareimg from "../../Assets/refferal-program-shift.png";

const RefferalProgram = () => {
  return (
    <div className="refferal_program_wrapper">
      <div className="container">
        <div className="empowercare-wrapper">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="right-content">
                <div className="section-img">
                  <img src={empowercareimg} alt="empowercareimg" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="left-content">
                <span className="meta text-black">Why Choose Us</span>
                <h2 className="heading">
                  <span className="text-black">Shift </span><span className="text-gradient">Makers Referral</span> <span className="text-black">Program for nurses</span>
                </h2>
                <p className="description">
                  As a Visionary, you'll get to experience something truly
                  special. The luxury wellness retreat is designed just for
                  nurses like you. You'll have the chance to unwind, learn new
                  things, and meet other incredible nurses who share your
                  passion for helping others.
                </p>

                <div class="btns-flex">
                    <div>
                        <a class="btn_grad" href="/signup">
                            Sign Up
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefferalProgram;
