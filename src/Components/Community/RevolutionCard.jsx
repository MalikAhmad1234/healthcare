import './RevolutionCard.scss'
import { FiArrowDownRight } from "react-icons/fi";

import image54 from '../../Assets/Image 54.png'
const RevolutionCard=()=>{
    return (<>
        <div className="RevolutionCard">
            <div className="wrapper">
                <div className="row">
                    <div className='left_content col-lg-6 col-md-12 col-sm-12'>
                        <h6 className="text1"><b>COMMUNITY</b></h6>
                        <h1 className="heading">
                            JOIN
                            <span className='text_grad_black'><b> THE RIPPLE </b> </span>
                            EFFECT REVOLUTION
                        </h1>
                        <p className="description">At EmpowerCare, we don't just fill healthcare positions, we create opportunities for change. By joining our team of passionate healthcare professionals, you become part of a movement that transforms every job into a catalyst for positive impact.</p>
                        <p className='description'>Together, we can make waves of change that ripple across the globe, bringing hope, empowerment, and a brighter future to those who need it most. Every job, every action, every choice has the power to create a lasting impact.​</p>
                        <br />
                        {/* <div className='btn-container'>
                            <button className='button' >
                                LETS PROMOTE WELL BEING<span><FiArrowDownRight/></span>
                            </button>
                        </div> */}
                    </div>
                    <div className='revolution_image col-lg-6 col-md-12 col-sm-12'>
                        <img src={image54} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default RevolutionCard