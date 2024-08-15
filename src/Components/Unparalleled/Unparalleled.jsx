import './Unparalleled.scss'
import activearrow from '../../Assets/active-arrow.png'
const Unparalleled = (props) => {
    return (<>
        <div className="unparalleled-sec">
            <div className="container">
                <div className="content">
                    <h6>
                        JOIN US NOW
                    </h6>
                    <h2>
                        <b>{props.hd1} <span className='text_grad_green'><br />{props.hd2}</span>
                             {props.hd3} </b>
                    </h2>
                    <br />
                    <div className='p-txt'>
                        <p>{props.desc}
                        </p>
                    </div>
                </div>
                <div className='su-btn'>
                    <div className='btn-wrapper'>
                        <a href="/signup" className='btn_green'>SIGNUP</a>
                    </div>
                    <div className='arrow_img'>
                        <img className='arr-img' src={activearrow} alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Unparalleled