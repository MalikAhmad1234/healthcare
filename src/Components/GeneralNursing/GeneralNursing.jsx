import './GeneralNursing.scss'
import img1 from '../../Assets/Group 332.png'
import img2 from '../../Assets/Group 333.png'
import img3 from '../../Assets/Group 334.png'
import img4 from '../../Assets/Group 335.png'
import logo1 from '../../Assets/Group 474.png'
import logo2 from '../../Assets/Group 475.png'
import logo3 from '../../Assets/Group 476.png'
import logo4 from '../../Assets/Group 477.png'

const GeneralNursing = ({ text1, text2, text3, text4, heading1, heading2, heading3, guide }) => {
    return (<>
        <div className="general-nursing">
            <div className="container">
                <div className="wrapper">
                    <div className='top-content'>
                        <h2 className='heading'>{heading1} <span className='text_grad_green'>{heading2}</span>{heading3}</h2>
                    </div>
                    <br />
                    <div className='boxes'>
                        <div className="row">

                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <div className='box1'>
                                    <div className="image-container">
                                        <img className="border-img" src={img1} alt="" />
                                    </div><br />
                                    <div className='content'>
                                        {guide ? (<>
                                            <ul>
                                                <li>{text1}</li>
                                            </ul>
                                        </>) : (<>
                                           <div className='logoImg'> <img src={logo1} alt="" /></div><br />
                                            <h5>Direct Deposit</h5>
                                            <p>Weekly pay via direct deposit for
                                                financial ease.</p>
                                        </>)}

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <div className='box1'>
                                    <div className="image-container">
                                        <img className="border-img" src={img2} alt="" />
                                    </div><br />
                                    <div className='content'>

                                    {guide ? (<>
                                            <ul>
                                                <li>{text2}</li>
                                            </ul>
                                        </>) : (<>
                                           <div className='logoImg'> <img src={logo2} alt="" /></div><br />
                                            <h5>Direct Deposit</h5>
                                            <p>Weekly pay via direct deposit for
                                                financial ease.</p>
                                        </>)}

                                    </div>
                                </div>
                            </div><br />
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <div className= {guide ? 'box1' :'boxActive'} >
                                    <div className="image-container">
                                        <img className="border-img" src={img3} alt="" />
                                    </div><br />
                                    <div className='content'>

                                    {guide ? (<>
                                            <ul>
                                                <li>{text3}</li>
                                            </ul>
                                        </>) : (<>
                                           <div className='logoImg'> <img src={logo3} alt="" /></div><br />
                                            <h5 className='white-heading'>Direct Deposit</h5>
                                            <p className='white-text'>Weekly pay via direct deposit for
                                                financial ease.</p>
                                        </>)}

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <div className='box1'>
                                    <div className="image-container">
                                        <img className="border-img" src={img4} alt="" />
                                    </div><br />
                                    <div className='content'>

                                    {guide ? (<>
                                            <ul>
                                                <li>{text4}</li>
                                            </ul>
                                        </>) : (<>
                                           <div className='logoImg'> <img src={logo4} alt="" /></div><br />
                                            <h5>Direct Deposit</h5>
                                            <p>Weekly pay via direct deposit for
                                                financial ease.</p>
                                        </>)}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default GeneralNursing