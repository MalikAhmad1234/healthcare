import './DynamicSquads.scss'
import empowercareimg from '../../Assets/h2_about_img.png'
const DynamicSquads = (props) => {

    const{ meta, metahd1,  metahd2 ,desc1 ,metahd3 ,heading  ,bullet_text1 ,bullet_text2, bullet_text3 ,bullet_text4 }=props
    return (
        <div className="DynamicSquads">
            <div className="DynamicSquads-container">
                <div className="empowercare-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="left-content">
                                    <span className="meta">{meta}</span>
                                    <h2 className="heading">
                                        {metahd1} <span>{metahd2}</span><br />{metahd3}
                                    </h2>
                                    <p className="description">
                                        {desc1}
                                    </p><br />

                                    <h5><b>{heading}</b></h5>
                                    <ul>
                                        <li>
                                        {bullet_text1}
                                        </li>
                                        <li>
                                        {bullet_text2}
                                        </li>
                                        <li>
                                        {bullet_text3}
                                        </li>
                                        <li>
                                        {bullet_text4}
                                        </li>
                                    </ul>
                                   
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="section-img">
                                    <img className='img' src={empowercareimg} alt="empowercareimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicSquads;
