import React from 'react';
import './OurWorkingGreen.scss';
import icon1 from '../../Assets/Group 209.png';
import icon2 from '../../Assets/Group 210.png';
import icon3 from '../../Assets/Group 211.png';

const OurWorkingGreen = (props) => {
    const{m_head1 ,m_head2 ,m_head3 ,crd_head1 ,crd_desc1 ,crd_head2 , crd_desc2 ,crd_head3, crd_desc3}=props
    return (
        <div className="our-working_green">
            <div className='container'>
                <div class="top-content">
                    <h2 class="heading">{m_head1}
                    <span> {m_head2} </span>
                        {m_head3}
                    </h2>
                </div>
                <div className="working-wrapper">
                    <div className='row'>
                        <div className='working-col col-12'>
                            <div className='row'>
                            <div className='working_icon col-lg-4 col-md-4 col-sm-12'>
                                    <img src={icon1} />
                                </div>
                                <div className='working_content col-lg-8 col-md-8 col-sm-12'>
                                    <h3>{crd_head1}</h3>
                                    <p>{crd_desc1}</p>
                                </div>
                            </div>
                        </div>
                        <div className='working-col col-12'>
                            <div className='row'>
                                <div className='working_icon col-lg-4 col-md-4 col-sm-12'>
                                    <img src={icon2} />
                                </div>
                                <div className='working_content col-lg-8 col-md-8 col-sm-12'>
                                    <h3>{crd_head2}</h3>
                                    <p>{crd_desc2}</p>
                                </div>
                            </div>
                        </div>
                        <div className='working-col col-12'>
                            <div className='row'>
                                <div className='working_icon col-lg-4 col-md-4 col-sm-12'>
                                    <img src={icon3} />
                                </div>
                                <div className='working_content col-lg-8 col-md-8 col-sm-12'>
                                    <h3>{crd_head3}</h3>
                                    <p>{crd_desc3}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWorkingGreen