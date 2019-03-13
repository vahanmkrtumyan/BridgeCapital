import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class BannerComponent extends Component {
  render() {
    const pStyle = {
      fontSize: "20px",
      lineHeight: 1.5
    };

    return (
      <React.Fragment>
        <div className="banner">
          <div className="container">
            <Fade delay={300} cascade>
              <div className="banner-inner">
                <h1 className="h1">
                  ՈՂՋՈՒՅՆ <span>ՆԵՐԴՐՈՂ</span>
                </h1>
                <p >
                  <span>Բրիդջ Կապիտալը </span> ներդրումային ընկերություն է, որն
                  իր հաճախորդներին տրամադրում է միջնորդական ծառայություններ
                  տեղական և արտասահմանյան բորսաներում ցուցակված արժեթղթերի գծով,
                  մատուցում է մասնագիտացված խորհրդատվական ծառայություններ,
                  տրամադրում է հասանելիություն մի շարք ճանաչված առևտրային
                  հարթակների:
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BannerComponent;
