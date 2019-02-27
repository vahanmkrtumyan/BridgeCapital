import React, { Component } from "react";
import FeedbackForm from "./FeedbackForm";
import Call from "../../assets/img/icons/call.svg";
import Envelope from "../../assets/img/icons/envelope.svg";
import Home from "../../assets/img/icons/home.svg";
import Facebook from "../../assets/img/icons/facebook.svg";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";

class ContactUsComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section section-contact">
          <div className="container">
            <Fade right delay={500} duration={1000} fraction={1}>
              <h2 className="h2">Հետադարձ կապ</h2>
              <div className="contact-content">
                <p>
                  Որևէ խնդրի կամ հարցերի դեպքում կարող եք կապվել մեզ հետ`
                  զանգահարելով, այցելելով Բրիդջ Կապիտալի գրասենյակ կամ գրելով
                  էլեկտրոնային նամակ&nbsp;
                  <a
                    className="primary-link"
                    href="mailto:info@bridgecapital.am"
                  >
                    info@bridgecapital.am&nbsp;
                  </a>
                  հասցեով:
                </p>
                <p>
                  Մենք կարձագանքենք Ձեզ առավելագույնը 7 աշխատանքային օրվա
                  ընթացքում: Մեր մասնագետները սիրով կաջակցեն Ձեզ:
                </p>
              </div>
            </Fade>

            <ul className="contact-list">
              <Tada count={1} fraction={1} duration={1200}>
                <li className="contact-list-item">
                  <img src={Call} alt="զանգերի սպասարկում" />
                  <div>
                    <p>Զանգերի Սպասարկում</p>
                    <a href="#" className="primary-link">
                      +374 11441012
                    </a>
                  </div>
                </li>
              </Tada>
              <Tada count={1} fraction={1} duration={1200}>
                <li className="contact-list-item">
                  <img src={Envelope} alt="էլ. փոստ" />
                  <div>
                    <p>Էլ. փոստ</p>
                    <a href="#" className="primary-link">
                      info@bridgecapital.am
                    </a>
                  </div>
                </li>
              </Tada>
              <Tada count={1} fraction={1} duration={1200}>
                <li className="contact-list-item">
                  <img src={Home} alt="հասցե" />
                  <div>
                    <p>Հասցե</p>
                    <a href="#" className="primary-link">
                      ք. Երևան, Գր․ Լուսավորիչ 9
                    </a>
                  </div>
                </li>
              </Tada>

              <Tada count={1} fraction={1} duration={1200}>
                <li className="contact-list-item">
                  <img src={Facebook} alt="սոց․ մեդիա" />
                  <div>
                    <p>Սոց. մեդիա</p>
                    <a href="#" className="primary-link">
                      Facebook
                    </a>
                  </div>
                </li>
              </Tada>
            </ul>
          </div>
          <div className="section-contact-bg" />
          <FeedbackForm />
        </section>
      </React.Fragment>
    );
  }
}

export default ContactUsComponent;
