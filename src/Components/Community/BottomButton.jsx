import './BottomButton.scss'
import { Link } from 'react-router-dom';

const BottomButton = () => {
    return(
    <>
    <div className='btn-capital'>
        <div className="bottom-btn">
            <div className='container'>
                <Link to="/signup" className="signup">
                    <span>Sign up</span>
                </Link>
                
                <Link to={"/facilities/ripple-effect"} className='learnmore'>
                    <span>Learn More</span>
                </Link>
            </div>
        </div>
    </div>    
    </>
    )
}
export default BottomButton