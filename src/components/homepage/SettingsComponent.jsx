import React, { Component } from "react";
import Settings from "../../assets/img/section-img/settings.png";
import { SlideToggle } from "react-slide-toggle";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';
import Flip  from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Zoom  from 'react-reveal/Zoom';

class SettingsComponent extends Component {
    state = {
        brok: "Կարդալ ավելին"
    };

    handleBrokOpen = () => {
        this.state.brok === "Կարդալ ավելին"
            ? this.setState({ brok: "Պակաս" })
            : this.setState({ brok: "Կարդալ ավելին" });
    };

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="cols-sm-2 cols-mb justify-between section-with-img">
                        <div className="col-md-5">
                            <Fade  left duration={1500} fraction={1}>
                                <div className="section-img">
                                    <div className="img">
                                        <Fade   right delay={900}>
                                            <span className="border"/>
                                        </Fade>
                                        <Zoom  delay={900}  duration={1500} fraction={0.5}>
                                            <img src={Settings} alt="Բրոքերային ծառայություն" />
                                        </Zoom>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-md-5">
                            <Fade  bottom fraction={1}>
                                <h2 className="h2">Կարգավորումներ</h2>
                                <SlideToggle
                                    duration={800}
                                    collapsed
                                    render={({ onToggle, setCollapsibleElement }) => (
                                        <div className="my-collapsible">
                                            <strong>Օրենքներ</strong>
                                            <strong>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.arlis.am/documentview.aspx?docID=1"
                                                >
                                                    ՀՀ Սահմանադրություն
                                                </a>
                                            </strong>
                                            <strong>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.arlis.am/documentview.aspx?docid=74658"
                                                >
                                                    ՀՀ Քաղաքացիական օրենսգիրք
                                                </a>
                                            </strong>
                                            <strong>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.arlis.am/documentview.aspx?docid=80072"
                                                >
                                                    Արժեթղթերի շուկայի մասին ՀՀ օրենքը
                                                </a>
                                            </strong>
                                            <strong>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.arlis.am/documentview.aspx?docid=69106"
                                                >
                                                    Բաժնետիրական ընկերությունների մասին ՀՀ օրենքը
                                                </a>
                                            </strong>
                                            <strong>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.arlis.am/documentview.aspx?docID=64645"
                                                >
                                                    Ապահովված հիփոթեքային պարտատոմսերի մասին ՀՀ օրենքը
                                                </a>
                                            </strong>
                                            <strong>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.arlis.am/documentview.aspx?docid=50589"
                                                >
                                                    Արժութային կարգավորման և արժութային վերահսկողության
                                                    մասին ՀՀ օրենքը
                                                </a>
                                            </strong>
                                            <strong>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.arlis.am/documentview.aspx?docID=44695"
                                                >
                                                    Ակտիվների արժեթղթավորման և ակտիվներով ապահովված
                                                    արժեթղթերի մասին ՀՀ օրենքը
                                                </a>
                                            </strong>
                                            <strong>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.arlis.am/documentview.aspx?docID=93142"
                                                >
                                                    Փողերի լվացման և ահաբեկչության ֆինանսավորման դեմ պայքարի
                                                    մասին ՀՀ օրենքը
                                                </a>
                                            </strong>
                                            <div
                                                className="my-collapsible__content"
                                                ref={setCollapsibleElement}
                                            >
                                                <div className="my-collapsible__content-inner">
                                                    <strong>Իրավական ակտեր</strong>
                                                    <strong>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="https://www.cba.am/AM/laregulations/kan-401_2.pdf"
                                                        >
                                                            Կանոնակարգ 4/01 (ներդրումային ընկերությունների
                                                            գրանցումն ու լիցենզավորումը)
                                                        </a>
                                                    </strong>
                                                    <strong>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="https://www.cba.am/AM/laregulations/kan-402.pdf"
                                                        >
                                                            Կանոնակարգ 4/02 (ներդրումային ընկերությունների
                                                            հիմնական տնտեսական նորմատիվները)
                                                        </a>
                                                    </strong>
                                                    <strong>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="https://www.cba.am/AM/laregulations/kan-403.pdf"
                                                        >
                                                            Կանոնակարգ 4/03 (ներդրումային ծառայություններ
                                                            մատուցող անձանց` Կենտրոնական Բանկ ներկայացվող
                                                            հաշվետվությունները)
                                                        </a>
                                                    </strong>
                                                    <strong>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="https://www.cba.am/AM/laregulations/kan-405.pdf"
                                                        >
                                                            Կանոնակարգ 4/05 (ներդրումային ծառայություններ
                                                            մատուցող անձանց մասնագիտական որակավորման չափանիշներ)
                                                        </a>
                                                    </strong>
                                                    <strong>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="https://www.cba.am/AM/laregulations/kan-406.pdf"
                                                        >
                                                            Կանոնակարգ 4/06 (որակավորված ներդրողներ համարելու
                                                            չափանիշները և անձանց` որպես որակավորված ներդրողներ
                                                            գրանցման կարգը)
                                                        </a>
                                                    </strong>
                                                    <strong>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="https://www.cba.am/AM/laregulations/kan-407.pdf"
                                                        >
                                                            Կանոնակարգ 4/07 (ներդրումային ծառայություններ
                                                            մատուցող անձանց գործունեության նկատմամբ պահանջները){" "}
                                                        </a>
                                                    </strong>
                                                    <strong>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="https://www.cba.am/AM/laregulations/kan-408.pdf"
                                                        >
                                                            Կանոնակարգ 4/08 (ՀՀ ԿԲ ներկայացված
                                                            հաշվետվությունները հանրությանը մատչելի դարձնելու
                                                            պահանջից բացառությունները){" "}
                                                        </a>
                                                    </strong>
                                                    <strong>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="https://www.cba.am/AM/laregulations/kan-409.pdf"
                                                        >
                                                            Կանոնակարգ 4/09 (հաշվետու թողարկողների
                                                            ֆինանսատնտեսական գործունեության աուդիտն իրականացնող
                                                            անձանց ներկայացվող չափանիշները){" "}
                                                        </a>
                                                    </strong>
                                                    <strong>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="https://www.cba.am/AM/laregulations/kan-410.pdf"
                                                        >
                                                            Կանոնակարգ 4/10 (արժեթղթերը հանձնելու առաջարկի
                                                            կազմը, պայմանները, փոփոխությունները)
                                                        </a>
                                                    </strong>
                                                    <strong>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="https://www.cba.am/AM/laregulations/kan-411.pdf"
                                                        >
                                                            Կանոնակարգ 4/11 (ֆինանսատնտեսական գործունեության
                                                            աուդիտն իրականացնող անձանց ներկայացվող չափանիշները){" "}
                                                        </a>
                                                    </strong>
                                                    <strong>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="https://www.cba.am/AM/laregulations/kan-412.pdf"
                                                        >
                                                            Կանոնակարգ 4/12 (ներդրումային ծառայություններ
                                                            մատուցող անձանց հաճախորդների միջոցների պաշտպանության
                                                            կանոնները){" "}
                                                        </a>
                                                    </strong>
                                                    <strong>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="https://www.arlis.am/DocumentView.aspx?DocID=79619"
                                                        >
                                                            Կանոնակարգ 33 (արժեթղթերի պահառության
                                                            գործունեությունը){" "}
                                                        </a>
                                                    </strong>
                                                    <strong>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="https://www.cba.am/Storage/AM/downloads/FDK/Regulation/regulation_on_minimum_aml_cft_requirements_arm.pdf"
                                                        >
                                                            Փողերի լվացման և ահաբեկչության ֆինանսավորման դեմ
                                                            պայքարի վերաբերյալ կանոնակարգ և հայտարարություն
                                                        </a>
                                                    </strong>
                                                </div>
                                            </div>
                                            <button
                                                className="my-collapsible__toggle btn secondary mt-5"
                                                onClick={() => {
                                                    this.handleBrokOpen();
                                                    onToggle();
                                                }}
                                            >
                                                {this.state.brok}
                                            </button>
                                        </div>
                                    )}
                                />
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SettingsComponent;
