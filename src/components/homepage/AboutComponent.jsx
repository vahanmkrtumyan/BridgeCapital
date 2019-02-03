import React from 'react';
import About from "../../assets/img/section-img/about-us.png";
import { SlideToggle } from "react-slide-toggle";

const AboutComponent = () => {

    return (
        <section className="section grey">
            <div className="container">
                <div className="cols-md-2 cols-mb justify-between section-with-img img-to-right">
                    <div className="col-md-5">
                        <h2 className="h2">Մեր մասին</h2>
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
                                <img src={About} alt="Բրոքերային ծառայություն"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default AboutComponent;
