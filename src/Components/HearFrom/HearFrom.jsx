import './HearFrom.scss';

const HearFrom = (props) => {

    return (
        <div className='hear-from'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="left-content">
                            <span className="meta">WHO IS THIS FOR</span>
                            <h2 className="heading">
                                {props.hd1} <span> {props.hd3}</span> {props.hd4}
                            </h2>
                            <p className="description">{props.desc1}
                            </p>
                            <p className="description">{props.desc2}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="right-content">
                            <div className="content-row">
                                <div className="content-box active">
                                    <h5 className="heading">{props.chd1}</h5>
                                    <p className="description">{props.cdesc1}</p>
                                </div>
                                <div className="content-box">
                                    <h5 className="heading">{props.chd2}</h5>
                                    <p className="description">{props.cdesc2}</p>
                                </div>
                                <div className="content-box">
                                    <h5 className="heading">{props.chd3}</h5>
                                    <p className="description">{props.cdesc3}</p>
                                </div>
                            </div><br />
                            <div className="sec-btns">
                                <button className="learn-btn">
                                    <span> <a href="/signup">Sign up</a></span>
                                </button>
                                <button className="signup-btn">
                                    <span><a href={props.link}>Explore More</a></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HearFrom