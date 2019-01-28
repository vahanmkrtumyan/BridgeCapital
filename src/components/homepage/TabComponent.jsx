import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Broker from '../../assets/img/section-img/broker.png'
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
                                            <div>
                                                <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</strong>
                                                <p>Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                                <p>Consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                                                <p>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                                            </div>
                                            <button className='btn secondary mt-5'>Կարդալ ավելին</button>
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
                                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam cupiditate deserunt dolor eius, error expedita facere modi natus nihil nobis non numquam obcaecati tempora totam ullam voluptatem voluptatibus voluptatum. Accusamus adipisci aliquid aut consequatur dolores, ex exercitationem expedita illum inventore ipsam itaque maiores mollitia odio pariatur placeat possimus, praesentium suscipit. Ab ad beatae dolorem ea mollitia nisi, nobis odit placeat quaerat quasi quo repellat, voluptatem voluptatum. Aut ea eaque eum exercitationem laboriosam molestias perspiciatis tempora unde. Ad alias at culpa dolorem doloremque dolores eius enim facilis ipsam iste laudantium natus, neque nostrum perspiciatis quod ullam ut voluptates? Fugiat, vitae.</h2>
                                </div>
                            </TabPanel>
                            <TabPanel >
                                <div className="tab-body">
                                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam cupiditate deserunt dolor eius, error expedita facere modi natus nihil nobis non numquam obcaecati tempora totam ullam voluptatem voluptatibus voluptatum. Accusamus adipisci aliquid aut consequatur dolores, ex exercitationem expedita illum inventore ipsam itaque maiores mollitia odio pariatur placeat possimus, praesentium suscipit. Ab ad beatae dolorem ea mollitia nisi, nobis odit placeat quaerat quasi quo repellat, voluptatem voluptatum. Aut ea eaque eum exercitationem laboriosam molestias perspiciatis tempora unde. Ad alias at culpa dolorem doloremque dolores eius enim facilis ipsam iste laudantium natus, neque nostrum perspiciatis quod ullam ut voluptates? Fugiat, vitae.</h2>
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
