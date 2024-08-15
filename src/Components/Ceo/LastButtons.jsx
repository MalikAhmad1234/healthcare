import './LastButtons.scss'
import { Link, useLocation } from "react-router-dom";
import { FiArrowDownRight } from "react-icons/fi";
const LastButtons=()=>{
    return(<>
    <div className='parent_btn'>
     <div className="container">
                         <Link to="/facilities/request-staffing">  <button className="button1">FIND TALENT</button></Link>
                         <Link to="/signup"> <button className="button2">FIND EMPOWERING OPPORTUNITIES <FiArrowDownRight/></button></Link>
                         <Link to="/about/career"> <button className="button3">CAREER AT EMPOWERCARE</button></Link>
    </div>
    </div>
    </>)
}
export default LastButtons