import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import logo from '../../Assets/logo.png';
import logo from "../../Assets/EmpowerCareLogo.svg";
import instagram from '../../Assets/icons/instagram.svg';
import tiktok from '../../Assets/icons/tiktok.svg';
import facebook from '../../Assets/icons/facebook-f.svg';
import linkedin from '../../Assets/icons/linkedin-in.svg';
import twitter from '../../Assets/icons/x.png';
import $ from "jquery";
import './Footer.scss';
import { colors } from '@mui/material';

const Footer = () => {
  const location = useLocation();
  useEffect(()=>{
    const { pathname } = location;
    if (pathname.startsWith("/professionals") || pathname.startsWith("/professional")) {
      $("#facilities-links").hide();
    } else if (pathname.startsWith("/facilities")){
      $("#professionals-links").hide();
    }
    else if (pathname.startsWith("/")){
      $("#facilities-links").hide(); 
    }
  })
    return ( 
        <>
          <footer className="footer">
            <div className="container">
              <div className="footer-wrapper">
                <div className="top-footer">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="contents">
                        <div className="footer-logo">
                          <img src={logo} alt="logo" />
                        </div>
                        <p className="description">Uplifting Care. Enriching Communities</p>
                        <ul className="menu-items">
                          <li className="menu-item">
                            <Link to='https://www.instagram.com/msgstaffing/'>
                            <img src={instagram} alt="instagram" />
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to='https://twitter.com/MsgStaffing'>
                            <img src={twitter} alt="twitter" />
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to='https://www.facebook.com/empowercare.us/'>
                            <img src={facebook} alt="facebook" />
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to='https://www.linkedin.com/company/empowercare-staffing/'>
                            <img src={linkedin} alt="linkedin" />
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to='https://www.tiktok.com/@empowercarestaffing'>
                            <img src={tiktok} alt="tiktok" />
                            </Link>
                          </li>
                        </ul>
                      </div>
               
                      <div className="contents">
                        <h4 className="footer-title">Stay Connected</h4>
                        <form action="" className='footer-form'>
                          <input type="email" placeholder='Email' />
                          <button type="submit" className='submit-btn'>
                            <span>Submit</span>
                          </button>
                        </form>
                      </div>
                  
                    </div>
                    <div className="col-md-2">
                      <div className="contents">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="list-items">
                          <li className="list-item">
                            <Link to='/about'>
                              <span>About</span>
                            </Link>
                          </li>
                          <li className="list-item">
                            <Link to='/signup'>
                              <span>Quick Apply</span>
                            </Link>
                          </li>
                          <li className="list-item">
                            <Link to='/resources/network'>
                              <span>Referrals</span>
                            </Link>
                          </li>
                          <li className="list-item">
                            <a target='blank' href='https://empowercare.me/'>
                              <span>Our Blogs</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <Link to='/about/contactus'>
                              <span>Reengage With Us</span>
                            </Link>
                          </li>
                          <li className="list-item">
                            <Link to='/about/community'>
                              <span>Community Partnerships</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div id='professionals-links' className="col-md-2">
                      <div  className="contents">
                        <h4 className="footer-title">Professionals</h4>
                        <ul className="list-items">
                          <li className="list-item">
                          <a href="/professionals/seamless">
                              <span>Maxim Healthcare</span>
                              </a>
                          </li>
                          <li className="list-item">
                            <a href='/professional/Prseamlesssarborassociates'>
                              <span>Arbor Associates</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href='/professional/Prseamlesssayahealthcare'>
                              <span>Aya Healthcare</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href='/professional/Prseamlesssimpactfull'>
                              <span>Healthcare Staffing</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href='/professional/Prseamlesssintelycare'>
                              <span>Intely Care</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href='/professional/Prseamlesssmasmedical'>
                              <span>MAS Medical</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div id='facilities-links' className="col-md-2">
                      <div  className="contents">
                        <h4 className="footer-title">Facilities</h4>
                        <ul className="list-items">
                          <li className="list-item">
                            <a href='/facilities/seamless'>
                              <span>Maxim Healthcare</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href='/facilities/Facilitiesarborassociates'>
                              <span>Arbor Associates</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href='/facilities/Facilitiesayahealthcare'>
                              <span>Aya Healthcare</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href='/facilities/Facilitiesfavriouthealthcarestaffing'>
                              <span>Healthcare Staffing</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href='/facilities/Facilitiesintelycarefornurses'>
                              <span>Intely Care</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href='/facilities/Facilitiesmasmedicalstaffing'>
                              <span>MAS Medical</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="contents">
                        <h4 className="footer-title">Contact</h4>
                        <p className="address">562 LincoIn St. Worcester, MA 01605</p>
                        <ul className="list-items">
                          <li className="list-item">
                            <Link to='/'><span>508-799-7674</span></Link>
                          </li>
                          <li className="list-item">
                            <Link to='/'><span>www.empowercare.us</span></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
  
                  </div>
                </div>
                <div className="bottom-footer">
                  <div className="bottom-foote-row">
                    <p className="text">&copy; 2024 <span>Empowercare.</span> All right reserved.</p>
                    <p className="text"><a href="/privacypolicy"  style={{color: "white"}}>Privacy Policy</a> | <a href='/termsofservice'  style={{color: "white"}}>Terms of Service</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
    )
}

export default Footer