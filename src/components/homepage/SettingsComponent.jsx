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
                    <p>
                      Proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum. Sed ut perspiciatis unde omnis iste natus
                      error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore
                    </p>
                    <div
                      className="my-collapsible__content"
                      ref={setCollapsibleElement}
                    >
                      <div className="my-collapsible__content-inner">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet aperiam asperiores aspernatur consectetur
                          cumque, deleniti, dolor dolores eligendi ex
                          exercitationem itaque iure molestiae neque perferendis
                          quis veritatis voluptatum! A autem beatae cum
                          distinctio eius harum id incidunt inventore itaque
                          magnam magni molestiae natus necessitatibus nihil qui,
                          quos repellat, sequi temporibus. Ab, aliquid at
                          consequuntur deleniti dignissimos eligendi, eum
                          eveniet fuga illo, incidunt ipsum laborum nam neque
                          non nostrum quod suscipit voluptatem. Aperiam enim
                          iure perspiciatis porro praesentium. Laboriosam, magni
                          nobis. Aliquam animi aut consequatur deserunt
                          excepturi, fuga id nam non nostrum, numquam quas quis
                          quos repellat reprehenderit repudiandae tempore ullam!
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
