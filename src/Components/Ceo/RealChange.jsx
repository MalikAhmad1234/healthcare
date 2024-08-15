import nextstepimg from '../../Assets/realChange.png';
import downarrow from '../../Assets/down-link-arrow.svg';
import { Link } from 'react-router-dom';
import './RealChange.scss'
const RealChange=()=>{
    return(<>
    <div className="Realchange-sec">
            <div className="container">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="left-content">
                                    <span className="meta">CEO LETTER</span>
                                    <h2 className="heading">
                                        THAT IS 
                                        <span> WHEN REAL </span> 
                                        CHANGE HAPPENS
                                    </h2>
                                    <p className="description">The EmpowerCare team is driven by our mission to create opportunities for our partners to make a lasting difference.</p>
                                    <p className='main-description' ><i>You're our partner now, and we're glad you're here.
                                    <br />We can't wait to see the impact you'll make.</i>
</p>
                                    <p className="description2"><b>Jamal Mahijibhai, President and CEO</b></p>
                                
                                    <div className="sec-btns">
                                        <Link to="/signup">
                                        <button className="learn-btn">
                                            <span>START YOUR JOURNEY WITH EMPOWERCARE</span>
                                            <img src={downarrow} alt="downarrow" />
                                        </button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                            <div className="right-content">
                                    <div className="section-img">
                                        <img src={nextstepimg} alt="nextstepimg" />
                                    </div>
                                </div>

                               
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default RealChange