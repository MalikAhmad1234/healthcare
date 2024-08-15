import bannerImg from '../../Assets/Group 675.png'
import './Banner9.scss'
const Banner9=()=>{
    return(<>
     <div className='banner_varient_9'>
          <div className="main-banner">
            <div className="container">
              <div className="heroes-banner-wrapper">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="banner-content">
                      <h1 className="heading">
                        <b>EMPOWERING <span><br /> HEALTHCARE HEROES</span></b>
                      </h1>
                      
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
export default Banner9