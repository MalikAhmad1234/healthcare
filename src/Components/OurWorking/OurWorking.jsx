import React from 'react';
import './OurWorking.scss';
import icon1 from '../../Assets/Group530.png';
import icon2 from '../../Assets/Group531.png';
import icon3 from '../../Assets/Group532.png';

const OurWorking = () => {
    return (
        <div className="our-working">
            <div className='container'>
                <div className="working-wrapper">
                    <div class="top-content">
                        <h2 class="heading">What Makes
                        <span class="text_grad_red"> Working </span>
                            here different
                        </h2>
                    </div>

                    <div className='row'>
                        <div className='working-col col-12'>
                            <div className='row'>
                            <div className='working_icon col-lg-4 col-md-4 col-sm-12'>
                                    <img src={icon1} />
                                </div>
                                <div className='working_content col-lg-8 col-md-8 col-sm-12'>
                                    <h3>We Care About You</h3>
                                    <p>We put our employees first, providing the support, resources, and flexibility you need to thrive both professionally and personally. Your well-being is our top priority.</p>
                                </div>
                            </div>
                        </div>
                        <div className='working-col col-12'>
                            <div className='row'>
                                <div className='working_icon col-lg-4 col-md-4 col-sm-12'>
                                    <img src={icon2} />
                                </div>
                                <div className='working_content col-lg-8 col-md-8 col-sm-12'>
                                    <h3>We're Driven by Impact</h3>
                                    <p>Every placement, every shift, every interaction is an opportunity to make a positive impact on patients, facilities, and communities. We measure our success by the lives we transform.</p>
                                </div>
                            </div>
                        </div>
                        <div className='working-col col-12'>
                            <div className='row'>
                                <div className='working_icon col-lg-4 col-md-4 col-sm-12'>
                                    <img src={icon3} />
                                </div>
                                <div className='working_content col-lg-8 col-md-8 col-sm-12'>
                                    <h3>We Embrace Diversity</h3>
                                    <p>We celebrate what makes you unique. At EmpowerCare, you can be your authentic self and know that your talents, strengths, and experiences are valued.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWorking