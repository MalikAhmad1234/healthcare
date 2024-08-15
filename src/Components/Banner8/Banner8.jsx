import bannerImg from '../../Assets/Group 673.png'
import './Banner8.scss'
const Banner8=()=>{
    return(<>
     <div className='banner_varient_8'>
          <div className="main-banner">
            <div className="container">
              <div className="banner-wrapper">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="banner-content">
                      <h1 className="heading">
                        <b>BENEFITS <span><br /> AT EMPOWER CARE</span></b>
                      </h1>
                      {/* <p className="description">Your Gateway to Rewarding Contract Healthcare Careers</p> */}
                      <span className="meta"><b>WE CARE ABOUT YOU</b></span>
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
                      <img src={bannerImg} alt="bannerImg" />
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
    </>)
}
export default Banner8