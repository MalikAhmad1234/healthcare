import React from "react";
import "./OurWorking.scss";
import icon1 from "../../Assets/Group530.png";
import icon2 from "../../Assets/Group531.png";
import icon3 from "../../Assets/Group532.png";

const OurWorking = () => {
  return (
    <div className="our-working_icon">
      <div className="container">
        <div className="working-wrapper">
          <div class="top-content">
            <h2 class="heading">
              How the
              <span class="text_grad_red"> Program </span>
              Works
            </h2>
            <p className="description">
              The Shift Makers Referral Program has three levels with increasing
              rewards as you refer more nurses for our nursing jobs.
            </p>
            <h3 className="sub-heading">
                Level Rewards
            </h3>
          </div>

          <div className="row">
            <div className="working-col col-12">
              <div className="row">
                <div className="working_content col-12">
                  <h3>We Care About You</h3>
                  <p>
                    We put our employees first, providing the support,
                    resources, and flexibility you need to thrive both
                    professionally and personally. Your well-being is our top
                    priority.
                  </p>
                </div>
              </div>
            </div>
            <div className="working-col col-12">
              <div className="row">
                <div className="working_content col-12">
                  <h3>We're Driven by Impact</h3>
                  <p>
                    Every placement, every shift, every interaction is an
                    opportunity to make a positive impact on patients,
                    facilities, and communities. We measure our success by the
                    lives we transform.
                  </p>
                </div>
              </div>
            </div>
            <div className="working-col col-12">
              <div className="row">
                <div className="working_content col-12">
                  <h3>We Embrace Diversity</h3>
                  <p>
                    We celebrate what makes you unique. At EmpowerCare, you can
                    be your authentic self and know that your talents,
                    strengths, and experiences are valued.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorking;
