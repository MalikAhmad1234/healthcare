import './Section1.scss'
import Ceo from '../../Assets/ceoImg.png'
import activearrow from '../../Assets/active-arrow.png'
const Section1=()=>{
    return(<>
    <div class="sec1-container">
      <div class="container">
        <div class="image-container">
          <img src={Ceo} alt="Ceo" />
        </div>
        <div class="content_container">
          <h6>
            <b>OUR CEO AND FOUNDER</b>
          </h6>
          <h1>
            <b>JAMAL <span className='text_grad_red'>MAHIJIBHAI</span>
              <br />PRESIDENT & CEO </b>
          </h1>
          <br />
          <p>For nearly two decades, MSG Staffing has had a profound impact on my life. As a registered nurse, I founded this company to gain autonomy, flexibility, and freedom. However, over the years, I've realized that these factors alone are not enough. I wanted to build a business that not only fulfilled our financial needs but also allowed us to enhance patient care and healthcare outcomes on a global scale.</p>
          <p>Today, EmpowerCare is more than just a trademark; it's a brand that takes MSG Staffing's vision to new heights. We envision a world where every healthcare institution experiences seamless operations, and every healthcare professional finds fulfilling opportunities.</p>
        </div>
      </div>
      <div className="last-container">
        <h6>
          <b>TOP TIER STAFFING</b>
        </h6>
        <h1>
          <b>OUR TOP-TIER <span className='text_grad_red'>STAFFING SOLUTIONS</span>
            <br /> ARE DESIGNED WITH YOU IN MIND. </b>
        </h1>
        <br />
        <div className='p-txt'>
          <p>By providing top-tier staffing solutions, we empower healthcare institutions and professionals, becoming a trusted partner to facilities nationwide. <span>
              <b>
                <i>We ensure that every shift transforms lives, elevates care,and enhances societal well-being.</i>
              </b>
            </span>
          </p>
        </div>
      </div>
      <div className='su-btn'>
        <div className='btn-wrapper'>
          <a href="/signup" className='btn_red'>SIGNUP</a>
        </div>
        <div className='arrow_img'>
          <img className='arr-img' src={activearrow} alt="arrow" />
        </div>
      </div>
    </div>
    </>)
}
export default Section1