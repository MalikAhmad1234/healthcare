import './NetwrokSection1.scss'
import networkImg from '../../../Assets/NetworkImg.png'
const NetworkSection1=()=>{
    return (<>
    <div className="network">
            <div className="container">
                <div className="network-wrapper">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="left-content">
                                <p className="meta">PROGRAM FOR NURSES</p>
                                <h2 className="heading">
                                   SHIFT
                                    <span className='text_grad_red'> MAKERS REFERRAL </span> PROGRAM FOR NURSES
                                </h2>
                                <p className="description">We've got something exciting to share with you – our brand-new Shift Makers Nurses Referral Program! This program is all about rewarding you for helping us find awesome nurses to join our EmpowerCare Contract Nursing. When you refer your nurse friends to us, you'll earn some pretty cool prizes.
                                   </p>
                            
                                
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={networkImg} alt="networkImage" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default NetworkSection1