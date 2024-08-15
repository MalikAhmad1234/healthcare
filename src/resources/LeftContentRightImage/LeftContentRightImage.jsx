import React from "react";
import "./LeftContentRightImage.scss";
import empowercareimg from "../../Assets/luxury-wellness.png";

const LeftContentRightImage = () => {
  return (
    <div className="left_image_right_content">
      <div className="container">
        <div className="empowercare-wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <span className="meta">Why Choose Us</span>
                <h2 className="heading">
                  <span className="text_grad_red">Luxury Wellness</span>{" "}
                  Retreat: The Ultimate Reward
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
