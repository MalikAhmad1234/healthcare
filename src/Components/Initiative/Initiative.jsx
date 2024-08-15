import './Initiative.scss'
import trophy from '../../Assets/trophy.png'
const Initiative = ({button,mainHeading,heading,heading1,heading2,heading3,heading4,description1,description2,description3,description4,hd1,hd2,hd3,link,lrnbtn}) => {
    return (
        <>
<div className="initiative_sec">
                <div className="container">
                    <div className="initiative-wrapper">
                       {mainHeading  ? (<>
                       <div className='top-content'>
                        <h2 className='top-heading'>{hd1} <span className='text_grad_green'>{hd2}</span> <br />{hd3}</h2>
                       </div><br />
                       </>):(<></>)}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="initiative-box">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={trophy} alt="trophy" />
                                        </div>
                                        <div className="text-area1">
                                            <h2 className="heading">{heading}</h2>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="initiative-box active">
                                    <div className="left-sec">
                                        
                                        <div className="text-area">
                                            <div className='content'>
                                            <h6 className="heading">{heading1}</h6>
                                            <p className="description">{description1}</p>
                                            </div>
                                            {button?(<>
                                            {/* <div className='btn'>
                                                <a className='learn_more' href="">Learn More</a>
                                            </div> */}
                                            </>):(<></>)}
                                       
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="initiative-box active">
                                    <div className="left-sec">
                                        
                                        <div className="text-area">
                                        <div className='content'>
                                            <h6 className="heading">{heading2}</h6>
                                            <p className="description">{description2}</p>
                                            </div>
                                            {button?(<>
                                            {/* <div className='btn'>
                                                <a className='learn_more' href="">Learn More</a>
                                            </div> */}
                                            </>):(<></>)}
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="initiative-box active">
                                    <div className="left-sec">
                                        
                                        <div className="text-area">
                                        <div className='content'>
                                            <h6 className="heading">{heading3}</h6>
                                            <p className="description">{description3}</p>
                                            </div>
                                            {button?(<>
                                            {/* <div className='btn'>
                                                <a className='learn_more' href="">Learn More</a>
                                            </div> */}
                                            </>):(<></>)}
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="initiative-box active">
                                    <div className="left-sec">
                                        
                                        <div className="text-area">
                                        <div className='content'>
                                            <h6 className="heading">{heading4}</h6>
                                            <p className="description">{description4}</p>
                                            </div>
                                            {button?(<>
                                            {/* <div className='btn'>
                                                <a className='learn_more' href="">Learn More</a>
                                            </div> */}
                                            </>):(<></>)}
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='butns'>
                                    <a className='btn_green' href="/signup">Sign Up</a>
                                    {/* <a  className='learn_more' href='/facilities/shift-champions'>Learn More</a> */}
                                    {lrnbtn}
                                </div><br />
                               
                                
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Initiative