import React, { useEffect, useState } from 'react';
import './ContactusForm.scss';
import newsletterarrow from '../../Assets/h3_newsletter_shape0.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactusForm = () => {
    const [isloading, setisloading] = useState(false)
  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
       
    });
    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
     
            const newValue = type === 'checkbox' ? (checked ? 1 : 0) : value;
            setFormData({
                ...formData,
                [e.target.name]: newValue
            });
        
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.consent === 0) {
            toast.error("Please comply to our terms in order to post the job");
            return;
        }
        console.log("FormData before submission:", formData);
        if (Object.values(formData).every(value => value !== '')) {
            setisloading(true);
            const Token = JSON.parse(sessionStorage.getItem('token'));
    
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${Token}`);
            const raw = JSON.stringify({
                createJob: {
                    Title: formData.jobTitle,
                    JobType: 'Direct hire',
                    Discipline: formData.discipline,
                    Category: formData.category,
                    EstimatedWeeklySalary: parseInt(formData.estimatedWeekyPay),
                    Speciality: formData.speciality,
                    CompanyName: formData.companyName,
                    ContactEmail: formData.companyEmail,
                    Website: formData.website,
                    Logo: "068D4000002Kc4YIAS",
                    JobDescription: formData.jobDescription,
                    Country: formData.country,
                    State: formData.state,
                    ZipCode: formData.zipCode,
                    City: formData.city,
                    Address: formData.Address,
                    EmployerPosted: true,
                    isActive: true,
                }
            });
            console.log("Request Payload:", raw);
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };
            try {
                const response = await fetch("https://empowercare.my.salesforce.com/services/apexrest/Job?requestType=createJob.", requestOptions);
                const result = await response.json();
                console.log("API Response:", result);
                if (result.StatusCode === '200') {
                    toast.success("Job Posted Successfully");
                    setisloading(false);
                    setFormData({
                        jobTitle: '',
                        jobType: '',
                        estimatedWeekyPay:'',
                        discipline: '',
                        speciality:'',
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
                        country: '',
                        consent: 0
                    });
                } else {
                    toast.error("Something Went Wrong");
                    setisloading(false);
                }
            } catch (error) {
                console.error("Error occurred:", error);
                toast.error("An error occurred while posting the job. Please try again later.");
                setisloading(false);
            }
        } else {
            toast.error("Please fill out all fields.");
        }
    };
    return (
        <>
            <div className="post_job_form">
                <div className="trusted-sec">
                    <div className="container">
                    <div className="trusted-wrapper">
                            <div className="top-content">
                                <h2 className="heading">
                                Contact  
                                    <span> Us</span> 
                                </h2>
                            </div>
                        </div>
                        <div className='signup_form_controller'>
                            <form enctype="multipart/form-data" id="empower_postjob" className='empower_signup_form' >
                                <div className='signup_container'>
                             
                                    <div classname='signup_inner_container'>
                                        <img className='form-icon' src={newsletterarrow} alt="" />
                                        <div className='form_fields'>
                                            
                                            <div className="row-input">
                                         
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    className="rounded-input"
                                                    value={formData.name}
                                                    name='name'
                                                    onChange={handleChange}
                                                />
                                            
                                            </div>
                                            <div className="row-input">
                                         
                                         <input
                                             type="text"
                                             placeholder="Your Email"
                                             className="rounded-input"
                                             value={formData.email}
                                             name='email'
                                             onChange={handleChange}
                                         />
                                     
                                     </div>
                                     <div className="row-input">
                                         
                                         <input
                                             type="text"
                                             placeholder="Subject"
                                             className="rounded-input"
                                             value={formData.subject}
                                             name='subject'
                                             onChange={handleChange}
                                         />
                                     
                                     </div>
                                            
                                        
                                            <div className='row-input'>
                                                <textarea
                                                    rows="3" cols="5"
                                                    placeholder="Your Message"
                                                    className="rounded-input"
                                                    value={formData.message}
                                                    name='message'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                         
                                            
                                           
                                        </div>
                                        <div className="btn_gradient">
                                            {
                                                isloading ?  <button className='btn quick-btn empower_signup_submit' type="button" disabled> Loading...</button> 
                                                :                                          
                                                <button className='btn quick-btn empower_signup_submit' type="submit"  >Send</button>
                                            }
                                        </div>
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
export default ContactusForm