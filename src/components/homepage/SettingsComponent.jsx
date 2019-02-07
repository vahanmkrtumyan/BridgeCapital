import React, { Component } from "react";
import Settings from "../../assets/img/section-img/settings.png";
import { SlideToggle } from "react-slide-toggle";

class SettingsComponent extends Component {
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
      <section className="section">
        <div className="container">
          <div className="cols-sm-2 cols-mb justify-between section-with-img">
            <div className="col-md-5">
              <div className="section-img">
                <div className="img">
                  <img src={Settings} alt="Բրոքերային ծառայություն" />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <h2 className="h2">Կարգավորումներ</h2>
              <SlideToggle
                duration={800}
                collapsed
                render={({ onToggle, setCollapsibleElement }) => (
                  <div className="my-collapsible">
                    <strong>Օրենքներ</strong>
                    <strong>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.arlis.am/documentview.aspx?docID=1"
                      >
                        ՀՀ Սահմանադրություն
                      </a>
                    </strong>
                    <strong>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.arlis.am/documentview.aspx?docid=74658"
                      >
                        ՀՀ Քաղաքացիական օրենսգիրք
                      </a>
                    </strong>
                    <strong>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.arlis.am/documentview.aspx?docid=80072"
                      >
                        Արժեթղթերի շուկայի մասին ՀՀ օրենքը
                      </a>
                    </strong>
                    <strong>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.arlis.am/documentview.aspx?docid=69106"
                      >
                        Բաժնետիրական ընկերությունների մասին ՀՀ օրենքը
                      </a>
                    </strong>
                    <strong>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.arlis.am/documentview.aspx?docID=64645"
                      >
                        Ապահովված հիփոթեքային պարտատոմսերի մասին ՀՀ օրենքը
                      </a>
                    </strong>
                    <strong>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.arlis.am/documentview.aspx?docid=50589"
                      >
                        Արժութային կարգավորման և արժութային վերահսկողության
                        մասին ՀՀ օրենքը
                      </a>
                    </strong>
                    <strong>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.arlis.am/documentview.aspx?docID=44695"
                      >
                        Ակտիվների արժեթղթավորման և ակտիվներով ապահովված
                        արժեթղթերի մասին ՀՀ օրենքը
                      </a>
                    </strong>
                    <strong>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.arlis.am/documentview.aspx?docID=93142"
                      >
                        Փողերի լվացման և ահաբեկչության ֆինանսավորման դեմ պայքարի
                        մասին ՀՀ օրենքը
                      </a>
                    </strong>
                    <div
                      className="my-collapsible__content"
                      ref={setCollapsibleElement}
                    >
                      <div className="my-collapsible__content-inner">
                        <strong>Իրավական ակտեր</strong>
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
                    </button>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SettingsComponent;
