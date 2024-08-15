import React, { useEffect, useState } from 'react';
import './ApplyJobForm.scss';
import newsletterarrow from '../../Assets/h3_newsletter_shape0.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Modal from '@mui/material/Modal';
import * as pdfjsLib from 'pdfjs-dist/webpack';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ApplyJobForm = () => {
    const location = useLocation();
    const [selectedjob, setSelectedJob] = useState();
    const [isloading, setisloading] = useState(false)
    const [cv, setcv] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false); // State to control modal visibility
    const selectedImageRef = useRef(null);
    const [thumbnail, setThumbnail] = useState(null);
    useEffect(() => {
        console.log(location); // Log the location object to see its structure
        if (location.state && location.state.selectjob) {
            setSelectedJob(location.state.selectjob);
        }
    }, [location]);
    const [formData, setFormData] = useState({
        fullname: '',
        location: '',
        email: '',
        phonenumber: '',
        coverletter: '',
        description: '',
        jobFile: '',


    });


    const handleClose = () => {
        setModalIsOpen(false)
    };
    const handleChange = (e) => {
        const { type, checked, files } = e.target;
        if (files && files[0]) {
          const file = files[0];
          setcv(file);
          
          if (file.type === 'application/pdf') {
            generateThumbnail(file);
            convertPdfToBase64(file)
          } else if (file.type.startsWith('image/')) {
            
            convertToBase64(file);
          }
        }
         else {
          const { name, value } = e.target;
          const newValue = type === 'checkbox' ? (checked ? 1 : 0) : value;
          setFormData({
            ...formData,
            [name]: newValue,
          });
        }
      };
    const generateThumbnail = (file) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
          const arrayBuffer = reader.result;
          const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
          loadingTask.promise.then((pdf) => { 
            pdf.getPage(1).then((page) => {
              const viewport = page.getViewport({ scale: 4 });
              const canvas = document.createElement('canvas');
              const context = canvas.getContext('2d');
              canvas.height = viewport.height;
              canvas.width = viewport.width;
    
              const renderContext = {
                canvasContext: context,
                viewport: viewport,
              };
    
              page.render(renderContext).promise.then(() => {
                const thumbnailUrl = canvas.toDataURL('image/jpeg');
                setThumbnail(thumbnailUrl);
              });
            });
          });
        };
      };
    const handleImageClick = () => {
        setModalIsOpen(true);
    };
    const handledelete = () => {
        setThumbnail(null)
        setcv(null)
        setFormData({
            ...formData,
            jobFile: ''
        });
    }
    const convertToBase64 = (file) => {
        setThumbnail(URL.createObjectURL(file))
        const reader = new FileReader();
        reader.onload = () => {
            const dataUrl = reader.result;
            const base64String = dataUrl.split(',')[1]; 
            setFormData({
                ...formData,
                jobFile: base64String
            });
            console.log(formData.jobFile)
        };
        reader.readAsDataURL(file);
    };
    const convertPdfToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            // Check if the file is a PDF
            if (file.type !== 'application/pdf') {
                reject(new Error('Invalid file type. Only PDF files are allowed.'));
                return;
            }
    
            const reader = new FileReader();
    
            reader.onload = () => {
                const base64String = reader.result.split(',')[1]; // Extract the base64 part of the Data URL
                resolve(base64String);
                setFormData({
                    ...formData,
                    jobFile: base64String
                });
                console.log(base64String)
            };
    
            reader.onerror = (error) => {
                reject(error);
            };
    
            reader.readAsDataURL(file);
        });
    };
    const handleSubmit = async (e) => {
        console.log(formData)
        if (Object.values(formData).every(value => value !== '')) {
            setisloading(true)

            const jobData = new FormData();
            jobData.append("job_id", selectedjob.Id);
            jobData.append("job_name", selectedjob.Title__c);
            jobData.append("applicant_full_name", formData.fullname);
            jobData.append("applicant_location", formData.location);
            jobData.append("applicant_email", formData.email);
            jobData.append("applicant_phone_no", formData.phonenumber);
            jobData.append("cover_letter", formData.coverletter);
            jobData.append("description", formData.description);
            jobData.append("resume", formData.jobFile);




            const requestOptions = {
                method: "POST",
                body: jobData,
            };

            fetch("https://empowercare.me/wp-json/empower/staffing/add/application", requestOptions)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((result) => {

                    toast.success(result.data.message);
                    setisloading(false)
                    setFormData({
                        jobTitle: '',
                        jobType: '',
                        category: '',
                        jobDescription: '',
                        jobFile: '',
                        companyName: '',
                        companyEmail: '',
                        website: '',
                        state: '',
                        zipCode: '',
                        city: '',
                        Address: '',
                        Country: '',
                        consent: 0
                    })
                })
                .catch((error) => toast.error("An error occurred while posting the job. Please try again later."), setisloading(false));
        }
        else {
            toast.error("Please fill all the required fields.");
            setisloading(false)
        }
    };
    return (
        <>
            <div className="post_job_form">
                <div className="trusted-sec">
                    <div className="container">
                        <div className="trusted-wrapper">
                            <div className="top-content">
                                <span className="meta">Join Us Now</span>
                                <h2 className="heading">
                                    Apply a job at the
                                    <span> Empowercare </span>
                                </h2>
                                <p className='description'>
                                    For guidance on how to write a job posting that is likely to achieve maximum reach and perform well with candidates, please see our sample job description library.
                                </p>
                            </div>
                        </div>
                        {selectedjob ?
                            <div className='signup_form_controller'>
                                <form enctype="multipart/form-data" id="empower_postjob" className='empower_signup_form' >
                                    <div className='signup_container'>
                                        <div classname='signup_inner_container'>
                                            <img className='form-icon' src={newsletterarrow} alt="" />
                                            <div className='form_fields'>
                                                <div className="top-content">
                                                </div>
                                                <div className='row-input'>
                                                    <div className="inputconrainer">
                                                        <label>Job Id</label>
                                                        <input
                                                            type="text"
                                                            placeholder="e.g. John Deo "
                                                            className="rounded-input"
                                                            disabled

                                                            value={selectedjob.Id}
                                                            style={{ color: 'black' }}
                                                        />
                                                    </div>
                                                    <div className="inputconrainer">
                                                        <label>Job Name</label>
                                                        <input
                                                            type="text"
                                                            placeholder="City, State, Country"
                                                            className="rounded-input"
                                                            disabled
                                                            value={selectedjob.Title__c}
                                                            style={{ color: 'black' }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='row-input'>
                                                    <div className="inputconrainer">
                                                        <label>Full Name *</label>
                                                        <input
                                                            type="text"
                                                            placeholder="e.g. John Deo "
                                                            className="rounded-input"
                                                            onChange={handleChange}
                                                            name='fullname'
                                                            value={formData.fullname}
                                                            style={{ color: 'black' }}
                                                        />
                                                    </div>
                                                    <div className="inputconrainer">
                                                        <label>Your Location *</label>
                                                        <input
                                                            type="text"
                                                            placeholder="City, State, Country"
                                                            className="rounded-input"
                                                            onChange={handleChange}
                                                            name='location'
                                                            value={formData.location}
                                                            style={{ color: 'black' }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='row-input'>
                                                    <div className="inputconrainer">
                                                        <label>Email *</label>
                                                        <input
                                                            type="text"
                                                            placeholder="e.g. you@example.com"
                                                            className="rounded-input"
                                                            onChange={handleChange}
                                                            name='email'
                                                            value={formData.email}
                                                            style={{ color: 'black' }}
                                                        />
                                                    </div>
                                                    <div className="inputconrainer">
                                                        <label>Phone Number - optional</label>
                                                        <input
                                                            type="text"
                                                            placeholder="*** *** ***"
                                                            className="rounded-input"
                                                            onChange={handleChange}
                                                            name='phonenumber'
                                                            value={formData.phonenumber}
                                                            style={{ color: 'black' }}
                                                        />
                                                    </div>
                                                </div>
                                                <div >
                                                    <div className='row-input job_file'>
                                                        <div className='inputcontainer'>
                                                            <label>Resume *</label>
                                                            <div style={{ display: 'flex' }}>
                                                                {thumbnail ?
                                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                                        <img style={{ 'width': '200px' }} src={thumbnail}
                                                                            
                                                                            onClick={handleImageClick} />

                                                                        <Button onClick={handledelete} variant='contained' 
                                                                        sx={{
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
                                                                        }}
                                                                        >Delete</Button></div>


                                                                    :
                                                                    <Button variant="contained" component="label" endIcon={<FileUploadOutlinedIcon />}
                                                                        sx={{
                                                                            background: 'linear-gradient(-130deg, #71ba32 0%, #4eb3e8 100%)',
                                                                            width: '196px',
                                                                            height: '50px',
                                                                            borderRadius: '19px',
                                                                            padding: '5px',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            color: '#ffffff',
                                                                            '&:hover': {
                                                                                background: 'linear-gradient(-130deg, #4eb3e8 0%, #71ba32 100%)',
                                                                            }
                                                                        }}
                                                                    >
                                                                        Upload Resume 
                                                                        <input hidden accept="file*" id='resume' name='resume' multiple type="file" onChange={handleChange} />
                                                                    </Button>

                                                                }
                                                                <Dialog open={modalIsOpen} onClose={handleClose} maxWidth="md" fullWidth>
                                                                    <DialogContent>
                                                                        {thumbnail && (
                                                                            <img
                                                                                style={{ width: '100%' }}
                                                                                src={thumbnail}
                                                                                alt="Full-size"
                                                                                onClick={handleClose}
                                                                            />
                                                                        )}
                                                                    </DialogContent>
                                                                </Dialog>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row-input'>
                                                    <div className="inputconrainer">
                                                        <label>Cover Letter - optional *</label>
                                                        <textarea
                                                            rows="3" cols="5"
                                                            placeholder="Tell us why you're good for this role"
                                                            className="rounded-input"
                                                            value={formData.coverletter}
                                                            name='coverletter'
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='row-input'>
                                                    <div className="inputconrainer">
                                                        <label>Description*</label>
                                                        <textarea
                                                            rows="3" cols="5"
                                                            placeholder="Tell us why you're good for this role"
                                                            className="rounded-input"
                                                            value={formData.description}
                                                            name='description'
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                {/* <div className='form_consent'>
                                                <input
                                                    type="checkbox"
                                                    className='emp_checkbox'
                                                    checked={formData.consent == 1}
                                                    value={formData.consent}
                                                    onChange={handleChange}
                                                    name='consent'
                                                />
                                                <p>By registering, you are agreeing to our Terms of Use and Privacy Policy, as well as additional Terms that apply specifically to self-serve job postings.</p>
                                            </div> */}
                                            </div>
                                            <div className="btn_gradient">
                                                {
                                                    isloading ? <Button   sx={{
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
                                                        <Button   sx={{
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
                                                        }} onClick={handleSubmit} >Submit</Button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplyJobForm