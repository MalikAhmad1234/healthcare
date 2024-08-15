import { FiArrowDownRight } from "react-icons/fi"
import './VisitFAQs.scss'
const VisitFAQs=(props)=>{
    return(<>
    <div className="visit-sec">
        <div className="container">
            <div className="content">
              <h2 className="heading">{props.hd1}<span className="text_grad_green">FAQS</span></h2><br />
              <p className="description">{props.desc}</p><br />
            <div className="btn">
                <a className="btn_green" href={props.link}>{props.btntxt} <FiArrowDownRight/></a>
            </div>
            </div>
        </div>
    </div>
    </>)
}
export default VisitFAQs