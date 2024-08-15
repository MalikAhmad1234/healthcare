import React from "react";
import "./LeftImageRightContent.scss";
import empowercareimg from "../../Assets/start-by-following.png";

const LeftImageRightContent = () => {
  return (
    <div className="left_image_right_content_wrapper 1">
      <div className="container">
        <div className="empowercare-wrapper">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="right-content">
                <div className="section-img">
                  <img src={empowercareimg} alt="empowercareimg" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="left-content">
                <span className="meta text-black">Why Choose Us</span>
                <h2 className="heading">
                  <span className="text-white">start by</span> <span className="text-black">following</span>
                  <span className="text-white"> these steps.</span>
                </h2>
                <p className="description text-white">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImageRightContent;
