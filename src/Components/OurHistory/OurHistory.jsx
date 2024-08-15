import './OurHistory.scss'
import img from '../../Assets/h-1.png'
const OurHistory=()=>{
    return(<>
    <div className='our-history'>
     <div className='container'>
        <div className='our-history-wrapper'>
            <div className='row'>
               <div className='col-lg-6'>
                <div className='img-sec'>
                    <img className='img' src={img} alt="" />
                </div>
                </div>
                <div className='col-lg-6'>
                <div className='content'>
                      <h6 className='meta'>ABOUT US</h6>
                      <h2 className='heading'>OUR <span className='text_grad_green'>HISTORY</span></h2><brLorem ipsum dolor sit  />
                      <p className='description'>EmpowerCare: Advocating for Direct Care Professionals Since 2005 What started as a mission to support a core group of dedicated direct care professionals has grown into a robust community of over 6,000 compassionate individuals.</p>
                      <p className='description'>As a leading direct care staffing agency, EmpowerCare has been at the forefront of connecting skilled direct care professionals with meaningful job opportunities that transform lives and communities.</p>
                      <p className='description'> Our unwavering commitment to the growth, well-being, and success of our direct care professionals sets us apart. Together, we're reshaping the landscape of direct care, one life at a time.</p><br />
                    <a className='learn_btn' href="">Learn More</a><br />
                </div><br />
               </div>
            </div>
        </div>
     </div>
    </div>
    </>)
}
export default OurHistory