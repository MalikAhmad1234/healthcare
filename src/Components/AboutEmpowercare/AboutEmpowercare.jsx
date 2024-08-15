import './AboutEmpowercare.scss'
const AboutEmpowercare=(props)=>{
    return(<>
    <div className='aboutEmpowercare-sec'>
        <div className='container'>
            <div className='content'>
             <h2 className='heading'>ABOUT <span className='text_grad_green'>EMPOWERCARE</span></h2>
             <p className='description'>{props.desc}</p>
            </div>
        </div>
    </div>
    </>)
}
export default AboutEmpowercare
