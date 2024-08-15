import './FacilityOperations.scss'
import logo from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import { Link } from 'react-router-dom';
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import { FiArrowDownRight } from "react-icons/fi";

const FacilityOperations=({subheading,whiteheading1,whiteheading2,blackheading,option1,description1,option2,description2,option3,description3,option4,description4,option5,description5,bullet1,bulletdescription1,bullet2,bulletdescription2,endtext,btn,maindescription})=>{
    return(
    <>
    <div className="faciityOperations-sec">
        <div className="faciityOperations-wrapper">
            <div className="faciityOperations-container">    
                <div className="container">
                    <div className="top-content">
                        <p className="description-sub-heading">{subheading}</p>
                        <h2 className="heading main-heading">
                           {whiteheading1} <span className='span-style'> {blackheading}</span> {whiteheading2}
                        </h2>
                        <p className='description1'>{maindescription}</p><br />

<p className='description2'>Our Premier Partnership Program gives you:</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={logo} alt="job1" />
                                </div>
                                <h4 className="heading">{option1}</h4>
                                <p className="description">{description1}</p><br />
                                <a href="/">LEARN MORE <FiArrowDownRight/></a>
                            </div>
                        </div>
                       
                        <div className="col-lg-6 col-md-12">
                            <div className="job-box active">
                                <div className="job-logo">
                                    <img src={logo2} alt="job3" />
                                </div>
                                <h4 className="heading">{option2}</h4>
                                <p className="description">{description2}</p><br />
                                <a href="/">LEARN MORE <FiArrowDownRight/></a>
                            </div><br />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={logo3} alt="job1" />
                                </div>
                                <h4 className="heading">{option3}</h4>
                                <p className="description">{description3}</p><br />
                                <a href="/">LEARN MORE <FiArrowDownRight/></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={logo4} alt="job1" />
                                </div>
                                <h4 className="heading">{option4}</h4>
                                <p className="description">{description4}</p><br />
                                <a href="/">LEARN MORE <FiArrowDownRight/></a>
                            </div><br />
                        </div>
                        {option5 && option5.trim() !== '' && (
                        <div className="col-lg-6 col-md-12">
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={logo4} alt="job1" />
                                </div>
                                <h4 className="heading">{option5}</h4>
                                <p className="description">{description5}</p><br />
                                <a href="/">LEARN MORE <FiArrowDownRight/></a>
                            </div><br />
                        </div>  
                        )}
                        { bullet1 ? 
 <div className="start-box">
 <br />
     <p className="description"><b>{bullet1}</b> {bulletdescription1}</p><br />
     
 </div> :<></>
                        }
                           
                            
                            <div className="act-box">
                            <br />
                                <p className="description"><b>{bullet2}</b> {bulletdescription2}</p><br />
                                
                            </div>
                           <div className='end-text'> <br />
                           <p>{endtext}</p></div>
                        
                    </div>
                    {btn}
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default FacilityOperations