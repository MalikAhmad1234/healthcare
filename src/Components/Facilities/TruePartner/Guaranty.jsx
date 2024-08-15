import './Guaranty.scss';
import storiesimg from '../../../Assets/guaranty.png';

const Guaranty = (props) => {
    const { heading1, heading2, description, description2, description3, btn1, btn2, img } = props
    return (
        <>
            <div className="guaranty-sec">
                <div className="container">
                    <div className="guaranty-wrapper">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="left-content">

                                    <h2 className="heading">
                                        {heading1}
                                        <span className='text_grad_green'> {heading2} </span> <br />

                                    </h2>
                                    <p className="description">{description}</p>
                                    <p className="description">{description2}</p>
                                    <p className="description">{description3}</p><br />
                                    <div className='buttons'>
                                        <a href="/about/contactus" className='btn_green'>{btn1}</a>
                                        <a href="/facilities/seamless-solutions" className='learn_more'>{btn2}</a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="right-content">
                                    <div className="section-img">
                                        <img src={img} alt="storiesimg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
export default Guaranty