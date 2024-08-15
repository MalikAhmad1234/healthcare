import { useState, React } from "react";
import "./FAQ.scss";
import icon1 from "../../Assets/Group530.png";
import icon2 from "../../Assets/Group531.png";
import icon3 from "../../Assets/Group532.png";
import { faqData5 } from "../../Constants/Pr_Pg5_Faq5 _constant.js";

const Pr_Pg5_Faq5 = () => {
  
  const[isAccordianOpen, setIsAccordianOpen] = useState(null);

  function toggleAccordian(index){
    console.log(index);
    if( index == isAccordianOpen){
      setIsAccordianOpen(null);
    }else{
      setIsAccordianOpen(index);
    }
  }

  return (
    <div className="FAQ-wrapper">
      <div className="container">
        <div className="working-wrapper">
          <div className="top-content">
            <h2 className="heading">
              Frequently Asked Questions<span className="text_grad_green"> (FAQ) </span>
            </h2>
          </div>

          <div className="row">
            {faqData5.map((faq, index) => (
              <div
                key={index}
                className={ isAccordianOpen === index+1 ? "working-col col-12 accordian-open" : "working-col col-12 accordian-closed" }
              >
                <div className="row">
                  <div className="working_content col-12">
                    <div className="reletive">
                      <h3>{faq.question1}{faq.question2}{faq.question3}{faq.question4}{faq.question5}{faq.question6}{faq.question7}{faq.question8}{faq.question9}{faq.question10}{faq.question11}{faq.question12}{faq.question13}{faq.question14}{faq.question15}</h3>
                      <span
                        className="plus-icon"
                        onClick={() => toggleAccordian(index + 1)}
                      >
                        {isAccordianOpen === index + 1 ? '−' : '+'}
                      </span>
                    </div>
                    {isAccordianOpen === index + 1 && <p>{faq.answer1}{faq.answer2}{faq.answer3}{faq.answer4}{faq.answer5}{faq.answer6}{faq.answer7}{faq.answer8}{faq.answer9}{faq.answer10}{faq.answer11}{faq.answer12}{faq.answer13}{faq.answer14}{faq.answer15}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pr_Pg5_Faq5;