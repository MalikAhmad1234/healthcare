import './AboutusSnippet.scss'
import activearrow from '../../Assets/active-arrow.png'
const AboutusSnippet = ({description,btn1,btn2}) => {
    return (<>
        <div className="about-us-snippet">
            <div className="container">
                <div className="content">
                    <h6 className="meta">
                        ABOUT US
                    </h6>
                    <h2 className="heading"><span className="text_grad_green">ABOUT</span> US</h2><br />
                    <p className="description">{description}</p>
                    <div className='arrow_img'>
                        <img className='arr-img' src={activearrow} alt="arrow" />
                    </div>
                    <div className="butns">
                        <a className='btn_green' href="/about/contactus">{btn1}</a><br />
                        <a href="/about" className='learn_more'>{btn2}</a>
                    </div>
                   
                </div>
            </div>
        </div>
    </>)
}
export default AboutusSnippet