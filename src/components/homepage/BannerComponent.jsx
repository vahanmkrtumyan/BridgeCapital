import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class BannerComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="banner">
                    <div className="container">
                        <Fade cascade>
                            <div className="banner-inner">

                                <h1>ՈՂՋՈՒՅՆ <span>ՆԵՐԴՐՈՂ</span></h1>
                                <p><span>ԲՐԻԴՋ ԿԱՊԻՏԱԼԸ </span> ներդրումային ընկերություն է, որի նպատակը բարձրակարգ ծառայությունների մատուցումն է</p>

                            </div>
                        </Fade>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BannerComponent;

