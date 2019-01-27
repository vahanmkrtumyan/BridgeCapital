
import React from 'react';
import Settings from "../../assets/img/section-img/settings.png";

const SettingsComponent = () => {

    return (
        <section className="section">
            <div className="container">
                <div className="cols-sm-2 justify-between section-with-img">
                    <div className="col-md-5">
                        <div className="section-img">
                            <div className="img">
                                <img src={Settings} alt="Բրոքերային ծառայություն"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h2 className="h2">Կարգավորումներ</h2>
                        <div>
                            <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</strong>
                            <p>Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                            <p>Consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                            <p>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                        </div>
                        <button className='btn secondary mt-5'>Կարդալ ավելին</button>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default SettingsComponent;
