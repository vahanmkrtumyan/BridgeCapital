import React, { Component } from "react";
import FooterComponent from "./homepage/FooterComponent";
import { SlideToggle } from "react-slide-toggle";
import { Link } from "react-router-dom";
import InlineSVG from "svg-inline-react";
import aboutBanner from "../assets/img/banner/about-banner.jpg";
import scheme from "../assets/img/scheme.png";
import pdf from "../assets/img/icons/pdf.svg";
import staffImg from "../assets/img/section-img/about-us.png";
import scrollToComponent from "react-scroll-to-component";
import Modal from "react-responsive-modal";


const SIDE_LABELS = [
    'Ընդհանուր տեղեկություններ',
    'Առաքելությունը և նպատակները',
    'Կազմակերպական կառուցվածքը',
    'Հիմնադիր փաստաթղթեր',
    'Նշանակալից մասնակիցներ',
    'Ղեկավարներ և անձնակազմ'
];

class AboutComponent extends Component {
  state = {
    activeClass: 1,
    open: false,
    Stepan: false,
    Ani: false,
    Vardan: false
  };

  onOpenModal = anun => {
    this.setState({ [anun]: !this.state.Stepan }, () =>
      console.log(this.state.Stepan)
    );
  };

  onCloseModal = () => {
    this.setState({ Stepan: false, Ani: false, Vardan: false });
  };

  onClickTab = (index) => {
    scrollToComponent(this['component' + index], {
      offset: -20,
      align: "top",
      duration: 1000
    });
    this.setState({ activeClass: index });
  };

