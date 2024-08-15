import React from 'react';
import bannerImg from '../../Assets/elipse2.png';
import { Link } from 'react-router-dom';
import './Banner2.scss';

const Banner2 = (props) => {
  const {heading,description,img,styles ,description2}=props
    return (
      <>
      <div className='banner_varient_2 about'
      
      >
          <div className="main-banner"
          style={styles}
          >
            <div className="container">
              <div className="banner-wrapper">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="banner-content">
                      <h1 className="heading">
                        <b>{heading}</b>
                      </h1>
                      {/* <p className="description">Your Gateway to Rewarding Contract Healthcare Careers</p> */}
                      <span className="meta">{description} </span>
                       <br></br>
                     <span className="meta">{description2}</span>

                      
            
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="banner-img">
                      <img src={img} alt="bannerImg" />
                    </div>
                  </div>
                </div>

                {/* <div className="selection-row">
                  <div className="selection-wrap">
                    <select id="jobtitle">
                      <option value="Your job title">Your job title</option>
                      <option value="Your job title1">Your job title1</option>
                      <option value="Your job title2">Your job title2</option>
                    </select>
                    <select id="specialty">
                      <option value="specialty">specialty</option>
                      <option value="specialty1">specialty1</option>
                      <option value="specialty2">specialty2</option>
                    </select>
                    <select id="city/state">
                      <option value="Select city/state">Select city/state</option>
                      <option value="Select city/state1">Select city/state1</option>
                      <option value="Select city/state2">Select city/state2</option>
                    </select>
                    <button className='btn available-btn'>
                      <span>Find available positions</span>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Banner2