import React from 'react';
import './ThreeColumns.scss';
import { Link } from 'react-router-dom';
import img from '../../Assets/7228757 copy.png';

const ThreeColumns = (props) => {
    const{description_1,description_2 ,bx1_head1 ,bx2_head2,bx3_head3 ,bx4_head ,dx4_desc ,dx4_desc2 ,bx5_head ,dx5_desc,dx5_desc2}=props
    let classnames = props.classes == null ? "" : props.classes;
    
    return (
        <div className="emp_three_columns">
            <div className="choose-container">
                <div className={`choose-wrapper ${classnames}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="left-content">
                                    <span className="meta">Who Is This For </span>
                                    <h2 className="heading">
                                   {bx1_head1}<span>{bx2_head2}</span> {bx3_head3}
                                    </h2>
                                    {props.firstDescription && <p className='description'>{props.firstDescription}</p> }
                                    <p className="description">{description_1}</p>

                                    <p className="description">{description_2}</p>
                                
                                    <div className="sec-btns">
                                        <a href={props.lrn_link} className="learn-btn">
                                            <span>Learn More</span>
                                        </a>
                                        <Link to="/signup" className="signup-btn">
                                            <span 
                                            style={{color: props.facilities ? "white" :"black",
                                            
                                        }}>Sign up</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="right-content">
                                    <div className="content-row">
                                        <div className="content-box active">
                                            <h6><b>{bx4_head}</b></h6>
                                            <p className="description">{dx4_desc}</p>
                                            <p className="description">{dx4_desc2}</p>
                                            <div className='mid_img'>
                                                <img src={img} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="right-content">
                                    <div className="content-row">
                                        <div className="content-box active">
                                            <h6><b>{bx5_head}</b></h6>
                                            <p className="description">{dx5_desc}</p>
                                            <p className="description">{dx5_desc2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeColumns