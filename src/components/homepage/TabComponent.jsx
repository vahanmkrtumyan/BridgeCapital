import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Broker from "../../assets/img/section-img/broker.png";
import Currency from "../../assets/img/section-img/arjuyt.png";
import Consultation from "../../assets/img/section-img/xohrdatvakanNkar.png";
import { SlideToggle } from "react-slide-toggle";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Sak from "../../assets/pdf/Sak.pdf";
import Brok from "../../assets/pdf/Brok.pdf";
import Hashiv from "../../assets/pdf/Hashiv.PDF";

class TabComponent extends Component {
  state = {
    brok: "Կարդալ ավելին",
    Xor: "Կարդալ ավելին",
    Art: "Կարդալ ավելին"
  };

  handleBrokOpen = () => {
    this.state.brok === "Կարդալ ավելին"
      ? this.setState({ brok: "Պակաս" })
      : this.setState({ brok: "Կարդալ ավելին" });
  };

  handleXorOpen = () => {
    this.state.Xor === "Կարդալ ավելին"
      ? this.setState({ Xor: "Պակաս" })
      : this.setState({ Xor: "Կարդալ ավելին" });
  };

  handleArtOpen = () => {
    this.state.Art === "Կարդալ ավելին"
      ? this.setState({ Art: "Պակաս" })
      : this.setState({ Art: "Կարդալ ավելին" });
  };

