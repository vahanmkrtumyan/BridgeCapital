import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/img/logo.png";
import First from "../assets/img/image1.png";
import Second from "../assets/img/image2.png";
import Third from "../assets/img/image3.png";
import Forth from "../assets/img/image4.png";
import Abouts from "../assets/img/about.jpg";
import Quality from "../assets/img/quality.jpg";
import Plogo1 from "../assets/img/partner-logo1.png";
import Plogo2 from "../assets/img/logo2.png";
import Plogo3 from "../assets/img/logo3.png";
import Plogo4 from "../assets/img/logo4.png";
import Plogo5 from "../assets/img/logo5.png";
import Plogo6 from "../assets/img/logo6.png";
import Phone from "../assets/img/phone-call.png";
import Location from "../assets/img/location.png";
import Mail from "../assets/img/mail.png";
import FooterLogo from "../assets/img/footer-logo.png";

const Homepage = () => {
  const [activeClass, setActiveClass] = useState(1);

  const scrollToRef = ref =>
    window.scrollTo({
      top: ref.current.offsetTop - 140,
      left: 0,
      behavior: "smooth"
    });

  //window.scrollTo(0, ref.current.offsetTop - 50);
  const myRef = useRef(null);
  const About = useRef(null);
  const Contact = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const executeScroll1 = () => scrollToRef(About);
  const executeScroll2 = () => scrollToRef(Contact);

  return (
    <React.Fragment>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "white"
        }}
      >
        <div className="container">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <nav className="header-menu">
            <ul>
              <li>
                <a style={{ cursor: "pointer" }} onClick={executeScroll}>
                  услуги
                </a>
              </li>
              <li>
                <a style={{ cursor: "pointer" }} onClick={executeScroll1}>
                  О компании
                </a>
              </li>

              <li>
                <a style={{ cursor: "pointer" }} onClick={executeScroll2}>
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="banner">
        <div className="content">
          <h3 className="color-secondary">ПОЛНЫЙ СПЕКТР УСЛУГ ПО</h3>
          <h1>ИМПОРТУ И ЭКСПОРТУ</h1>
          <p>
            Один из лидеров рынка ЕАЭС по сорсингу и поставке огромного спектра
            товаров
          </p>
        </div>
      </section>
      <section className="services" ref={myRef}>
        <button className="btn with-img btn-lg primary">
          услуги <img src="assets/img/arrow-right.svg" alt="" />
        </button>
        <div className="container">
          <a
            href="#"
            className="service-card"
            style={{ backgroundImage: `url(${First})` }}
          >
            <p>Проектно-конструкторские работы</p>
          </a>
          <a
            href="#"
            className="service-card"
            style={{ backgroundImage: `url(${Second})` }}
          >
            <p>Изготовление оборудования по чертежам</p>
          </a>
          <a
            href="#"
            className="service-card"
            style={{ backgroundImage: `url(${Third})` }}
          >
            <p>Поставка готового технологического оборудования</p>
          </a>
          <a
            href="#"
            className="service-card"
            style={{ backgroundImage: `url(${Forth})` }}
          >
            <p>другие услуги</p>
          </a>
        </div>
      </section>

      <section className="about-company">
        <div className="container">
          <h2 className="uppercase color-text" ref={About}>
            О компании
          </h2>
          <div className="text-with-img img-right">
            <div className="section-text">
              <p>
                Производственно-инжиниринговая компания «ЗенонСтройИнвест»
                занимается оказанием инжиниринговых услуг по подборке и поставке
                промышленного оборудования и промышленных изделий любой
                сложности для средних и крупных предприятий «под ключ» или на
                отдельные части полного технологического цикла производства,
                используемого в машиностроительной, нефтегазохимической отрасли
                и электроэнергетики.Мы специализируемся на решении сложных
                технических задач, внедрении передовых технологий и имеем
                давние партнерские соглашения с российскими и западными
                производителями оборудования, научно-исследовательскими
                организациями и испытательными центрами. В сложившихся на
                сегодняшний день политических условиях, мы осуществляем
                поиск, подбор и поставку аналогов зарубежного оборудования,
                находящегося под санкциями на ввоз в РФ.
              </p>
              <button className="btn outline btn-sm">далее</button>
            </div>
            <div
              className="section-img"
              style={{ backgroundImage: `url(${Abouts})` }}
            />
          </div>
        </div>
      </section>

      <section className="quality">
        <div className="container">
          <h2 className="uppercase color-text">Качество и Сертификаты</h2>
          <div className="text-with-img img-left">
            <div className="section-text">
              <p>
                Компания «ЗенонСтройИнвест» уделяет особое внимание контролю
                качества выпускаемой продукции, имеем современную систему
                менеджмента качества, постоянно внедряем новые стандарты и
                программы контроля качества, повышаем уровень квалификации
                сотрудников. На всю продукцию предоставляется гарантийный срок,
                по истечении которого наш сервисный центр выполняет пост
                гарантийное обслуживание. Производство имеет все необходимые
                лицензии, разрешения, сертификаты...
              </p>
              <button className="btn outline btn-sm">далее</button>
            </div>
            <div
              className="section-img"
              style={{ backgroundImage: `url(${Quality})` }}
            />
          </div>
        </div>
      </section>

      <section className="partners py-80">
        <div className="container">
          <h2 className="text-center uppercase color-text pb-30">Партнеры</h2>
          <p>
            Компания «ЗенонСтройИнвест» уделяет особое внимание контролю
            качества выпускаемой продукции, имеем современную систему
            менеджмента качества, постоянно внедряем
          </p>
          <div className="partners-logos pt-50">
            <img src={Plogo1} alt="" />
            <img src={Plogo2} alt="" />
            <img src={Plogo3} alt="" />
            <img src={Plogo4} alt="" />
            <img src={Plogo5} alt="" />
            <img src={Plogo6} alt="" />
          </div>
        </div>
      </section>

      <section className="contacts" ref={Contact}>
        <div className="contact-title">
          <h2 className="text-center uppercase color-text pb-30">Контакты</h2>
          <p>
            Компания «ЗенонСтройИнвест» уделяет особое внимание контролю
            качества выпускаемой продукции, имеем современную систему
            менеджмента качества, постоянно внедряем
          </p>
        </div>

        <div className="contact-social">
          <ul>
            <li>
              <img src={Phone} alt="" />
              <p>+374 11441014</p>
            </li>
            <li>
              <img src={Location} alt="" />
              <p>г. Ереван В. Вагаршян 12а</p>
            </li>
            <li>
              <img src={Mail} alt="" />
              <p>info@zenonstroyinvest.am</p>
            </li>
          </ul>
        </div>
        <div className="map" />
        <div className="contact-form">
          <p className="color-white text-center pb-30">
            Компания «ЗенонСтройИнвест» уделяет особое внимание контролю
          </p>
          <form action="">
            <div className="form-inputs pb-25">
              <div>
                <input type="text" placeholder="имя" />
              </div>
              <div>
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="письмо" />

            <div className="text-right pt-30">
              <button className="btn  btn-sm primary">послать</button>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="top-footer">
          <div className="container">
            <div className="top-footer-cols">
              <div>
                <h5>ПЛАТФОРМА</h5>
                <ul>
                  <li>
                    <a href="#">Услуги</a>
                  </li>
                  <li>
                    <a href="#">О компании</a>
                  </li>
                  <li>
                    <a href="#">проекты</a>
                  </li>
                  <li>
                    <a href="#">Партнеры</a>
                  </li>
                  <li>
                    <a href="#">Качество и Сертификаты</a>
                  </li>
                  <li>
                    <a href="#">Контакты</a>
                  </li>
                  <li>
                    <a href="#">In English</a>
                  </li>
                </ul>
              </div>
              <div>
                <h5>Услуги</h5>
                <ul>
                  <li>
                    <a href="#">
                      Поставка готового технологического оборудования
                    </a>
                  </li>
                  <li>
                    <a href="#">Другие услуг</a>
                  </li>
                  <li>
                    <a href="#">Изготовление оборудования по чертежам</a>
                  </li>
                </ul>
              </div>
              <div>
                <h5>Партнеры</h5>
                <ul>
                  <li>
                    <a href="#">АО «Газпром газэнергосеть»</a>
                  </li>
                  <li>
                    <a href="#">ОООО «Газпром межрегионгаз»</a>
                  </li>
                  <li>
                    <a href="#">ООО «Газпром газомоторное топливо»</a>
                  </li>
                  <li>
                    <a href="#">ООО «Газпром энергохолдинг»</a>
                  </li>
                  <li>
                    <a href="#">ПАО «МОЭК».</a>
                  </li>
                  <li>
                    <a href="#">Министерство промышленности и торговли РФ</a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center pt-20">
              © Zenon-stroyinvest, 2019. Все права защищены.
            </p>
          </div>
        </div>
        <div className="bottom-footer text-center">
          <a href="#">
            <img src={FooterLogo} alt="" />
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Homepage;

// let changeClass = number => {
//   this.setState({ activeClass: number });
// };

// function add_class_on_scroll() {
//   scrollTop.classList.add("show");
// }

// function remove_class_on_scroll() {
//   scrollTop.classList.remove("show");
// }

// window.addEventListener("scroll", function() {
//   //Here you forgot to update the value
//   scrollpos = window.scrollY;

//   if (scrollpos > 500) {
//     add_class_on_scroll();
//   } else {
//     remove_class_on_scroll();
//   }

//   if (scrollpos < tabs - 400) {
//     changeClass(1);
//   }

//   if (scrollpos > tabs - 100 && scrollpos < tabsBot) {
//     changeClass(2);
//   }

//   if (scrollpos > contacts && scrollpos < contactsBot) {
//     changeClass(3);
//   }
// });
