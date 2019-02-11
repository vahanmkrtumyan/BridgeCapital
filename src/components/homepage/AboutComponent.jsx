import React, { Component } from "react";
import Users from "../../assets/img/section-img/users.png";
import { SlideToggle } from "react-slide-toggle";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

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
          <div className="cols-sm-2 cols-mb justify-between section-with-img img-to-right">
            <div className="col-md-5">
              <Fade bottom fraction={1}>
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
                        գործարքից բխող պահանջները ֆինանսական համակարգի
                        հաշտարարին:
                      </p>
                      <p>+37411441012</p>
                      <p>info@bridgecapital.am</p>
                      <p>
                        Բրիդջ Կապիտալ ՓԲԸ-ն ֆինանսական համակարգի հաշտարարի
                        որոշումները վիճարկելու իրավունքից հրաժարվելու վերաբերյալ
                        համաձայնագիր չի կնքել:
                      </p>
                      <div
                        className="my-collapsible__content"
                        ref={setCollapsibleElement}
                      >
                        <div className="my-collapsible__content-inner">
                          <p>
                            Ցանկացած անձ իրավունք ունի ստանալու Բրիդջ Կապիտալ
                            ՓԲԸ-ի վերաբերյալ «Արժեթղթերի շուկայի մասին» ՀՀ
                            օրենքի 65-րդ հոդվածով սահմանված տեղեկությունները:
                            Թղթային տարբերակով տեղեկատվության տրամադրման դեպքում
                            կգանձվի պատճենահանման գինը: Ժամկետը` դիմումը
                            ստանալուն հաջորդող 3 աշխատանքային օրվա ընթացքում:
                            վայրը` Ընկերության գրասենյակ:
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
              </Fade>
            </div>
            <div className="col-md-5">
              <Fade right duration={1500} fraction={1}>
                <div className="section-img">
                  <div className="img">
                    <Fade bottom delay={900}>
                      <span className="border" />
                    </Fade>
                    <Zoom delay={900} duration={1500} fraction={0.5}>
                      <img src={Users} alt="Բրոքերային ծառայություն" />
                    </Zoom>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutComponent;
