import './HowtoBecome.scss'
import img1 from '../../Assets/Group 350.png'
import img2 from '../../Assets/Group 351.png'
const HowtoBecome = (props) => {
    const{mhead1 , heading1,description1,description2,description3,description4}=props
    return (<>
        <div className="how-to-become">  
            <div className="container">
                <div className="how-to-become-wrapper">
                    <div className="top-content">
                        <h6 className='meta'>JOIN US NOW</h6>
                        <h2 className='heading'>HOW TO <span className='text_grad_black'>BECOME</span> AN <br />{mhead1}</h2>
                    </div>
                    <div className='bottom-content'>
                        <div className="row">
                            <div className='col-lg-6' >
                                <div className='img-sec'>
                                    <img src={img1} alt="logo1" />
                                </div><br />
                                <h6 className='description'>{heading1}</h6><br />
                                <p className='description2'>{description1}</p><br />
                                <p className='description2'> {description2}</p>
                            </div>
                            <div className='col-lg-6' >
                                <div className='img-sec'>
                                    <img src={img2} alt="logo2" />
                                </div><br />
                                <h6 className='description'>Wide Range of Opportunities</h6><br />
                                <p className='description2'>{description3}</p><br />
                                <p className='description2'>{description4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default HowtoBecome