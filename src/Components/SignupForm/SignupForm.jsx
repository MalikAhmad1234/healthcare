import React, { useState } from 'react';
import Reactt, { useEffect } from 'react';
import './SignupForm.scss';
import newsletterarrow from '../../Assets/h3_newsletter_shape0.png';
import hc1 from '../../Assets/hc1.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        licenseType:'',
        preferredWorkSettings:'',
        desiredPosition:'',
        workPreference:''
      });
      const [selectedSettingCheckboxes, setSelectedSettingCheckboxes] = useState([]);
      const [selectedWorkCheckboxes, setSelectedWorkCheckboxes] = useState([]);

    const handleCheckboxChangeSetting = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            console.log(value)
            setSelectedSettingCheckboxes(prevState => [...prevState, value]);
            e.target.parentNode.classList.add('active');
        } else {
            setSelectedSettingCheckboxes(prevState => prevState.filter(item => item !== value));
            e.target.parentNode.classList.remove('active');
        }
    };
    
    const handleCheckboxChangeWork = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            console.log(value)
            setSelectedWorkCheckboxes(prevState => [...prevState, value]);
            e.target.parentNode.classList.add('active');

        } else {
            setSelectedWorkCheckboxes(prevState => prevState.filter(item => item !== value));
            e.target.parentNode.classList.remove('active');

        }
    };
    const handleChange = (e) => {
        console.log()
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const form = new FormData();
            form.append('username', formData.username);
            form.append('firstName', formData.firstName);
            form.append('lastName', formData.lastName);
            form.append('email', formData.email);
            form.append('password', formData.password);
            form.append('confirmPassword', formData.confirmPassword);
            form.append('licenseType',formData.licenseType)
            form.append('preferredWorkSettings',formData.preferredWorkSettings)
            form.append('desiredPosition',formData.desiredPosition)
            form.append('workPreference',formData.workPreference)
            form.append('setting', JSON.stringify(selectedSettingCheckboxes));
            form.append('work', JSON.stringify(selectedWorkCheckboxes));
      
            const response = await fetch('https://empowercare.me/wp-json/empower/staffing/signup', {
              method: 'POST',
              body: form,
            });
           
           
            const data = await response.json();
            if (!response.ok) {
                toast.error(data.data.message)
              }else{
                toast.success("Signup Successfull")
                setFormData({
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    licenseType:'',
                    preferredWorkSettings:'',
                    desiredPosition:'',
                    workPreference:''


                });
              }
            console.log(data);
           
          } catch (error) {
            console.error('Error:', error);
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
                        <div className="trusted-wrapper">
                            <div className="top-content">
                                <span className="meta">Sign up</span>
                                <h2 className="heading">
                                    Tell us
                                    <span> what matters </span> to you
                                </h2>
                            </div>
                        </div>
                        <div className='signup_form_controller'>
                            <form id="empower_signup" className='empower_signup_form' onSubmit={handleSubmit}>
                                <div className='signup_checkboxes'>
                                    <h5 className='form_desc'>Discover Your Dream Job: Tell Us Your Work Preferences and Unlock Tailored Opportunities</h5>
                                    <div class="checkbox_wrapper">
                                        <p>Let's Match You with the Perfect Work Environment (select all that apply)</p>
                                        <div className='checkboxes_container'>
                                            <span class="checkbox_one">
                                                <label>
                                                    <input type="checkbox" name="sign-1a" value="home-health" onChange={handleCheckboxChangeSetting} />
                                                    <span class="wpcf7-list-item-label">Home Health</span>
                                                </label>  
                                            </span>
                                            <span class="checkbox_two">
                                                <label>
                                                    <input type="checkbox" name="sign-2a" value="hospice" onChange={handleCheckboxChangeSetting} />
                                                    <span class="wpcf7-list-item-label">Hospice</span>
                                                </label>  
                                            </span>
                                            <span class="checkbox_three">
                                                <label>
                                                    <input type="checkbox" name="sign-3a" value="long-term" onChange={handleCheckboxChangeSetting} />
                                                    <span class="wpcf7-list-item-label">Long term Care</span>
                                                </label>
                                            </span>
                                            <span class="checkbox_four">
                                                <label>
                                                    <input type="checkbox" name="sign-4a" value="hospital" onChange={handleCheckboxChangeSetting} />
                                                    <span class="wpcf7-list-item-label">Hospital</span>
                                                </label> 
                                            </span>
                                            <span class="checkbox_five">
                                                <label>
                                                    <input type="checkbox" name="sign-5a" value="urgent-care" onChange={handleCheckboxChangeSetting} />
                                                    <span class="wpcf7-list-item-label">Urgent Care</span>
                                                </label>
                                            </span>
                                            <span class="checkbox_six">
                                                <label>
                                                    <input type="checkbox" name="sign-6a" value="ambulatory-surgical" onChange={handleCheckboxChangeSetting} />
                                                    <span class="wpcf7-list-item-label">Ambulatory/Surgical</span>
                                                </label>  
                                            </span>
                                        </div>
                                    </div>
                                    <div class="checkbox_wrapper">
                                        <p>Explore Your Career Interests: Select Your Preferred Types of Work</p>
                                        <div className='checkboxes_container'>
                                            <span class="checkbox_one">
                                                <label>
                                                    <input type="checkbox" name="sign-1b" value="permanent-part" onChange={handleCheckboxChangeWork} />
                                                    <span class="wpcf7-list-item-label">Permanent Part-Time</span>
                                                </label>
                                            </span>   
                                            <span class="checkbox_two">
                                                <label>
                                                    <input type="checkbox" name="sign-2b" value="travel" onChange={handleCheckboxChangeWork} />
                                                    <span class="wpcf7-list-item-label">Travel</span>
                                                </label>
                                            </span>
                                            <span class="checkbox_three">
                                                <label>
                                                    <input type="checkbox" name="sign-3b" value="perdiem-local" onChange={handleCheckboxChangeWork} />
                                                    <span class="wpcf7-list-item-label">Per Diem/Local Contract</span>
                                                </label>
                                            </span>
                                            <span class="checkbox_four">  
                                                <label>
                                                    <input type="checkbox" name="sign-4b" value="permanent-full" onChange={handleCheckboxChangeWork} />
                                                    <span class="wpcf7-list-item-label">Permanent Full-Time</span>
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className='signup_container'>
                                    <div classname='signup_inner_container'>
                                        <img className='form-icon' src={newsletterarrow} alt="" />
                                        <div className="trusted-wrapper">
                                            <div className="top-content">
                                                <span className="meta">Join EmpowerCare</span>
                                                <h2 className="heading">
                                                    unlock your
                                                    <span> dream </span> healthcare job
                                                </h2>
                                                <p>Start your journey with EmpowerCare, the leading healthcare staffing agency connecting passionate professionals like you with top healthcare facilities across the United States. Sign up now to access a wide range of opportunities, from nursing jobs and allied health careers to direct care positions.</p>
                                            </div>
                                        </div>
                                        <div className='form_fields'>
                                            <h4>Sign Up for Free</h4>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="First Name"
                                                    className="rounded-input"
                                                    value={formData.firstName}
                                                    name='firstName'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Last Name"
                                                    className="rounded-input"
                                                    value={formData.lastName}
                                                    name='lastName'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="Username"
                                                    className="rounded-input"
                                                    value={formData.username}
                                                    name='username'
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
                                                    type="password"
                                                    placeholder="Password"
                                                    className="rounded-input"
                                                    value={formData.password}
                                                    name='password'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    className="rounded-input"
                                                    value={formData.confirmPassword}
                                                    name='confirmPassword'
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className='row-input'>
                                                <input
                                                    type="text"
                                                    placeholder="License Type"
                                                    className="rounded-input"
                                                    value={formData.licenseType}
                                                    name='licenseType'
                                                    onChange={handleChange}
                                                />
                                                {/* <select className='rounded-input'
                                                 onChange={handleChange}
                                                 name=''
                                                >
                                                    <option value="option1"></option>
                                                
                                                </select> */}
                                                <input
                                                    type="text"
                                                    placeholder="Preferred Work Settings"
                                                    className="rounded-input"
                                                    value={formData.PrefferedWorkSettings}
                                                    name='preferredWorkSettings'
                                                    onChange={handleChange}
                                                />

                                            </div>
                                            <div className='row-input'>
                                                <select className='rounded-input'
                                                onChange={handleChange}
                                                name='desiredPosition'
                                                >
                                                    <option value="option1">Desired Position</option>
                                                    <option value="Administrative / Professional">Administrative / Professional</option>
                                                    <option value="Administrator">Administrator</option>
                                                    <option value="Board Certified Behavior Analyst (BCBA)">Board Certified Behavior Analyst (BCBA)</option>
                                                    <option value="Certified Nurse Aide (CNA)">Certified Nurse Aide (CNA)</option>
                                                    <option value="Customer Service Rep">Customer Service Rep</option>
                                                    <option value="EMT / Paramedic">EMT / Paramedic</option>
                                                    <option value="EVS / Janitorial">EVS / Janitorial</option>
                                                    <option value="Executive">Executive</option>
                                                    <option value="Food Service">Food Service</option>
                                                    <option value="Health Screener">Health Screener</option>
                                                    <option value="Home Health Aide">Home Health Aide</option>
                                                    <option value="Homemaker">Homemaker</option>
                                                    <option value="Internal Employee">Internal Employee</option>
                                                    <option value="Lab Specialist">Lab Specialist</option>
                                                    <option value="LPN / LVN">LPN / LVN</option>
                                                    <option value="Massage Therapist">Massage Therapist</option>
                                                    <option value="Medical Assistant">Medical Assistant</option>
                                                    <option value="Medical Technologist">Medical Technologist</option>
                                                    <option value="Nurse Practitioner (NP)">Nurse Practitioner (NP)</option>
                                                    <option value="Occupational Therapist (OT)">Occupational Therapist (OT)</option>
                                                    <option value="Occupational Therapy Assistant (COTA)">Occupational Therapy Assistant (COTA)</option>
                                                    <option value="Patient Care Tech">Patient Care Tech</option>
                                                    <option value="Perfusionist">Perfusionist</option>
                                                    <option value="Pharmacist">Pharmacist</option>
                                                    <option value="Pharmacy Tech">Pharmacy Tech</option>
                                                    <option value="Phlebotomist">Phlebotomist</option>
                                                    <option value="Physical Therapist (PT)">Physical Therapist (PT)</option>
                                                    <option value="Physical Therapy Assistant">Physical Therapy Assistant</option>
                                                    <option value="Physician (PC)">Physician (PC)</option>
                                                    <option value="Physician Assistant (PA)">Physician Assistant (PA)</option>
                                                    <option value="Psychiatric Clinician">Psychiatric Clinician</option>
                                                    <option value="Receptionist">Receptionist</option>
                                                    <option value="Recreational Therapist (RT)">Recreational Therapist (RT)</option>
                                                    <option value="Registered Dietitian/Nutritionist">Registered Dietitian/Nutritionist</option>
                                                    <option value="Registered Nurse (RN)">Registered Nurse (RN)</option>
                                                    <option value="Rehab Counselor">Rehab Counselor</option>
                                                    <option value="Respiratory Therapist (RRT)">Respiratory Therapist (RRT)</option>
                                                    <option value="Social Worker (SW)">Social Worker (SW)</option>
                                                    <option value="Speech Language Pathologist (SLP)">Speech Language Pathologist (SLP)</option>
                                                    <option value="Speech Language Pathologist Assistant">Speech Language Pathologist Assistant</option>
                                                    <option value="Surgical Tech">Surgical Tech</option>                                               
                                                </select>
                                                <select className='rounded-input'
                                                 onChange={handleChange}
                                                 name='workPreference'
                                                >
                                                    <option value="option1">Work Preferences</option>
                                                    <option value="Accounting">Accounting</option>
                                                    <option value="Account Manager">Account Manager</option>
                                                    <option value="Account Payable">Account Payable</option>
                                                    <option value="Acute Care">Acute Care</option>
                                                    <option value="Adjunct Faculty">Adjunct Faculty</option>
                                                    <option value="Administrative / Professional">Administrative / Professional</option>
                                                    <option value="Administrative Assistant">Administrative Assistant</option>
                                                    <option value="Admission">Admission</option>
                                                    <option value="Advanced Practice">Advanced Practice</option>
                                                    <option value="Ambulatory Care">Ambulatory Care</option>
                                                    <option value="Ambulatory Infusion">Ambulatory Infusion</option>
                                                    <option value="Ambulatory Post-Op">Ambulatory Post-Op</option>
                                                    <option value="Ambulatory Surgery Pre-Op">Ambulatory Surgery Pre-Op</option>
                                                    <option value="Anesthesiology">Anesthesiology</option>
                                                    <option value="Angiography">Angiography</option>
                                                    <option value="Antepartum">Antepartum</option>
                                                    <option value="AR/Collections">AR/Collections</option>
                                                    <option value="Assistant">Assistant</option>
                                                    <option value="Assisted Living">Assisted Living</option>
                                                    <option value="Behavioral Health">Behavioral Health</option>
                                                    <option value="Bilingual">Bilingual</option>
                                                    <option value="Bone Marrow">Bone Marrow</option>
                                                    <option value="Bookkeeper">Bookkeeper</option>
                                                    <option value="Burn Unit">Burn Unit</option>
                                                    <option value="Call Center Represenative">Call Center Represenative</option>
                                                    <option value="Call Center Supervisor">Call Center Supervisor</option>
                                                    <option value="Cardiac Cath Lab">Cardiac Cath Lab</option>
                                                    <option value="Cardiac ICU">Cardiac ICU</option>
                                                    <option value="Cardiovascular">Cardiovascular</option>
                                                    <option value="Cardiovascular OR">Cardiovascular OR</option>
                                                    <option value="Care Coordinator">Care Coordinator</option>
                                                    <option value="Case Manager">Case Manager</option>
                                                    <option value="Certified Medication Aide (MAP)">Certified Medication Aide (MAP)</option>
                                                    <option value="Charge">Charge</option>
                                                    <option value="Chart Review">Chart Review</option>
                                                    <option value="Chemotherapy">Chemotherapy</option>
                                                    <option value="Clinic">Clinic</option>
                                                    <option value="Clinical Director">Clinical Director</option>
                                                    <option value="Community Health">Community Health</option>
                                                    <option value="Contact Tracing">Contact Tracing</option>
                                                    <option value="Controller">Controller</option>
                                                    <option value="Critical Care">Critical Care</option>
                                                    <option value="Customer Service">Customer Service</option>
                                                    <option value="Dementia">Dementia</option>
                                                    <option value="Dental">Dental</option>
                                                    <option value="Dialysis">Dialysis</option>
                                                    <option value="Dietetic">Dietetic</option>
                                                    <option value="Direct Hire">Direct Hire</option>
                                                    <option value="Disease Intervention Specialist">Disease Intervention Specialist</option>
                                                    <option value="Doctors Office">Doctors Office</option>
                                                    <option value="Ear, Nose and Throat">Ear, Nose and Throat</option>
                                                    <option value="Educator">Educator</option>
                                                    <option value="Emergency Room">Emergency Room</option>
                                                    <option value="Endoscopy">Endoscopy</option>
                                                    <option value="Family Practice">Family Practice</option>
                                                    <option value="Float">Float</option>
                                                    <option value="Float - Critical Care">Float - Critical Care</option>
                                                    <option value="Gastrointestinal">Gastrointestinal</option>
                                                    <option value="Gerontology">Gerontology</option>
                                                    <option value="Hematology">Hematology</option>
                                                    <option value="Home Health">Home Health</option>
                                                    <option value="Homemaking">Homemaking</option>
                                                    <option value="Hospice">Hospice</option>
                                                    <option value="Hospice Palliative Care">Hospice Palliative Care</option>
                                                    <option value="Hospital">Hospital</option>
                                                    <option value="Human Resources">Human Resources</option>
                                                    <option value="ICU">ICU</option>
                                                    <option value="Imaging">Imaging</option>
                                                    <option value="Immunization">Immunization</option>
                                                    <option value="Infection Control">Infection Control</option>
                                                    <option value="Infusion">Infusion</option>
                                                    <option value="Intermediate Care Unit">Intermediate Care Unit</option>
                                                    <option value="Internal Employee">Internal Employee</option>
                                                    <option value="Interventional Procedures">Interventional Procedures</option>
                                                    <option value="Intravenous">Intravenous</option>
                                                    <option value="Labor & Delivery">Labor & Delivery</option>
                                                    <option value="Laboratory">Laboratory</option>
                                                    <option value="Lactation">Lactation</option>
                                                    <option value="Legal Nurse Consultant">Legal Nurse Consultant</option>
                                                    <option value="Licensed Clinical Social Worker (LCSW)">Licensed Clinical Social Worker (LCSW)</option>
                                                    <option value="Licensed Independent Clinical Social Worker (LICSW)">Licensed Independent Clinical Social Worker (LICSW)</option>
                                                    <option value="Licensed Social Worker">Licensed Social Worker</option>
                                                    <option value="Long Term Care (LTC)">Long Term Care (LTC)</option>
                                                    <option value="Mammography">Mammography</option>
                                                    <option value="Manager">Manager</option>
                                                    <option value="Marketing">Marketing</option>
                                                    <option value="Master of Social Work (MSW)">Master of Social Work (MSW)</option>
                                                    <option value="Maternal - Newborn">Maternal - Newborn</option>
                                                    <option value="Medical Billing and Coding">Medical Billing and Coding</option>
                                                    <option value="Medical ICU">Medical ICU</option>
                                                    <option value="Medical Records Reviewer">Medical Records Reviewer</option>
                                                    <option value="Medical Secretary">Medical Secretary</option>
                                                    <option value="Medical Surgical">Medical Surgical</option>
                                                    <option value="Medical Technologist">Medical Technologist</option>
                                                    <option value="Mental Health">Mental Health</option>
                                                    <option value="MRI">MRI</option>
                                                    <option value="Neonatal">Neonatal</option>
                                                    <option value="Neonatal ICU">Neonatal ICU</option>
                                                    <option value="Neuro">Neuro</option>
                                                    <option value="Neuro Trauma ICU">Neuro Trauma ICU</option>
                                                    <option value="New Grad">New Grad</option>
                                                    <option value="Not Healthcare">Not Healthcare</option>
                                                    <option value="Nutritionist">Nutritionist</option>
                                                    <option value="Obstetrics">Obstetrics</option>
                                                    <option value="Occupational Health">Occupational Health</option>
                                                    <option value="Office">Office</option>
                                                    <option value="Oncology">Oncology</option>
                                                    <option value="Operating Room">Operating Room</option>
                                                    <option value="Operating Room - Circulate and Scrub Nurse">Operating Room - Circulate and Scrub Nurse</option>
                                                    <option value="Operating Room - Circulating Nurse">Operating Room - Circulating Nurse</option>
                                                    <option value="Ophthalmic">Ophthalmic</option>
                                                    <option value="Orientation">Orientation</option>
                                                    <option value="Orthopedic">Orthopedic</option>
                                                    <option value="Outpatient">Outpatient</option>
                                                    <option value="PACU">PACU</option>
                                                    <option value="Pain Management">Pain Management</option>
                                                    <option value="Patient Care">Patient Care</option>
                                                    <option value="Payroll">Payroll</option>
                                                    <option value="Pediatric">Pediatric</option>
                                                    <option value="Pediatric ER">Pediatric ER</option>
                                                    <option value="Pediatric ICU">Pediatric ICU</option>
                                                    <option value="Pediatric OR">Pediatric OR</option>
                                                    <option value="Perioperative">Perioperative</option>
                                                    <option value="Pharmacy">Pharmacy</option>
                                                    <option value="Pharmacy Hospital">Pharmacy Hospital</option>
                                                    <option value="Pharmacy Retail">Pharmacy Retail</option>
                                                    <option value="PICC">PICC</option>
                                                    <option value="Postoperative">Postoperative</option>
                                                    <option value="Postpartum">Postpartum</option>
                                                    <option value="Preoperative">Preoperative</option>
                                                    <option value="Progressive Care/Stepdown">Progressive Care/Stepdown</option>
                                                    <option value="Psychiatry">Psychiatry</option>
                                                    <option value="Quality Assurance">Quality Assurance</option>
                                                    <option value="Radiation">Radiation</option>
                                                    <option value="Receptionist">Receptionist</option>
                                                    <option value="Recruiter">Recruiter</option>
                                                    <option value="Rehabilitation">Rehabilitation</option>
                                                    <option value="Research">Research</option>
                                                    <option value="Respiratory Care">Respiratory Care</option>
                                                    <option value="Sales">Sales</option>
                                                    <option value="Sales/Marketing">Sales/Marketing</option>
                                                    <option value="Scheduling">Scheduling</option>
                                                    <option value="School">School</option>
                                                    <option value="Short Stay">Short Stay</option>
                                                    <option value="Sitter">Sitter</option>
                                                    <option value="Social Worker (Unlicensed)">Social Worker (Unlicensed)</option>
                                                    <option value="Sonographer">Sonographer</option>
                                                    <option value="Sterile Processing Tech">Sterile Processing Tech</option>
                                                    <option value="Substance Abuse">Substance Abuse</option>
                                                    <option value="Supervisor">Supervisor</option>
                                                    <option value="Surgical">Surgical</option>
                                                    <option value="Surgical ICU">Surgical ICU</option>
                                                    <option value="TCU">TCU</option>
                                                    <option value="Telemetry">Telemetry</option>
                                                    <option value="Testing Screener/Observer">Testing Screener/Observer</option>
                                                    <option value="Thoracic Surgery">Thoracic Surgery</option>
                                                    <option value="Transplant">Transplant</option>
                                                    <option value="Trauma">Trauma</option>
                                                    <option value="Triage">Triage</option>
                                                    <option value="Ultrasound Tech">Ultrasound Tech</option>
                                                    <option value="Urgent Care">Urgent Care</option>
                                                    <option value="Urology">Urology</option>
                                                    <option value="Utilization Review">Utilization Review</option>
                                                    <option value="Vascular">Vascular</option>
                                                    <option value="Ventilator">Ventilator</option>
                                                    <option value="Wound Care">Wound Care</option>
                                                </select>
                                            </div>
                                            
                                        </div>
                                        <div className="btn_gradient">
                                            <button className='btn quick-btn empower_signup_submit' type="submit" >Submit</button>
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

export default SignupForm