import React, { useEffect, useState } from 'react';
import './PostjobForm.scss';
import newsletterarrow from '../../Assets/h3_newsletter_shape0.png';
import hc1 from '../../Assets/hc1.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PostjobForm = () => {
    const [isloading, setisloading] = useState(false)
    const jobOptions = {
        "Allied Health Technician": [
          "EKG",
          "Imaging",
          "Mammography",
          "MRI",
          "Patient Care",
          "Pharmacy",
          "Sonographer",
          "Sterile Processing",
          "Surgical",
          "Ultrasound",
          "X-Ray",
        ],
        "Allied Health Support": ["Laboratory",
         " Medical Assistant",
          "Phlebotomist"
          ],
        "Certified Nurse Aide (CNA)": [
          "Contract",
          "Direct Care",
          "Home Health",
          "Long Term Care (LTC)",
          "Mental Health"
        ],
        "Home Health": [
          "Home Health Aide",
          "Homemaking",
          "Hospice"
        ],
        "Licensed Practical Nurse (LPN)": ["Clinic",
          "Long Term Care (LTC)",
          "Mental Health"
          ],
        "Mental/ Behavioral Health": [
          "Art Therapist",
          "Behavioral Technician",
          "Counselors",
          "General Clinician",
          "Marriage and Family Therapist",
          "Music Therapist",
          "Occupational Therapy Assistant (COTA)",
          "Psychiatric Clinician",
          "Psychiatrist",
          "Psychologist",
          "Psychiatric Nurse",
          "Psychiatric Nurse Practitioner",
          "Rehabilitation Counselor",
          "Social Workers",
          "Substance Abuse Counselor"
        ],
        "Non-Clinical": ["Administrative",
         " Customer Service",
         " Professional",
          "Receptionist",
          "Sitter",
          ],
        "Nurse Practitioner (NP)": ["Primary Care", "Psychiatry"],
        "Registered Nurse (RN)    ": [
          "Acute Care",
          "Advanced Practice",
          "Ambulatory Care",
          "Cardiac Cath Lab",
          "Cardiovascular",
          "Clinical Director",
          "Emergency Room",
          "ICU (Intensive Care Unit)",
          "Infusion",
          "Medical Surgical",
          "Mental Health",
          "Operating Room",
          "PACU (Post-Anesthesia Care Unit)",
          "School",
          "Telemetry"
        ],
        "Direct Care Professional": ["Certified Medication Aide (MAP)", "No (MAP)","Rehab Counselor"],
        "Social Worker (SW)": [
          "Licensed Clinical Social Worker (LCSW)",
          "Licensed Independent Clinical Social Worker (LICSW)",
          "Licensed Social Worker",
          "Master of Social Work (MSW)",
          "Social Worker (Unlicensed)"
        ],
        "Therapist": [
          "Massage",
          "Occupational Therapy Assistant (COTA)",
          "Speech Language Pathologist (SLP)",
          "Speech Language Pathologist Assistant",
          "Physical",
          "Physical Assistant (PTA)",
          "Recreational (RT)",
          "Respiratory (RRT)",
          "Therapy Assistant (OT)"
        ],
      };
    const [formData, setFormData] = useState({
        jobTitle: '',
        jobType: '',
        category: '',
        jobDescription: '',
        discipline: '',
        jobFile: '068D4000002Kc4YIAS',
        estimatedWeekyPay: '',
        speciality: '',
        companyName: '',
        companyEmail: '',
        website: '',
        state: '',
        zipCode: '',
        city: '',
        Address: '',
     country:'',
        consent: 0
    });
    const handlelogo = (e) => {
        console.log('inside logo')
        const image = e.target.files[0] 
      convertToBase64(image)
        console.log(image)
        }
        const  convertToBase64 =(image) => {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = function () {
                const base64Image = reader.result;
                formData.jobFile = base64Image;
                console.log(base64Image);
                console.log(formData.jobFile);
            };
            reader.onerror = function (error) {
                console.error('Error occurred while converting image to base64:', error);
            };
        }
