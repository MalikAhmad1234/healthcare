import icon1 from '../../Assets/icon1.png'
import icon2 from '../../Assets/icon2.png'
import icon3 from '../../Assets/icon3.png'
import icon4 from '../../Assets/icon4.png'
import icon5 from '../../Assets/icon5.png'
import './Benefits.scss'
const Benefits=()=>{ 

    const Box=({img,description})=>{
        return(<>
         <div className="box">
                        <div className="img-sec">
                            <img src={img} alt="" />
                        </div>
                        <div className="content">
                            <p className="description">{description}</p>
                        </div>
                      </div><br />
        </>)
    }
    return(<>
    <div className="benefits-section">
        <div className="container">
            <div className="benefits-wrapper">
                <div className="row">
                     <div className="col-lg-6">
                      <h2 className="heading">THE <span className="text_grad_green">BENEFITS </span>OF BEING A SHIFT CHAMPION</h2>
                      <Box
                      img={icon1}
                      description={'You get the recognition you deserve for your amazing contributions'}
                      />
                      <Box
                      img={icon2}
                      description={'You receive special rewards and prizes that show how  much we appreciate your hard work.'}
                      />
                     </div><br />
                     <div className="col-lg-6">
                     <Box
                      img={icon3}
                      description={'You get chances to advance your career and grow in your field.'}
                      />
                     <div className="box-active">
                        <div className="img-sec">
                            <img src={icon4} alt="" />
                        </div>
                        <div className="content">
                            <p className="description">{'You become a role model for your coworkers and inspire them to provide great care.'}</p>
                        </div>
                      </div><br />
                      <Box
                      img={icon5}
                      description={'You join a community of passionate healthcare professionals'}
                      />
                      
                     </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default Benefits