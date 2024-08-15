import './TitleContentButton.scss'
import activearrow from '../../Assets/active-arrow.png'

const TitleContentButton = () => {
    return(
    <>
    <div className='title_content_button'>
        <div className='container'>
            <div className='trusted-wrapper'>
                <div class="top-content">
                    <span class="meta">Resources</span>
                    <h2 class="heading">EmpowerCare<span class="text_grad_red"> Resources </span> </h2>
                    <p className='description'>Hey there, healthcare hero! 👋 We know you're out there every day, pouring your heart into caring for others. But who's
got your back? That's where EmpowerCare comes in! We're not just another staffing agency - we're your partner in
empowerment, dedicated to helping you thrive in your healthcare career.</p>
                <div className='btn_arrow_wrapper'>
                    <div class="btn-wrapper">
                        <a class="btn_red">SIGNUP</a>
                    </div>
                        <div className='arrow_img'>
                        <img className='arr-img' src={activearrow} alt="arrow" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default TitleContentButton