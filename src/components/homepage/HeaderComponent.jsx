import React, {Component} from 'react';
import logo from '../../assets/img/logo.svg'
import Fade from 'react-reveal/Fade';


class HeaderComponent extends Component {
    render() {
        return (
            <header className="">
                <div className="container cols-sm-2 align-center">
                    <Fade cascade>
                        <div className="col-sm-4">
                            <a href="#" className="logo">
                                <img src={ logo } alt="bridge capital"/>
                                {/*<p>Bridge Capital</p>*/}
                            </a>
                        </div>
                        <div className="col-sm-8">
                            <div className="header-nav">
                                <ul className="menu">
                                    <li className="active"><a href="#">Ծառայություններ</a></li>
                                    <li><a href="#">Կարգավորումներ</a></li>
                                    <li><a href="#">Մեր մասին</a></li>
                                    <li><a href="#">Հետադարձ կապ</a></li>
                                    <li className="lang rus"><a href="#">русский</a></li>
                                </ul>
                            </div>
                        </div>
                    </Fade>

                </div>
            </header>
        );
    }
}

export default HeaderComponent;
