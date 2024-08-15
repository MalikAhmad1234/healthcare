import { Box, Stack } from "@mui/material"
import './NursingDropdown.scss'
import ellipse1 from '../../Assets/nursing/nursing nav img1.png'
import ellipse2 from '../../Assets/nursing/nursing nav img2.png'
import ellipse3 from '../../Assets/nursing/nursing nav img3.png'
import ellipse4 from '../../Assets/nursing/nursing nav img4.png'
import ellipse5 from '../../Assets/nursing/nursing nav img5.png'
import ellipse6 from '../../Assets/nursing/nursing nav img6.png'
import ellipse7 from '../../Assets/nursing/nursing nav img7.png'
import ellipse8 from '../../Assets/nursing/nursing nav img8.png'
import ellipse9 from '../../Assets/nursing/nursing nav img9.png'
import { Link } from 'react-router-dom'

const NursingDropdown=()=>{
    const Style = {
       
        transition: 'background-color 0.3s', 
        '&:hover': {
            backgroundColor: '#F4F4F4'
        }
    };
    return(<>
     <Stack direction={'row'} spacing={1} py={3}>
      <Box px={3}>
      <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse1} alt="" />
                    <Link to={"/professionals/guide"}>
                    <Box>
                        <h6 className='box3-h6'>Pathways, Roles, & Jobs</h6>
                        <p className='box3-p'>Guide to General Nursing Careers: Pathways, Roles, & Jobs</p>
                    </Box>
                    </Link>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse2} alt="" />
                    <Link to={"/guide/Guidetelemetrynursing"}>
                    <Box>
                        <h6 className='box3-h6'>Telemetry Nursing Careers</h6>
                        <p className='box3-p'>Guide for Telemetry Nursing Careers: Pathways & Jobs</p>
                    </Box>
                    </Link>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse3} alt="" />
                    <Link to={"/guide/Guidestepdown"}>
                    <Box>
                        <h6 className='box3-h6'>Step Down Nurse Careers</h6>
                        <p className='box3-p'>Guide for Step Down Nurse Careers: Pathways & Jobs</p>
                    </Box>
                    </Link>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse4} alt="" />
                    <Link to={"/guide/Guideoperatingroom"}>
                    <Box>
                        <h6 className='box3-h6'>Operating Room Nurse Careers</h6>
                        <p className='box3-p'>Guide for Operating Room Nurse Careers: Pathways & Jobs</p>
                    </Box>
                    </Link>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse5} alt="" />
                    <Link to={"/guide/Guidemedicalsurgical"}>
                    <Box>
                        <h6 className='box3-h6'>Medical Surgical Nurse Careers</h6>
                        <p className='box3-p'>Guide for Medical Surgical Nurse Careers: Pathways, Roles, & Jobs</p>
                    </Box>
                    </Link>
                </Stack>
      </Box>
      <Box px={3}>
      <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse6} alt="" />
                    <Link to={"/guide/Guidehomehealth"}>
                    <Box>
                        <h6 className='box3-h6'>Home Health Nurse Careers</h6>
                        <p className='box3-p'>Guide for Home Health Nurse Careers: Pathways & Jobs</p>
                    </Box>
                    </Link>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse7} alt="" />
                    <Link to={"/guide/Guideemergencyroom"}>
                    <Box>
                        <h6 className='box3-h6'>Emergency Room Nurse Careers</h6>
                        <p className='box3-p'>Guide for Emergency Room Nurse Careers: Pathways & Jobs</p>
                    </Box>
                    </Link>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse8} alt="" />
                    <Link to={"/guide/Guidecrictalcare"}>
                    <Box>
                        <h6 className='box3-h6'>Critical Care Nurse Careers</h6>
                        <p className='box3-p'>Guide for Critical Care Nurse Careers: Pathways & Jobs</p>
                    </Box>
                    </Link>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse9} alt="" />
                    <Link to={"/guide/Guideforbehavioral"}>
                    <Box>
                        <h6 className='box3-h6'>Behavioral and Mental Health Nurse</h6>
                        <p className='box3-p'>Guide for Behavioral and Mental Health Nurse: Pathways & Jobs</p>
                    </Box>
                    </Link>
                </Stack><br />
                <a  className="btn_green" href="/professionals" >PROFESSIONALS</a>
      </Box>
     </Stack>
    
    </>)
}
export default NursingDropdown