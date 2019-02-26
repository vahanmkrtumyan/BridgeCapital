import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Owners extends Component {
  render() {
    return (
      <React.Fragment>
        <Fade left duration={1000} fraction={1}>
          <section className="section section-contact">
            <div className="container">
              <h2 className="h2">Բաժնետերեր և ներդրողներ</h2>
              <div className="contact-content">
                <p>
                  Հաշվի առնելով այն հանգամանքը, որ Բրիդջ Կապիտալ ՓԲԸ-ն
                  արժեթղթերի հրապարակային տեղաբաշխում չի իրականացնում և չունի
                  փոքր մասնակցություն ունեցող մասնակիցներ՝ Ընկերությունը չի
                  հրապարակում ՀՀ կենտրոնական բանկի խորհրդի 2009 թվականի հունիսի
                  2-ի թիվ 166-Ն որոշմամբ հաստատված կանոնակարգ 8/03-ի 25-րդ կետի
                  3-րդ ենթակետում նշված տեղեկատվությունը:
                </p>
                <p>
                  Բրիդջ Կապիտալ ՓԲԸ միակ մասնակիցը հանդիսանում է Նարեկ
                  Նարգիզյանը:
                </p>
              </div>
            </div>
          </section>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Owners;
