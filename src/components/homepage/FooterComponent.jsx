import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import Call from "../../assets/img/icons/call.svg";
import Envelope from "../../assets/img/icons/envelope.svg";
import Home from "../../assets/img/icons/home.svg";
import Twitter from "../../assets/img/icons/twitter.svg";
import Linkedin from "../../assets/img/icons/linkedin.svg";
import FbSm from "../../assets/img/icons/facebook-small.svg";
import Copyright from "../../assets/img/icons/copyright.svg";
import AMX from "../../assets/img/icons/amx.jpg";
import FHH from "../../assets/img/icons/FHH.jpg";
import CBA from "../../assets/img/icons/CBA.jpg";
import book from "../../assets/img/icons/book.png";

const FooterComponent = props => {
  let date = new Date();
  let dd = 1;
  let mm = date.getMonth() + 1; //January is 0!
  let yyyy = date.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  date = dd + "/" + mm + "/" + yyyy;

  const pStyle = {
    fontSize: "12px",
    textAlign: "center"
  };

  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="cols-xs-3">
            <div className="col-xs-6">
              <ul className="footer-contact">
                <li>
                  <Link to={"/FinStatements"} className="primary-link">
                    <img src={book} alt="զանգերի սպասարկում" />
                    Ֆինանսական հաշվետվություններ
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.cba.am/am/SitePages/Default.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-link"
                  >
                    <img src={CBA} alt="զանգերի սպասարկում" />
                    Կենտրոնական բանկ
                  </a>
                </li>
                <li>
                  <a
                    href="http://cda.am/am"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-link"
                  >
                    <img src={AMX} alt="զանգերի սպասարկում" />
                    Հայաստանի կենտրոնական դեպոզիտարիա
                  </a>
                </li>
                <li>
                  <a
                    href="/finOmbudsman"
                    rel="noopener noreferrer"
                    className="primary-link"
                  >
                    <img src={FHH} alt="զանգերի սպասարկում" />
                    Ֆինանսական համակարգի հաշտարար
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-xs-6">
              <ul className="footer-contact">
                <li>
                  <img src={Call} alt="զանգերի սպասարկում" />
                  <span>+374 11441012</span>
                </li>
                <li>
                  <img src={Home} alt="հասցե" />
                  <span>ՀՀ, ք. Երևան, Գր․ Լուսավորիչ 9</span>
                </li>
                <li>
                  <img src={Envelope} alt="էլ. փոստ" />
                  <span>info@bridgecapital.am</span>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <ul className="footer-social">
                <li>
                  <a href="#">
                    <img src={Twitter} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Linkedin} alt="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={FbSm} alt="facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="cols-sm-3 align-center">
            <div className="col-sm-3">
              <Link to={`/`} className="footer-logo">
                <img src={logo} alt="Բրիդջ կապիտալ" />
              </Link>
            </div>
            <div className="col-sm-5">
              <p className="text-sm-right text-xs-center">
                <img src={Copyright} alt="Բրիդջ կապիտալ" /> Բրիդջ կապիտալ, 2019:
                Բոլոր իրավունքները պաշտպանված են:
              </p>
            </div>
            <div className="col-sm-4">
              <p className="text-sm-right text-xs-center">
                Էջը թարմացվել է` {date}
              </p>
            </div>
          </div>
        </div>
        <p style={pStyle}>
          Բրիդջ Կապիտալ ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային
          կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության
          ստույգության և արժանահավատության,այնտեղ տեղադրված գովազդների, այդ
          կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների
          համար:
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
