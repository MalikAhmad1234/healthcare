import React from 'react';
import './TeamMemberDetail.scss';
// import activearrow from '../../Assets/Path 1810.png';
import secImage from '../../Assets/jamal.png';

const TeamMemberDetail = () => {
    return (
        <div className='team_member_detail'>
            <div className="healthcare-sec">
                <div className="container">
                    <div className="healthcare-wrapper">
                        <div className="row">
                            {/* <div className="col-lg-4 col-md-6"> */}
                                <div className="right-content">
                                    <div className="section-img">
                                        <img src={secImage} alt="healthcareimg" />
                                    </div>
                                </div>
                            {/* </div> */}
                            {/* <div className="col-lg-8 col-md-6 left-content-container"> */}
                                <div className="left-content">
                                    <h2 className="heading">
                                       Jamal Mahijibhai
                                    </h2>
                                    <h6>President and CEO</h6>
                                    <p>Jamal Mahijibhai is the President and CEO of EmpowerCare. As a registered nurse, Jamal founded the company nearly two decades ago with a vision to revolutionize healthcare staffing and enhance patient care on a global scale.</p>
                                    <p>Driven by his passion for empowering healthcare professionals, Jamal has led EmpowerCare's transformation from a staffing agency to a trusted partner for healthcare facilities nationwide. Under his leadership, EmpowerCare provides top-tier staffing solutions that align the goals of healthcare institutions with those of professionals, resulting in improved patient outcomes and fulfilling careers.</p>
                                    <p>Prior to founding EmpowerCare, Jamal experienced firsthand the challenges faced by healthcare professionals, including burnout and lack of autonomy. These experiences fueled his commitment to creating a company that empowers professionals to make a meaningful impact while achieving work-life balance.</p>
                                    {/* <div className="btn_cta">
                                        <a className='btn_red' href='/'>READ MORE</a>
                                        <div className="active-img">
                                            <img src={activearrow} alt="activearrow" />
                                        </div>
                                    </div> */}
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberDetail