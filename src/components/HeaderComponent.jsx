import React, {Component} from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <header className="">
                <div className="container cols-sm-2">
                    <div className="col-sm-4">
                        <a href="#">
                            {/*<img src="" alt="bridge capital"/>*/}
                            <p>Bridge Capital</p>
                        </a>
                    </div>
                    <div className="col-sm-8">
                        <ul className="header-nav">
                            <li><a href="#">Ծառայություններ</a></li>
                            <li><a href="#">Կարգավորումներ</a></li>
                            <li><a href="#">Մեր մասին</a></li>
                            <li><a href="#">Հետադարձ կապ</a></li>
                        </ul>
                    </div>

                </div>
            </header>
        );
    }
}

export default HeaderComponent;
