import './WorkForce.scss'
import empowercareimg from '../../Assets/work_img.png'
import { colors } from '@mui/material';
const WorkForce = (props) => {
    return (
        <div className="work-force">
            <div className="container">
                <div className="empowercare-wrapper">
                    
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="left-content">
                                    <span className="meta">ABOUT US</span>
                                    <h2 className="heading">
                                        {props.hd1} <span> {props.hd2}</span><br /> {props.hd3}
                                    </h2><br />
                                    <p style={{color:"white"}}>{props.desc}</p>
                                    <ul>
                                        <li>
                                        {props.bl1}
                                        </li>
                                        <li>
                                        {props.bl2}
                                        </li>
                                        <li>
                                        {props.bl3}
                                        </li>
                                        <li>
                                        {props.bl4}
                                        </li>
                                    </ul><br />
                                    <div className='butns'>
                                       <a  className='btn_green' href="/signup">Sign Up</a><br />
                                       <a className='learn-btn' href="/about">About Us</a>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="section-img">
                                    <img className='img' src={empowercareimg} alt="empowercareimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default WorkForce;