  render() {
    const svgSource = `<svg width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 618.5 96.5" style="enable-background:new 0 0 618.5 96.5; fill:#282828" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFFFFF;}
</style>
<path class="st0" d="M168,19.2C150.8,7.1,129.6,0,106.8,0C51.3,0,5.8,42.4,0.5,96.5h36c3.3-13.3,9.1-25.6,16.9-36.4v27.8h13.3V44.8
	c4.1-3.9,8.6-7.5,13.3-10.7v45.7h13.3V26.3c4.3-2.1,8.7-3.9,13.3-5.4v51.2H120V17.5c3.5-0.6,7.1-0.9,10.8-0.9
	c13.4,0,25.9,4.1,36.2,11.2c-7.7-3.3-16.2-5.1-25-5.1c-2.8,0-5.6,0.2-8.3,0.5c0.4,0.2,0.9,0.3,1.3,0.5c18.7,5.3,35.4,15.6,48.4,29.3
	h15.8C191.4,39.6,180.8,28.1,168,19.2z M10.4,87.9c4-20.6,14.6-39.6,30.2-53.8C58.7,17.5,82.3,8.4,106.9,8.4c3.8,0,7.6,0.2,11.4,0.7
	c-5.6,1.1-11.2,2.6-16.6,4.5c-11.9,4.2-23,10.4-33,18.3C50.7,46.2,37,66,30.2,88H10.4V87.9z"/>
<g>
	<path class="st0" d="M226.5,49.9c1.4,0.8,2.6,1.9,3.5,3.4s1.3,3.2,1.3,5.1c0,1.4-0.3,2.8-0.8,4.1c-0.6,1.3-1.3,2.4-2.3,3.4
		c-0.9,1-2.1,1.7-3.3,2.3c-1.3,0.6-2.6,0.8-4.1,0.8h-14V33.1h13.7c1.3,0,2.5,0.3,3.7,0.8s2.2,1.2,3.1,2.1c0.9,0.9,1.6,1.9,2.1,3.1
		c0.5,1.2,0.8,2.4,0.8,3.8c0,0.8-0.1,1.6-0.3,2.3c-0.2,0.7-0.5,1.3-0.8,1.9c-0.3,0.6-0.7,1.1-1.2,1.6
		C227.4,49.1,227,49.5,226.5,49.9z M212,47.9h7.6c0.7,0,1.4-0.1,2-0.4c0.6-0.3,1.2-0.6,1.6-1.1c0.5-0.5,0.8-1,1.1-1.6
		c0.3-0.6,0.4-1.3,0.4-2c0-1.5-0.5-2.7-1.5-3.7s-2.2-1.5-3.6-1.5H212V47.9z M219.9,64.3c0.8,0,1.6-0.2,2.3-0.5
		c0.7-0.3,1.3-0.8,1.9-1.3c0.5-0.5,1-1.2,1.3-1.9s0.5-1.5,0.5-2.3s-0.2-1.6-0.5-2.3s-0.7-1.3-1.3-1.9c-0.5-0.5-1.2-1-1.9-1.3
		c-0.7-0.3-1.5-0.5-2.3-0.5H212v11.9h7.9V64.3z"/>
	<path class="st0" d="M263.8,49.3c-0.5,1.5-1.1,2.8-2,4s-2,2.2-3.3,3c-0.1,0.1-0.1,0.1-0.2,0.1s-0.2,0.1-0.2,0.1l6.3,12.4h-5.5
		l-5.5-10.8c-0.4,0.1-0.8,0.1-1.2,0.1c-0.4,0-0.8,0-1.3,0h-6.4v10.6H239v-36h11.7c1.5,0,2.8,0.2,4.1,0.6c1.3,0.4,2.5,0.9,3.6,1.5
		c2.6,1.7,4.4,4,5.3,7c0,0.2,0.1,0.3,0.1,0.4c0,0.1,0.1,0.3,0.1,0.4v0.2c0.1,0.2,0.1,0.3,0.1,0.5s0,0.4,0.1,0.6l0,0
		c0,0.2,0,0.4,0,0.6s0,0.4,0,0.6l0,0v0.1c0,0.2,0,0.4,0,0.6s0,0.4,0,0.6v0.1c0,0.2-0.1,0.4-0.1,0.6c0,0.2-0.1,0.4-0.1,0.6V48
		C263.8,48.7,263.8,49,263.8,49.3z M251.3,53.7c1.1,0,2.1-0.2,3-0.7s1.7-1.1,2.3-1.8c0.7-0.8,1.2-1.6,1.6-2.6s0.6-2,0.6-3
		s-0.2-2-0.6-3s-0.9-1.8-1.6-2.6c-0.7-0.7-1.4-1.3-2.3-1.8s-1.9-0.7-3-0.7h-7v16.2L251.3,53.7L251.3,53.7z"/>
	<path class="st0" d="M271.9,33h5.2v35.9h-5.2V33z"/>
	<path class="st0" d="M297.5,33c2.4,0,4.7,0.5,6.8,1.4c2.1,0.9,3.9,2.2,5.5,3.9c1.6,1.6,2.8,3.5,3.7,5.7c0.9,2.2,1.4,4.5,1.4,7
		s-0.4,4.8-1.3,7s-2.1,4.1-3.7,5.7c-1.6,1.6-3.4,2.9-5.5,3.8c-2.1,0.9-4.4,1.4-6.9,1.4H285V33H297.5z M296.9,64.3
		c1.8,0,3.5-0.4,5-1.1c1.5-0.7,2.9-1.7,4-2.9s2-2.6,2.6-4.2c0.6-1.6,0.9-3.3,0.9-5.2c0-1.8-0.3-3.6-0.9-5.2c-0.6-1.6-1.5-3-2.6-4.2
		s-2.5-2.2-4-2.9s-3.2-1.1-5-1.1h-6.7v26.7L296.9,64.3L296.9,64.3z"/>
	<path class="st0" d="M355.2,50c0,0.3,0,0.7,0,1c0,0.5,0,0.9,0,1.3c0,0.4-0.1,0.8-0.1,1.3c-0.3,2.2-1,4.2-2,6.1
		c-1,1.9-2.3,3.5-3.9,4.9s-3.3,2.5-5.3,3.2c-2,0.8-4.1,1.2-6.4,1.2c-2.5,0-4.8-0.5-6.9-1.4c-2.2-0.9-4.1-2.2-5.7-3.8
		s-2.9-3.5-3.8-5.7s-1.4-4.5-1.4-7s0.5-4.8,1.4-7s2.2-4.1,3.8-5.7c1.6-1.6,3.5-2.9,5.7-3.8c2.2-0.9,4.5-1.4,6.9-1.4
		c1.9,0,3.6,0.3,5.3,0.8c1.7,0.5,3.2,1.3,4.6,2.3s2.7,2.1,3.7,3.5c1.1,1.4,2,2.8,2.7,4.4h-6c-1.1-1.8-2.5-3.3-4.3-4.4
		c-1.8-1.1-3.8-1.7-6-1.7c-1.7,0-3.3,0.3-4.8,1s-2.8,1.6-3.9,2.8s-2,2.5-2.6,4.1c-0.7,1.6-1,3.3-1,5c0,1.8,0.3,3.5,1,5
		c0.7,1.6,1.5,2.9,2.6,4.1c1.1,1.2,2.4,2.1,3.9,2.8s3.1,1,4.8,1c1.5,0,2.9-0.3,4.2-0.8c1.3-0.5,2.5-1.2,3.6-2.2c1.1-0.9,2-2,2.7-3.3
		s1.2-2.6,1.5-4.1H337v-4.6h12.6h5.5C355.1,49.3,355.1,49.7,355.2,50z"/>
	<path class="st0" d="M368.1,63.7h16v5.1h-21.2V33h20.8v5h-15.6v5.7v2.9v3.6h14.1v4.9h-14.1L368.1,63.7L368.1,63.7z"/>
	<path class="st0" d="M434.1,64c2.1,0,4-0.5,5.8-1.5c1.7-1,3.2-2.3,4.3-4l4.3,3.2c-1.6,2.2-3.7,4-6.2,5.3s-5.2,2-8.2,2
		c-2.4,0-4.8-0.5-6.9-1.4c-2.2-0.9-4-2.2-5.6-3.8s-2.9-3.5-3.8-5.7c-0.9-2.2-1.4-4.5-1.4-7s0.5-4.8,1.4-7s2.2-4.1,3.8-5.7
		c1.6-1.6,3.5-2.9,5.6-3.8c2.2-0.9,4.5-1.4,6.9-1.4c3,0,5.7,0.7,8.2,2s4.5,3.1,6.2,5.3l-4.3,3.2c-1.1-1.7-2.5-3-4.3-4
		c-1.7-1-3.7-1.5-5.8-1.5c-1.7,0-3.3,0.3-4.8,1s-2.8,1.6-3.9,2.8c-1.1,1.2-2,2.5-2.6,4.1c-0.7,1.6-1,3.3-1,5c0,1.8,0.3,3.5,1,5
		c0.7,1.6,1.5,2.9,2.6,4.1c1.1,1.2,2.4,2.1,3.9,2.8C430.8,63.6,432.5,64,434.1,64z"/>
	<path class="st0" d="M452.2,68.9L467,33l14.7,35.9h-5.3l-1.1-2.8h-16.4l-1.1,2.8H452.2z M460.5,61.4h12.8l-6.4-16.5L460.5,61.4z"/>
	<path class="st0" d="M514.5,44.4c0,0.2,0.1,0.4,0.1,0.6s0,0.4,0,0.6l0,0l0,0c0,0.2,0,0.4,0,0.6s0,0.4-0.1,0.6l0,0l-0.1,1.2
		c0,0,0,0.1,0,0.2c0,0.2-0.1,0.3-0.1,0.4c0,0.1-0.1,0.3-0.1,0.4c-0.5,1.5-1.1,2.8-2,4s-2,2.2-3.3,3c-1.1,0.7-2.3,1.2-3.6,1.5
		c-1.3,0.4-2.7,0.6-4.2,0.6h-6.4v10.6h-5.2v-36h11.7c2.9,0,5.5,0.7,7.7,2.1c1.3,0.8,2.4,1.8,3.3,3c0.9,1.2,1.6,2.5,2,4
		c0.1,0.4,0.2,0.7,0.2,0.9c0,0.1,0,0.2,0,0.2c0,0.2,0.1,0.4,0.1,0.6C514.5,43.9,514.5,44.1,514.5,44.4L514.5,44.4z M501.6,53.7
		c1.1,0,2.1-0.2,3-0.7s1.7-1.1,2.4-1.8c0.7-0.8,1.2-1.6,1.6-2.6c0.4-1,0.6-2,0.6-3s-0.2-2-0.6-3c-0.4-1-0.9-1.8-1.6-2.6
		c-0.7-0.8-1.5-1.4-2.4-1.8c-0.9-0.5-1.9-0.7-3-0.7h-7v16.2L501.6,53.7L501.6,53.7z"/>
	<path class="st0" d="M522.3,33h5.2v35.9h-5.2V33z"/>
	<path class="st0" d="M535.2,33h22.9v5h-8.9v30.8H544V38h-8.9v-5H535.2z"/>
	<path class="st0" d="M561,68.9L575.8,33l14.7,35.9H585l-1.1-2.8h-16.4l-1.1,2.8H561z M569.3,61.4h12.8l-6.4-16.5L569.3,61.4z"/>
	<path class="st0" d="M603.3,63.8H618v5.1h-19.9v-36h5.2V63.8z"/>
</g>
</svg>`;
    const { open } = this.state;
    return (
      <div className="about-page">
        <div
          className="narrow-banner"
          style={{ backgroundImage: "url(" + aboutBanner + ")" }}
        >
          <div className="container">
            <header className="header-abs">
              <Link to={`/`} className="logo">
                <InlineSVG src={svgSource} />
              </Link>
            </header>
            <div className="inner">
              <h1 className="h1">մեր մասին</h1>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="container">
            <div className="cols-sm-2 cols-mb justify-between ">
              <aside className="col-sm-4 hidden-sm">
                <nav className="tab-nav">
                  <ul>
                      {
                          SIDE_LABELS.map((label, i) => {
                            return (
                                <li
                                    key={i}
                                    onClick={() => this.onClickTab(i + 1)}
                                    className={this.state.activeClass === i + 1 ? "active " : ""}
                                >
                                    <a href="#">{ label }</a>
                                </li>
                            );
                          })
                      }
                  </ul>
                </nav>
              </aside>
              <section className="col-md-7 col-sm-8 text-inside">
                <div
                  className="about-1"
                  ref={section => {
                    this.component1 = section;
                  }}
                >
                  <h2 className="h2">Ընդհանուր տեղեկություններ</h2>

                  <p>
                    &lt;&lt;Բրիդջ Կապիտալ &gt;&gt; ՓԲԸ-ն որպես ներդրումային
                    ընկերություն գրանցվել և լիցենզավորվել է Հայաստանի
                    Հանրապետության Կենտրոնական բանկի կողմից 2018թ. դեկտեմբերի
                    24-ին:
                  </p>

                  <p>
                    &lt;&lt;Բրիդջ Կապիտալ&gt;&gt; ՓԲԸ-ն հանդիսանում է
                    ներդրումային ընկերություն, որն իր հաճախորդներին տրամադրում է
                    մի շարք ֆինանսական ծառայություններ ինչպիսիք են՝ միջնորդական
                    ծառայությունների մատուցումը աշխարի մեծագույն բորսաներում
                    ցուցակված արժեթղթերի գծով, արժեթղթերում ներդրումների հետ
                    կապված խորհրդատվության տրամադրում հաճախորդներին, արտարժույթի
                    դիլերային առք ու վաճառքի գործառնությունների իրականացումը,
                    ֆինանսական ածանցյալ գործիքների տրամադրումը և այլն:
                  </p>
                  <p>
                    Մենք աշխատում ենք ամեն աշխատանքային օր՝ ժամը 09:00ից
                    18:00-ն:
                  </p>
                </div>
                <div
                  className="about-2"
                  ref={section => {
                    this.component2 = section;
                  }}
                >
                  <h2 className="h2">Առաքելությունը և նպատակները</h2>
                  <p>
                    Մեր առաքելությունն է մատուցել մեր հաճախորդներին որակյալ և
                    մշտապես հասանելի ներդրումային ծառայություններ, ապահովել
                    կայուն, զարգացող և երկարաժամկետ գործընկերային
                    հարաբերություններ:
                  </p>

                  <p>Մեր նպատակներն են՝</p>

                  <ul className="ul">
                    <li>
                      Տրամադրել ներդրումային ծառայություններ լայն շրջանակ
                      ընկերության հաճախորդներ համար:
                    </li>
                    <li>
                      Ապահովել հասանելիություն միջազգայնորեն ճանաչված բազմազան
                      ներդումային հարթակներին:
                    </li>
                    <li>
                      Ապահովել ներդրումային ծառայությունների այնպիսի պայմաններ,
                      որոնք մրցունակ են ինչպես տեղական այնպես էլ օտարերկրյա
                      պոտենցիալ ներդնողների և հաճախորդների համար:
                    </li>
                    <li>Ավելացնել ընկերության շուկայական արժեքը:</li>
                  </ul>
                </div>
                <div
                  className="about-3"
                  ref={section => {
                    this.component3 = section;
                  }}
                >
                  <h2 className="h2">Կազմակերպական կառուցվածքը</h2>
                  <p className="pb-5">
                    Ստորև ներկայացված է ընկերության կազմակերպչական կառուցվածքը.
                  </p>
                  <img className="scheme" src={scheme} alt="scheme" />
                </div>
                <div
                  className="about-4"
                  ref={section => {
                    this.component4 = section;
                  }}
                >
                  <h2 className="h2">Հիմնադիր փաստաթղթեր</h2>
                  <p className="pb-7">
                    Այստեղ կարող եք ծանոթանալ Բրիջ Կապիտալի մասնագիտական
                    գործունեությունն ապահովող և կարգավորող հիմնական
                    փաստաթղթերին․
                  </p>
                  <div className="cols-xs-3 cols-mb justify-between">
                    <div className="col-sm-4">
                      <a href="#" className="files">
                        <img src={pdf} alt="" />
                        <span>Լիցենզիա</span>
                      </a>
                    </div>
                    <div className="col-sm-4">
                      <a href="#" className="files">
                        <img src={pdf} alt="" />
                        <span>Գրանցման վկայական</span>
                      </a>
                    </div>
                    <div className="col-sm-4">
                      <a href="#" className="files">
                        <img src={pdf} alt="" />
                        <span>Կանոնադրություն</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="about-5"
                  ref={section => {
                    this.component5 = section;
                  }}
                >
                  <h2 className="h2">Նշանակալից մասնակիցներ</h2>
                  <p>
                    Նշանակալից մասնակցի անվանումը – Նարգիզյան Նարեկ Վարդանի
                    <br />
                    Նշանակալից մասնակցի մասնակցության չափը – 100%
                  </p>
                </div>
                <div
                  className="about-6"
                  ref={section => {
                    this.component6 = section;
                  }}
                >
                  <h2 className="h2">Ղեկավարներ և անձնակազմ</h2>
                  <div className="cols-sm-3 cols-xs-2 cols-mb">
                    <div className="col-md-4">
                      <a
                        className="staff-card"
                        onClick={() => this.onOpenModal("Stepan")}
                      >
                        <div className="staff-card-img">
                          <img src={staffImg} alt="" />
                        </div>
                        <div className="staff-card-text">
                          <strong>Ստեփան Վիրաբյան</strong>
                          <p>Գործադիր տնօրեն</p>
                        </div>
                      </a>
                    </div>
                    <div className="col-sm-4 col-xs-6">
                      <a
                        className="staff-card"
                        onClick={() => this.onOpenModal("Ani")}
                      >
                        <div className="staff-card-img">
                          <img src={staffImg} alt="" />
                        </div>
                        <div className="staff-card-text">
                          <strong>Անի Մելոյան</strong>
                          <p>Գլխավոր հաշվապահ</p>
                        </div>
                      </a>
                    </div>
                    <div className="col-sm-4 col-xs-6">
                      <a
                        className="staff-card"
                        onClick={() => this.onOpenModal("Vardan")}
                      >
                        <div className="staff-card-img">
                          <img src={staffImg} alt="" />
                        </div>
                        <div className="staff-card-text">
                          <strong>Վարդան Եսայան</strong>
                          <p>Բրոքեր</p>
                        </div>
                      </a>
                    </div>
                    <div className="col-sm-4 col-xs-6">
                      <a className="staff-card">
                        <div className="staff-card-img">
                          <img src={staffImg} alt="" />
                        </div>
                        <div className="staff-card-text">
                          <strong>Անուն Ազգանուն</strong>
                          <p>Գործադիր տնօրեն</p>
                        </div>
                      </a>
                    </div>
                    <div className="col-sm-4 col-xs-6">
                      <a className="staff-card">
                        <div className="staff-card-img">
                          <img src={staffImg} alt="" />
                        </div>
                        <div className="staff-card-text">
                          <strong>Անուն Ազգանուն</strong>
                          <p>Գործադիր տնօրեն</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <FooterComponent />

        {/*modal*/}
        <Modal open={this.state.Stepan} onClose={this.onCloseModal} center>
          <h2>Ստեփան Վիրաբյան</h2>
        </Modal>
        <Modal open={this.state.Ani} onClose={this.onCloseModal} center>
          <h2>Անի Մելոյան</h2>
        </Modal>
        <Modal open={this.state.Vardan} onClose={this.onCloseModal} center>
          <h2>Վարդան Եսայան</h2>
        </Modal>
      </div>
    );
  }
}

export default AboutComponent;
