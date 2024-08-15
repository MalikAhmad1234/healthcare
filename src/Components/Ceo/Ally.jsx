import './Ally.scss'
import healthcareimg from '../../Assets/ally.png';


const Ally=()=>{
    return(<>
    <div className="ally-sec">
            <div className="container">
                <div className="healthcare-wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={healthcareimg} alt="healthcareimg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="left-content">
                                <span className="meta"><b>CEO LETTER</b></span>
                                <h2 className="heading">
                                   <b> <span className='text_gradient'>EMPOWERCARE</span> IS
                                     <br />  YOUR ALLY  <br />
                                    </b>  
                                </h2>
                              <p>
                              Healthcare facilities looking to optimize staffing can tap into our extensive network of top-tier talent to streamline operations and elevate care standards. Healthcare professionals seeking fulfilling opportunities can be a vital part of a team that values their skills and dedication.
                              </p><br />
                              <h5>
                                <b>
                              WE MAKE HEALTHCARE WORK REWARDING</b>
                              </h5>
                              <p>
                              We strive to help you turn your vision into reality by connecting you with the right talent and resources. The impact is both professional and personal, in the everyday and in the long run. With the right staffing partner, you stop merely filling roles and start strategically building a team that transforms lives.
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Ally; 