import React from 'react';
import './Opportunities.scss';
import Opportunitiesimg from '../../Assets/agency_img.png';


const Opportunities = (props) => {
    return (
        <div className="Opportunities-sec">
            <div className="container">
                <div className="healthcare-wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="right-content">
                                <div className="section-img">
                                    <img  src={Opportunitiesimg} alt="healthcareimg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="left-content">
                                <span className="meta">Specialities</span>
                                <h2 className="heading">
                                    {props.hd1}
                                    <span> {props.hd2} </span>
                                    {props.hd3}
                                </h2><br />
                                <p>{props.desc}</p>
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
                                    <li>
                                    {props.bl5}
                                    </li>
                                    <li>
                                    {props.bl6}
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Opportunities