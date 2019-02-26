import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Broker from "../../assets/img/section-img/broker.png";
import Currency from "../../assets/img/section-img/arjuyt.png";
import Consultation from "../../assets/img/section-img/xohrdatvakanNkar.png";
import { SlideToggle } from "react-slide-toggle";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

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
                                Բրոքերային սպասարկման շրջանակներում կատարվում են
                                հետևյալ գործառնությունները.
                              </p>
                              <ul className="ul">
                                <li>
                                  հաճախորդների համար բրոքերային հաշվի բացում,
                                </li>
                                <li>
                                  աջակցություն դեպո հաշվի բացման գործընթացում,
                                </li>
                                <li>
                                  հաճախորդի անունից և հաճախորդի հաշվին
                                  գործարքների կատարում,
                                </li>
                                <li>արժեթղթերի վաճառքների իրականացում,</li>
                                <li>
                                  արժեթղթերի ընթացիկ գների վերաբերյալ
                                  տեղեկությունների ներկայացում,
                                </li>
                                <li>
                                  արժեթղթերով գործարքների կատարման
                                  հանձնարարականների ընդունում և հաղորդում:
                                </li>
                              </ul>

                              <div
                                className="my-collapsible__content"
                                ref={setCollapsibleElement}
                              >
                                <div className="my-collapsible__content-inner">
                                  <p>
                                    Ընկերությունը հաճախորդից հանձնարարականները
                                    ընդունում է յուրաքանչյուր աշխատանքային օր`
                                    ժամը 9:30-ից մինչև 16:00: Պատվերների
                                    կատարման մասին հավելյալ տեղեկություն կարող
                                    եք ստանալ այստեղ:
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
                <Fade fraction={1}>
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
                                  Բրիջ Կապիտալ ՓԲԸ-ն առաջարկում է մասնագիտացված
                                  խորհրդատվություն անհատներին, արտասահմանյան և
                                  տեղական ընկերություններին:
                                </strong>
                                <p>
                                  Մեր գործունեությունը հիմնված է տարիների
                                  ընթացքում ձեռք բերված փորձի և ֆինանսական
                                  շուկայի հիմնական հատվածների
                                  ուսումնասիրությունների վրա: Ընկերության
                                  հետազոտական թիմը մեր հաճախորդներին է
                                  տրամադրում Հայաստանի ֆինանսական շուկայի և
                                  տնտեսության իրական հատվածի բազմակողմանի
                                  վերլուծություններ և հաշվետվություններ: Մենք
                                  մեր հաճախորդների ուշադրությունը հրավիրում ենք
                                  Հայաստանի տնտեսական համակարգում կատարվող բոլոր
                                  նշանակալի փոփոխությունների վրա` տրամադրելով
                                  երկրի վերաբերյալ ամենաթարմ տնտեսական
                                  վերլուծություններ:
                                </p>

                                <div
                                  className="my-collapsible__content"
                                  ref={setCollapsibleElement}
                                >
                                  <div className="my-collapsible__content-inner">
                                  </div>
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
                <Fade fraction={1}>
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
                                  ծառայություններ, այդ թվում՝ սփոթ, սվոպ և
                                  ֆորվարդային գործարքներ:
                                </strong>
                                <p>
                                  Բրիդջ Կապիտալ ՓԲԸ-ն իր հաճախորդներին
                                  առաջարկում է պայմանագրային հիմունքներով սվոփ
                                  գործարքների կնքում` ներքին և միջազգային
                                  շուկաներում:
                                </p>

                                <p>
                                  Բրիդջ Կապիտալ ՓԲԸ-ն իր հաճախորդներին
                                  առաջարկում է բանկի կողմից գնանշվող
                                  արժույթներով ֆորվարդային գործարքներ, որոնց
                                  իրականացման ժամկետայնությունը պայմանավորված է
                                  գործարքի արժույթով: Արտարժույթ-արտարժույթ
                                  գործարքների դեպքում ժամկետը կարող է սահմանվել
                                  մինչև մեկ տարի: Արտարժույթ-ՀՀ դրամ գործարքների
                                  դեպքում ժամկետը սահմանվում է` ելնելով շուկայի
                                  իրավիճակից: Բոլոր ֆորվարդային գործարքները
                                  կրում են պայմանագրային բնույթ:
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
