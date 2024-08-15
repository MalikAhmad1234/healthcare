import './ResourceBoxes.scss';
import anchorarrow from '../../Assets/anchor-arrow.png';

const ResourceBoxes = () => {
    return(
    <>
        <div className='resource_boxes'>
            <div className='boxes_wrapper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='res_box'>
                                <h3>Your Career GPS 🧭</h3>
                                <p>Feeling a little lost on your career journey? Our EmpowerCareInsights blog is like your personal GPS, guiding you towards career fulfillment with the latest industry trends, advice, and strategies.Let's navigate this together! </p>
                                <div className="btn_cta">
                                    <a href='/'>Explore Now</a>
                                    <div className="active-img">
                                        <img src={anchorarrow} alt="activearrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='res_box'>
                                <h3>Your Empowerment Crew 💪</h3>
                                <p>We've helped countless healthcare pros just like you find their groove and reach new heights. Their success stories will leave you feeling inspired and ready to take on the world! Join our crew of empowered healthcare heroes.</p>
                                <div className="btn_cta">
                                    <a href='/'>READ STORIES</a>
                                    <div className="active-img">
                                        <img src={anchorarrow} alt="activearrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='res_box'>
                                <h3>Your Networking Sidekicks 🤝</h3>
                                <p>Looking to expand your professional circle? We'll connect you with organizations and associations in your specialty, opening doors to networking, mentorship, and staying ahead of the curve.</p>
                                <div className="btn_cta">
                                    <a href='/'>DIAGNOSTIC IMAGING & RADIOLOGY</a>
                                    <div className="active-img">
                                        <img src={anchorarrow} alt="activearrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='res_box'>
                                <h3>Your Question Crushers 💡</h3>
                                <p>Got questions? We've got answers! Our FAQ section is like your personal question-crushing sidekick. Can't find what you need? Our support squad is always in your corner, ready to save the day.</p>
                                <div className="btn_cta">
                                    <a href='/'>GET ANSWER</a>
                                    <div className="active-img">
                                        <img src={anchorarrow} alt="activearrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='res_box'>
                                <h3>Your Job Matchmakers 💼</h3>
                                <p>Ready to find your dream job? Our job board is like a superhero team-up, connecting you with opportunities that match your skills and passions. Let's find your perfect fit and unleash your potential!</p>
                                <div className="btn_cta">
                                    <a href='/'>SEARCH JOBS</a>
                                    <div className="active-img">
                                        <img src={anchorarrow} alt="activearrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='res_box'>
                                <h3>Your Paperwork Tamers 📑</h3>
                                <p>Paperwork got you feeling overwhelmed? Our user-friendly platform is here to tame those forms and keep you organized.From timesheets to tax forms, we've got you covered.</p>
                                <div className="btn_cta">
                                    <a href='/'>DOWNLOAD FORMS</a>
                                    <div className="active-img">
                                        <img src={anchorarrow} alt="activearrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='res_box'>
                                <h3>Your Licensing Lifeline 🎓</h3>
                                <p>Navigating state nursing boards can be a maze, but fear not! We'vegot your back with contact info and links to keep you in the loop on licensing requirements and regulations. Consider us your licensing lifeline!</p>
                                <div className="btn_cta">
                                    <a href='/'>VIEW STATE BOARDS</a>
                                    <div className="active-img">
                                        <img src={anchorarrow} alt="activearrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='res_box'>
                                <h3>Your Knowledge Boosters 🧠</h3>
                                <p>Ready to level up your skills? Our continuing education resources are like a secret weapon for your career. Unlock online courses, webinars, and training programs to keep you at the top of your game.</p>
                                <div className="btn_cta">
                                    <a href='/'>EXPLORE EDUCATION</a>
                                    <div className="active-img">
                                        <img src={anchorarrow} alt="activearrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default ResourceBoxes