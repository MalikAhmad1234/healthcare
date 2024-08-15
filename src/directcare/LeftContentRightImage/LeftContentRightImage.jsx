import React from "react";
import "./LeftContentRightImage.scss";
import empowercareimg from "../../Assets/spotlight-and-testimonials.png";

const LeftContentRightImage = () => {
  return (
    <div className="left_image_right_content_care">
      <div className="container">
        <div className="empowercare-wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <h2 className="heading">
                  <span>Spotlights &</span> Testimonials
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
                        <a class="btn_grad" href="/">
                            Learn More
                        </a>
                    </div>
                    <div>
                        <a class="btn_transparent" href="/signup">
                            Sign Up
                        </a>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <div className="section-img">
                  <img src={empowercareimg} alt="empowercareimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContentRightImage;
