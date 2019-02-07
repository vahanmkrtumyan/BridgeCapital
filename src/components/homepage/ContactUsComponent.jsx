import React, { Component } from "react";
import FeedbackForm from "./FeedbackForm";
import Call from "../../assets/img/icons/call.svg";
import Envelope from "../../assets/img/icons/envelope.svg";
import Home from "../../assets/img/icons/home.svg";
import Facebook from "../../assets/img/icons/facebook.svg";

class ContactUsComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section section-contact">
          <div className="container">
            <h2 className="h2">Հետադարձ կապ</h2>
            <div className="contact-content">
              <p>
                Որևէ խնդրի կամ հարցերի դեպքում կարող եք կապվել մեր սպասարկման
                կենտրոնի հետ` զանգահարելով , այցելելով Բրիդջ Կապիտալի գրասենյակ,
                գրելով մեր ֆեյսբուքյան էջում կամ գրելով էլեկտրոնային նամակ{" "}
                <a className="primary-link" href="mailto:info@bridgecapital.am">
                  info@bridgecapital.am
                </a>{" "}
                հասցեով:
              </p>
              <p>
                Մենք կարձագանքենք Ձեզ, առավելագունը` 7 աշխատանքային օրվա
                ընթացքում: Մեր մասնագետները սիրով կաջակցեն Ձեզ:
              </p>
            </div>
            <ul className="contact-list">
              <li className="contact-list-item">
                <img src={Call} alt="զանգերի սպասարկում" />
                <div>
                  <p>զանգերի սպասարկում</p>
                  <a href="#" className="primary-link">
                    +374 456532
                  </a>
                </div>
              </li>
              <li className="contact-list-item">
                <img src={Envelope} alt="էլ. փոստ" />
                <div>
                  <p>էլ. փոստ</p>
                  <a href="#" className="primary-link">
                    info@bridgebcapital.am
                  </a>
                </div>
              </li>
              <li className="contact-list-item">
                <img src={Home} alt="հասցե" />
                <div>
                  <p>հասցե</p>
                  <a href="#" className="primary-link">
                    ՀՀ, ք. Երևան, Տերյան 6
                  </a>
                </div>
              </li>
              <li className="contact-list-item">
                <img src={Facebook} alt="սոց․ մեդիա" />
                <div>
                  <p>սոց․ մեդիա</p>
                  <a href="#" className="primary-link">
                    Facebook
                  </a>
                </div>
              </li>
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
