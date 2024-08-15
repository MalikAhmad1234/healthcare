import './StaffingProcess.scss'
import logo from '../../Assets/consultation_icon02.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/Group 702.png'
import logo4 from '../../Assets/Group 703.png'
import { Link } from 'react-router-dom';

import { FiArrowDownRight } from "react-icons/fi";

const StaffingProcess=()=>{
    return(
    <>
    <div className="staffingprocess-sec">
        <div className="faciityOperations-wrapper">
            <div className="faciityOperations-container">    
                <div className="container">
                    <div className="top-content">
                        {/* <p className="description-sub-heading">LIMITED TIME OFFER</p> */}
                        <h2 className="heading main-heading">
                        Empower Your Facility<span className='span-style'> with Effortless Access </span> to Premier Talent
                        </h2>
                    </div>
                    <div className='staffing_box'>
                        <div className="start-box">
                            <b>Empower Your Facility with Effortless Access to Premier Talent <img src={logo} /></b>
                        </div>
                        <p className="description">Join EmpowerCare for free and partner with our dedicated team to enhance your facility's performance through efficient and excellent staffing solutions.</p>                    
                        <div className="bottom-btns-row">
                            <Link to="/signup" className="learnmore-btn">
                                <span>Signup</span>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={logo3} alt="job1" />
                                </div>
                                <h4 className="heading">Post Jobs and Find the Perfect Fit, Seamlessly</h4>
                                <p className="description">Eliminate staffing challenges with our streamlined process, connecting you with qualified candidates promptly.</p><br />
                                <a href="/">LEARN MORE <FiArrowDownRight/></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={logo4} alt="job1" />
                                </div>
                                <h4 className="heading">Access Premier Healthcare Professionals, Cost-Effectively</h4>
                                <p className="description">Prioritize your budget without compromising on quality, ensuring your facility's capabilities are both financially sustainable and community-transformative.</p><br />
                                <a href="/">LEARN MORE <FiArrowDownRight/></a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default StaffingProcess