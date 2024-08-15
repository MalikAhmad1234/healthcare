import React, { useState } from 'react';
import Reactt, { useEffect } from 'react';
import './SignupForm.scss';
import newsletterarrow from '../../Assets/h3_newsletter_shape0.png';
import hc1 from '../../Assets/hc1.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import tickmark from '../../Assets/thank-you.png'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
const RequestFrom = () => {
    const [formData, setFormData] = useState({
        facultyName: '',
        contactPerson: '',
        jobTitle: '',
        email: '',
        phoneNo: '',
        staffingNeeds: '',
        facultyType: 'Hospital',
        staffingType: 'Per Diem'
    });
    const [isloading, setisloading] = useState(false)
    const [open, setOpen] = React.useState(false);

 
  
    const handleClose = () => {
      setOpen(false);
    };

   
  
    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        if (Object.values(formData).every(value => value !== '')) {
            setisloading(true)
            try {
                const myHeaders = new Headers();
                myHeaders.append("Cookie", "wpjb_transient_id=1716524609-3233");
                const formdata = new FormData();
                formdata.append("job_title", formData.jobTitle);
                formdata.append("email", formData.email);
                formdata.append("phone_no", formData.phoneNo);
                formdata.append("staffing_needs", formData.staffingNeeds);
                formdata.append("faculty_type", formData.facultyType);
                formdata.append("staffing_type", formData.staffingType);
                formdata.append("contact_person", formData.contactPerson);
                formdata.append("faculty_name", formData.facultyName);
                const response = await fetch("https://empowercare.me/wp-json/empower/staffing/request/staffing", {
                    method: 'POST',
                    body: formdata,
                });
                const data = await response.json();
                if (!response.ok) {
                    toast.error(data.data.message)
                    setisloading(false)
                } else {
                    setOpen(true)
                    setFormData({
                        facultyName: '',
                        contactPerson: '',
                        jobTitle: '',
                        email: '',
                        phoneNo: '',
                        staffingNeeds: '',
                        facultyType: '',
                        staffingType: ''
                    });
                    setisloading(false)
                }
                console.log(data);
            } catch (error) {
                console.error('Error:', error);
                setisloading(false)
            }
        } 
        else{
                toast.error("All Fields are Required.");   
        }
    };

    useEffect(() => {
        // Function to scroll to the desired section
        const scrollToForm = () => {
            const formSection = document.getElementById('empower_signup');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
            }
        };

        // Call the scrollToForm function when the component mounts
        scrollToForm();
    }, []);

    return (
        <>
            <div className="signup_form " id="signupfrm">
                <div className="trusted-sec">
                    <div className="container">
                        {/* <div className="trusted-wrapper">
                            <div className="top-content">
                                <span className="meta">Request Staffing</span>
                                <h2 className="heading">
                                    Healthcare
                                    <span> Staffing  </span> Partner
                                </h2>
                            </div>
                        </div> */}
                        <div className='signup_form_controller'>
                            <form id="empower_signup" className='empower_signup_form' >
                                <div className='signup_container'>
                                    <div classname='signup_inner_container'>
                                        <img className='form-icon' src={newsletterarrow} alt="" />
                                        <div className="trusted-wrapper">
                                            <div className="top-content">
                                                <span className="meta"></span>
                                                <h2 className="heading">
                                                    Join
                                                    <span> EmpowerCare</span> Today
                                                </h2>
                                                <p>Sign up now to transform your healthcare facility with EmpowerCare's tailored staffing solutions. Access a vast pool of highly qualified healthcare professionals, including nurses, allied health workers, and direct care staff, to meet your organization's unique needs.</p>
                                            </div>
                                        </div>
                                        <div className='form_fields'>
                                            <h2>Request Staffing Form</h2>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="Faculty Name"
                                                    className="rounded-input"
                                                    value={formData.facultyName}
                                                    name='facultyName'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Contact Person"
                                                    className="rounded-input"
                                                    value={formData.contactPerson}
                                                    name='contactPerson'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="Job Title"
                                                    className="rounded-input"
                                                    value={formData.jobTitle}
                                                    name='jobTitle'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    className="rounded-input"
                                                    value={formData.email}
                                                    name='email'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="Phone No"
                                                    className="rounded-input"
                                                    value={formData.phoneNo}
                                                    name='phoneNo'
                                                    onChange={handleChange}
                                                />
                                                <select className='rounded-input'
                                                    onChange={handleChange}
                                                    value={formData.staffingNeeds}
                                                    name='staffingNeeds'
                                                >
                                                    <option value="">Select Staffing Needs</option>
                                                    <option value="Nurse Practitionrs">Nurse Practitionrs (Nps)</option>
                                                    <option value="Registered Nurses">Registered Nurses (RNs)</option>
                                                    <option value="Licensed Practical Nurses">Licensed Practical Nurses (LPNs)</option>
                                                    <option value="Certified Nursing Assistants">Certified Nursing Assistants (CNAs)</option>
                                                    <option value="Certified Medical Assistants">Certified Medical Assistants (CNAs)</option>
                                                    <option value="Medical Health Professionals">Medical Health Professionals </option>
                                                    <option value="Direct Care Professionals">Direct Care Professionals </option>
                                                    <option value="Others">Others</option>


                                                </select>
                                            </div>

                                            <div className='row-input'>
                                                <FormControl sx={{ marginTop: '2%' }}>
                                                    <FormLabel color='primary' sx={{ textAlign: 'start', color: '#71ba32', fontSize: '1.2rem' }}>Faculty Type :</FormLabel>
                                                    <RadioGroup
                                                        row
                                                        sx={{ alignItems: 'center', marginTop: '0.5%' }}
                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                        name="facultyType"
                                                      
                                                        value={formData.facultyType}
                                                        onChange={handleChange}
                                                    >
                                                        <FormControlLabel value="Hospital" control={<Radio size='small' />} label="Hospital" />
                                                        <FormControlLabel value="Clinic" control={<Radio size='small' />} label="Clinic" />
                                                        <FormControlLabel value="School" control={<Radio size='small' />} label="School" />
                                                        <FormControlLabel value="Skilled Nursing Facility" control={<Radio size='small' />} label="Skilled Nursing Facility" />
                                                        <FormControlLabel value="Home Health Agency" control={<Radio size='small' />} label="Home Health Agency" />
                                                        <FormControlLabel value="Other" control={<Radio size='small' />} label="Other" />



                                                    </RadioGroup>
                                                </FormControl>
                                                <FormControl sx={{ marginTop: '2%' }}>
                                                    <FormLabel sx={{ textAlign: 'start', color: '#71ba32', fontSize: '1.2rem' }}>Preferred Staffing Type:</FormLabel>

                                                    <RadioGroup
                                                        row
                                                        sx={{ alignItems: 'center', marginTop: '0.5%' }}
                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                        name="staffingType"
                                                        value={formData.staffingType}
                                                        onChange={handleChange}
                                                    >
                                                        <FormControlLabel value="Per Diem" control={<Radio size='small' />} label="Per Diem" />
                                                        <FormControlLabel value="Contract" control={<Radio size='small' />} label="Contract" />
                                                        <FormControlLabel value="Travel" control={<Radio size='small' />} label="Travel" />
                                                        <FormControlLabel value="Temporary-to-Permanent" control={<Radio size='small' />} label="Temporary-to-Permanent" />
                                                        <FormControlLabel value="Permanent Placement" control={<Radio size='small' />} label="Permanent Placement" />



                                                    </RadioGroup>
                                                </FormControl>
                                            </div>


                                        </div>
                                        <div className="btn_gradient">
                                            {
                                                isloading ? <Button sx={{
                                                    background: 'linear-gradient(-130deg, #71ba32 0%, #4eb3e8 100%)',
                                                    width: '196px',
                                                    height: '50px',
                                                    borderRadius: '19px',
                                                    padding: '5px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#ffffff',
                                                    marginTop: '4%',
                                                    '&:hover': {
                                                        background: 'linear-gradient(-130deg, #4eb3e8 0%, #71ba32 100%)',
                                                    }
                                                }} type="button" disabled> Loading...</Button>
                                                    :
                                                    <Button sx={{
                                                        background: 'linear-gradient(-130deg, #71ba32 0%, #4eb3e8 100%)',
                                                        width: '196px',
                                                        height: '66px',
                                                        borderRadius: '19px',
                                                        padding: '5px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: '#ffffff',
                                                        marginTop: '4%',
                                                        '&:hover': {
                                                            background: 'linear-gradient(-130deg, #4eb3e8 0%, #71ba32 100%)',
                                                        }
                                                    }}  onClick={handleSubmit} >Submit</Button>
                                            }
                                        </div>
                                        <Dialog
                                            open={open}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleClose}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <DialogTitle padding={0} sx={{textAlign:'center'}}><img src={tickmark} width='300px'/></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText sx={{fontSize:'1.2rem'}} id="alert-dialog-slide-description">
                                                Thank you for choosing EmpowerCare as your healthcare staffing partner! Your request has been received, and a dedicated account manager will be in touch shortly to discuss your staffing needs in detail. We look forward to working with you and providing tailored solutions that drive your facility's success.
                                                </DialogContentText>
                                            </DialogContent>
                                           
                                        </Dialog>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RequestFrom