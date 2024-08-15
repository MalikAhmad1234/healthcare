import './EnjoyBenefits.scss'
import img from '../../../Assets/EnjoyBenefit.png'
const EnjoyBenefits=()=>{
    return(  <>
         <div className="enjoy_benefits">
            <div className="container">
                <div className="empowercare-wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="left-content">
                                <span className="meta"><b>REWARDS AND BENEFITS</b></span>
                                <h2 className="heading">
                                    ENJOY
                                    <span className='text_grad_red'> GREAT BENEFITS </span> WHILE HELPING OTHERS
                                </h2>
                                <p className="description">At EmpowerCare, we know that happy and healthy healthcare heroes like you can
                                help more people.
                                </p>
                                <p>That's why we give you awesome benefits, so you can focus on what you do best
                                – caring for others!</p><br/>
                                <div class="priemer-cta">
                                    <a class="btn_red" href="/">APPLY NOW</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={img} alt="empowercareimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>)
}
export default EnjoyBenefits