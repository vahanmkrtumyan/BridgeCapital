import React, {Component} from 'react';
import HeaderComponent from './homepage/HeaderComponent';
import BannerComponent from './homepage/BannerComponent';
import TabComponent from './homepage/TabComponent';
import SettingsComponent from './homepage/SettingsComponent';
import AboutComponent from './homepage/AboutComponent';
import ContactUsComponent from './homepage/ContactUsComponent';
import FooterComponent from './homepage/FooterComponent';
import Currency from './homepage/currency';
import scrollToComponent from 'react-scroll-to-component';

class Homepage extends Component {

     
    onTab = () => scrollToComponent(this.TabComponent, { offset: 0, align: 'top', duration: 1500});
    onSettings = () => scrollToComponent(this.SettingsComponent, { offset: 0, align: 'top', duration: 1500});
    onAbout = () => scrollToComponent(this.AboutComponent, { offset: 0, align: 'top', duration: 1500});
    onContact = () => scrollToComponent(this.ContactUsComponent, { offset: 0, align: 'top', duration: 1500});
    onLogo = () => scrollToComponent(this.HeaderComponent, { offset: 0, align: 'top', duration: 1500});


    render() {
        
        return (
            <React.Fragment>
                <HeaderComponent onTab={this.onTab} onSettings={this.onSettings} onAbout={this.onAbout} onContact={this.onContact}/>
                
                <BannerComponent />
                <section className='violet' ref={(section) => { this.TabComponent = section; }}><TabComponent /></section>
                <Currency/>
                <section className='violet' ref={(section) => { this.SettingsComponent = section; }}><SettingsComponent /></section>
                <section className='violet' ref={(section) => { this.AboutComponent = section; }}><AboutComponent /></section>
                <section className='violet' ref={(section) => { this.ContactUsComponent = section; }}><ContactUsComponent /></section>
                <section className='violet' ref={(section) => { this.HeaderComponent = section; }}><FooterComponent  onTab={this.onLogo}/> /></section>
               
            </React.Fragment>
        );
    }
}

export default Homepage;
