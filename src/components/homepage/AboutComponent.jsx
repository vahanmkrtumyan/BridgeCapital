import React, { Component } from "react";
import About from "../../assets/img/section-img/about-us.png";
import { SlideToggle } from "react-slide-toggle";

class AboutComponent extends Component {
  state = {
    brok: "Կարդալ ավելին"
  };

  handleBrokOpen = () => {
    this.state.brok === "Կարդալ ավելին"
      ? this.setState({ brok: "Պակաս" })
      : this.setState({ brok: "Կարդալ ավելին" });
  };
  render() {
    return (
      <section className="section grey">
        <div className="container">
          <div className="cols-md-2 cols-mb justify-between section-with-img img-to-right">
            <div className="col-md-5">
              <h2 className="h2">Հաճախորդների իրավունքները</h2>
              <SlideToggle
                duration={800}
                collapsed
                render={({ onToggle, setCollapsibleElement }) => (
                  <div className="my-collapsible">
                    <p>
                      Հայտնում ենք, որ Ձեր բողոք - պահանջները, ինչպես նաև
                      առաջարկությունները կարող եք ներկայացնել հետևյալ
                      հեռախոսահամարով կամ գրել նշված էլ.հասցեին՝ Ֆիզիկական անձ
                      հանդիսացող հաճախորդները հնարավորություն ունեն
                      ներկայացնելու ընկերության և հաճախորդի միջև կնքվող
                      գործարքից բխող պահանջները ֆինանսական համակարգի հաշտարարին:
                    </p>
                    <p>+37411441012</p>
                    <p>info@bridgecapital.am</p>
                    
                    <div
                      className="my-collapsible__content"
                      ref={setCollapsibleElement}
                    >
                      <div className="my-collapsible__content-inner">
                      <p>
                      Վերոնշյալ տեղեկությունները ընկերությունը տրամադրում է
                      ցանկացած անձի գրավոր դիմումը ստանալուց երեք աշխատանքային
                      օրվա ընթացքում, բացառությամբ եթե դիմումի մեջ այլ ժամկետ
                      նշված չէ:
                    </p>
                      </div>
                    </div>
                    <button
                      className="my-collapsible__toggle btn secondary mt-5"
                      onClick={() => {
                        this.handleBrokOpen();
                        onToggle();
                      }}
                    >
                      {this.state.brok}
                    </button>{" "}
                  </div>
                )}
              />
            </div>
            <div className="col-md-5">
              <div className="section-img">
                <div className="img">
                  <img src={About} alt="Բրոքերային ծառայություն" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutComponent;
