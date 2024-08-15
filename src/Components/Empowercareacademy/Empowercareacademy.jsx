import React, { useState } from "react";
import "./Empowercareacademy.scss";
import job1 from "../../Assets/job1.png";
import job2 from "../../Assets/job2.png";
import job3 from "../../Assets/job3.png";
import img3 from '../../Assets/academy1.png'
import img1 from '../../Assets/Group 552.png'
import img2 from '../../Assets/Group 553.png'
import img4 from '../../Assets/Group 555.png'
import img5 from '../../Assets/Group 556.png'
import img6 from '../../Assets/Group 557.png'
import img7 from '../../Assets/Group 558.png'
import img8 from '../../Assets/Group 559.png'
import downarrow from "../../Assets/down-link-arrow.svg";
import searchicon from "../../Assets/search-icon.png";

const Empowercareacademy = () => {
  const [isCardOpen, setIsCardOpen] = useState(null);

  function toggleAccordian(index){
    if( isCardOpen == index ){
      setIsCardOpen(null);
    }else{
      setIsCardOpen(index);
    }
  }

  const accordianData = [
    {
      id: 1,
      title: "Allied Health Staffing Services",
      img: img1,
      description: "EmpowerCare provides a diverse range of allied health professionals to support your facility's needs:",
      bullet1: "Imaging Technologists",
      bullet2: "Surgical Techs",
      bullet3: "Medical Assistants (CMA)",
    },
    {
      id: 2,
      title: "Our Nursing Staffing Solutions",
      img: img2,
      description: "EmpowerCare is your trusted partner for comprehensive nursing staffing solutions. We are dedicated to connecting facilities with the right nurses to provide high-quality patient care. Our Dynamic Squads offer a personalized path to success for nursing professionals, including:",
      bullet1: "Registered Nurses (RNs)",
      bullet2: "Licensed Practical Nurses (LPNs)",
      bullet3: "Specialty Nurses positions from ICU nurses, ER, Behavioral",
    },
    {
      id: 3,
      title: "Advanced Practice Staffing",
      img: img3,
      description: "Our advanced practice staffing solutions connect you with experienced and knowledgeable professionals:",
      bullet1: "Directors of Nursing",
      bullet2: "Nurse Practitioners",
      bullet3: "Physician Assistants",
    },
    {
      id: 4,
      title: "Non-Clinical Staffing Services",
      img: img4,
      description: "EmpowerCare offers a range of non-clinical staffing services to support your facility's operations:",
      bullet1: "Sitters & Compassionate professionals",
      bullet2: "Receptionists & administrative professionals",
      bullet3: "Experienced nurses and CNAs for non-clinical roles",
    },
    {
      id: 5,
      title: "Mental Health Staffing Solution",
      img: img5,
      description: "We understand the growing need for mental health services and offer specialized staffing solutions:",
      bullet1: "Mental Health Techs",
      bullet2: "Psychologists",
      bullet3: "Licensed Clinical Social Workers",
    },
    {
      id: 6,
      title: "Direct Care Staffing Services",
      img: img6,
      description: "EmpowerCare commits to providing compassionate and skilled direct care professionals.",
      bullet1: "Certified Nursing Assistants",
      bullet2: "Direct Care Support Professionals",
      bullet3: "Personal Care Assistants",
    },
    {
      id: 7,
      title: "Interim Leadership Staffing",
      img: img7,
      description: "Our temporary leaders help your facility during times of change, growth, or transition with their expertise and skills. Our network of interim leaders includes:",
      bullet1: "Interim Clinical Directors",
      bullet2: "Interim Nurse Managers",
    },
    {
      id: 8,
      title: "Healthcare Staffing Solutions",
      img: img8,
      description: "A Collaborative Approach in settings including hospitals",
      bullet1: "School Healthcare Staffing Solutions",
      bullet2: "Community Health Centers Staffing Services",
      bullet3: "Skilled Nursing Staffing",
      bullet4: "Mental & Behavioral Health Staffing",
      bullet5: "Surgical Centers Staffing",
      bullet6: "Corporate Health Healthcare Staffing",
      bullet7: "Educational Institutions Healthcare Staffing",
    }
];
  

  return (
    <div className="empower-care-container">
      <div className="container">
        <div className="empowercare-wrapper">
          <div className="flex">
            <div className="left-content">
              <span className="meta">ABOUT US</span>
              <div className="center-heading">
                <h2 className="heading">
                  <span>Comprehensive Staffing ​</span> Solutions
                </h2>
              </div>
              <div className="center-content">
                {/* <p className="description">
                  Our EmpowerCare Academy contributes to the deriver ling highly
                  skilled healthcare professionals, benefiting both the
                  professionals and the facilities they serve. This makes sure
                  our healthcare workers are ready to provide excellent care.
                </p> */}
              </div>

              <div className="flex-cards-academpy">
                {accordianData.map((item) => (
                  <div  className={ item.id == isCardOpen ? "accordian-open academy-card" : "academy-card"} key={item.id}>
                    <div className="card-top-content">
                      <div className="card-content-left">
                        <div className="search-icon">
                          <img src={item.img} alt="search-icon" />
                        </div>
                        <div className="card-title">
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <button className="learn-more" onClick={() => toggleAccordian(item.id)}>{item.id == isCardOpen ? "Learn Less" : "Learn More"}</button>
                      </div>
                    </div>
                    <div className="card-bottom-content">
                      <p>
                        {item.description}
                      </p>
                      <ul>
                        <li>{item.bullet1}</li>
                        <li>{item.bullet2}</li>
                        {item.bullet3 && <li>{item.bullet3}</li>}
                        {item.bullet4 && <li>{item.bullet4}</li>}
                        {item.bullet5 && <li>{item.bullet5}</li>}
                        {item.bullet6 && <li>{item.bullet6}</li>}
                        {item.bullet7 && <li>{item.bullet7}</li>}
                      </ul>
                    </div>
                  </div>
                ))}

                {/* <div className="academy-card">
                  <div className="card-top-content">
                    <div className="card-content-left">
                      <div className="search-icon">
                        <img src={searchicon} alt="search-icon" />
                      </div>
                      <div className="card-title">
                        <h3>Allied Health Staffing Services</h3>
                      </div>
                    </div>
                    <div className="card-right-content">
                      <button className="learn-more">Learn More</button>
                    </div>
                  </div>
                  <div className="card-bottom-content">
                    <p>
                      EmpowerCare is your trusted partner for comprehensive
                      nursing staffing solutions. We are dedicated to connecting
                      facilities with the right nurses to provide high-quality
                      patient care. Our Dynamic Squads offer a personalized path
                      to success for nursing professionals, including:
                    </p>
                    <ul>
                      <li>Registered Nurses (RNs)</li>
                      <li>Licensed Practical Nurses (LPNs)</li>
                      <li>Specialty Nurses positions from ICU nurses, ER, Behavioral
                    Health</li>
                    </ul>
                  </div>
                </div> */}
              </div>

              <div className="sec-btns">
                <a href="/facilities/request-staffing">
                <button className="learn-btn">
                  <span>Explore Tailored Staffing Options</span>
                  <img src={downarrow} alt="downarrow" />
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empowercareacademy;
