import banner_img from '../../Assets/Mask Group 26.png'
import './Banner7.scss'
const Banner7=()=>{
    return(<>
    <div className='banner_varient_7'>
          <div className="main-banner">
            <div className="container">
              <div className="banner-wrapper">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="banner-content">
                      <h1 className="heading">
                        <b>EMPOWER <span><br /> YOUR NETWORK</span></b>
                      </h1>
                      {/* <p className="description">Your Gateway to Rewarding Contract Healthcare Careers</p> */}
                      <span className="meta"><b>TRANSFORM HEALTHCARE</b></span>
                      <div className="banner-btns">
                        <button className='btn quick-btn'>
                          <span>Quick Apply</span>
                        </button>
                        <button className='btn contact-btn'>
                          <span>Contact us</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="banner-img">
                      <img src={banner_img} alt="bannerImg" />
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
    </>)
}
export default Banner7