import "./EmpowercarePremier.scss";
import logo from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import consultation from '../../Assets/consultation_icon02.png'

import { FiArrowDownRight } from "react-icons/fi";
const EmpowercarePremier = (props) => {
  const{heading1, heading2 , heading3 , description1 ,card_bx1_heading,card_bx1_description1,card_bx2_heading2,card_bx2_description2,card_bx3_heading3,card_bx3_description3,card_bx4_heading4,card_bx4_description4}=props
  return (
    <>
      <div className="empowercarePremier-sec">
        <div className="empowercarePremier-wrapper">
          <div className="empowercarePremier-container">
            <div className="container">
              <div className="top-content">
                
                <h2 className="heading main-heading">
                  {heading1}
                  <span className="text_grad_green"> {heading2}</span>{" "}
                  {heading3}
                </h2><br />
                <p className="description2">
                   {props.srtdesc}
                </p>
                <p className="description1">
                {description1}
                </p>
                

                
              </div>
               <div className="boxes-wrapper">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="job-box">
                    <div className="job-logo">
                      <img src={logo} alt="job1" />
                    </div>
                    <h4 className="heading">{card_bx1_heading}</h4>
                    <p className="description">
                      {card_bx1_description1}
                    </p>
                    <br />
                    {/* <a href="/">
                      LEARN MORE <FiArrowDownRight />
                    </a> */}
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="job-box active">
                    <div className="job-logo">
                      <img src={logo2} alt="job3" />
                    </div>
                    <h4 className="heading">{card_bx2_heading2}</h4>
                    <p className="description">
                    {card_bx2_description2}
                    </p>
                    <br />
                    {/* <a href="/">
                      LEARN MORE <FiArrowDownRight />
                    </a> */}
                  </div>
                  <br />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="job-box">
                    <div className="job-logo">
                      <img src={logo3} alt="job1" />
                    </div>
                    <h4 className="heading">{card_bx3_heading3}</h4>
                    <p className="description">
                    {card_bx3_description3}
                    </p>
                    <br />
                    {/* <a href="/">
                      LEARN MORE <FiArrowDownRight />
                    </a> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="job-box">
                    <div className="job-logo">
                      <img src={logo4} alt="job1" />
                    </div>
                    <h4 className="heading">{card_bx4_heading4}</h4>
                    <p className="description">
                    {card_bx4_description4}
                    </p>
                    <br />
                    {/* <a href="/">
                      LEARN MORE <FiArrowDownRight />
                    </a> */}
                  </div>
                  
                </div>

                

                <div className="act-box">
                  <br />
                  <h3>REAL STORIES REAL IMPACT <img src={consultation}></img></h3>
                  <p className="description">
                  Apply Now: Don't wait! Click on the Button to begin your journey as an EmpowerCare Premier Direct Care
Professional. Act fast before spots fill up!
                  </p>
                  <br />
                  <div className="end-btn">
                    <a className="btn_green" href="/signup">QUICK APPLY</a><br />
                  </div>
                </div>
               
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmpowercarePremier;
