import React, { Component } from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./homepage/HeaderComponent";
import BannerComponent from "./homepage/BannerComponent";
import TabComponent from "./homepage/TabComponent";
import SettingsComponent from "./homepage/SettingsComponent";
import AboutComponent from "./homepage/AboutComponent";
import ContactUsComponent from "./homepage/ContactUsComponent";
import FooterComponent from "./homepage/FooterComponent";
import Currency from "./homepage/currency";
import Owners from "./homepage/Owners";
import scrollToComponent from "react-scroll-to-component";
import ScrollTop from "../assets/img/icons/scroll-top.svg";

class Homepage extends Component {
  state = {
    activeClass: 1
  };

  componentDidMount() {
    var scrollpos = window.scrollY;
    var scrollTop = document.querySelector(".scroll-to-top");

    function add_class_on_scroll() {
      scrollTop.classList.add("show");
    }

    function remove_class_on_scroll() {
      scrollTop.classList.remove("show");
    }

    let changeClass = number => {
      this.setState({ activeClass: number });
    };

    let tab = ReactDOM.findDOMNode(
      this.refs["settings"]
    ).getBoundingClientRect();
    let tabs = tab.top + window.scrollY;
    let tabsBot = tab.bottom + window.scrollY - 300;

    let about = ReactDOM.findDOMNode(
      this.refs["about"]
    ).getBoundingClientRect();
    let abouts = about.top + window.scrollY - 60;
    let aboutsBot = about.bottom + window.scrollY - 60;

    let contact = ReactDOM.findDOMNode(
      this.refs["contact"]
    ).getBoundingClientRect();
    let contacts = contact.top + window.scrollY - 80;
    let contactsBot = contact.bottom + window.scrollY - 60;

    window.addEventListener("scroll", function() {
      //Here you forgot to update the value
      scrollpos = window.scrollY;

      if (scrollpos > 500) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }

      if (scrollpos < tabs - 400) {
        changeClass(1);
      }

      if (scrollpos > tabs - 100 && scrollpos < tabsBot) {
        changeClass(2);
      }

      

      if (scrollpos > contacts && scrollpos < contactsBot) {
        changeClass(3);
      }
    });
  }

  onTab = () => {
    scrollToComponent(this.TabComponent, {
      offset: -65,
      align: "top",
      duration: 1000
    });
    this.setState({ activeClass: 1 });
  };
  onSettings = () => {
    scrollToComponent(this.SettingsComponent, {
      offset: -60,
      align: "top",
      duration: 1000
    });
    this.setState({ activeClass: 2 });
  };
  onAbout = () => {
    scrollToComponent(this.AboutComponent, {
      offset: -60,
      align: "top",
      duration: 1000
    });
    this.setState({ activeClass: 3 });
  };
  onContact = () => {
    scrollToComponent(this.ContactUsComponent, {
      offset: -60,
      align: "top",
      duration: 1000
    });
    this.setState({ activeClass: 4 });
  };
  onLogo = () => {
    scrollToComponent(this.HeaderComponent, {
      offset: -60,
      align: "top",
      duration: 1000
    });
    this.setState({ activeClass: 5 });
  };

  render() {
    return (
      <React.Fragment>
        <div
          ref={section => {
            this.HeaderComponent = section;
          }}
        >
          <HeaderComponent
            onTab={this.onTab}
            onSettings={this.onSettings}
            onAbout={this.onAbout}
            onContact={this.onContact}
            class={this.state.activeClass}
          />
        </div>
        <BannerComponent />
        <div
          ref={section => {
            this.TabComponent = section;
          }}
        >
          <TabComponent />
        </div>
        <div>
          <Currency />
        </div>
        <div
          ref={section => {
            this.SettingsComponent = section;
          }}
        >
          <SettingsComponent ref="settings" />
        </div>
        <div
          ref={section => {
            this.AboutComponent = section;
          }}
        >
          <AboutComponent ref="about" />
        </div>
        <Owners />
        <div
          ref={section => {
            this.ContactUsComponent = section;
          }}
        >
          <ContactUsComponent ref="contact" />
        </div>

        <FooterComponent />
        <a className="scroll-to-top">
          <img src={ScrollTop} onClick={this.onLogo} alt="" />
        </a>
      </React.Fragment>
    );
  }
}

export default Homepage;
