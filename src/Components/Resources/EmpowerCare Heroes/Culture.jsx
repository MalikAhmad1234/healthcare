import './Culture.scss'
import img from '../../../Assets/businessimg.png'
const Culture=(props)=>{
    return(  <>
         <div className="culture">
            <div className="container">
                <div className="empowercare-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta">EMPOWERING HEALTHCARE HEROES</span>
                                <h2 className="heading">
                                    
                                    <span className='text_grad_red'> A CULTURE </span> THAT CELEBRATES YOU
                                </h2>
                                <p className="description">At EmpowerCare, we foster a culture that celebrates your unique talents,
experiences, and passion for healthcare.
                                </p>
                                <p>We encourage you to be your authentic self and provide a supportive
environment where you can grow both personally and professionally.</p><br/>
                                {/* <div class="priemer-cta">
                                    <a class="btn_red" href="/">READ MORE</a>
                                    
                                </div> */}
                                {props.readmorebtn}
                            </div>
                        </div>
                        <div className="col-md-6">
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
export default Culture