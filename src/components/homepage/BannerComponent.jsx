import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class BannerComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <div className="container">
            <Fade delay={300} cascade>
              <div className="banner-inner">
              <h2>Կայքը գտնվում է մշակման փուլում։</h2>
                <h1 className="h1">
                  ՈՂՋՈՒՅՆ <span>ՆԵՐԴՐՈՂ</span>
                </h1>
                <p>
                  <span>Բրիդջ Կապիտալը </span> ներդրումային ընկերություն է, որի
                  առաքելությունն է մատուցել իր հաճախորդներին որակյալ և մշտապես
                  հասանելի ներդրումային ծառայություններ,  ապահովել կայուն,
                  զարգացող և երկարաժամկետ գործընկերային հարաբերություններ:
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
