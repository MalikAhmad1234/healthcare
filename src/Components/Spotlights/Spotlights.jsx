import './Spotlights.scss'
import img from '../../Assets/imaginations.png'
const Spotlights=({headingclr,headingblack, description,btn1,btn2})=>{
    return(<>
    <div className="spotlights-wrapper">
      <div className="container">
        <div className="empowercare-wrapper">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="right-content">
                <div className="section-img">
                  <img src={img} alt="empowercareimg" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="left-content">
                
                <h2 className="heading">
                  <span className="text_grad_green">{headingclr}</span> {headingblack}
                </h2>
                <p className="description">
{description}                </p> <br />
                <div className="btns-flex">
                  <a className="btn_green" href="/about/contactus">
                      {btn1}
                  </a>
                  <a className="learn_more" href="/about">
                      {btn2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>)
}
export default Spotlights