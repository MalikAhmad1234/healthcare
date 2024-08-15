import './ShiftChampions.scss'
import img from '../../Assets/champions.png';
import activearrow from '../../Assets/active-arrow.png';

const ShiftChampions=(props)=>{
    const{head1,head2 ,head3,head4 ,desc1 ,desc2, desc3 ,desc4}=props
    return(  <>
         <div className="shift-champions">
            <div className="container">
                <div className="empowercare-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta">{head1}</span>
                                <h2 className="heading">
                                    {head2}
                                    <span className='text_grad_green'>{head3}</span>{head4}
                                </h2><br />
                                <p className="description">● {desc1}</p>
                                <p className="description">● {desc2}</p>
                                <p className="description">● {desc3}</p>
                                <p className="description">● {desc4}</p>
                                <div class="priemer-cta">
                                    <a class="btn_green" href="/signup">Sign Up</a>
                                    <div className="active-img">
                                        <img src={activearrow} alt="activearrow" />
                                    </div>
                                </div>
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

export default ShiftChampions