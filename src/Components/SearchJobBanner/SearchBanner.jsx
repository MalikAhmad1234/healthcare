import React from 'react';
// import bannerImg from '../../Assets/banner1.png';
import '../SearchJobBanner/SearchBanner.scss';
import searchimage from '../../Assets/elipse2.png'
import SearchBar from '../SearchBar/SearchBar';

const SearchBanner = (props) => {
  const {heading,description,meta,styles}=props  
  return (
      <>
      <div className='banner_varient_1'>
          <div className="main-banner"
          style={styles}
          >
            <div className="container">
              <div className="banner-wrapper">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="banner-content">
                      <h1 className="heading">
                        {heading}
                      </h1>
                      <p className="description">{description}</p>
                      <span className="meta">{meta}</span>
                      <div className="banner-btns">
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="banner-img">
                      <img src={searchimage} alt="bannerImg" />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </>
    )
}

export default SearchBanner;