const ImageApi = () => {
} 
    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            convertToBase64(files[0]);
        } else {
            const newValue = type === 'checkbox' ? (checked ? 1 : 0) : value;
            setFormData({
                ...formData,
                [e.target.name]: newValue
            });
        }
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
                                <span className="meta">Join Us Now</span>
                                <h2 className="heading">
                                PUBLISH A  
                                    <span> JOB </span> LISTING
                                </h2>
                            </div>
                        </div>
                        <div className='signup_form_controller'>
                            <form enctype="multipart/form-data" id="empower_postjob" className='empower_signup_form' >
                                <div className='signup_container'>
                                    <div classname='signup_inner_container'>
                                        <img className='form-icon' src={newsletterarrow} alt="" />
                                        <div className='form_fields'>
                                            <h4>Job Information</h4>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="Job Title"
                                                    className="rounded-input"
                                                    value={formData.jobTitle}
                                                    name='jobTitle'
                                                    onChange={handleChange}
                                                />
                                                <select className='rounded-input'
                                                    onChange={handleChange}
                                                    name='jobType'
                                                    value={formData.jobType}
                                                >
                                                    <option value="Job Type">Job Type</option>
                                                    <option value="Permanent Full Time">Permanent Full Time</option>
                                                    <option value="Permanent Part Time">Permanent Part Time</option>
                                                    <option value="Local Contract">Per Diem / Local Contract</option>
                                                    <option value="Direct Hire">Direct Hire</option>
                                                </select>
                                            </div>
                                            <div className='row-input'>
                                                <select className='rounded-input'
                                                    onChange={handleChange}
                                                    name='category'
                                                    value={formData.category}
                                                >
                                                    <option value="">--Job Category--</option>
                                                    <option value="Behavioral Health">Behavioral Health</option>
                                                    <option value="Bilingual">Bilingual</option>
                                                    <option value="Direct Hire">Direct Hire</option>
                                                    <option value="Educator">Educator</option>
                                                    <option value="Gerontology">Gerontology</option>
                                                    <option value="Manager">Manager</option>
                                                    <option value="Mental Health">Mental Health</option>
                                                    <option value="New Grad">New Grad</option>
                                                    <option value="Pediatric">Pediatric</option>
                                                    <option value="Psychiatry">Psychiatry</option>
                                                    <option value="Substance Abuse">Substance Abuse</option>
                                                    <option value="Supervisor">Supervisor</option>
                                                </select>
                                                <select className='rounded-input'
                                                    onChange={handleChange}
                                                    name='discipline'
                                                    value={formData.discipline}
                                                >
                                                    <option value="">-- Discipline --</option>
                                                    <option value="Lab Specialist">Lab Specialist</option>  
                                                    <option value="Certified Nurse Aide (CNA)">Certified Nurse Aide (CNA)</option>
                                                    <option value="Registered Nurse (RN)">Registered Nurse (RN)</option>
                                                    <option value="Medical Technologist">Medical Technologist</option>
                                                    <option value="Surgical Tech">Surgical Tech</option>
                                                    <option value="LPN / LVN">LPN / LVN</option>
                                                    <option value="Social Worker (SW)">Social Worker (SW)</option>
                                                    <option value="Respiratory Therapist (RRT)">Respiratory Therapist (RRT)</option>
                                                    <option value="Medical Assistant">Medical Assistant</option>
                                                    <option value="Patient Care Tech">Patient Care Tech</option>
                                                    <option value="Pharmacist">Pharmacist</option>
                                                    <option value="Phlebotomist">Phlebotomist</option>
                                                    <option value="EVS / Janitorial">EVS / Janitorial</option>
                                                    <option value="Administrative / Professional">Administrative / Professional</option>
                                                </select>
                                            </div>
                                            <div className='row-input'>
                                                <input
                                                    type="number"
                                                    placeholder="Estimated Weekly Salary"
                                                    className="rounded-input"
                                                    value={formData.estimatedWeekyPay}
                                                    name='estimatedWeekyPay'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="speciality"
                                                    className="rounded-input"
                                                    value={formData.speciality}
                                                    name='speciality'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='row-input'>
                                                <textarea
                                                    rows="3" cols="5"
                                                    placeholder="Job Description"
                                                    className="rounded-input"
                                                    value={formData.jobDescription}
                                                    name='jobDescription'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <h4>Company Information</h4>
                                            <div className="row-input job_file">
                                                <input
                                                    type="file"
                                                    placeholder="Logo"
                                                    className="rounded-input"
                                                    name='jobFile'
                                                    
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="Company Name"
                                                    className="rounded-input"
                                                    value={formData.companyName}
                                                    name='companyName'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Contact Email"
                                                    className="rounded-input"
                                                    value={formData.companyEmail}
                                                    name='companyEmail'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="Website"
                                                    className="rounded-input"
                                                    value={formData.website}
                                                    name='website'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <h4>Location</h4>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="State"
                                                    className="rounded-input"
                                                    value={formData.state}
                                                    name='state'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Zip-Code"
                                                    className="rounded-input"
                                                    value={formData.zipCode}
                                                    name='zipCode'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="City"
                                                    className="rounded-input"
                                                    value={formData.city}
                                                    name='city'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Address"
                                                    className="rounded-input"
                                                    value={formData.Address}
                                                    name='Address'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row-input">
                                                <select className='rounded-input'
                                                    onChange={handleChange}
                                                    value={formData.country}
                                                    name='country'
                                                >
                                                    <option value="Country">Country</option>
                                                    <option value="USA">United States (USA)</option>
                                                </select>
                                            </div>
                                            <div className='form_consent'>
                                                <input
                                                    type="checkbox"
                                                    className='emp_checkbox'
                                                    checked={formData.consent == 1}
                                                    value={formData.consent}
                                                    onChange={handleChange}
                                                    name='consent'
                                                />
                                                <p>By registering, you are agreeing to our Terms of Use and Privacy Policy, as well as additional Terms that apply specifically to self-serve job postings.</p>
                                            </div>
                                        </div>
                                        <div className="btn_gradient">
                                            {
                                                isloading ?  <button className='btn quick-btn empower_signup_submit' type="button" disabled> Loading...</button> 
                                                :                                          
                                                <button className='btn quick-btn empower_signup_submit' type="submit" onClick={handleSubmit} >Submit</button>
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
export default PostjobForm