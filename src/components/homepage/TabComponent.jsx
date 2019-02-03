import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Broker from '../../assets/img/section-img/broker.png';
import Currency from '../../assets/img/section-img/arjuyt.png';
import Consultation from '../../assets/img/section-img/xohrdatvakanNkar.png';
import { SlideToggle } from "react-slide-toggle";
import Fade from 'react-reveal/Fade';
import About from "../../assets/img/section-img/about-us.png";

class TabComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section-tab grey">
                    <div className="container">
                        <Tabs className="tab">
                            <TabList className="tab-header">
                                <Tab className="active">
                                    <a>Բրոքերային</a>
                                </Tab>
                                <Tab>
                                    <a>Խորհրդատվական</a>
                                </Tab>
                                <Tab>
                                    <a>Արտարժույթային</a>
                                </Tab>
                            </TabList>
                            <TabPanel >
                                <div className="tab-body">
                                    <div className="cols-sm-2 justify-between section-with-img img-to-right">
                                        <div className="col-md-5">
                                            <h2 className="h2">Բրոքերային ծառայություն</h2>

                                            <SlideToggle
                                                duration={800}
                                                collapsed
                                                render={({ onToggle, setCollapsibleElement }) => (
                                                    <div className="my-collapsible">
                                                            <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</strong>
                                                            <p>Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                                            <p>Consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                                                            <p>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                                                            <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                                                <div className="my-collapsible__content-inner">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam asperiores aspernatur consectetur cumque, deleniti, dolor dolores eligendi ex exercitationem itaque iure molestiae neque perferendis quis veritatis voluptatum! A autem beatae cum distinctio eius harum id incidunt inventore itaque magnam magni molestiae natus necessitatibus nihil qui, quos repellat, sequi temporibus. Ab, aliquid at consequuntur deleniti dignissimos eligendi, eum eveniet fuga illo, incidunt ipsum laborum nam neque non nostrum quod suscipit voluptatem. Aperiam enim iure perspiciatis porro praesentium. Laboriosam, magni nobis. Aliquam animi aut consequatur deserunt excepturi, fuga id nam non nostrum, numquam quas quis quos repellat reprehenderit repudiandae tempore ullam!</p>
                                                                </div>
                                                            </div>
                                                        <button className='my-collapsible__toggle btn secondary mt-5' onClick={onToggle}>Կարդալ ավելին</button>
                                                    </div>
                                                )}
                                            />

                                        </div>
                                        <div className="col-md-5">
                                            <div className="section-img">
                                                <div className="img">
                                                    <img src={Broker} alt="Բրոքերային ծառայություն"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel >
                                <div className="tab-body">
                                    <div className="cols-sm-2 justify-between section-with-img img-to-right">
                                        <div className="col-md-5">
                                            <h2 className="h2">Խորհրդատվական ծառայություն</h2>

                                            <SlideToggle
                                                duration={800}
                                                collapsed
                                                render={({ onToggle, setCollapsibleElement }) => (
                                                    <div className="my-collapsible">
                                                            <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</strong>
                                                            <p>Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                                            <p>Consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                                                            <p>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                                                            <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                                                <div className="my-collapsible__content-inner">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam asperiores aspernatur consectetur cumque, deleniti, dolor dolores eligendi ex exercitationem itaque iure molestiae neque perferendis quis veritatis voluptatum! A autem beatae cum distinctio eius harum id incidunt inventore itaque magnam magni molestiae natus necessitatibus nihil qui, quos repellat, sequi temporibus. Ab, aliquid at consequuntur deleniti dignissimos eligendi, eum eveniet fuga illo, incidunt ipsum laborum nam neque non nostrum quod suscipit voluptatem. Aperiam enim iure perspiciatis porro praesentium. Laboriosam, magni nobis. Aliquam animi aut consequatur deserunt excepturi, fuga id nam non nostrum, numquam quas quis quos repellat reprehenderit repudiandae tempore ullam!</p>
                                                                </div>
                                                            </div>
                                                        <button className='my-collapsible__toggle btn secondary mt-5' onClick={onToggle}>Կարդալ ավելին</button>
                                                    </div>
                                                )}
                                            />

                                        </div>
                                        <div className="col-md-5">
                                            <div className="section-img">
                                                <div className="img">
                                                    <img src={Consultation} alt="Բրոքերային ծառայություն"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel >
                                <div className="tab-body">
                                    <div className="cols-sm-2 justify-between section-with-img img-to-right">
                                        <div className="col-md-5">
                                            <h2 className="h2">Արտարժութային ծառայություն</h2>

                                            <SlideToggle
                                                duration={800}
                                                collapsed
                                                render={({ onToggle, setCollapsibleElement }) => (
                                                    <div className="my-collapsible">
                                                            <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</strong>
                                                            <p>Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                                            <p>Consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                                                            <p>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                                                            <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                                                <div className="my-collapsible__content-inner">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam asperiores aspernatur consectetur cumque, deleniti, dolor dolores eligendi ex exercitationem itaque iure molestiae neque perferendis quis veritatis voluptatum! A autem beatae cum distinctio eius harum id incidunt inventore itaque magnam magni molestiae natus necessitatibus nihil qui, quos repellat, sequi temporibus. Ab, aliquid at consequuntur deleniti dignissimos eligendi, eum eveniet fuga illo, incidunt ipsum laborum nam neque non nostrum quod suscipit voluptatem. Aperiam enim iure perspiciatis porro praesentium. Laboriosam, magni nobis. Aliquam animi aut consequatur deserunt excepturi, fuga id nam non nostrum, numquam quas quis quos repellat reprehenderit repudiandae tempore ullam!</p>
                                                                </div>
                                                            </div>
                                                        <button className='my-collapsible__toggle btn secondary mt-5' onClick={onToggle}>Կարդալ ավելին</button>
                                                    </div>
                                                )}
                                            />

                                        </div>
                                        <div className="col-md-5">
                                            <div className="section-img">
                                                <div className="img">
                                                    <img src={Currency} alt="Բրոքերային ծառայություն"/>
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
