import React, { useState } from "react";
import jobData from "../../../src/data.json";
import './Jobcard.scss';
import { Close } from "@mui/icons-material";
import jobimage from "../../Assets/Doctor-amico.png"
const Jobcard = (props) => {
  const [open , setopen] = useState(false)
  return (
    <div className="main1 container">
      <div className="main2">
        <div className="job-listing-card-container">
          {jobData.map((job, index) => (
            <div className="job-listing-card" key={index} onClick={()=> setopen(true)}>
              <h2>{job.title}</h2>
              <h2>LED BY SOME OF THE WORLD’S BEST SOFTWARE BUILDERS!</h2>
              <h3>Pre-sales & Support</h3>
              <p>
                Security vendor led by some of the world’s best software builders.<br/>
                Enterprise-ready solution with 300% ARR YOY growth
              </p>
              <div className="remote-class">
                <p>US (REMOTE)</p>
                <p>$150,000 - $199,999</p>
                <button>APPLY NOW</button>
              </div>
            </div>
          ))}
        </div>
        { open?
        <div className="job-listing-card2">
          
          <h2>WAUSAU,WI</h2>
          <div className="remote-class2">
            <p>US (REMOTE)</p>
            <p>$150,000 - $199,999</p>
            
          </div>
          <div className="job-id">
          <p>TravelorContract | Job ID : 2487863</p>
          </div>
          <div className="job-img">
<img src={jobimage} alt="jobimage"/>
          </div>
          <div className="job-details">
          <h2>JOB DETAILS</h2>
<p>Profession: Physicist</p>
<p>Pay:</p>

<p>Assignment Leghth</p>

<p>Schedule</p>

<p>Openings</p>
<p>Start Date</p>
<p>Experience</p>

          </div>
         <div className="more-details">
          <h2>LOGIN FOR MORE DETAILS</h2>
          <p>We are dedicated to paartnering with individuals like you to create the ideal healthcaew career that aligns with your aspirations, offering opportunities both in your local community and nationwide to cater to your preferences and goals.</p>
         </div>
         <div className="remote-class">
         <button className="apply-btn">APPLY NOW</button>
                <button className="close-btn" onClick={()=> setopen(false)}>CLOSE JOB</button>
              </div>
        </div>:null
        }
      </div>
    </div>
  );
};

export default Jobcard;
