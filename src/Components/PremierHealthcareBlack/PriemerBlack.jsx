import React from 'react';
import './PriemerBlack.scss';
import "react-multi-carousel/lib/styles.css";
import empower2img from '../../Assets/services_icon04.png';
import empower1img from '../../Assets/services_icon02.png';
import { FiArrowDownRight } from 'react-icons/fi';

const PriemerBlack = ({heading1,heading2,heading3,description,Redcolor}) => {
    return (
        <div className="priemer-sec-black">
            <div className="priemer-container">
                <div className="priemer-wrapper">
                    <div className="empoer1">
                        <img src={empower1img} alt="empower1img" />
                    </div>
                    <div className="empoer2">
                        <img src={empower2img} alt="empower2img" />
                    </div>
                    <div className="container">
                        <div className="top-content">
                            <span className="meta">Join us now</span>
                            <h2 className="heading">
                                {heading1}
                                <span className={Redcolor ?'text_grad_red':"text_grad_green"}> {heading2} </span>
                                {heading3}
                            </h2>
                            <p className="description">{description}</p>
                            <div className='priemer-cta'>
                                <a className={Redcolor ?'btn_red':'btn_green'} href='/signup'>Find Your purpose today <span ><FiArrowDownRight/></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriemerBlack