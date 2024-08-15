import { FiArrowDownRight } from "react-icons/fi"
import logo from '../../Assets/Group 368.png'
import logo2 from '../../Assets/Group 369.png'
import './GuideCards.scss'
const GuideCards = (props) => {

    const{head1 ,head_desc1 , head_desc2 , head2 ,head2_desc1 }=props
    return (<>
        <div className="guide-cards">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="job-box">
                            <div className="job-logo">
                                <img src={logo} alt="job1" />
                            </div>
                            <h4 className="heading">{head1}</h4>
                            <p className="description">{head_desc1}</p>
                            <p className="description">{head_desc2}</p>
                            <a href="/signup">LEARN MORE <FiArrowDownRight /></a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="job-box active ">
                            <div className="job-logo">
                                <img src={logo2} alt="job3" />
                            </div>
                            <h4 className="heading">{head2}</h4>
                            <p className="description">{head2_desc1}</p><br />

                            <a href="/facilities/empowercare-acadmey">LEARN MORE <FiArrowDownRight /></a>
                        </div><br />
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default GuideCards