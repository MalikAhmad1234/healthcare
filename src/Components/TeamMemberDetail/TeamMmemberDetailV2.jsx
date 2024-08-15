import './TeamMemberDetailV2.scss'
const TeamMemberDetailV2=({image,heading,text1,text2,text3})=>{
    return(<>
      <div className='team_member_detailV2'>
            <div className="healthcare-sec">
                <div className="container">
                    <div className="healthcare-wrapper">
                        <div className="row">
                            
                                <div className="right-content">
                                    <div className="section-img">
                                        <img src={image} alt="healthcareimg" />
                                    </div>
                                </div>
                            
                                <div className="left-content">
                                    <h2 className="heading">
                                       {heading}
                                    </h2>
                                    <h6>{text1}</h6>
                                    <p>{text2}</p>
                                    <p>{text3}</p>
                                    {/* <div style={{marginBottom:'5%'}} className="btn_cta">
                                        <a className='btn_red' href='/'>READ MORE</a>
                                      
                                    </div> */}
                                    <br /><br />
                                </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default TeamMemberDetailV2