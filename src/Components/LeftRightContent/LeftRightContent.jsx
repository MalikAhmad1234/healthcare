import React from 'react';
import './LeftRightContent.scss';

const LeftRightContent = () => {
    return (
        <>
        <div className='left_right_content'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 left_right_title'>
                        <h1 className="heading">
                            About Us
                        </h1>
                    </div >
                    <div className='col-lg-8 col-md-8 left_right_description'>
                    <h6 className="description">At EmpowerCare, our purpose is <span className='text_grad_red'>clear and impactful:</span> to revolutionize healthcare staffing and enhance patient care and healthcare outcomes</h6>
                    <span className="meta">We ensure that every patient receives exceptional care, aiding in their swift recovery and promoting healthier lives. This purpose drives everything we do, from our partnerships with hospitals, clinics, and healthcare institutions to our commitment to providing top-notch nursing talent.</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default LeftRightContent