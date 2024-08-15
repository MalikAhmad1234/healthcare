import './Assessing.scss'
const Assessing = (props) => {
    const{description}=props
    return (<>
        <div className="assessing-sec">
            <div className="container">
                <div className="content">
                    <h6><span className="meta">
                        JOIN US NOW
                    </span></h6>
                    <h2 className="heading">ASSESSING, PLANNING <span className="text_grad_green">IMPLEMENTING</span>
                        <br />AND EVALUATING PATIENT CARE</h2><br />
                        <div className='description-sec'>
                    <p className="description">{description}</p></div>
                </div>
            </div>
        </div>
    </>)
}
export default Assessing