  onTab = () => {
    this.setState({
      brok: "Կարդալ ավելին",
      Xor: "Կարդալ ավելին",
      Art: "Կարդալ ավելին"
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="section-tab grey">
          <div className="container">
            <Tabs className="tab">
              <TabList className="tab-header">
                <Tab className="active" onClick={this.onTab}>
                  <a>Բրոքերային</a>
                </Tab>
                <Tab onClick={this.onTab}>
                  <a>Խորհրդատվական</a>
                </Tab>
                <Tab onClick={this.onTab}>
                  <a>Արտարժույթային</a>
                </Tab>
              </TabList>
              <TabPanel>
                <div className="tab-body">
                  <div className="cols-sm-2 cols-mb justify-between section-with-img img-to-right">
                    <div className="col-md-5">
                      <h2 className="h2">Բրոքերային ծառայություն</h2>

                      <SlideToggle
                        duration={800}
                        collapsed
                        render={({
                          onToggle,
                          setCollapsibleElement,
                          toggleState
                        }) => (
                          <Fade delay={150}>
                            <div className="my-collapsible text-inside">
                              <strong>
                                Բրոքերային ծառայությունները մատուցվում են
                                հայաստանյան և օտարերկրյա ֆիզիկական և
                                իրավաբանական անձանց:
                              </strong>
                              <p>
                                Ընկերությունը մատուցում է արժեթղթերի գծով
                                բրոքերային ծառայություններ տեղական և
                                արտասահմանյան կարգավորվող և չկարգավորվող
                                հարթակնեում շրջանառվող արժեթղթերի գծով և իր
                                հաճախորդներին տալիս է հասանելիություն՝
                                համաշխարհային մեծագույն բորսաներում ցուցակված
                                արժեթղթերում ներդրումներ կատարելու համար:
                              </p>
                              <p>
                                Բրոքերային սպասարկման շրջանականերում
                                հաճախորդներին ներկայացվում են.
                              </p>
                              <ul className="ul">
                                <li>
                                  արժեթղթերի շրջանակ, որոնցում հաճախորդը կարող է
                                  կատարել ներդրումներ,
                                </li>
                              </ul>

                              <div
                                className="my-collapsible__content"
                                ref={setCollapsibleElement}
                              >
                                <div className="my-collapsible__content-inner">
                                  <ul className="ul">
                                    <li>
                                      տեղեկատվություն արժեթղթերի գների
                                      վերաբերյալ,
                                    </li>
                                    <li>
                                      տեղեկատվություն արժեթղթերի հնարավոր
                                      վաղաժամկետ իրացման տարբերակների մասին,
                                    </li>
                                    <li>
                                      արժեթղթերով կատարվելիք գործարքների պատվերի
                                      ընդունման և խաղորդման կարգը,
                                    </li>
                                    <li>
                                      կապի այն միջոցները որոնցով հաճախորդը կարող
                                      է կատարել արժեթղթերով գործարքներ։
                                    </li>
                                  </ul>
                                  <p>
                                    Ընկերությունը հաճախորդից հանձնարարականներն
                                    ընդունում է յուրաքանչյուր աշխատանքային օր
                                    ժամը 9:30-ից մինչև 16:00:
                                  </p>
                                  <p>
                                    Բրոքերային ծառայությունների մասին առավել
                                    մանրամասն կարող եք ծանոթանալ
                                    ծառայությունների տեղեկատվական{" "}
                                    <a
                                      href={Brok}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="files"
                                    >
                                      ամփոփագրում։{" "}
                                    </a>
                                  </p>
                                  <p>
                                    Բրոքերային ծառայությունների սակագներին կարող
                                    եք ծանոթանալ{" "}
                                    <a
                                      href={Sak}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="primary-link"
                                    >
                                      այստեղ։{" "}
                                    </a>
                                  </p>
                                  <p>
                                    Բրոքերային հաշվի բացման հայտի ձևերին կարող
                                    եք ծանոթանալ{" "}
                                    <a
                                      href={Hashiv}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="primary-link"
                                    >
                                      այստեղ։
                                    </a>
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
                          </Fade>
                        )}
                      />
                    </div>
                    <div className="col-md-5">
                      <div className="section-img">
                        <div className="img">
                          <Zoom delay={100} duration={800} fraction={0.3}>
                            <span className="border" />

                            <img src={Broker} alt="Բրոքերային ծառայություն" />
                          </Zoom>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <Fade fraction={0.3}>
                  <div className="tab-body">
                    <div className="cols-sm-2 cols-mb justify-between section-with-img img-to-right">
                      <div className="col-md-5">
                        <h2 className="h2">Խորհրդատվական ծառայություն</h2>

                        <SlideToggle
                          duration={800}
                          collapsed
                          render={({ onToggle, setCollapsibleElement }) => (
                            <Fade delay={150}>
                              <div className="my-collapsible text-inside">
                                <strong>
                                  Բրիդջ Կապիտալ ՓԲԸ-ն առաջարկում է մասնագիտացված
                                  խորհրդատվական ծառայություններ արժեթղթերի
                                  շուկայում ներդրումների հետ կապված,
                                  մասնավորապես՝
                                </strong>
                                <ul className="ul">
                                  <li>
                                    ընդհանուր ներդրումային առաջարկությունների
                                    կազմում,
                                  </li>
                                  <li>արժեթղթերի ռիսկայնության գնահատում,</li>
                                  <li>
                                    վերլուծությունների տրամադրում արժեթղթերի
                                    գների վրա ազդող գործոնների մասին,
                                  </li>
                                  <li>
                                    խորհրդատվության տրամադրում ներդրումային
                                    տարբեր ռազմավարությունների վերաբերյալ,
                                  </li>
                                  <li>
                                    արժեթղթերի գնային տատանումների կանխատեսման
                                    տրամադրում։
                                  </li>
                                </ul>
                                <p>
                                  Խորհրդատվական ծառայությունների մասին առավել
                                  մանրամասն կարող եք ծանոթանալ ծառայությունների
                                  տեղեկատվական{" "}
                                  <a
                                    href={Brok}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="primary-link"
                                  >
                                    ամփոփագրում։{" "}
                                  </a>
                                </p>
                                <p>
                                  Խորհրդատվական ծառայությունների սակագներին
                                  կարող եք ծանոթանալ{" "}
                                  <a
                                    href={Sak}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="files"
                                  >
                                    այստեղ։{" "}
                                  </a>
                                </p>
                                <div
                                  className="my-collapsible__content"
                                  ref={setCollapsibleElement}
                                >
                                  <div className="my-collapsible__content-inner" />
                                </div>
                                {/* <button
                                  className="my-collapsible__toggle btn secondary mt-5"
                                  onClick={() => {
                                    this.handleXorOpen();
                                    onToggle();
                                  }}
                                >
                                  {this.state.Xor}
                                </button> */}
                              </div>
                            </Fade>
                          )}
                        />
                      </div>
                      <div className="col-md-5">
                        <div className="section-img">
                          <div className="img">
                            <Zoom delay={100} duration={800} fraction={0.3}>
                              <span className="border" />
                              <img
                                src={Consultation}
                                alt="Բրոքերային ծառայություն"
                              />
                            </Zoom>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </TabPanel>
              <TabPanel>
                <Fade fraction={0.3}>
                  <div className="tab-body">
                    <div className="cols-sm-2 cols-mb justify-between section-with-img img-to-right">
                      <div className="col-md-5">
                        <h2 className="h2">Արտարժութային ծառայություն</h2>

                        <SlideToggle
                          duration={800}
                          collapsed
                          render={({ onToggle, setCollapsibleElement }) => (
                            <Fade delay={150}>
                              <div className="my-collapsible text-inside">
                                <strong>
                                  Բրիդջ Կապիտալ ՓԲԸ-ն իր հաճախորդներին
                                  առաջարկում է արտարժույթի փոխարկման
                                  ծառայություններ, միայն այն դեպքում, եթե
                                  հաճախորդի կողմից տվյալ փոխարկման պահանջարկը
                                  բխում է արժեթղթերում ներդրումներ կատարելու
                                  հանգամանքից:
                                </strong>
                                <p>
                                  Ընկերությունունը այդ նպատակով մշտապես
                                  ապահովվում է երկկողմանի գնանշումներ ՀՀ դրամ,
                                  ԱՄՆ դոլար, ԵՎՐՈ, ՌԴ ռուբլի, ՄԲ ֆունտ ստեռլինգ
                                  արժույթներով բոլոր հնարավոր կոմբինացիաների
                                  համար:
                                </p>

                                <p>
                                  Արտարժութային ծառայությունների մասին առավել
                                  մանրամասն կարող եք ծանոթանալ ծառայությունների
                                  տեղեկատվական{" "}
                                  <a
                                    href={Brok}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="primary-link"
                                  >
                                    ամփոփագրում։{" "}
                                  </a>
                                </p>

                                {/* <div
                                  className="my-collapsible__content"
                                  ref={setCollapsibleElement}
                                >
                                  <div className="my-collapsible__content-inner">
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Amet aperiam asperiores
                                      aspernatur consectetur cumque, deleniti,
                                      dolor dolores eligendi ex exercitationem
                                      itaque iure molestiae neque perferendis
                                      quis veritatis voluptatum! A autem beatae
                                      cum distinctio eius harum id incidunt
                                      inventore itaque magnam magni molestiae
                                      natus necessitatibus nihil qui, quos
                                      repellat, sequi temporibus. Ab, aliquid at
                                      consequuntur deleniti dignissimos
                                      eligendi, eum eveniet fuga illo, incidunt
                                      ipsum laborum nam neque non nostrum quod
                                      suscipit voluptatem. Aperiam enim iure
                                      perspiciatis porro praesentium.
                                      Laboriosam, magni nobis. Aliquam animi aut
                                      consequatur deserunt excepturi, fuga id
                                      nam non nostrum, numquam quas quis quos
                                      repellat reprehenderit repudiandae tempore
                                      ullam!
                                    </p>
                                  </div>
                                </div>
                                <button
                                  className="my-collapsible__toggle btn secondary mt-5"
                                  onClick={() => {
                                    this.handleArtOpen();
                                    onToggle();
                                  }}
                                >
                                  {this.state.Art}
                                </button> */}
                              </div>
                            </Fade>
                          )}
                        />
                      </div>
                      <div className="col-md-5">
                        <div className="section-img">
                          <div className="img">
                            <Zoom delay={100} duration={800} fraction={0.3}>
                              <span className="border" />
                              <img
                                src={Currency}
                                alt="Բրոքերային ծառայություն"
                              />
                            </Zoom>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </TabPanel>
            </Tabs>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default TabComponent;
