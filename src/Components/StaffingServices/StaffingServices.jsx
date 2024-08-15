import './StaffingServices.scss'
import img from '../../Assets/MaskGroup25.png'
const StaffingServices=({greenheading,heading ,option1,option2,option3,option4,option5,option6})=>{
    return ( 
    <>
    <div className="services-div">
      <div className='container'>
          <div className='text-sec'>
              <h1 className='heading'>EMPOWERCARE <span className='text_grad_green'>{greenheading}</span><br />{heading}</h1>
          </div>
        <div className="services_wrapper">
          <div className='row'>
            <div className='content_boxes col-lg-4 col-md-4 col-sm-12'>
              <div className='content_box'>
                <p>{option1}</p>
              </div>
              <div className='content_box'>
                <p>{option2}</p>
              </div>
              { option3 ?
                <div className='content_box'>
                <p>{option3}</p>
              </div>
              : <></>
              }
              
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='img_content_box'>
                <img src={img} />
              </div>
            </div>
            <div className='last_content_box content_boxes col-lg-4 col-md-4 col-sm-12'>
              <div className='content_box'>
                <p>{option4}</p>
              </div>
              <div className='content_box'>
                <p>{option5}</p>
              </div>
              { option6 ?
                <div className='content_box'>
                <p>{option6}</p>
              </div>
              : <></>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}
export default StaffingServices