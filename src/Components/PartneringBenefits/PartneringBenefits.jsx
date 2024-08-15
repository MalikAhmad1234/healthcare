import './PartneringBenefits.scss'
const PartneringBenefits=({heading1,heading2,heading3,heading4,description1,description2,description3,description4})=>{
    return(<>
    <div className="benefits-div">
        <div className="container">
            <div className='top-content'>
                <h2>WHY PARTNER <span className='text_grad_green'>WITH US?​</span></h2>
                <p>BENEFITS OF PARTNERING WITH EMPOWERCARE</p>
            </div>
            <div className="row">
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='content'>
                        <h6>{heading1}</h6>
                        <p>{description1}</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='content'>
                        <h6>{heading2}</h6>
                        <p>{description2}</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='content'>
                        <h6>{heading3}</h6>
                        <p>{description3}</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='content'>
                    <h6>{heading4}</h6>
                        <p>{description4}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    </>)
}
export default PartneringBenefits