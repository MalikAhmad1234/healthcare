import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bannerImg from '../../Assets/home.png';
import './Banner.scss';

const Banner = (props) => {
  const [selectedOption, setSelectedOption] = useState('Select jobtitle');
  const navigate = useNavigate();

  // State variables to store selected options
  const [selectedJob, setSelectedJob] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedCityState, setSelectedCityState] = useState('US (REMOTE)');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [secondOptions, setSecondOptions] = useState([]);
 
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

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleJobChange = (e) => {
    const job = e.target.value;
    setSelectedJob(job);
    setSecondOptions(jobOptions[job] || []);
    setSelectedOption('');
  };

  // Function to handle specialty selection change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    checkAllSelected();
  }, [selectedJob, selectedOption]);
  // Function to handle city/state selection change
  const handleCityStateChange = (event) => {
    setSelectedCityState(event.target.value);
    checkAllSelected()
  };
  const handleButtonClick = () => {
     navigate(`/searchjob?job=${encodeURIComponent(selectedJob)}&specialty=${encodeURIComponent(selectedOption)}&city_state=${encodeURIComponent(selectedCityState)}`);
 console.log('Selected Job:', selectedJob);
 console.log('Selected Option:', selectedOption);
  };

  const checkAllSelected = () => {
    if (selectedJob != '' || selectedSpecialty != '') {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }
  return (
    <>
      <div className='banner_varient'>
        <div className="main-banner">
          <div className="container">
            <div className="banner-wrapper">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="banner-content">
                  {props.head1 === 'Contact' ?
                    <h1 className="heading">
                    <span>{props.head1}</span>
                    {props.head2}
                  </h1> :
                  <h1 className="heading">
                  {props.head1} <br />
                  <span>{props.head2}</span>
                </h1>
}
                    <p className="description">{props.desc1}</p>
                    <span className="meta">{props.desc2}</span>
                    <div className="banner-btns">
                      {props.head1 === 'Contact' ?
                       <Link  className='btn quick-btn' id='home_signup' >
                       <span>Contact us</span>
                     </Link>:
                      <Link to="/signup" className='btn quick-btn' id='home_signup' >
                        <span>Sign Up Now For Free</span>
                      </Link>
                      }
                      {/* <Link to="/" className='btn contact-btn'>
                        <span>Contact us</span>
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="banner-img">
                    <img src={bannerImg} alt="bannerImg" />
                  </div>
                </div>
              </div>
              <div className="selection-row">
                <div className="selection-wrap">
                  <select id="jobtitle" onChange={handleJobChange} value={selectedJob}>
                    <option value="">Select Job</option>
                    {Object.keys(jobOptions).map((job) => (
                      <option key={job} value={job}>
                        {job}
                      </option>
                    ))}

                  </select>
                  <select id="secondDropdown" onChange={handleOptionChange} value={selectedOption}>
        {secondOptions.length === 0 ? (
          <option value="">Select Speciality</option>
        ) : (
        
          secondOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
        ))
        )}
      </select>
                  {/* <select id="specialty" onChange={handleSpecialtyChange} value={selectedSpecialty}>
                    <option >Select Speciality</option>
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
                  </select> */}
                  {/* <select id="city-state" onChange={handleCityStateChange} value={selectedCityState}>
                    <option >Select location</option>
                    <option value="US (REMOTE)">United Estates</option>
                  </select> */}
                  <button className='available-btn' onClick={handleButtonClick} disabled={searchDisabled}>
                    <span>Find available positions</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner