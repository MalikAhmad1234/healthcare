import './CoolBenefits.scss'
const CoolBenefits = (props) => {
  
    return (
      <div className="cool-benefits">
        <div className="container">
          <div className="cool-wrapper">
            <div class="top-content">
                <br />
                <span className="meta"><b>OUR BENEFITS</b></span>
              <h2 class="heading">
                HERE ARE SOME OF THE 
                <span class="text_grad_red"> COOL BENEFITS </span>
                YOU <br />GET WITH EMPOWERCARE
              </h2>
              <p className="description">
              We want you to feel your best while you're helping others feel better. That's why we give you benefits that take care of you in every way.
              </p>
              <p className="description">
                  Some staffing agencies don't think about what their employees need, but we're different. We care about you and want to make sure you
                  have everything you need to be successful.
              </p><br />
              <h3 className="sub-heading">
              WHEN YOU WORK WITH EMPOWERCARE, YOU'LL GET.
            </h3>
            </div>
  
            <div className="row">
              <div className="working-col col-12">
                <div className="row">
                  <div className="working_content col-12">
                    <h3>●    Health Insurance</h3>
                    <p>
                    We help you stay healthy with medical, dental, and vision insurance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="working-col col-12">
                <div className="row">
                  <div className="working_content col-12">
                    <h3>●    401K Programs</h3>
                    <p>
                    We make it easy for you to save money for the future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="working-col col-12">
                <div className="row">
                  <div className="working_content col-12">
                    <h3>●    Paid Time Off </h3>
                    <p>
                    You can take breaks when you need them and still get paid. The more you work, the more time off you get!
                    </p>
                  </div>
                </div>
              </div>
              <div className="working-col col-12">
                <div className="row">
                  <div className="working_content col-12">
                    <h3>●  Bonuses </h3>
                    <p>
                    Content When you do a great job, we reward you with bonuses and even give you extra money when you refer your friends to work with us.
                    </p>
                  </div>
                </div>
              </div>
              <div className="working-col col-12">
                <div className="row">
                  <div className="working_content col-12">
                    <h3>● Spotlight! Shift Champions </h3>
                    <p>
                    Unsung Heroes No More
                    </p>
                  </div>
                </div>
              </div>
            </div><br />
            <div className='end_btns'>
                <div className='row'>
                <div className='col-sm-12'>
                    <div className='btns'>
                        <a href="#" className='btn_red'>LEARN MORE</a>
                        <a href="#" className='learn_more'>APPLY NOW</a>
                    </div>
              </div>
              </div>
            </div><br />
          </div>
        </div>
      </div>
    );
  };
  
  export default CoolBenefits;