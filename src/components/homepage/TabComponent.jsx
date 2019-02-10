import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Broker from "../../assets/img/section-img/broker.png";
import Currency from "../../assets/img/section-img/arjuyt.png";
import Consultation from "../../assets/img/section-img/xohrdatvakanNkar.png";
import { SlideToggle } from "react-slide-toggle";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';
import Flip  from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Zoom  from 'react-reveal/Zoom';


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
                                            <Fade  bottom fraction={1}>
                                                <h2 className="h2">Բրոքերային ծառայություն</h2>


                                            <SlideToggle
                                                duration={800}
                                                collapsed
                                                render={({
                                                             onToggle,
                                                             setCollapsibleElement,
                                                             toggleState
                                                         }) => (
                                                        <div className="my-collapsible">
                                                            <strong>
                                                                Բրոքերային ծառայությունները մատուցվում են
                                                                հայաստանյան և օտարերկրյա ֆիզիկական և իրավաբանական
                                                                անձանց:
                                                            </strong>
                                                            <p>
                                                                Բրոքերային սպասարկման շրջանակներում կատարվում են
                                                                հետևյալ գործառնությունները.
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    հաճախորդների համար բրոքերային հաշվի բացում,
                                                                </li>
                                                                <br />
                                                                <li>
                                                                    աջակցություն դեպո հաշվի բացման գործընթացում,
                                                                </li>
                                                                <br />
                                                                <li>
                                                                    հաճախորդի անունից և հաճախորդի հաշվին գործարքների
                                                                    կատարում,
                                                                </li>
                                                                <br />
                                                                <li>արժեթղթերի վաճառքների իրականացում,</li>
                                                                <br />
                                                                <li>
                                                                    արժեթղթերի ընթացիկ գների վերաբերյալ
                                                                    տեղեկությունների ներկայացում,
                                                                </li>
                                                                <br />
                                                                <li>
                                                                    արժեթղթերով գործարքների կատարման
                                                                    հանձնարարականների ընդունում և հաղորդում:
                                                                </li>
                                                                <br />
                                                            </ul>
                                                            <div
                                                                className="my-collapsible__content"
                                                                ref={setCollapsibleElement}
                                                            >
                                                                <div className="my-collapsible__content-inner">
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                        adipisicing elit. Amet aperiam asperiores
                                                                        aspernatur consectetur cumque, deleniti, dolor
                                                                        dolores eligendi ex exercitationem itaque iure
                                                                        molestiae neque perferendis quis veritatis
                                                                        voluptatum! A autem beatae cum distinctio eius
                                                                        harum id incidunt inventore itaque magnam
                                                                        magni molestiae natus necessitatibus nihil
                                                                        qui, quos repellat, sequi temporibus. Ab,
                                                                        aliquid at consequuntur deleniti dignissimos
                                                                        eligendi, eum eveniet fuga illo, incidunt
                                                                        ipsum laborum nam neque non nostrum quod
                                                                        suscipit voluptatem. Aperiam enim iure
                                                                        perspiciatis porro praesentium. Laboriosam,
                                                                        magni nobis. Aliquam animi aut consequatur
                                                                        deserunt excepturi, fuga id nam non nostrum,
                                                                        numquam quas quis quos repellat reprehenderit
                                                                        repudiandae tempore ullam!
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
                                            </Fade >
                                        </div>
                                        <div className="col-md-5">
                                            <Fade  right duration={1500} fraction={1}>
                                            <div className="section-img">
                                                <div className="img">
                                                    <Fade   bottom delay={900}>
                                                        <span  className="border"/>
                                                    </Fade>

                                                    <Zoom  delay={900}  duration={1500} fraction={0.5}>
                                                        <img src={Broker} alt="Բրոքերային ծառայություն" />
                                                    </Zoom  >
                                                </div>
                                            </div>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="tab-body">
                                    <div className="cols-sm-2 cols-mb justify-between section-with-img img-to-right">
                                        <div className="col-md-5">
                                            <h2 className="h2">Խորհրդատվական ծառայություն</h2>

                                            <SlideToggle
                                                duration={800}
                                                collapsed
                                                render={({ onToggle, setCollapsibleElement }) => (
                                                    <div className="my-collapsible">
                                                        <strong>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                            adipisicing elit, sed do eiusmod tempor incididunt
                                                            ut labore et dolore
                                                        </strong>
                                                        <p>
                                                            Magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo
                                                        </p>
                                                        <p>
                                                            Consequat. Duis aute irure dolor in reprehenderit
                                                            in voluptate velit esse cillum dolore eu fugiat
                                                            nulla pariatur. Excepteur sint occaecat cupidatat
                                                            non
                                                        </p>
                                                        <p>
                                                            Proident, sunt in culpa qui officia deserunt
                                                            mollit anim id est laborum. Sed ut perspiciatis
                                                            unde omnis iste natus error sit voluptatem
                                                            accusantium doloremque laudantium, totam rem
                                                            aperiam, eaque ipsa quae ab illo inventore
                                                        </p>
                                                        <div
                                                            className="my-collapsible__content"
                                                            ref={setCollapsibleElement}
                                                        >
                                                            <div className="my-collapsible__content-inner">
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur
                                                                    adipisicing elit. Amet aperiam asperiores
                                                                    aspernatur consectetur cumque, deleniti, dolor
                                                                    dolores eligendi ex exercitationem itaque iure
                                                                    molestiae neque perferendis quis veritatis
                                                                    voluptatum! A autem beatae cum distinctio eius
                                                                    harum id incidunt inventore itaque magnam
                                                                    magni molestiae natus necessitatibus nihil
                                                                    qui, quos repellat, sequi temporibus. Ab,
                                                                    aliquid at consequuntur deleniti dignissimos
                                                                    eligendi, eum eveniet fuga illo, incidunt
                                                                    ipsum laborum nam neque non nostrum quod
                                                                    suscipit voluptatem. Aperiam enim iure
                                                                    perspiciatis porro praesentium. Laboriosam,
                                                                    magni nobis. Aliquam animi aut consequatur
                                                                    deserunt excepturi, fuga id nam non nostrum,
                                                                    numquam quas quis quos repellat reprehenderit
                                                                    repudiandae tempore ullam!
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <button
                                                            className="my-collapsible__toggle btn secondary mt-5"
                                                            onClick={() => {
                                                                this.handleXorOpen();
                                                                onToggle();
                                                            }}
                                                        >
                                                            {this.state.Xor}
                                                        </button>
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div className="col-md-5">
                                            <div className="section-img">
                                                <div className="img">
                                                    <img
                                                        src={Consultation}
                                                        alt="Բրոքերային ծառայություն"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="tab-body">
                                    <div className="cols-sm-2 cols-mb justify-between section-with-img img-to-right">
                                        <div className="col-md-5">
                                            <h2 className="h2">Արտարժութային ծառայություն</h2>

                                            <SlideToggle
                                                duration={800}
                                                collapsed
                                                render={({ onToggle, setCollapsibleElement }) => (
                                                    <div className="my-collapsible">
                                                        <strong>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                            adipisicing elit, sed do eiusmod tempor incididunt
                                                            ut labore et dolore
                                                        </strong>
                                                        <p>
                                                            Magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo
                                                        </p>
                                                        <p>
                                                            Consequat. Duis aute irure dolor in reprehenderit
                                                            in voluptate velit esse cillum dolore eu fugiat
                                                            nulla pariatur. Excepteur sint occaecat cupidatat
                                                            non
                                                        </p>
                                                        <p>
                                                            Proident, sunt in culpa qui officia deserunt
                                                            mollit anim id est laborum. Sed ut perspiciatis
                                                            unde omnis iste natus error sit voluptatem
                                                            accusantium doloremque laudantium, totam rem
                                                            aperiam, eaque ipsa quae ab illo inventore
                                                        </p>
                                                        <div
                                                            className="my-collapsible__content"
                                                            ref={setCollapsibleElement}
                                                        >
                                                            <div className="my-collapsible__content-inner">
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur
                                                                    adipisicing elit. Amet aperiam asperiores
                                                                    aspernatur consectetur cumque, deleniti, dolor
                                                                    dolores eligendi ex exercitationem itaque iure
                                                                    molestiae neque perferendis quis veritatis
                                                                    voluptatum! A autem beatae cum distinctio eius
                                                                    harum id incidunt inventore itaque magnam
                                                                    magni molestiae natus necessitatibus nihil
                                                                    qui, quos repellat, sequi temporibus. Ab,
                                                                    aliquid at consequuntur deleniti dignissimos
                                                                    eligendi, eum eveniet fuga illo, incidunt
                                                                    ipsum laborum nam neque non nostrum quod
                                                                    suscipit voluptatem. Aperiam enim iure
                                                                    perspiciatis porro praesentium. Laboriosam,
                                                                    magni nobis. Aliquam animi aut consequatur
                                                                    deserunt excepturi, fuga id nam non nostrum,
                                                                    numquam quas quis quos repellat reprehenderit
                                                                    repudiandae tempore ullam!
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
                                                        </button>
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div className="col-md-5">
                                            <div className="section-img">
                                                <div className="img">
                                                    <img src={Currency} alt="Բրոքերային ծառայություն" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default TabComponent;
